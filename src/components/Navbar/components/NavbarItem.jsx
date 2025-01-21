import { HashLink } from 'react-router-hash-link';

export const NavbarItem = ({ title, section, classProps, isScrolled, onClick, ...linkProps }) => {
	return (
		<li
			className={`mx-2 mf:mx-4 cursor-pointer capitalize ${
				isScrolled ? 'md:hover:text-[#072028]' : 'md:hover:text-[#c80c59]'
			} transition duration-300 ${classProps} z-10`}>
			<HashLink smooth to={section} className='p-2' onClick={onClick} {...linkProps}>
				{title}
			</HashLink>
		</li>
	);
};
