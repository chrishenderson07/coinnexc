import { Container } from './styles'

export function Circles() {
	return (
		<>
			<Container
				size="1.5rem"
				className="circle"
				top="15%"
				left="25%"
			/>
			<Container
				size="1.5rem"
				className="circle"
				bottom="0px"
				left="0px"
			/>
			<Container
				size="1.5rem"
				className="circle"
				bottom="5%"
				left="50%"
			/>
			<Container
				size="1.5rem"
				className="circle"
				bottom="50%"
				left="55%"
			/>
			<Container
				size="3.1rem"
				className="circle"
				top="15%"
				right="20%"
			/>
		</>
	)
}
