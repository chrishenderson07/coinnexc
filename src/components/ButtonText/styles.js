import styled from 'styled-components';

export const Container = styled.button`
	padding: 2rem 3.6rem;

	background-color: transparent;
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.8rem;
	font-weight: 300;
	font-family: 'Outfit', sans-serif;
`;
