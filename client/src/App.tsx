import React from 'react';
import * as apis from './apis/apis';
import './App.css';
import About from './components/_About';
import Banner from './components/_Banner';
import Cart from './components/_Cart';
import Contact from './components/_Contact';
import Footer from './components/_Footer';
import Header from './components/_Header';
import Products from './components/_Products';
import Question from './components/_Question';
import Step from './components/_Step';
import { IProductsType } from './type';

function App() {
	const [products, setProducts] = React.useState<
		IProductsType[]
	>([]);

	React.useEffect(() => {
		let isChecked = true;
		if (isChecked) {
			const fetchData = async () => {
				const res = await apis.products.getProducts(0);
				setProducts(res);
			};

			fetchData();
		}

		return () => {
			isChecked = false;
		};
	}, []);
	return (
		<>
			<Header />
			<main className="main">
				<Banner />
				<About />
				<Step />
				<Products
					products={products}
					onHandleProducts={setProducts}
				/>
				<Question />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
