import styled from 'styled-components'

export const Container = styled.p`
	color: ${({ theme }) => theme.colors.white};

	font-family: ${({ theme }) => theme.fonts.DMSans};
	font-size: 1.8rem;
	font-weight: 400;
	line-height: 140%; /* 25.2px */
	letter-spacing: -0.36px;

	opacity: 0.7;
`
