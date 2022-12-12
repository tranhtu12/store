import { IProductsType } from '../type';

export const getProducts = async (
	_limmit: number
): Promise<IProductsType[]> => {
	return [
		{
			id: 1,
			title: 'Cacti Plant_1',
			price: 1999,
			img: 'https://meta.vn/Data/image/2019/05/11/mu-bao-hiem-royal-m01-tron.jpg',
		},
		{
			id: 2,
			title: 'Cacti Plant_2',
			price: 1999,
			img: 'https://meta.vn/Data/image/2019/05/11/mu-bao-hiem-royal-m01-tron.jpg',
		},
		{
			id: 3,
			title: 'Cacti Plant_3',
			price: 1999,
			img: 'https://meta.vn/Data/image/2019/05/11/mu-bao-hiem-royal-m01-tron.jpg',
		},
		{
			id: 4,
			title: 'Cacti Plant_4',
			price: 1999,
			img: 'https://meta.vn/Data/image/2019/05/11/mu-bao-hiem-royal-m01-tron.jpg',
		},
		{
			id: 5,
			title: 'Cacti Plant_5',
			price: 1999,
			img: 'https://meta.vn/Data/image/2019/05/11/mu-bao-hiem-royal-m01-tron.jpg',
		},
	];
};
