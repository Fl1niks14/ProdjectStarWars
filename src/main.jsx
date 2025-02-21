import { StrictMode } from 'react'
import App from './containers/App/App'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { Provider } from 'react-redux'
import store from './store/store'
import ThemeProvider from './context/ThemeProvaider' // Исправлено
const root = createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Provider>
	</StrictMode>
)
