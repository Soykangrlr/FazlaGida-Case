import Footer from "./footer"
import Header from "./header"

function Layout({children}) {
  return (
    <>
     <Header/>
    <div className="container 2xl:h-screen 2xl:-mb-10  mx-auto mb-10  mt-8">
     {
        children
    }
   </div>
  
   <Footer/>
    </>
   
  )
}
export default Layout