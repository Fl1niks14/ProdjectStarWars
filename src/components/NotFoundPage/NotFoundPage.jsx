import { useLocation } from 'react-router'
import styles from './NotFoundPage.module.css'
import img from './img/error404.png'



const NotFoundPage = () => {
	let location = useLocation();
	location.pathname
	return (

		<>
			<img src={img} alt='Not Found' className={styles.img}/>
			<p className={styles.text}> No match for {location.pathname}</p>
		</>
	)
}

export default NotFoundPage;