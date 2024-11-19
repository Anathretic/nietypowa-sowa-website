import AerographHeader from '../images/aerograph-section/aerograph-header.png';
import AerographSectionImage from '../images/aerograph-section/aerograph-section-image.jpg';
import PaintSplatterImage from '../images/paint-splatter-image.png';

const Aerograph = () => {
	return (
		<section
			id='aerograf'
			className='relative flex w-full justify-center items-center max-md:pt-[50px] pt-[40px] text-white'>
			<div className='w-full flex flex-col items-center md:p-20 py-12 px-4'>
				<div className='w-full max-w-[1400px] flex flex-1 justify-center items-center xl:items-end flex-col mf:ml-2'>
					<h2 className='w-full max-w-[800px] text-4xl sm:text-5xl mf:text-6xl text-white py-1 max-rsm:text-left text-center xl:text-left z-10'>
						<img className='w-full' src={AerographHeader} alt='Tytuł sekcji z opisem czym jest aerograf' />
					</h2>
				</div>
				<div className='w-full max-w-[1400px] flex justify-center items-center xl:justify-end text-right xl:mr-2 pt-20 pb-20 sm:pb-32 xl:pb-48 text-base mf:text-lg'>
					<div className='hidden 2xl:block relative w-full h-full max-xl:mt-8 max-w-[400px] flex flex-col justify-between items-start list-disc leading-[50px]'>
						<img
							className='absolute rounded-lg max-w-[450px] left-[-33rem] top-[-24rem] z-10 shadow-xl shadow-[#111111]'
							src={AerographSectionImage}
							alt='Obraz przedstawiający przyrządy niezbędne do wykonywania aerografu'
						/>
						<img className='absolute right-[20rem] z-0 bottom-[-10rem]' src={PaintSplatterImage} alt='' />
						<img className='absolute right-[42rem] z-20 bottom-[12rem]' src={PaintSplatterImage} alt='' />
					</div>
					<p className='w-full max-w-[450px]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula in justo nec tincidunt. Nam sed
						aliquam augue. In hac habitasse platea dictumst. Nam ullamcorper ex at elementum pretium. Aliquam molestie
						posuere suscipit. Integer finibus egestas eros, eget ultricies risus placerat ut. Duis finibus dignissim
						velit at tristique.
					</p>
					<img
						className='hidden xl:block 2xl:hidden absolute right-[50rem] z-20 bottom-[12rem]'
						src={PaintSplatterImage}
						alt=''
					/>
				</div>
			</div>
		</section>
	);
};

export default Aerograph;
