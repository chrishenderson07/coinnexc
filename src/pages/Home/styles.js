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

	section#secure {
		width: 90%;
		margin: 0 auto;
	}

	section#popularCripto {
		width: 90%;
		margin: 0 auto;
		position: relative;
		gap: 2.4rem;
		.new-table {
			width: 100%;
			max-width: 80rem;
			margin: 0 auto;
		}
	}

	section#resources {
		margin-top: 10rem;

		.resourceWrapper {
			display: flex;
			gap: 4.6rem;
			text-align: left;

			.resource {
				flex: 2;
				padding: 0 2rem;

				h2 {
					margin: 2.4rem 0;
				}

				.iconBox {
					margin-top: 4.6rem;
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-template-rows: repeat(2, 1fr);
					gap: 3.2rem;
					column-gap: 6.4rem;

					@media (max-width: 425px) {
						grid-template-columns: 1fr;
						margin: 4.6rem auto 0;
					}
				}
			}
		}
	}

	section#tools {
		margin-top: 10rem;

		.laptopImg {
			text-align: right;
		}

		.resourceWrapper {
			display: flex;
			gap: 8.6rem;

			.resource {
				flex: 1;
				padding: 0 2rem;

				h2 {
					margin: 2.4rem 0;
				}

				.iconBox {
					margin-top: 4.6rem;
					display: flex;
					flex-direction: column;
					gap: 3.2rem;

					@media (max-width: 425px) {
						grid-template-columns: 1fr;
						margin: 4.6rem auto 0;
					}
				}
			}
		}
	}
`
