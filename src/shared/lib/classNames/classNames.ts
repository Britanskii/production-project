type Mods = Record<string, boolean | string>


export const classNames = (clazz: string, mods: Mods = {}, additional: string[] = []): string => {

	return [
		clazz,
		...additional.filter(Boolean),
		Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className]) => className)
	].join(" ")
}

