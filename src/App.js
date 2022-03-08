import { Fragment, useEffect } from "react";
import ReactGA from "react-ga";
import About from "./components/about/About";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

function App() {
	useEffect(() => {
		ReactGA.initialize("G-K9RPQNRLZ1");
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<Fragment>
			<Header />
			<About />
			<ProductList />
		</Fragment>
	);
}

export default App;
