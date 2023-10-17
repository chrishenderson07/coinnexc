import styled from 'styled-components'

export const Container = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.8rem;
	font-weight: 300;
	font-family: 'Outfit', sans-serif;

	display: flex;
	gap: 1.6rem;
	align-items: center;
`
