import { useEffect } from 'react';
import Star from './img/star.png'
import './Starfall.css'




const Starfall = () => {
	const starflakeCount = 115;

	useEffect(() => {
		const starflakes = [];

		const createSnowflake = () => {
			const starflake = document.createElement("img");
			const size = Math.random() * 1 + 1; // размер 
			starflake.src = Star; // Устанавливаем изображение
			starflake.style.position = "fixed";
			starflake.style.top = "-50px";
			starflake.style.left = `${Math.random() * 100}vw`;
			starflake.style.width = `${size}px`;
			starflake.style.height = `${size}px`;
			starflake.style.pointerEvents = "none";
			starflake.style.zIndex = "-1";
			starflake.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
			starflake.style.animationDelay = `${Math.random() * 3}s`;

			document.body.appendChild(starflake);
			starflakes.push(starflake);

			starflake.addEventListener("animationend", () => {
				starflake.remove();
				const index = starflakes.indexOf(snowflake);
				if (index > -1) starflakes.splice(index, 1);
				createSnowflake(); 
			});
		};

		for (let i = 0; i < starflakeCount; i++) {
			createSnowflake();
		}

		
		return () => {
			starflakes.forEach((flake) => flake.remove());
		};
	}, []);



	return (
			
		<></>

	)
}

export default Starfall ;