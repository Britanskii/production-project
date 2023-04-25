import { useEffect } from "react"
import { useDispatch, useStore } from "react-redux"
import { ReduxStoreWithManager } from "app/providers/storeProvider"
import { Reducer } from "@reduxjs/toolkit"
import { StateSchemaKey } from "app/providers/storeProvider/config/StateSchema"

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export const useDynamicReducer = (reducers: ReducersList, removeAfterUnmount = false) => {
	const store = useStore() as ReduxStoreWithManager
	const dispatch = useDispatch()

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer)
			dispatch({ type: `@INIT ${name} reducer` })
		})


		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
					store.reducerManager.remove(name)
					dispatch({ type: `@DESTROY ${name} reducer` })
				})
			}
		}
	}, [])
}
