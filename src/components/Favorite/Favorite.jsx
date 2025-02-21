import { useSelector } from 'react-redux'
import styles from './Favorite.module.css'
import bookmark from './img/bookmark.png'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'

const Favorite = () => {
	const [counter, setcounter] = useState()
	const storeData = useSelector(state => state.FavoritesReducer)
	useEffect(() => {
		const length = Object.keys(storeData).length
		length.toString().length > 2 ? setcounter('...') : setcounter(length)
	})

	return (
		<>
			<div className={styles.container}>
				<Link to='/favorites'>
					<span className={styles.counter}>{counter}</span>
					<img src={bookmark} alt='Bookmark' className={styles.bookmark} />
				</Link>
			</div>
		</>
	)
}

export default Favorite
