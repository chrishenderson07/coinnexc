import { ArrowRight } from '@phosphor-icons/react'
import { ButtonText } from '../ButtonText'
import { Text } from '../Text'
import { Container } from './styles'

// eslint-disable-next-line no-unused-vars
export function IconBox({ Icon, title, text, button, className }) {
	return (
		<Container
			button={button}
			className={className}>
			<div className="icon">{Icon}</div>
			<h3>{title}</h3>
			<Text>{text}</Text>
			{button && (
				<ButtonText Icon={<ArrowRight size={18} />}>{button}</ButtonText>
			)}
		</Container>
	)
}
