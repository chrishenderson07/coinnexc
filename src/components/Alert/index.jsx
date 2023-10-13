import Shield from '../../assets/icons/shield.svg';

import { Container } from './styles';

export function Alert() {
	return (
		<Container>
			<div className="iconBox">
				<img
					src={Shield}
					alt="Shield Icon"
					width={35}
				/>
			</div>

			<div>
				<strong>100% Segura</strong>
				<p>Seu dinheiro sempre protegido</p>
			</div>
		</Container>
	);
}
