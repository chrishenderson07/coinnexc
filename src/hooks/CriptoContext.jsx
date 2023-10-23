import axios from 'axios'
import { useState, useEffect, createContext, useContext } from 'react'

const CriptoContext = createContext()

export function useCripto() {
	return useContext(CriptoContext)
}

export function CriptoProvider({ children }) {
	const [criptos, setCriptos] = useState([])

	useEffect(() => {
		const fetchCriptos = async () => {
			try {
				const response = await axios.get(
					'https://api.coingecko.com/api/v3/coins/markets',
					{
						params: {
							vs_currency: 'usd', // Escolha a moeda com a qual deseja comparar os preços
							order: 'market_cap_desc',
							per_page: 7, // Número de criptomoedas para exibir
							page: 1,
						},
					},
				)

				console.log('rodei agora!')
				setCriptos(response.data)
			} catch (error) {
				console.log(error)
			}
		}

		fetchCriptos()
		setInterval(fetchCriptos, 120000)
	}, [])
	return (
		<CriptoContext.Provider value={criptos}>{children}</CriptoContext.Provider>
	)
}
