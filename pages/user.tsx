import axios from 'axios'
import { getSession, signOut } from 'next-auth/react'

// gets a prop from getServerSideProps
function User({ user }) {
  const handleGetNFT = async () => {
    const { data } = await axios.post('/api/get-nft', user.address, {
      headers: {
        'content-type': 'application/json'
      }
    })

    const response = data.response

    console.log(data)
  }
  return (
    <div>
      <h4>User session:</h4>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => signOut({ redirect: '/signin' })}>Sign out</button>
      <button onClick={() => handleGetNFT()}>get NFT List</button>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  return {
    props: { user: session.user }
  }
}

export default User
