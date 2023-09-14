import {DataHandlerContext} from '@subsquid/evm-processor'
import {Store} from '../db'
import {EntityBuffer} from '../entityBuffer'
import {ContractEventTransfer, ContractFunctionApprove, ContractFunctionTransferFrom, ContractFunctionTransfer} from '../model'
import * as spec from '../abi/erc20'
import {ADDRESS, Log, Transaction} from '../processor'


export function parseEvent(ctx: DataHandlerContext<Store>, log: Log) {
    try {
        switch (log.topics[0]) {
            case spec.events['Transfer'].topic: {
                let e = spec.events['Transfer'].decode(log)
                EntityBuffer.add(
                    new ContractEventTransfer({
                        id: log.id,
                        blockNumber: log.block.height,
                        blockTimestamp: new Date(log.block.timestamp),
                        transactionHash: log.transactionHash,
                        contract: log.address,
                        eventName: 'Transfer',
                        from: e[0],
                        to: e[1],
                        value: e[2],
                    })
                )
                break
            }
        }
    }
    catch (error) {
        ctx.log.error({error, blockNumber: log.block.height, blockHash: log.block.hash, ADDRESS}, `Unable to decode event "${log.topics[0]}"`)
    }
}

export function parseFunction(ctx: DataHandlerContext<Store>, transaction: Transaction) {
    try {
        switch (transaction.input.slice(0, 10)) {
            case spec.functions['approve'].sighash: {
                let f = spec.functions['approve'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionApprove({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'approve',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        spender: f[0],
                        value: f[1],
                    })
                )
                break
            }
            case spec.functions['transferFrom'].sighash: {
                let f = spec.functions['transferFrom'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionTransferFrom({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'transferFrom',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        from: f[0],
                        to: f[1],
                        value: f[2],
                    })
                )
                break
            }
            case spec.functions['transfer'].sighash: {
                let f = spec.functions['transfer'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionTransfer({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'transfer',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        to: f[0],
                        value: f[1],
                    })
                )
                break
            }
        }
    }
    catch (error) {
        ctx.log.error({error, blockNumber: transaction.block.height, blockHash: transaction.block.hash, ADDRESS}, `Unable to decode function "${transaction.input.slice(0, 10)}"`)
    }
}
