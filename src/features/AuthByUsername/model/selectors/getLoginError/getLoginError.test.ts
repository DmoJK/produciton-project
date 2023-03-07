import { StateSchema } from "app/providers/StoreProvider"
import { getLoginError } from "./getLoginError"

describe('getLoginError', () => {
    test('should return error state', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error'
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('error')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    })
})