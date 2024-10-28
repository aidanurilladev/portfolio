import { FC } from 'react';
import scss from './Footer.module.scss';

const Footer: FC = () => {
	return (
		<>
			<footer className={scss.Footer}>
				<div className="container">
					<div className={scss.content}>
						<p>NKA with Passion by Rometheme © 2023 All rights reserved</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;