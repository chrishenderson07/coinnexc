import styled from 'styled-components'

export const Container = styled.header`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0.3fr 1.5fr;
	grid-template-areas:
		'nav'
		'headerContent';

	width: 90%;
	margin: 0 auto;
	min-height: 100vh;
	color: white;

	z-index: 10;
	position: relative;
`

export const HeaderContent = styled.div`
	grid-area: 'headerContent';
	align-self: center;

	display: grid;
	grid-template-columns: 3fr 2fr;

	.header-info {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		span {
			text-transform: uppercase;
			color: ${({ theme }) => theme.colors.primary.main};
			font-weight: 700;
			letter-spacing: 2.08px;
			font-family: ${({ theme }) => theme.fonts.DMSans};
		}

		h1 {
			color: ${({ theme }) => theme.colors.primary.softWhite};
			font-family: ${({ theme }) => theme.fonts.DMSans};
			font-size: clamp(4.2rem, 2.5636rem + 8.1818vw, 7.8rem);
			font-weight: 700;
			line-height: 103%;

			margin-bottom: 1.6rem;
		}
		h4 {
			color: #8f8e8d;
			font-family: ${({ theme }) => theme.fonts.DMSans};
			font-size: 2.2rem;
			font-weight: 300;
			line-height: 150%;

			max-width: 480px;
			display: flex;
			align-items: center;

			&::before {
				background-color: ${({ theme }) => theme.colors.primary.main};
				content: '';
				width: 20px;
				height: 85px;

				border-radius: 2px;
				margin-right: 3.8rem;
			}
		}
	}

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
		margin-top: 3.2rem;

		.header-monitor {
			justify-self: center;
		}
	}

	@media (max-width: 425px) {
		.first-glow {
			width: 300px;
		}
	}
`

export const Counter = styled.div`
	display: flex;
	gap: 3.2rem;
	width: 70%;

	margin-top: 6.2rem;

	.years,
	.users {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		span {
			color: ${({ theme }) => theme.colors.softWhite};
			font-family: ${({ theme }) => theme.fonts.Outfit};
			font-size: 16px;
			font-weight: 700;
		}

		strong {
			color: ${({ theme }) => theme.colors.primary.main};
			font-family: ${({ theme }) => theme.fonts.Outfit};
			font-size: clamp(3.2rem, 1.1091rem + 10.4545vw, 7.8rem);
			font-weight: 700;

			small {
				display: block;
				font-size: 3.2rem;
			}
		}
	}

	.users {
		flex: 2;
	}
`

export const Monitor = styled.div`
	position: relative;
	max-width: 37rem; /* Tamanho máximo de 320px */
	min-width: 28rem;
	padding: 2.8rem 4.2rem 4.2rem;

	border-radius: 34px;
	background-color: ${({ theme }) => theme.colors.gray[500]};

	h2 {
		color: ${({ theme }) => theme.colors.softWhite};
		font-family: ${({ theme }) => theme.fonts.Outfit};
		font-size: 2.6rem;
		font-weight: 700;

		margin-bottom: 1.6rem;
	}

	@media (max-width: 1024px) {
		margin: 6.2rem auto 3.2rem 3.2rem;
	}
`
