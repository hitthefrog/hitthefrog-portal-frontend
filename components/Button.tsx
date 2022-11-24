import styled from '@emotion/styled'

type Button = {
  children: any
  onClick: any
}

const Button = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>
}

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 24px;
  border: none;
  color: #dbdbdb;
  font-size: 14px;

  background: rgba(0, 0, 0, 0.66);
  backdrop-filter: blur(40.775px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export default Button
