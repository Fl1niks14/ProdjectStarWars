import NotFoundPage from '../components/NotFoundPage/NotFoundPage'
import HomePage from '../containers/HomePage/HomePage'
import PagePeople from '../containers/PagePeople/PagePeople'
import PersonPage from '../containers/PersonPage/PersonPage'
import FavoritesPage from '../containers/FavoritesPage/FavoritesPage'

const routesConfig = [
	{
		path: '/',
		exact: true,
		Component: HomePage
	},
	{
		path: '/people',
		exact: true,
		Component: PagePeople
	},
	{
		path: '/not-found',
		exact: true,
		Component: NotFoundPage
	},
	{
		path: '/people/:id',
		exact: true,
		Component: PersonPage
	},
	{
		path: '/favorites',
		exact: true,
		Component: FavoritesPage
	},
	{
		path: '*',
		exact: false,
		Component: NotFoundPage
	}
]

export default routesConfig
