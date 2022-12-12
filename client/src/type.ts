export interface IProductsType {
	id: number;
	title: string;
	price: number;
	img: string;
}

export interface IOrderType {
	total: number;
	data: IProductsType[];
}
