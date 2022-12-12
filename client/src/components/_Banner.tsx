import * as React from 'react';
import BannerSocial from './_BannerSocial';

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = (
	props
) => {
	return (
		<>
			<section className="home" id="home">
				<div className="home__container container grid">
					<img
						src="assets/img/home.png"
						alt=""
						className="home__img"
					></img>

					<div className="home__data">
						<h1 className="home__title">
							Plants will make <br></br> your life better
						</h1>
						<p className="home__description">
							Create incredible plant design for your offices or
							apastaments. Add fresness to your new ideas.
						</p>
						<a href="#about" className="button button--flex">
							Explore{' '}
							<i className="ri-arrow-right-down-line button__icon"></i>
						</a>
					</div>
					<BannerSocial />
				</div>
			</section>
		</>
	);
};

export default Banner;
