import { useMediaQuery } from 'react-responsive';
import { BsInstagram } from 'react-icons/bs';

export const InstagramAnchor = ({ liStyles, isScrolled }) => {
	const isDesktop = useMediaQuery({ query: '(min-width: 1536px)' });

	return (
		<li className={`${liStyles} flex items-center justify-center`}>
			<a
				className={`cursor-pointer p-2 ${
					isScrolled ? 'hover:text-[#072028]' : 'hover:text-[#c80c59]'
				} transition duration-300`}
				href='https://www.instagram.com/nietypowa_sowa/'
				target='_blank'
				rel='noreferrer'>
				<BsInstagram fontSize={isDesktop ? 24 : 22} />
			</a>
		</li>
	);
};
