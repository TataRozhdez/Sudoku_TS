import reducer from './reducer'

export * from './action'
export * from './interfaces'

export type IReducer = ReturnType<typeof reducer>
export default reducer