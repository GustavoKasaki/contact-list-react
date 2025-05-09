import { Link } from 'react-router-dom'
import styled from 'styled-components'
import _var from '../../styles/var'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${_var.orange};
  margin-top: 32px;
  height: 160px;
  border-radius: 16px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 25%);
`

export const HeaderTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  margin: auto 0 auto 38px;
`

export const AddButton = styled(Link)`
  font-size: 24px;
  line-height: 48px;
  color: #fff;
  background-color: ${_var.darkblue};
  width: 210px;
  height: 48px;
  border-radius: 8px;
  margin: auto 38px auto 0;
  cursor: pointer;
  text-align: center;

  &:hover {
    filter: brightness(1.5);
    transition: filter 0.25s linear;
  }
`
