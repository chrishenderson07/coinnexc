import Logo from '../../assets/images/logo.png'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'

import { Container } from './styles'

export function Nav() {
	return (
		<Container>
			<img
				src={Logo}
				alt="Logo Coinnexc"
			/>
			<div className="enter">
				<a href="http://coinnexc.com/login">
					<ButtonText type="button">Login</ButtonText>
				</a>
				<a href="http://coinnexc.com/register">
					<Button type="button">Cadastre-se</Button>
				</a>
			</div>
		</Container>
	)
}
