import { Container } from './styles'

export function ButtonText({ type, children, Icon }) {
	return (
		<Container
			type={type}
			Icon={Icon}>
			{children}
			{Icon}
		</Container>
	)
}
