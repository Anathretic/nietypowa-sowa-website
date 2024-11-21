import { HashLink } from 'react-router-hash-link';
import { SlArrowDown } from "react-icons/sl";

const HeroImage = () => {
	return (
		<section className='relative flex w-full justify-center items-center max-md:pt-[50px] pt-[40px] min-h-[100vh] bg-cover bg-center hero-bg text-white'>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-[3rem] rsm:text-[4rem] sm:text-[7rem] lg:text-[10rem] lg:pb-16'>Nietypowa Sowa</h1>
			</div>
			<HashLink smooth to='/#aerograf' className='hidden lg:block'>
				<div className='hero-bg-arrow'>
					<SlArrowDown className='header-bg-arrow-icon' fontSize={60} />
				</div>
			</HashLink>
		</section>
	);
};

export default HeroImage;
