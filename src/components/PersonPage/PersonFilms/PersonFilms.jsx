import { useEffect, useState } from 'react'
import { makeConcurrentRequest } from '../../../utils/network'
import styles from './PersonFilms.module.css'
import PropTypes from 'prop-types'

const PersonFilms = ({ personFilms }) => {
	const [Filmsnames, setFilmsnames] = useState([])

	useEffect(() => {
		;(async () => {
			const res = await makeConcurrentRequest(personFilms)
			setFilmsnames(res)
		})()
	}, [])

	return (
		<>
			<div className={styles.wrapper}>
				<ul className={styles.list__container}>
					{Filmsnames.sort((a, b) => a.episode_id - b.episode_id).map(
						({ title, episode_id }) => (
							<li className={styles.list__item} key={episode_id}>
								<span className={styles.item_episide}>
									Episode {episode_id}
								</span>
								<span className={styles.item_colon}>:</span>
								<span className={styles.item_title}>{title}</span>
							</li>
						)
					)}
				</ul>
			</div>
		</>
	)
}

PersonFilms.PropTypes = {
	personFilm: PropTypes.array
}

export default PersonFilms
