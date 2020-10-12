import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${({ theme }) => css`
    html {
      height: 100%;

      body {
        display: flex;
        flex-direction: column;
        height: 100vh;
        margin: 0;
        background: ${theme.colors.background};
        color: ${theme.colors.black};

        #root {
          display: flex;
          font-family: sans-serif;
          justify-content: center;
          padding: 15px;
        }
      }
    }
  `}
`
