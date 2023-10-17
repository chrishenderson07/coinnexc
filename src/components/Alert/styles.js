import styled from 'styled-components'

export const Container = styled.div`
	width: 24rem;
	padding: 1.4rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.6rem;

	background-color: ${({ theme }) => theme.colors.primary.main};
	border-radius: 12px;
	filter: drop-shadow(0px 4px 14px rgba(255, 192, 4, 0.74));

	position: absolute;
	top: -5%;
	right: -20%;

	.iconBox {
		border-radius: 10px;
		background: rgba(203, 153, 3, 0.55);
		padding: 1.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	strong {
		color: ${({ theme }) => theme.colors.background};
		font-family: ${({ theme }) => theme.fonts.Outfit};
		font-size: 2rem;
		font-weight: 700;
	}

	p {
		color: ${({ theme }) => theme.colors.gray[500]};
		font-family: ${({ theme }) => theme.fonts.Outfit};
		font-size: 1.4rem;
		font-weight: 400;
	}

	@media (max-width: 520px) {
		top: -15%;
		right: 0%;
	}
`
