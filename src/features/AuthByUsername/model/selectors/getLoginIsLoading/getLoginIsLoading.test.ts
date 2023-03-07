import { StateSchema } from "app/providers/StoreProvider"
import { getLoginIsLoading } from "./getLoginIsLoading"

describe('getLoginError', () => {
    test('should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should return isLoading false with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })
})