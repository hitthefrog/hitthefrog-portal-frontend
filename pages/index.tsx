import { EvmChain } from '@moralisweb3/evm-utils'
import Moralis from 'moralis'
import { getSession } from 'next-auth/react'

function Protected({ message, nftList }) {
  return (
    <div>
      <h3>HIT THE FROG</h3>
      <p>{message}</p>
      <pre>{JSON.stringify(nftList, null, 2)}</pre>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY })
  const chain = EvmChain.POLYGON
  const nftList = await Moralis.EvmApi.nft.getWalletNFTs({
    address: session.user.address,
    chain
  })

  if (nftList.raw.total < 0) {
    return {
      redirect: {
        destination: '/recommend',
        permanent: false
      }
    }
  }

  return {
    props: {
      message:
        // if user has at least one NFT he will get protected content
        nftList.raw.total > 0
          ? 'Nice! You have our NFT'
          : "Sorry, you don't have our NFT",
      nftList: nftList.raw.result
    }
  }
}
export default Protected
