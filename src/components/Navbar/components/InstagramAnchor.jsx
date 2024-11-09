import { BsInstagram } from 'react-icons/bs';

export const InstagramAnchor = ({ liStyles }) => {
	return (
		<li className={`${liStyles}`}>
			<a
				className='cursor-pointer p-1 mr-2 hover:text-[#072028] transition duration-300'
				href='https://www.instagram.com/nietypowa_sowa/'
				target='_blank'
				rel='noreferrer'>
				<BsInstagram fontSize={22} />
			</a>
		</li>
	);
};
