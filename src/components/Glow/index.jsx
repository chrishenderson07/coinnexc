/* eslint-disable no-unused-vars */
import { Container } from './styles'

export function Glow({ size, top, left, right, className }) {
	return (
		<Container
			size={size}
			top={top}
			left={left}
			right={right}
			className={className}
		/>
	)
}
