import styled from '@emotion/styled'

const Box = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  gap: 24px;

  width: 298px;
  height: 371px;

  background: rgba(255, 255, 255, 0.1);
  /* stroke */

  border: 1px solid rgba(245, 245, 245, 0.2);
  backdrop-filter: blur(40.775px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 16px;
`

export default Box
