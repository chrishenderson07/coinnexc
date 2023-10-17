import {
	ArrowRight,
	ChartLineUp,
	Lock,
	Handshake,
	Smiley,
} from '@phosphor-icons/react'

import Smartphone from '../../assets/images/smartphone.png'
import Tablet from '../../assets/images/tablet.png'

import { Button } from '../../components/Button'
import { Glow } from '../../components/Glow'
import { Header } from '../../components/Header'
import { IconBox } from '../../components/IconBox'
import { Section } from '../../components/Section'
import { Table } from '../../components/Table'
import { Tag } from '../../components/Tag'
import { Text } from '../../components/Text'
import { Title } from '../../components/Title'
import { Wrapper } from '../../components/Wrapper/styles'

import { Container } from './styles'

export function Home() {
	return (
		<Container>
			<Header />
			<Section id="secure">
				<Wrapper>
					<div className="col">
						<Title title="A cripto exchange mais confiável" />
						<Text>
							Milhões de usuários confiam em nós, e você também pode. A prova
							está na nossa plataforma:
						</Text>
						<Button type="button">
							Comece aqui <ArrowRight size={32} />
						</Button>
					</div>

					<div className="col">
						<img
							src={Smartphone}
							alt="Smartphone"
							className="smartphone"
						/>
					</div>
				</Wrapper>
			</Section>
			<Section id="popularCripto">
				<Tag title="Criptomoedas" />
				<Title title="Criptomoedas populares" />
				<Text>Negocie as criptomoedas mais conhecidas do mercado</Text>

				<div className="new-table">
					<Table />
					<Glow
						size="420px"
						top="10%"
						right="15%"
					/>
				</div>
			</Section>
			<Section id="resources">
				<Wrapper className="resourceWrapper">
					<div>
						<img
							src={Tablet}
							alt="Imagem de um Tablet"
							width="80%"
						/>
					</div>
					<div className="resource">
						<Tag title="RECURSOS" />
						<Title title="Os melhores recursos para você" />
						<Text>
							Descubra os recursos de alto nível que colocam o controle de suas
							criptomoedas em suas mãos. Explore nossas soluções de ponta para
							potencializar seus investimentos.
						</Text>

						<div className="iconBoxWrapper">
							<div className="iconBox">
								<IconBox
									Icon={<ChartLineUp />}
									title="Ferramenta de Gráficos Avançado"
									text="Acompanhe o mercado de criptomoedas com nossos gráficos
									avançados. Tome decisões informadas e maximize seus
									investimentos com análises precisas e em tempo real."
								/>
								<IconBox
									Icon={<Lock />}
									title="Ampla gama de criptomoedas"
									text="Explore nossa ampla variedade de criptomoedas. Diversifique sua carteira com acesso a uma ampla gama de opções, todas em um único lugar, para atender às suas necessidades de investimento."
								/>
								<IconBox
									Icon={<Handshake />}
									title="Líder do setor Segurança"
									text="Como líder do setor, nossa prioridade é a sua segurança. Com uma experiência inigualável, oferecemos soluções de investimento inovadoras e a mais alta segurança para proteger seus ativos de criptomoedas."
								/>
								<IconBox
									Icon={<Smiley />}
									title="Suporte Transparente"
									text="Como líder do setor, nossa prioridade é a sua segurança, e nosso suporte transparente é a base disso. Oferecemos soluções inovadoras e a mais alta segurança, respaldadas por um suporte transparente, para proteger seus ativos de criptomoedas. Conte conosco para investir com confiança."
								/>
							</div>
						</div>
					</div>
				</Wrapper>
			</Section>
		</Container>
	)
}
