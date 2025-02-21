import { ADD_PERSON_TO, REMOVE_PERSON_TO } from '../constants/const'

export const setPersonTo = person => ({
	type: ADD_PERSON_TO,
	payload: person
})

export const removePersonTo = personId => ({
	type: REMOVE_PERSON_TO,
	payload: personId
})
