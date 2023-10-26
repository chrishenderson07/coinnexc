import { useCripto } from '../../hooks/CriptoContext'

import {
	TableContainer,
	ResponsiveTable,
	TableHeader,
	TableCell,
	BuyButton,
} from './styles'

export function Table() {
	const criptos = useCripto()

	return (
		<TableContainer>
			<ResponsiveTable>
				<thead>
					<tr>
						<TableHeader>#</TableHeader>
						<TableHeader>Nome</TableHeader>
						<TableHeader>Preço</TableHeader>
						<TableHeader>Variação</TableHeader>
						<TableHeader>Trade</TableHeader>
					</tr>
				</thead>
				<tbody>
					{criptos.map((cripto, index) => (
						<tr key={cripto.id}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>
								<div className="criptoName">
									<img
										src={cripto.image}
										width={32}
										alt={cripto.name}
									/>
									{cripto.name}
								</div>
							</TableCell>
							<TableCell>{`$${cripto.current_price.toLocaleString()} `}</TableCell>
							<TableCell>{`${cripto.price_change_percentage_24h.toFixed(
								2,
							)}%`}</TableCell>
							<TableCell>
								<BuyButton href="http://coinnexc.com/register">
									Comprar
								</BuyButton>
							</TableCell>
						</tr>
					))}
				</tbody>
			</ResponsiveTable>
		</TableContainer>
	)
}
