import styled from 'styled-components'

export const Container = styled.div`
	border-radius: 532px;
	opacity: 0.54;
	background: rgba(255, 192, 4, 0.35);
	filter: blur(150px);
	width: ${({ size }) => size};
	height: ${({ size }) => size};

	position: absolute;
	top: ${({ top }) => top && top};
	bottom: ${({ bottom }) => bottom && bottom};
	left: ${({ left }) => left && left};
	right: ${({ right }) => right && right};

	z-index: -1;
	overflow-x: hidden !important;
`
