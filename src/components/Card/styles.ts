import styled from 'styled-components'

export const Card = styled.li`
  background-color: #004e98;
  border-radius: 16px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 25%);
  height: 160px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
`

export const Info = styled.div`
  margin: 16px 16px 10px 16px;
`

export const Name = styled.h2`
  font-size: 24px;
  line-height: 28px;
`

export const Phone = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 18px;
    display: flex;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    margin-left: 8px;
  }
`

export const Email = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 18px;
    display: flex;
  }

  p {
    margin-left: 8px;
    overflow-x: clip;
  }
`

export const Buttons = styled.div`
  display: flex;
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
  margin: 0 auto;

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
  margin: 0 auto;

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
  margin: 0 auto;

  img {
    height: 24px;
    width: 24px;
  }
`
