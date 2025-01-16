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

export const ContactName = styled.h2`
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
