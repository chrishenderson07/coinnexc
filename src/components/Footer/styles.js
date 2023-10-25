import styled from 'styled-components'

export const Container = styled.footer`
	padding: 2rem 0;
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	.footer {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 2rem;

		width: 90%;
		margin: 0 auto;

		color: ${({ theme }) => theme.colors.white};

		@media (max-width: 768px) {
			justify-content: center;
			align-items: center;
		}
	}
`
