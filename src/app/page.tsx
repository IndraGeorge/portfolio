
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
          <div className="two-blocs">
            <About/>
            <Portfolio/>
          </div>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
