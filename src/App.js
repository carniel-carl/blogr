import "./App.scss";
import Design from "./components/Design/Design";
import DesignB from "./components/DesignB/DesignB";
import Divider from "./components/Divider/Divider";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Design />
      <Divider />
      <DesignB />
      <Footer />
    </>
  );
}

export default App;
