import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Peoplelist from '../../components/PagePeople/PeopleList/PeopleList'
import styles from './FavoritesPage.module.css'
const FavoritesPage = () => {
	const [people, setPeople] = useState([])
	const storeData = useSelector(state => state.FavoritesReducer)

	useEffect(() => {
		const arr = Object.entries(storeData)
		if (arr.length) {
			const res = arr.map(([id, { name, img }]) => ({
				id,
				name,
				img
			}))
			setPeople(res)
		}
	}, [])

	return (
		<>
			<h1 className='header__text'>FavoritesPage </h1>
			{people.length ? (
				<Peoplelist people={people} />
			) : (
				<h2 className={styles.comment}>No data</h2>
			)}
		</>
	)
}

export default FavoritesPage
