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

		@media (max-width: 425px) {
			text-align: center;
		}
	}

	section#resources {
		margin-top: 10rem;

		.resourceWrapper {
			display: flex;
			justify-content: flex-start;
			gap: 4.6rem;

			.tabletimg {
				flex: 2;
				text-align: left;
			}

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

			@media (max-width: 425px) {
				.tabletimg {
					flex: content;
				}
			}
		}
	}

	section#tools {
		margin: 10rem 0;
		.resourceWrapper {
			display: grid;
			grid-template-columns: 1fr 1fr;

			.resource {
				width: 85%;
				margin: 0 auto;

				display: flex;
				flex-direction: column;
				gap: 1.6rem;
			}

			.iconBoxWrapper {
				margin-top: 3.2rem;

				.iconBox {
					display: flex;
					flex-direction: column;
					gap: 4.2rem;
				}
			}

			.laptopImg {
				text-align: right;
			}

			@media (max-width: 768px) {
				grid-template-columns: 1fr;

				.resource {
					width: 100%;
					margin: 0 auto;

					align-items: center;
				}

				.laptopImg img {
					margin-top: 4.8rem;
					text-align: right;
					width: 50%;
				}
			}

			@media (max-width: 425px) {
				.innerIconBox {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			}
		}
	}

	section#callToAction {
		margin: 10rem 0;

		.bg {
			.relativeImage {
				img {
					margin-bottom: 5.2rem;
					width: 100vw;
					opacity: 0.8;
				}

				position: relative;
			}

			.wrapper {
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 2rem;
				align-items: center;

				position: absolute;

				top: 55%;
				left: 50%;
				transform: translate(-50%, -50%);

				/* width: 70%; */
				margin: 0 auto;
				text-align: center;
				.cta {
					display: flex;
					justify-content: center;
					gap: 3.4rem;
				}
			}

			@media (max-width: 1024px) {
				img {
					margin-bottom: 5.2rem;
					width: 100vw;
					height: 600px;
					opacity: 0.8;
				}

				.wrapper {
					width: 80%;
				}
			}

			@media (max-width: 768px) {
				h2 {
					font-size: 2.8rem;
				}
				img {
					height: 200px;
				}
			}
		}
	}
`
