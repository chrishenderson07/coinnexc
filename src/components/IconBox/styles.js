import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	gap: 1.6rem;

	.icon {
		svg {
			background-color: ${({ theme }) => theme.colors.primary.main};
			color: ${({ theme }) => theme.colors.white};
			padding: 0.8rem;
			border-radius: 16px;
			width: 5.6rem;
			height: 5.6rem;

			margin-bottom: 1.6rem;
		}
	}

	h3 {
		color: ${({ theme }) => theme.colors.white};
		font-family: ${({ theme }) => theme.fonts.Outfit};
		font-weight: 400;
		font-size: 2.8rem;
	}

	p {
		color: ${({ theme }) => theme.colors.white};
		opacity: 0.7;
		line-height: 140%; /* 22.4px */
	}
`
