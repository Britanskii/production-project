type Mods = Record<string, boolean | string>


export const classNames = (clazz: string, mods: Mods, additional: string[]): string => {

	return [
		clazz,
		...additional,
		Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className, value]) => className)
	].join(' ')
}

