import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html,
body {
  font-size: 62.5%;
  font-family: 'Rubik', sans-serif;
}

#__next {
  position: relative;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

`
export default GlobalStyle
