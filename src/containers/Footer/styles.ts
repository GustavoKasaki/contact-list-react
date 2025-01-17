import styled from 'styled-components'

export const Footer = styled.footer`
  text-align: center;
  font-weight: bold;
  background-color: #ff6700;
  margin: 32px 0;
  padding: 12px 0;
  // height: 100px;
  border-radius: 16px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 25%);

  p {
    margin-top: 12px;
    margin-bottom: 12px;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 38px;
  margin-bottom: 12px;

  a img {
    width: 24px;
  }
`
