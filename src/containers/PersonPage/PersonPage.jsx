import React, { useEffect, useState, Suspense } from 'react'
import PropTypes from 'prop-types'
import styles from './PersonPage.module.css'
import { useParams } from 'react-router'
import { API_PERSON } from '../../constants/Api'
import { getApiResourse } from '../../utils/network'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getPeopleImage } from '../../services/getPeopleData'
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto'
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo'
import Starfall from '../../components/Star/Starfall'
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack'
import Loading from '../../components/Loading/Loading'
import { useSelector } from 'react-redux'
const PersonPage = ({ seterrorApi }) => {
	const PersonFilms = React.lazy(
		() => import('@components/PersonPage/PersonFilms/PersonFilms')
	)

	const [personInfo, setpersonInfo] = useState(null)
	const [personName, setpersonName] = useState(null)
	const [personPhoto, setpersonPhoto] = useState(null)
	const [personFilms, setpersonFilms] = useState(null)
	const [personId, setpersonId] = useState(null)
	const [personFavorite, setpersonFavorite] = useState(false)
	const { id } = useParams()

	const storeData = useSelector(state => state.FavoritesReducer)
	useEffect(() => {
		;(async () => {
			const res = await getApiResourse(`${API_PERSON}/${id}/`)
			setpersonId(id)
			storeData[id] ? setpersonFavorite(true) : setpersonFavorite(false)
			if (res) {
				seterrorApi(false)
				setpersonInfo([
					{ title: 'Hight', data: res.height },
					{ title: 'Mass', data: res.mass },
					{ title: 'Hair', data: res.hair_color },
					{ title: 'Skin', data: res.skin_color },
					{ title: 'Eye', data: res.eye_color },
					{ title: 'Birth', data: res.birth_year },
					{ title: 'Gender', data: res.gender }
				])
				setpersonPhoto(getPeopleImage(id))
				setpersonName(res.name)
				res.films.length && setpersonFilms(res.films)
			} else {
				seterrorApi(true)
			}
		})()
	}, [])

	return (
		<>
			<PersonLinkBack />
			<div className={styles.wrapper}>
				<span className={styles.person__name}>{personName}</span>

				<div className={styles.container}>
					<PersonPhoto
						personPhoto={personPhoto}
						personId={personId}
						personName={personName}
						personFavorite={personFavorite}
						setpersonFavorite={setpersonFavorite}
					/>
					{personInfo && <PersonInfo personInfo={personInfo} />}
					{personFilms && (
						<Suspense fallback={<Loading />}>
							<PersonFilms personFilms={personFilms} />
						</Suspense>
					)}
				</div>
				<Starfall />
			</div>
		</>
	)
}

PersonPage.propTypes = {
	seterrorApi: PropTypes.func
}

export default withErrorApi(PersonPage)
