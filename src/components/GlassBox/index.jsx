import { Button } from '../Button';

import { Container } from './styles';

export function GlassBox() {
	return (
		<Container>
			<h2>Mercado</h2>
			<div className="line">
				<span>BTC </span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="14"
					viewBox="0 0 10 8"
					fill="none">
					<path
						d="M10 2.28571L7.77778 0V1.71429H3.88889V2.85714H7.77778V4.57143L10 2.28571ZM2.22222 3.42857L0 5.71429L2.22222 8V6.28571H6.11111V5.14286H2.22222V3.42857Z"
						fill="white"
					/>
				</svg>
				<strong>USD</strong>
			</div>
			<div className="line">
				<span>Saldo </span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="9"
					height="17"
					viewBox="0 0 9 17"
					fill="none">
					<path
						d="M4.33605 0L4.2417 0.371139V11.132L4.33605 11.2405L8.67407 8.28769L4.33605 0Z"
						fill="#CAFC01"
						fillOpacity="0.7"
					/>
					<path
						d="M4.33804 0L0 8.28769L4.33804 11.2405V0Z"
						fill="#CAFC01"
						fillOpacity="0.6"
					/>
					<path
						d="M4.33683 12.1858L4.28369 12.2606V16.0947L4.33683 16.2737L8.67594 9.23511L4.33683 12.1858Z"
						fill="#CAFC01"
						fillOpacity="0.7"
					/>
					<path
						d="M4.33804 16.2737V12.1858L0 9.23511L4.33804 16.2737Z"
						fill="#CAFC01"
						fillOpacity="0.6"
					/>
					<path
						d="M4.33691 11.2405L8.67494 8.2877L4.33691 6.01746V11.2405Z"
						fill="#CAFC01"
					/>
					<path
						d="M0 8.2877L4.33804 11.2405V6.01746L0 8.2877Z"
						fill="#CAFC01"
						fillOpacity="0.9"
					/>
				</svg>
				<strong>329.009 ETH</strong>
			</div>
			<Button type="button">Saiba Mais</Button>
		</Container>
	);
}
