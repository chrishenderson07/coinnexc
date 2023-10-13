import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../assets/styles/global';
import theme from '../assets/styles/themes/default';
import { Home } from '../pages/Home';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Home />
		</ThemeProvider>
	);
}

export default App;
