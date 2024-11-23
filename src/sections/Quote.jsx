import QuoteTapeImage from '../images/quote-and-offer-tape-image.svg';
import PaintSplatterImage from '../images/paint-splatter-image.png';

const Quote = () => {
	return (
		<section className='relative flex flex-col justify-center items-center w-full'>
			<img
				className='absolute right-0 2xl:right-16 z-10 max-rsm:top-[-160px] max-sm:top-[-200px] top-[-210px] max-md:top-[-230px] 2xl:max-w-[700px] max-rsm:max-w-[300px] max-sm:max-w-[400px] sm:max-w-[500px]'
				src={PaintSplatterImage}
				alt=''
			/>
			<img
				className='absolute max-rsm:top-[-60px] max-sm:top-[-85px] top-[-175px] w-full max-h-[250px] bg-repeat z-0'
				src={QuoteTapeImage}
				alt=''
			/>
			<div className='flex flex-col justify-center items-center text-center w-full sm:pt-12 pt-28 pb-24 xl:py-48 z-20'>
				<p className='text-white text-3xl md:text-5xl w-2/3 2xl:w-1/3'>
				Sztuka nie ma wyglądać ładnie. Ma sprawić, że coś poczujesz!
				</p>
				<p className='my-6 text-white italic'>~ Rainbow Rowell</p>
			</div>
		</section>
	);
};

export default Quote;
