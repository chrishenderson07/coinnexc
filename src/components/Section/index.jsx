import { Container } from './styles'

export function Section({ children, id }) {
	return <Container id={id}>{children}</Container>
}
