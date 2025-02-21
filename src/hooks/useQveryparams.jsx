import { useLocation } from 'react-router-dom'

export const useQveryparams = () => {
	return new URLSearchParams(useLocation().search)
}
