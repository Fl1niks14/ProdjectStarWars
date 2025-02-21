import { createStore } from 'redux'
import combineReducers from './reducer/reducer'
import { setLocalStotage } from '../utils/localStorage'
const store = createStore(combineReducers)
store.subscribe(() => {
	//
	setLocalStotage('store', store.getState().FavoritesReducer)
})

export default store
