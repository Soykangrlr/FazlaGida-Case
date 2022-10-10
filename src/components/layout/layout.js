import Footer from "./footer"
import Header from "./header"

function Layout({children}) {
  return (
    <>
     <Header/>
    <div className="container mx-auto mb-8 mt-8">
     {
        children
    }
  </div>
  
   <Footer/>
    </>
   
  )
}
export default Layout