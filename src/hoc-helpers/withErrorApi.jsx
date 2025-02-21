import { useState } from 'react'
import ErrorMassage from '../components/ErrorMassage/ErrorMassage'

export const withErrorApi = View => {
	return props => {
		const [errorApi, seterrorApi] = useState(false)

		return (
			<>
				{errorApi ? (
					<ErrorMassage />
				) : (
					<View seterrorApi={seterrorApi} {...props} />
				)}
			</>
		)
	}
}
