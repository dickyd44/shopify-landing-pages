import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Testimonial from "./components/Testimonials";
import Blog from "./components/Blog";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Banner />
      <Card />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
}
