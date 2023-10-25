import styled from 'styled-components'

export const Container = styled.div`
	width: max-content;
	padding: 0.4rem 1.6rem;
	text-align: center;

	font-family: ${({ theme }) => theme.fonts.DMSans};
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.6rem;
	line-height: 140%; /* 22.4px */
	letter-spacing: 4.8px;
	text-transform: uppercase;

	background-color: rgba(255, 255, 255, 0.1);

	@media (max-width: 425px) {
		margin: 0 auto;
	}
`
