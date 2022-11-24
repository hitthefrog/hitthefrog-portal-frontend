import { useRouter } from 'next/router'

import styled from '@emotion/styled'
import axios from 'axios'
import { getSession, signIn } from 'next-auth/react'
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import Box from '@/components/box'

function SignIn() {
  const { connectAsync } = useConnect()
  const { disconnectAsync } = useDisconnect()
  const { isConnected } = useAccount()
  const { signMessageAsync } = useSignMessage()
  const { push } = useRouter()

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync()
    }

    const { account, chain } = await connectAsync({
      connector: new InjectedConnector()
    })

    const userData = { address: account, chain: chain.id, network: 'evm' }

    const { data } = await axios.post('/api/auth/request-message', userData, {
      headers: {
        'content-type': 'application/json'
      }
    })

    const message = data.message

    const signature = await signMessageAsync({ message })

    // redirect user after success authentication to '/user' page
    const { url } = await signIn('credentials', {
      message,
      signature,
      redirect: false,
      callbackUrl: '/user'
    })
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url)
  }

  return (
    <Background>
      <Box>
        <h3>Web3 Authentication</h3>
        <button onClick={() => handleAuth()}>Authenticate via Metamask</button>
      </Box>
    </Background>
  )
}

const Background = styled.div`
  background: url('https://i.imgur.com/7mdVua3.png') center center;
  background-repeat: no-repeat;
  background-size: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export async function getServerSideProps(context) {
  const session = await getSession(context)

  // redirect if not authenticated
  if (session) {
    return {
      redirect: {
        destination: '/user',
        permanent: false
      }
    }
  }

  if (!session) {
    return {
      props: { user: null }
    }
  }
}

export default SignIn
