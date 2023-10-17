import {
	TableContainer,
	ResponsiveTable,
	TableHeader,
	TableCell,
} from './styles'

export function Table() {
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
					<tr>
						<TableCell>1</TableCell>
						<TableCell>Exemplo 1</TableCell>
						<TableCell>R$ 10,00</TableCell>
						<TableCell>+5%</TableCell>
						<TableCell>Compra</TableCell>
					</tr>
					{/* ... (outras linhas da tabela) */}
					<tr>
						<TableCell>1</TableCell>
						<TableCell>Exemplo 1</TableCell>
						<TableCell>R$ 10,00</TableCell>
						<TableCell>+5%</TableCell>
						<TableCell>Compra</TableCell>
					</tr>
				</tbody>
			</ResponsiveTable>
		</TableContainer>
	)
}
