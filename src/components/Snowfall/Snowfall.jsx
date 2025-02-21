import { useEffect } from 'react'
import snowflakeImage from './img/cec91730de6f0816db7ca02aa9b95143.png'
import './Snowfall.css'

const Snowfall = () => {
	const snowflakeCount = 50

	useEffect(() => {
		const snowflakes = []

		const createSnowflake = () => {
			const snowflake = document.createElement('img')
			const size = Math.random() * 20 + 15 // размер снежинки
			snowflake.src = snowflakeImage // Устанавливаем изображение
			snowflake.style.position = 'fixed'
			snowflake.style.top = '-50px'
			snowflake.style.left = `${Math.random() * 100}vw`
			snowflake.style.width = `${size}px`
			snowflake.style.height = `${size}px`
			snowflake.style.pointerEvents = 'none'
			snowflake.style.zIndex = '-1'
			snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`
			snowflake.style.animationDelay = `${Math.random() * 3}s`

			document.body.appendChild(snowflake)
			snowflakes.push(snowflake)

			// Удаление снежинки
			snowflake.addEventListener('animationend', () => {
				snowflake.remove()
				const index = snowflakes.indexOf(snowflake)
				if (index > -1) snowflakes.splice(index, 1)
				createSnowflake() // Создаём новую снежинку
			})
		}

		// Создание множества снежинок
		for (let i = 0; i < snowflakeCount; i++) {
			createSnowflake()
		}

		// Очистка снежинок компонента
		return () => {
			snowflakes.forEach(flake => flake.remove())
		}
	}, [])

	return <></>
}

export default Snowfall
