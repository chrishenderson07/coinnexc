import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
  font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		/* outline: 2px solid red; */

  }

  body {
  font-size: 1.6rem;
	font-family: 'DM Sans', sans-serif;

	width: 90%;
  margin: 0 auto;

	background-color: ${({ theme }) => theme.colors.background};
	overflow-x: hidden!important;

}

  button, a {
    cursor: pointer;
  }

	button {
		cursor: pointer;
		border: none;
		outline: none;
	}
`
