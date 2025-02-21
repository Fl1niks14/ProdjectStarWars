import { Route, BrowserRouter, Routes } from 'react-router-dom'
import styles from './App.module.css'
import routesConfig from '@routs/routesConfig'
import Header from '@components/Header/Header'
const App = () => {
	return (
		<>
			<BrowserRouter>
				<div className={styles.wrapper}>
					<Header />
					<Routes>
						{routesConfig.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								Component={route.Component}
							/>
						))}
					</Routes>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App
