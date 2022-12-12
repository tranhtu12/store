import * as React from 'react';
import { IOrderType } from '../type';
import * as apis from './../apis/apis';
import './../style/_StyleCart.css';
import CartItem from './_CartItem';
interface ICartProps {
	isStyle: boolean;
}

const Cart: React.FunctionComponent<ICartProps> = (props) => {
	const { isStyle } = props;
	const [products, setProducts] = React.useState<IOrderType[] | undefined>([]);
	const [sum, setSum] = React.useState<number>(0);

	const totalIncome = (array: any) => {
		let index = 0;
		array.forEach((element: IOrderType) => {
			index += element.quantity * element.product.price;
		});
		setSum(index);
	};

	React.useEffect(() => {
		let isChecked = true;
		if (isChecked) {
			const fetchData = async () => {
				const res = await apis.order.getOrderProducts();
				totalIncome(res);
				setProducts(res);
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
					products.map((value: IOrderType) => {
						return (
							<CartItem
								key={value.id}
								product={value.product}
								_quantity={value.quantity}
								onHandleCheckSum={setSum}
								sum={sum}
							/>
						);
					})}
				{sum && <div className="total-price">${sum}</div>}
				<button>Payment</button>
			</div>
		</>
	);
};

export default Cart;
