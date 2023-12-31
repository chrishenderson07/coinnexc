import styled from 'styled-components'

export const Container = styled.div`
	width: ${({ size }) => size};
	height: ${({ size }) => size};

	background: linear-gradient(
		246deg,
		#ffc004 -15.03%,
		rgba(255, 192, 4, 0.74) -1.93%,
		rgba(255, 192, 4, 0) 100.48%
	);

	border-radius: 99px;
	position: absolute;

	top: ${({ top }) => top && top};
	bottom: ${({ bottom }) => bottom && bottom};
	left: ${({ left }) => left && left};
	right: ${({ right }) => right && right};

	z-index: 0;
`
