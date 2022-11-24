import { EvmChain } from '@moralisweb3/evm-utils'
import Moralis from 'moralis'

export default async function getNFT(req, res) {
  const address = JSON.parse(req.body)

  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY
    // ...and any other configuration
  })

  const chain = EvmChain.POLYGON
  try {
    const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
      address,
      chain
    })
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error })
    console.error(error)
  }
}
