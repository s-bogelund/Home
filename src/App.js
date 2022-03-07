import { Fragment } from "react";
import About from "./components/about/About";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";


function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <ProductList/>
    </Fragment>
  );
}

export default App;
