import Logo from "../../assets/images/logo.png";
import { Wrapper } from "../Wrapper/styles";
import { Container } from './styles';

export function Footer(){
return(<Container >
	<Wrapper className="footer">
		<img src={Logo} alt="" />
		<p>© CoinNexc 2023 Todos os direitos reservados</p>
	</Wrapper>
</Container>)}
