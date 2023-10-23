import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../assets/styles/global'
import theme from '../assets/styles/themes/default'
import { CriptoProvider } from '../hooks/CriptoContext'

import { Home } from '../pages/Home'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<CriptoProvider>
				<Home />
			</CriptoProvider>
		</ThemeProvider>
	)
}

export default App
