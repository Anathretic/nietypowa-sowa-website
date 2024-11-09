import { NavLink } from 'react-router-dom';

export const NavbarItem = ({ title, section, classProps, onClick, ...linkProps }) => {
	return (
		<li
			className={`mx-2 mf:mx-4 cursor-pointer capitalize hover:text-[#072028] transition duration-300 ${classProps} z-10`}>
			<NavLink to={section} className='p-2' onClick={onClick} {...linkProps}>
				{title}
			</NavLink>
		</li>
	);
};
