import { StateSchema } from "app/providers/storeProvider"

export const getLoginError = (state: StateSchema) => state?.login?.error
