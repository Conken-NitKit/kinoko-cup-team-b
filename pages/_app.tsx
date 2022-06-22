import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import IndexPage from './index';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <IndexPage {...pageProps} />
    </>
  );
}

export default App;