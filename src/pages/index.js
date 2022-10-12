import Layout from "../components/layout/layout"
import {
    Route,
    Routes,
  } from "react-router-dom";
import Homepage from "./homepage";
import ProfileDetail from "./profileDetail";
import ErrorPage from "./errorPage";

function Index() {
    
  return (
    <Layout>
      <Routes>
        <Route  path="/" element={<Homepage />} />
        <Route  path="/profile/:artist" element={<ProfileDetail />} />
        <Route  path="*" element={<ErrorPage errorMasage="Sayfa Bulunamadı"/>}/>
      </Routes>
      </Layout>
  )
}
export default Index