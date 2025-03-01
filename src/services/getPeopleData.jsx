import {
	HTTPS,
	SWAPI_ROOT,
	SWAPI_PEOPLE,
	URL_IMG_PERSON,
	GUIDE_IMG,
	SWAPI_PARAM_PAGE
} from '../constants/Api'

const getId = (url, category) => {
	const id = url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '')
	return id
}

export const getPeoplePageId = url => {
	const pos = url.lastIndexOf(SWAPI_PARAM_PAGE)
	const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length)
	return Number(id)
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG}`
