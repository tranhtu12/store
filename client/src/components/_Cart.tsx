import * as React from 'react';
import { IProductsType } from '../type';
import './../style/_StyleCart.css';
import * as apis from './../apis/apis';
import CartItem from './_CartItem';
interface ICartProps {
	isStyle: boolean;
}

const Cart: React.FunctionComponent<ICartProps> = (props) => {
	const { isStyle } = props;
	const [products, setProducts] = React.useState<IProductsType[] | undefined>([]);
	const [sum, setSum] = React.useState<number>(0);

	const totalIncome = (array: any) => {
		return array.reduce((total: any, value: any) => {
			const newSnum = total.price + value.price;
			setSum(newSnum);
		});
	};
	React.useEffect(() => {
		let isChecked = true;
		if (isChecked) {
			const fetchData = async () => {
				const res = await apis.order.getOrderProducts();
				totalIncome(res?.data);
				setProducts(res?.data);
			};

			fetchData();
		}

		return () => {
			isChecked = false;
		};
	}, [isStyle]);
	return (
		<>
			<div className={isStyle ? 'going-to-right shopping-cart ' : ' shopping-cart'}>
				<div></div>
				<div className="title">Shopping Bag</div>
				{products &&
					products.map((product: IProductsType) => {
						return <CartItem key={product.id} product={product} onHandleCheckSum={setSum} sum={sum} />;
					})}
				{sum && <div className="total-price">${sum}</div>}
				<button>Payment</button>
			</div>
		</>
	);
};

export default Cart;
