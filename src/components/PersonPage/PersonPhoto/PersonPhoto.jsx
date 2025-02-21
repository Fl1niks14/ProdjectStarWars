import PropTypes from 'prop-types'
import styles from './PersonPhoto.module.css'
import { useDispatch } from 'react-redux'
import { setPersonTo, removePersonTo } from '../../../store/actions/action'
import removestar from './img/star.png'
import addStar from './img/staradd.png'
const PersonPhoto = ({
	personPhoto,
	personId,
	personName,
	personFavorite,
	setpersonFavorite
}) => {
	const dispatch = useDispatch()

	const dispatchFavoritePeople = () => {
		if (personFavorite) {
			dispatch(removePersonTo(personId))
			setpersonFavorite(false)
		} else {
			dispatch(
				setPersonTo({
					[personId]: {
						name: personName,
						img: personPhoto
					}
				})
			)
			setpersonFavorite(true)
		}
	}

	return (
		<>
			<div className={styles.container}>
				<img className={styles.photo} src={personPhoto} alt={personName} />
				<button
					onClick={dispatchFavoritePeople}
					className={styles.favoriteButton}
					aria-label={
						personFavorite ? 'Remove from favorites' : 'Add to favorites'
					}
				>
					<img
						className={styles.favoriteImage}
						src={personFavorite ? removestar : addStar}
						alt={personFavorite ? 'Remove from favorites' : 'Add to favorites'}
					/>
				</button>
			</div>
		</>
	)
}

PersonPhoto.propTypes = {
	personPhoto: PropTypes.string,
	personId: PropTypes.string,
	personName: PropTypes.string,
	setpersonFavorite: PropTypes.func,
	personFavorite: PropTypes.bool
}

export default PersonPhoto
