import Header from './header'
import Footer from './footer'
export default function Layout({ children }) {
  return (
    <>
	<Header>
	</Header>
      <main>{children}</main>
     <Footer>
	 </Footer>
    </>
  )
}