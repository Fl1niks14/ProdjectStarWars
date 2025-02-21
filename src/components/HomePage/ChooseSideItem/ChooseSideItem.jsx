import styles from './ChooseSideItem.module.css'
import PropTypes from 'prop-types'
import { useTheme } from '../../../context/ThemeProvaider'
import cn from 'classnames'
const ChooseSideItem = ({ text, img, theme, classes }) => {
	const isTheme = useTheme()
	return (
		<>
			<div
				className={cn(styles.item, classes)}
				onClick={() => isTheme.change(theme)}
			>
				<div className={styles.item__header}>{text}</div>
				<img src={img} alt={text} className={styles.item__img} />
			</div>
		</>
	)
}

ChooseSideItem.prototype = {
	text: PropTypes.string,
	img: PropTypes.string,
	theme: PropTypes.string,
	classes: PropTypes.string
}

export default ChooseSideItem
