import cn from 'classnames'
import styles from './Button.module.css'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, disabled, theme = 'dark' }) => {
	return (
		<>
			<button
				disabled={disabled}
				onClick={onClick}
				className={cn(styles.btn, styles[theme])}
			>
				{text}
			</button>
		</>
	)
}

Button.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string,
	disabled: PropTypes.bool,
	theme: PropTypes.string
}

export default Button
