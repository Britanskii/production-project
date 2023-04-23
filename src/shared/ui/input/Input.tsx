import s from "./input.module.sass"

import { ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from "react"

import { classNames } from "shared/lib/classNames/classNames"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
	className?: string
	placeholder?: string
	value?: string
	autofocus?: boolean
	onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo((props) => {
	const { value, onChange, placeholder, autofocus, className = "", type = "text", ...otherProps } = props

	const [isFocused, setIsFocused] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)

	const inputRef = useRef<HTMLInputElement>()

	const onBlur = () => {
		setIsFocused(false)
	}

	const onFocus = () => {
		setIsFocused(true)
	}

	const onSelect = (event: any) => {
		setCaretPosition(event?.target?.selectionStart || 0)
	}

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value)
		setCaretPosition(event.target.value.length)
	}

	useEffect(() => {
		if (autofocus && inputRef.current) {
			setIsFocused(true)
			inputRef.current.focus()
		}
	}, [autofocus, inputRef.current])

	return (
		<div className={classNames([s.inputWrapper, className])}>
			{placeholder &&
				<div>
					{placeholder + " >"}
				</div>
			}
			<div className={s.caretWrapper}>
				<input {...otherProps} onBlur={onBlur} onFocus={onFocus} onSelect={onSelect} className={s.input} type={type} value={value} onChange={onChangeHandler} ref={inputRef}/>
				{isFocused && <span style={{ left: `${caretPosition * 9}rem` }} className={s.caret}/>}
			</div>
		</div>
	)
})

Input.displayName = "Input"
