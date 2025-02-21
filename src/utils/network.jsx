export const getApiResourse = async url => {
	try {
		const res = await fetch(url)
		if (!res.ok) {
			console.error('Not Fetch .', res.status)
			return false
		}
		return await res.json()
	} catch (error) {
		console.error('Not Fetch .', error.message)
		return false
	}
}

// (async () => {
// 	const body = await getApiResourse(SWAPI_ROOT+SWAPI_PEOPLE);
// 	console.log(body);
// })();
export const makeConcurrentRequest = async url => {
	const res = await Promise.all(
		url.map(res => {
			return fetch(res).then(res => res.json())
		})
	)
	return res
}

// export const makeConcurrentRequest = async url => {
//   const res = await Promise.all(
//     url.map(url => fetch(url).then(res => res.json()))
//   );
//   return res
// };
