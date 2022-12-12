import * as React from 'react';
import { IProductsType } from '../type';

interface ICartItemProps {
	_quantity: number;
	product: IProductsType;
	sum: number;
	onHandleCheckSum: React.Dispatch<React.SetStateAction<number>>;
}

const CartItem: React.FunctionComponent<ICartItemProps> = (props) => {
	const { product, sum, _quantity, onHandleCheckSum } = props;
	const [quantity, setQuantity] = React.useState<number>(_quantity);

	const handleChangeQuantity = (action: boolean, price: number) => {
		switch (action) {
			case true:
				onHandleCheckSum(sum + price);
				setQuantity(quantity + 1);
				break;
			case false:
				onHandleCheckSum(sum - price);
				setQuantity(quantity - 1);
				break;
			default:
				break;
		}
	};

	// React.useEffect(() => {
	// 	let isChecked = true;
	// 	if (isChecked) {
	// 		onHandleCheckSum(sum + product.price * quantity);
	// 	}
	// 	return () => {
	// 		isChecked = false;
	// 	};
	// }, [product]);

	return (
		<>
			<div className="item">
				<div className="buttons">
					<i className="ri-close-line"></i>
				</div>

				<div className="image">
					<img src={product.img} alt="" />
				</div>

				<div className="description">
					<span>{product.title}</span>
					{/* <span>Bball High</span>
					<span>White</span> */}
				</div>

				<div className="quantity">
					<button
						className="plus-btn"
						type="button"
						name="button"
						onClick={() => handleChangeQuantity(false, product.price)}
					>
						-
					</button>
					<input type="text" name="name" value={quantity}></input>
					<button
						className="minus-btn"
						type="button"
						name="button"
						onClick={() => handleChangeQuantity(true, product.price)}
					>
						+
					</button>
				</div>
			</div>
		</>
	);
};

export default CartItem;
