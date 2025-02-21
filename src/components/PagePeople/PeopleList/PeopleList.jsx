import styles from './PeopleList.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const Peoplelist = ({ people }) => {
	return (
		<>
			<ul className={styles.list__container}>
				{people.map(({ name, id, img }) => (
					<li className={styles.list__item} key={id}>
						<Link to={`/people/${id}`} href='#'>
							<img className={styles.list__person} src={img} alt={name} />
							<p>{name}</p>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

Peoplelist.propTypes = {
	people: PropTypes.array
}

export default Peoplelist
