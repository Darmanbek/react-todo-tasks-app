import { useEffect, useState } from "react"

const useTheme = () => {
	const [mode, setMode] = useState(false)

	const handleMode = () => {
		setMode((prev) => !prev)
	}

	useEffect(() => {
		if (mode) {
			document.body.classList.remove("light")
			document.body.classList.add("dark")
		} else {
			document.body.classList.remove("dark")
			document.body.classList.add("light")
		}
	}, [mode])

	return { mode, handleMode }
}

export { useTheme }
