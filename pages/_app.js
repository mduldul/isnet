import 'tailwindcss/tailwind.css'
import { CssBaseline } from '@nextui-org/react';
import Content from '../components/content/content';

function MyApp({ Component, pageProps }) {
  return <>
    <Content>
      <CssBaseline />
      <Component {...pageProps} />
    </Content>
  </>
}

export default MyApp
