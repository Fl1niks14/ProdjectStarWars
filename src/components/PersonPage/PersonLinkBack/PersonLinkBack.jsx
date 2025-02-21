import styles from './PersonLinkBack.module.css'
import { useNavigate  } from 'react-router-dom'
import imgBack from './img/back.svg'

const PersonLinkBack = () => {

	const navigate = useNavigate ()

	const back = e => {
		e.preventDefault()
		navigate(-1);
	} 


	return (

		<>
				<a href="#" onClick={back} className={styles.link}>
					<img className={styles.img__link} src={imgBack} alt="BackLinc" />
					<span>Go back</span>
				</a>
		</>

	)
}

export default PersonLinkBack;