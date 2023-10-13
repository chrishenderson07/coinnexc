import { Container } from './styles';

export function Coin() {
	return (
		<Container>
			<div className="col">
				<div>BTC</div>
				<div>27.430</div>
			</div>
			<div className="col">
				<div>1.92%</div>
				<div>USD</div>
			</div>
		</Container>
	);
}
