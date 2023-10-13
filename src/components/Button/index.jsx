import { Container } from './styles';

export function Button({ type, children }) {
	return <Container type={type}>{children}</Container>;
}
