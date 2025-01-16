import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #ff6700;
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

export const AddButton = styled.button`
  font-size: 24px;
  color: #fff;
  background-color: #004e98;
  width: 210px;
  height: 48px;
  border-radius: 8px;
  margin: auto 38px auto 0;
  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
    transition: filter 0.25s linear;
  }
`
