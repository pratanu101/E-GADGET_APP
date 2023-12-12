import Footer from "./Footer"
import Header from "./Header"
import { Toaster } from 'react-hot-toast';

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <main style={{minHeight:"84vh", width:"100%"}}>
            <Toaster/>
            {children}
        </main>
        
        <Footer/>
    </div>
  )
}

export default Layout