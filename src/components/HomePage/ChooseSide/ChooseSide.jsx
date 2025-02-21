import styles from './ChooseSide.module.css'
import {
	THEME_DARK,
	THEME_NEITRAL,
	THEME_LIGHT
} from '../../../context/ThemeProvaider'

import imgred from './img/red.jpg'
import imgcorabl from './img/corabl.jpg'
import imgblu from './img/blu.jpg'
import ChooseSideItem from '../ChooseSideItem/ChooseSideItem'

const ChooseSide = () => {
	const elements = [
		{
			theme: THEME_LIGHT,
			text: 'Light Side',
			img: imgblu,
			classes: styles.item__light
		},
		{
			theme: THEME_DARK,
			text: 'Dark Side',
			img: imgred,
			classes: styles.item__dark
		},
		{
			theme: THEME_NEITRAL,
			text: 'I am Han Solo',
			img: imgcorabl,
			classes: styles.item__neitral
		}
	]
	return (
		<>
			<div className={styles.container}>
				{elements.map(({ theme, text, img, classes }, index) => (
					<ChooseSideItem
						key={index}
						theme={theme}
						text={text}
						img={img}
						classes={classes}
					/>
				))}
			</div>
		</>
	)
}

export default ChooseSide
