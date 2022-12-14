import * as React from 'react';
import { IProductsType } from '../type';
import ArticleProduct from './_ArticleProduct';

interface IProductsProps {
	products: IProductsType[];
	onHandleProducts: React.Dispatch<React.SetStateAction<IProductsType[]>>;
}

const Products: React.FunctionComponent<IProductsProps> = (props) => {
	const { products, onHandleProducts } = props;
	const [isCheckedOrderProduct, setIsCheckedOrderProduct] = React.useState<boolean>(false);
	const [orderProduct, setOrerProduct] = React.useState<IProductsType>();

	const handleOrderProduct = (product: IProductsType) => {
		setOrerProduct(product);
		setIsCheckedOrderProduct(!isCheckedOrderProduct);
	};

	React.useEffect(() => {
		let isChecked = true;
		if (isChecked) {
			console.log('🚀 ~ file: _Products.tsx:23 ~ React.useEffect ~ order', orderProduct);
		}

		return () => {
			isChecked = false;
		};
	}, [isCheckedOrderProduct]);
	return (
		<>
			<section className="product section container" id="products">
				<h2 className="section__title-center">
					Check out our <br></br> products
				</h2>

				<p className="product__description">
					Here are some selected plants from our showroom, all are in excellent shape and has a long life
					span. Buy and enjoy best quality.
				</p>

				<div className="product__container grid">
					{products &&
						products.map((product: IProductsType) => (
							<ArticleProduct product={product} key={product.id} onHandleProduct={handleOrderProduct} />
						))}
				</div>
			</section>
		</>
	);
};

export default Products;
