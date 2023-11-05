import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/globals-responsive.css'

export default function App({ Component, pageProps }) {
	  const getLayout = Component.getLayout || ((page) => page);
  return   (
  <>
  {getLayout(<Component {...pageProps} />)}
  </>
  )
}
