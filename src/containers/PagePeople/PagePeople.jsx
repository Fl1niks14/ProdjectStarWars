import { getApiResourse } from '@utils/network'
import { useEffect, useState } from 'react'
import { API_PEOPLE } from '@constants/Api'
import {
	getPeopleId,
	getPeopleImage,
	getPeoplePageId
} from '@services/getPeopleData'
import Peoplelist from '@components/PagePeople/PeopleList/PeopleList'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import PropTypes from 'prop-types'
import { useQveryparams } from '@hooks/useQveryparams'
import PeopleNavigation from '@components/PagePeople/PeopleNavigation/PeopleNavigation'
import Snowfall from '../../components/Snowfall/Snowfall'

const PagePeople = ({ seterrorApi }) => {
	const [people, setPeople] = useState(null)
	const [next, setNext] = useState(null)
	const [prev, setPrev] = useState(null)
	const [counterPage, setcounterPage] = useState(1) //1 страница

	const query = useQveryparams()

	const queryPage = query.get('page')

	const getResurs = async url => {
		const res = await getApiResourse(url)
		if (res) {
			const Peoplelist = res.results.map(({ name, url }) => {
				const id = getPeopleId(url)
				const img = getPeopleImage(id)
				return {
					id,
					name,
					img
				}
			})
			setPeople(Peoplelist)
			seterrorApi(false)
			setNext(res.next)
			setPrev(res.previous)
			setcounterPage(getPeoplePageId(url))
		} else {
			seterrorApi(true)
		}
	}

	useEffect(() => {
		getResurs(API_PEOPLE + queryPage)
	}, [])

	return (
		<>
			<PeopleNavigation
				getResurs={getResurs}
				next={next}
				prev={prev}
				counterPage={counterPage}
			/>
			{people && <Peoplelist people={people} />}
			<Snowfall />
		</>
	)
}

PagePeople.propTypes = {
	seterrorApi: PropTypes.func
}

export default withErrorApi(PagePeople)
