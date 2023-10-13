import styled from 'styled-components'

export const Container = styled.nav`
	grid-area: 'nav';

	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-top: 2.6rem;

	img {
		max-width: 320px; /* Tamanho máximo de 320px */
		min-width: 280px; /* Tamanho mínimo de 280px */
	}
	.enter {
		margin-left: auto;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;

		gap: 2rem;

		.enter {
			margin-left: 0;
		}
	}
`
