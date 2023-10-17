import styled from 'styled-components'

export const Container = styled.h2`
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.Outfit};

	font-size: clamp(3.2rem, 2.1091rem + 5.4545vw, 5.6rem);
	font-weight: 400;
`
