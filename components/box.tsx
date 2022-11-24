import styled from '@emotion/styled'

type Box = {
  children: any
  isSearchbar?: boolean
  query?: string
}

const Box = ({ children, isSearchbar = false, query = '' }: Box) => {
  return (
    <Container query={query} isSearchbar={isSearchbar}>
      {children}
    </Container>
  )
}

const Container = styled.div<{ isSearchbar: boolean; query: string }>`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: ${(props) => (props.isSearchbar ? 'row' : 'column')};
  justify-content: flex-end;
  align-items: center;
  padding: ${(props) => (props.isSearchbar ? '' : '24px')};
  gap: ${(props) => (props.isSearchbar ? '16px' : '24px')};
  top: calc(50vh - 210px);
  position: ${(props) => (props.isSearchbar ? 'absolute' : '')};

  width: ${(props) => (props.isSearchbar ? '640px' : '340px')};
  height: ${(props) => (props.isSearchbar ? '64px' : '420px')};

  background: rgba(255, 255, 255, 0.1);
  /* stroke */

  border: 1px solid rgba(245, 245, 245, 0.2);
  backdrop-filter: blur(40.775px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: ${(props) =>
    props.query === '' ? '16px' : '16px 16px 0px 0px'};
`

export default Box
