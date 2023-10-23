import styled from 'styled-components'

export const TableContainer = styled.div`
	overflow-x: auto;
	width: 100%;
	/* max-width: 800px; */
	margin: 0 auto;
	border-radius: 12px;

	background-color: ${({ theme }) => theme.colors.gray[500]};

	tr {
		border-bottom: 1px solid ${({ theme }) => theme.colors.white};
	}

	tr {
		&:last-child {
			border: none;
		}
	}
`

export const ResponsiveTable = styled.table`
	border-collapse: collapse;
	width: 100%;
`

export const TableHeader = styled.th`
	padding: 2.4rem;
	text-align: left;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.Outfit};
	font-weight: 700;

	border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`

export const TableCell = styled.td`
	padding: 2.4rem;
	text-align: left;

	font-family: ${({ theme }) => theme.fonts.Outfit};
	font-weight: 500;
	color: ${({ theme }) => theme.colors.white};
	opacity: 0.8;

	.criptoName {
		display: flex;
		align-items: center;
		gap: 1.6rem;
	}
`

export const BuyButton = styled.a`
	padding: 1rem;
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	text-transform: uppercase;
	font-size: 1.2rem;
	font-family: ${({ theme }) => theme.fonts.Outfit};
	border-radius: 8px;

	font-weight: 700;
	background-color: ${({ theme }) => theme.colors.success};

	transition: filter 0.3s;
	&:hover {
		filter: brightness(1.2);
	}
`
