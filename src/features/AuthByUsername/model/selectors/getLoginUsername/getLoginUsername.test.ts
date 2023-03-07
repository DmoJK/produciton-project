import { StateSchema } from "app/providers/StoreProvider"
import { getLoginUsername } from "./getLoginUsername"

describe('getLoginError', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: '123123'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('123123')
    })
    test('should return empty string with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})