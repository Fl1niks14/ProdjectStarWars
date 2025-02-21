import PropTypes from 'prop-types'
import styles from './PeopleNavigation.module.css'
import { Link } from 'react-router-dom'
import Button from '../../Btn-navigation/Button-navigation/Button'

const PeopleNavigation = ({ getResurs, next, prev, counterPage }) => {
	const handleChangeNext = () => getResurs(next)
	const handleChangePrev = () => getResurs(prev)

	return (
		<>
			<div className={styles.container}>
				<Link className={styles.link} to={`/people/?page=${counterPage - 1}`}>
					<Button text='Previous' onClick={handleChangePrev} disabled={!prev} />
				</Link>
				<Link className={styles.link} to={`/people/?page=${counterPage + 1}`}>
					<Button text='Next' onClick={handleChangeNext} disabled={!next} />
				</Link>
			</div>
		</>
	)
}

PeopleNavigation.propTypes = {
	getResurs: PropTypes.func,
	next: PropTypes.string,
	prev: PropTypes.string,
	counterPage: PropTypes.number
}

export default PeopleNavigation
