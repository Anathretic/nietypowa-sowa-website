import { useCallback } from 'react';
import { HashLink } from 'react-router-hash-link';

export const NavbarItem = ({ title, section, classProps, onClick, isScrolled, ...linkProps }) => {
	const handleClick = useCallback(() => {
		if (onClick) {
			onClick();
		}
	}, [onClick]);

	return (
		<li className={`navbar-item ${classProps}`}>
			<HashLink
				smooth
				to={section}
				className={`navbar-item-link ${isScrolled ? 'dark-hover' : 'pink-hover'}`}
				onClick={handleClick}
				{...linkProps}>
				{title}
			</HashLink>
		</li>
	);
};
