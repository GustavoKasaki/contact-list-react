import styled from 'styled-components'

export const Card = styled.li`
  background-color: #004e98;
  border-radius: 16px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 25%);
  height: 160px;
`
export const CardEdit = styled.li`
  background-color: #3a6ea5;
  border-radius: 16px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 25%);
  height: 160px;
`

export const Info = styled.div`
  margin: 16px 16px 0 16px;
`

export const Name = styled.h2`
  font-size: 24px;
  line-height: 28px;
  color: #fff;
`

export const Phone = styled.p`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 18px;
  color: #fff;
`

export const Email = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #fff;
`

export const NameInput = styled.input`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  width: 100%;
  border: none;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: #3a6ea5;
  color: #000;
`

export const PhoneInput = styled.input`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 18px;
  width: 100%;
  border: none;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: #3a6ea5;
  color: #000;
`

export const EmailInput = styled.input`
  display: flex;
  align-items: center;
  font-size: 18px;
  width: 100%;
  border: none;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: #3a6ea5;
  color: #000;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`

export const CancelBtn = styled.button`
  background-color: #ff5964;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: 1px solid #000;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 16px;
  margin-top: 10px;

  &:hover {
    filter: brightness(1.5);
    transition: filter 0.25s linear;
  }

  img {
    height: 24px;
    width: 24px;
  }
`

export const ConfirmBtn = styled.button`
  background-color: #6bf178;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: 1px solid #000;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    filter: brightness(1.5);
    transition: filter 0.25s linear;
  }

  img {
    height: 24px;
    width: 24px;
  }
`

export const EditBtn = styled.a`
  background-color: #ff6700;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: 1px solid #000;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 16px;
  margin-top: 10px;

  &:hover {
    filter: brightness(1.5);
    transition: filter 0.25s linear;
  }

  img {
    height: 24px;
    width: 24px;
  }
`

export const DeleteBtn = styled.a`
  background-color: #c0c0c0;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: 1px solid #000;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    filter: brightness(1.5);
    transition: filter 0.25s linear;
  }

  img {
    height: 24px;
    width: 24px;
  }
`
