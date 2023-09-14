import {Store as Store_, TypeormDatabase} from '@subsquid/typeorm-store'

export let db = new TypeormDatabase({supportHotBlocks: true})
export type Store = Store_
