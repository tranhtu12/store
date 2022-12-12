import * as React from 'react';

interface IBannerSocialProps {}

const BannerSocial: React.FunctionComponent<
	IBannerSocialProps
> = (props) => {
	return (
		<>
			<div className="home__social">
				<span className="home__social-follow">Follow Us</span>

				<div className="home__social-links">
					<a
						href="https://www.facebook.com/"
						target="_blank"
						className="home__social-link"
					>
						<i className="ri-facebook-fill"></i>
					</a>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						className="home__social-link"
					>
						<i className="ri-instagram-line"></i>
					</a>
					<a
						href="https://twitter.com/"
						target="_blank"
						className="home__social-link"
					>
						<i className="ri-twitter-fill"></i>
					</a>
				</div>
			</div>
		</>
	);
};

export default BannerSocial;
