import * as React from 'react';
import Nav from './_Nav';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	const data = ['Home', 'About', 'Products'];
	return (
		<>
			<header className="header" id="header">
				<Nav data={data} />
			</header>
		</>
	);
};

export default Header;
