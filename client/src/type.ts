export interface IProductsType {
	id: number;
	title: string;
	price: number;
	img: string;
}

export interface IOrderType {
	id: number;
	quantity: number;
	product: IProductsType;
}
