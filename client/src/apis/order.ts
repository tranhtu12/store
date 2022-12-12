import { IOrderType } from '../type';

export const getOrderProducts = async (): Promise<IOrderType[] | undefined> => {
	return [
		{
			id: 1,
			quantity: 5,
			product: {
				id: 1,
				title: 'Cacti Plant_1',
				price: 1000,
				img: 'https://meta.vn/Data/image/2019/05/11/mu-bao-hiem-royal-m01-tron.jpg',
			},
		},
		{
			id: 2,
			quantity: 10,
			product: {
				id: 1,
				title: 'Cacti Plant_1',
				price: 1000,
				img: 'https://meta.vn/Data/image/2019/05/11/mu-bao-hiem-royal-m01-tron.jpg',
			},
		},
	];
};
