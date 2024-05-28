import { RecoilRoot } from "recoil";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <Header />
        <Navbar />
        <Main />
        <Footer />
      </RecoilRoot>
    </>
  );
}
