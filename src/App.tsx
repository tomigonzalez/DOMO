import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Grid from "./pages/InternalLink/Grid";

function App() {
  return (
    <Layout>
      <Header />
      <Navbar></Navbar>
      <Home></Home>
      <Grid></Grid>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
