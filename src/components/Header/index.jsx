import { Alert } from '../Alert'
import { Circles } from '../Circles'
import { Coin } from '../Coin'
import { GlassBox } from '../GlassBox'
import { Glow } from '../Glow'
import { Nav } from '../Nav'

import { Container, Counter, HeaderContent, Monitor } from './styles'

export function Header() {
	return (
		<Container>
			<Nav />
			<HeaderContent>
				<div className="header-info">
					<span>UMA DAS MAIORES CORRETORAS DO MUNDO</span>
					<h1>Opere as mais conhecidas criptomoedas</h1>
					<h4>
						Compre, Venda, receba pagamentos, converta pagamentos em moeda
						fiduciária ou mantenha a criptomoeda.
					</h4>

					<Counter>
						<div className="years">
							<span>Atuação</span>
							<strong>
								18+ <small>anos</small>
							</strong>
						</div>
						<div className="users">
							<span>Usuários</span>
							<strong>100000+</strong>
						</div>
					</Counter>
				</div>
				<div className="header-monitor">
					<Monitor>
						<h2>Mercado</h2>
						<Coin />
						<Coin />
						<Coin />
						<Coin />
						<Alert />
						<GlassBox />
					</Monitor>
				</div>
				<Circles />
				<Glow />
			</HeaderContent>
		</Container>
	)
}
