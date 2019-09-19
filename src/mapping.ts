import { EthereumBlock } from '@graphprotocol/graph-ts'
import { Block, Transaction } from '../generated/schema'

export function handleBlock(block: EthereumBlock): void {
	let b = new Block(block.hash.toHex())
	b.author    = block.author
	b.number    = block.number
	b.gasUsed   = block.gasUsed
	b.gasLimit  = block.gasLimit
	b.timestamp = block.timestamp
	b.save()
}
