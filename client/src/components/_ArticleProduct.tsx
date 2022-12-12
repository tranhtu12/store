import * as React from 'react';
import { IProductsType } from '../type';

interface IArticleProductProps {
	product: IProductsType;
	onHandleProduct: (product: IProductsType) => void;
}

const ArticleProduct: React.FunctionComponent<IArticleProductProps> = (props) => {
	const { product, onHandleProduct } = props;
	return (
		<>
			<article className="product__card">
				<div className="product__circle"></div>

				<img src={product.img} alt="" className="product__img"></img>

				<h3 className="product__title">{product.title}</h3>
				<span className="product__price">${product.price}</span>

				<button className="button--flex product__button" onClick={() => onHandleProduct(product)}>
					<i className="ri-shopping-bag-line"></i>
				</button>
			</article>
		</>
	);
};

export default ArticleProduct;
