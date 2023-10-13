import styled from 'styled-components'

export const Container = styled.div`
	padding: 2.8rem;

	background: linear-gradient(
		132deg,
		rgba(126, 126, 126, 0.4) 3.01%,
		rgba(126, 126, 126, 0) 107.67%
	);
	backdrop-filter: blur(4.5px);

	border-radius: 3.2rem;
	position: absolute;
	bottom: -18%;
	left: -15%;

	h2 {
		color: ${({ theme }) => theme.colors.softWhite};
		font-family: ${({ theme }) => theme.fonts.Outfit};
		font-size: 2.6rem;
		font-weight: 700;

		margin-bottom: 1.6rem;
	}

	.line {
		span {
			color: ${({ theme }) => theme.colors.softWhite};
			font-family: ${({ theme }) => theme.fonts.DMSans};
			font-size: 1.4rem;
			font-weight: 400;
		}

		strong {
			color: ${({ theme }) => theme.colors.primary.main};
			font-family: ${({ theme }) => theme.fonts.DMSans};
			font-size: 1.6rem;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
		}

		svg {
			margin: 0 1.4rem;
		}

		+ .line {
			margin: 1.6rem 0;
		}
	}
	button {
		font-size: 1.8rem;
	}
`
