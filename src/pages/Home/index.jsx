import { ArrowRight } from '@phosphor-icons/react'

import Smartphone from '../../assets/images/smartphone.png'

import { Button } from '../../components/Button'
import { Glow } from '../../components/Glow'
import { Header } from '../../components/Header'
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
		</Container>
	)
}
