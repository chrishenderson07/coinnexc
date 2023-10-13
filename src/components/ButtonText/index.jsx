import { Container } from './styles';

export function ButtonText({ type, children }) {
	return <Container type={type}>{children}</Container>;
}
