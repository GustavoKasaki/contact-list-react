import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #c0c0c0;
  border-radius: 16px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 25%);
  margin-top: 32px;
  padding-top: 24px;
`

export const Counter = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff6700;
  width: 200px;
  height: 48px;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 8px;

  p {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
`

export const ContactList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`
