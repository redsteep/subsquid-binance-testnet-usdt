import {EvmBatchProcessor, EvmBatchProcessorFields, BlockHeader, Log as _Log, Transaction as _Transaction} from '@subsquid/evm-processor'
import {lookupArchive} from '@subsquid/archive-registry'
import * as contractAbi from './abi/erc20'

export const ADDRESS = '0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684';

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('binance-testnet', {type: 'EVM'}),
        chain: 'https://rpc.ankr.com/bsc_testnet_chapel',
    })
    .setFinalityConfirmation(75)
    .setFields({
            log: {
                topics: true,
                data: true,
                transactionHash: true,
            },
            transaction: {
                hash: true,
                input: true,
                from: true,
                value: true,
                status: true,
        }
    })
    .addLog({
        address: [ADDRESS],
        topic0: [
            contractAbi.events['Transfer'].topic,
        ],
        range: {
            from: 31_000_000,
        },
    })
    .addTransaction({
        to: [ADDRESS],
        sighash: [
            contractAbi.functions['approve'].sighash,
            contractAbi.functions['transferFrom'].sighash,
            contractAbi.functions['transfer'].sighash,
        ],
        range: {
            from: 31_000_000,
        },
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
