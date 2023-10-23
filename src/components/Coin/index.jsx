import { useCripto } from '../../hooks/CriptoContext'

import { Container } from './styles'

export function Coin() {
	const criptos = useCripto()

	return (
		<Container>
			{criptos.map(
				(cripto, index) =>
					index < 3 && (
						<div className="cointeste">
							<div
								className="col"
								key={cripto.id}>
								<div>{cripto.symbol}</div>
								<div>{cripto.current_price.toLocaleString()}</div>
							</div>
							<div className="col">
								<div>{`${cripto.price_change_percentage_24h.toFixed(2)}%`}</div>
								<div>USD</div>
							</div>
						</div>
					),
			)}
		</Container>
	)
}
