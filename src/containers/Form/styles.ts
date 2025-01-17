import { styled } from 'styled-components'
import _var from '../../styles/var'

export const Title = styled.h2`
  margin-bottom: 16px;
  text-align: center;
`

export const Form = styled.form`
  width: 600px;
  margin: 0 auto;
  text-align: center;
`

export const NameInput = styled.input`
  font-size: 24px;
  line-height: 28px;
  width: 100%;
  border: none;
  border-left: 2px solid #3a6ea5;
  border-bottom: 2px solid #3a6ea5;
  background-color: #fffa;
  color: #000;
`

export const PhoneInput = styled.input`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 18px;
  width: 100%;
  border: none;
  border-left: 2px solid #3a6ea5;
  border-bottom: 2px solid #3a6ea5;
  background-color: #fffa;
  color: #000;
`

export const EmailInput = styled.input`
  display: flex;
  align-items: center;
  font-size: 18px;
  width: 100%;
  border: none;
  border-left: 2px solid ${_var.lightblue};
  border-bottom: 2px solid ${_var.lightblue};
  background-color: #fffa;
  color: #000;
`

export const Button = styled.button`
  font-size: 18px;
  color: #fff;
  background-color: ${_var.darkblue};
  width: 120px;
  height: 36px;
  border-radius: 8px;
  margin-top: 18px;
  cursor: pointer;
  text-align: center;

  &:hover {
    filter: brightness(1.5);
    transition: filter 0.25s linear;
  }
`
