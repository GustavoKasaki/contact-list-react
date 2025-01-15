import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  width: 100%¨;
`

export default GlobalStyle
