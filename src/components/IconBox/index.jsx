// import { ArrowRight } from '@phosphor-icons/react'
import { ArrowRight } from '@phosphor-icons/react'
import { ButtonText } from '../ButtonText'
import { Text } from '../Text'
import { Container } from './styles'

export function IconBox({ Icon, title, text, button }) {
	return (
		<Container button={button}>
			<div className="icon">{Icon}</div>
			<h3>{title}</h3>
			<Text>{text}</Text>
			{button && (
				<ButtonText Icon={<ArrowRight size={18} />}>{button}</ButtonText>
			)}
		</Container>
	)
}
