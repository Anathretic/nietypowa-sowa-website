import OfferHeader from '../images/offer-header.png';
import QuoteTapeImage from '../images/quote-tape-image.png';

const Offer = () => {
	return (
		<section
			id='nasze-uslugi'
			className='relative flex w-full justify-center items-center max-md:pt-[50px] pt-[40px] text-white'>
			<img
				className='absolute max-rsm:top-[-60px] max-sm:top-[-85px] top-[-175px] w-full max-h-[400px] bg-repeat z-0'
				src={QuoteTapeImage}
				alt=''
			/>
			<div className='w-full flex flex-col items-center md:p-20 py-12 px-4'>
				<div className='w-full max-w-[1400px] flex flex-1 justify-center items-center xl:items-start flex-col mf:ml-2'>
					<h2 className='w-full max-w-[800px] text-4xl sm:text-5xl mf:text-6xl text-white py-1 max-rsm:text-left text-center xl:text-left z-10'>
						<img className='w-full' src={OfferHeader} alt='Tytuł sekcji z usługami' />
					</h2>
				</div>
				<div className='w-full max-w-[1400px] flex justify-center items-center flex-col xl:flex-row xl:justify-between xl:ml-12 pt-20 pb-32 xl:pb-48 text-base mf:text-lg'>
					<p className='w-full max-w-[450px]'>
						Morbi consectetur neque diam, sit amet ultrices elit imperdiet vitae. Mauris lacinia risus ex. Integer ante
						libero, rutrum in finibus sed, cursus lobortis arcu. Suspendisse ac arcu vehicula, vestibulum purus non,
						tempus ligula. Maecenas ut mi eu quam finibus dapibus non vel risus. Nullam arcu ipsum, tristique quis
						laoreet id, ultrices in ante. Maecenas lobortis porta lorem, quis vestibulum lectus dapibus eu.
					</p>
					<ul className='w-full h-full max-xl:mt-8 max-w-[400px] flex flex-col justify-between items-start list-disc leading-[50px] z-20'>
						<li className='max-xl:ml-12'>Usługa #1</li>
						<li className='max-xl:ml-12'>Usługa #2</li>
						<li className='max-xl:ml-12'>Usługa #3</li>
						<li className='max-xl:ml-12'>Usługa #4</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Offer;
