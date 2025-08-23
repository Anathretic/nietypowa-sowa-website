import { HashLink } from 'react-router-hash-link';

export const NavbarItem = ({ title, section, classProps, onClick, isScrolled, ...linkProps }) => {
	return (
		<li className={`navbar-item ${classProps}`}>
			<HashLink
				smooth
				to={section}
				className={`navbar-item-link ${isScrolled ? 'dark-hover' : 'pink-hover'}`}
				onClick={onClick}
				{...linkProps}>
				{title}
			</HashLink>
		</li>
	);
};
