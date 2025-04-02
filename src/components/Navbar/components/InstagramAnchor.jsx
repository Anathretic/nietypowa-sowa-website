import { useMediaQuery } from 'react-responsive';
import { BsInstagram } from 'react-icons/bs';

export const InstagramAnchor = ({ isScrolled }) => {
	const isDesktop = useMediaQuery({ query: '(min-width: 1536px)' });

	return (
		<li className='navbar-special-icon'>
			<a
				className={`navbar-special-anchor ${isScrolled ? 'dark-hover' : 'pink-hover'}`}
				href='https://www.instagram.com/nietypowa_sowa/'
				target='_blank'
				rel='noreferrer'>
				<BsInstagram fontSize={isDesktop ? 24 : 22} />
			</a>
		</li>
	);
};
