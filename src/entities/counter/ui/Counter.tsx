
import { FC } from "react"

import { useTranslation } from "react-i18next"
import { Button } from "shared/ui"
import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "entities/counter/model/slice/counterSlice"
import { getCounterValue } from "entities/counter/model/selectors/getCounterValue/getCounterValue"

interface CounterProps {
    className?: string
}

export const Counter: FC<CounterProps> = () => {
	const counterValue = useSelector(getCounterValue)
	const dispatch = useDispatch()

	const { t } = useTranslation()

	const increment = () => {
		dispatch(counterActions.increment())
	}

	const decrement = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<h1 data-testid={"value-title"}>{t("value")} - {counterValue}</h1>
			<Button data-testid={"inc-button"} onClick={increment}>
				{t("inc")}
			</Button>
			<Button data-testid={"dec-button"} onClick={decrement}>
				{t("dec")}
			</Button>
		</div>
	)
}
