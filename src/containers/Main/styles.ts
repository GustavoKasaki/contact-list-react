import styled from 'styled-components'
import _var from '../../styles/var'

export const MainContainer = styled.div`
  background-color: ${_var.gray};
  border: 0.5px solid #000;
  border-radius: 16px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 25%);
  margin: 32px 0;
  padding: 24px 32px;
`

export const Counter = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${_var.orange};
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
  margin-top: 24px;
`
