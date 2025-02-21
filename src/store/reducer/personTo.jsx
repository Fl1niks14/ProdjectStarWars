import { ADD_PERSON_TO, REMOVE_PERSON_TO } from '../constants/const'
import { omit } from 'lodash'
import { getLocalStotage } from '../../utils/localStorage'
const initialState = getLocalStotage('store')

const FavoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PERSON_TO:
			return {
				...state,
				...action.payload
			}
		case REMOVE_PERSON_TO:
			return omit(state, [action.payload])
		default:
			return state
	}
}

export default FavoritesReducer
