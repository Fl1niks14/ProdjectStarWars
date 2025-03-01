export const getLocalStotage = key => {
	const data = localStorage.getItem(key)
	if (data !== null) {
		return JSON.parse(data)
	}
	return {}
}
export const setLocalStotage = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data))
}
