import { Text } from '../Text'
import { Container } from './styles'

export function IconBox({ Icon, title, text }) {
	return (
		<Container>
			{Icon}
			<h3>{title}</h3>
			<Text>{text}</Text>
		</Container>
	)
}
