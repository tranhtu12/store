import * as React from 'react';
import Cart from './_Cart';

interface INavProps {
	data: string[];
}

const Nav: React.FunctionComponent<INavProps> = (props) => {
	const { data } = props;
	const [isToogleShoppingCart, setIsToogleShoppingCart] = React.useState<boolean>(false);

	const handleChangeToogle = () => {
		setIsToogleShoppingCart(!isToogleShoppingCart);
	};

	return (
		<>
			<nav className="nav container">
				<a href="#" className="nav__logo">
					<i className="ri-leaf-line nav__logo-icon"></i> Plantex
				</a>

				<div className="nav__menu" id="nav-menu">
					<ul className="nav__list">
						{data.map((value, index) => (
							<li className="nav__item" key={index}>
								<a href="#home" className="nav__link">
									{value}
								</a>
							</li>
						))}
					</ul>

					<div className="nav__close" id="nav-close">
						<i className="ri-close-line"></i>
					</div>
				</div>

				<div className="nav__btns" onClick={handleChangeToogle}>
					<i className="ri-moon-line change-theme" id="theme-button"></i>
					<div className="nav__toggle" id="nav-toggle">
						<i className="ri-menu-line"></i>
					</div>
				</div>
				{isToogleShoppingCart && <Cart isStyle={isToogleShoppingCart} />}
			</nav>
		</>
	);
};

export default Nav;
