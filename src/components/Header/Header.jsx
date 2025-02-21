import Favorite from '../Favorite/Favorite'
import styles from './Header.module.css'
import { NavLink } from 'react-router'
import { useEffect, useState } from 'react'

import deathStar from './img/death-star.png'
import lightSaber from './img/lightsaber.png'
import people from './img/people.png'

import {
	useTheme,
	THEME_DARK,
	THEME_NEITRAL,
	THEME_LIGHT
} from '../../context/ThemeProvaider'

const Header = () => {
	const [icon, setIcon] = useState(lightSaber)
	const isTheme = useTheme()

	useEffect(() => {
		switch (isTheme.theme) {
			case THEME_LIGHT:
				setIcon(people)
				break
			case THEME_DARK:
				setIcon(deathStar)
				break
			case THEME_NEITRAL:
				setIcon(lightSaber)
				break

			default:
				setIcon(lightSaber)
				break
		}
	}, [isTheme])

	return (
		<>
			<div className={styles.container}>
				<img src={icon} className={styles.logo} alt='logo' />
				<ul className={styles.list__container}>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/people/?page=1'>People</NavLink>
					</li>
					<li>
						<NavLink to='/not-found'>Not Found</NavLink>
					</li>
				</ul>
				<Favorite />
			</div>
		</>
	)
}

export default Header
