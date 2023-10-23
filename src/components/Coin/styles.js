import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	text-transform: uppercase;

	.cointeste {
		display: flex;
		gap: 1.6rem;
		border-bottom: solid #5e5c5c;
	}

	.col {
		margin: 16px 0;
		div {
			&:first-child {
				color: ${({ theme }) => theme.colors.gray[200]};
				font-family: ${({ theme }) => theme.fonts.DMSans};
				font-size: 1.8rem;
				font-weight: 400;

				margin-bottom: 12px;
			}
		}

		&:first-child {
			div {
				&:nth-child(2) {
					color: ${({ theme }) => theme.colors.softWhite};
					font-family: ${({ theme }) => theme.fonts.Outfit};
					font-size: 2.2rem;
					font-weight: 700;
				}
			}
		}

		&:last-child {
			div {
				&:nth-child(2) {
					font-size: 2.2rem;
					font-weight: 300;
				}
			}
		}
	}
`
