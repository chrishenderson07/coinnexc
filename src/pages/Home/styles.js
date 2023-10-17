import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	.col {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2.4rem;

		p {
			margin-bottom: 2.4rem;
		}
	}

	.col > img {
		margin-top: -2rem;
	}

	.smartphone {
		width: 100%;
		min-width: 32rem;
	}

	section#popularCripto {
		position: relative;
		gap: 2.4rem;
		.new-table {
			width: 100%;
			max-width: 80rem;
			margin: 0 auto;
		}
	}
`
