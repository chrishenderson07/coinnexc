import styled from 'styled-components'

export const Container = styled.button`
	background-color: ${({ theme }) => theme.colors.primary.main};
	color: ${({ theme }) => theme.colors.blackText};
	font-size: 1.8rem;
	font-weight: 700;
	font-family: 'Outfit', sans-serif;

	padding: 2rem 3.6rem;
	border-radius: 49px;
	width: max-content;

	display: flex;
	align-items: center;
	gap: 0.8rem;
`
