import Logo from '../../assets/images/logo.png';
import { Button } from '../Button';
import { ButtonText } from '../ButtonText';

import { Container } from './styles';

export function Nav() {
	return (
		<Container>
			<img
				src={Logo}
				alt="Logo Coinnexc"
			/>
			<div className="enter">
				<ButtonText type="button">Login</ButtonText>
				<Button type="button">Cadastre-se</Button>
			</div>
		</Container>
	);
}
