import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";

import PrincipalPage from "./pages/PrincipalPage/PrincipalPage";

function App() {
  return (
    <Layout>
      <Header />
      <Navbar></Navbar>
      <PrincipalPage></PrincipalPage>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
