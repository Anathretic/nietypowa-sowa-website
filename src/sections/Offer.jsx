import OfferHeader from '../images/offer-section/offer-header.png';
import OfferTapeImage from '../images/quote-and-offer-tape-image.svg';

const Offer = () => {
	return (
		<section
			id='nasze-uslugi'
			className='relative flex w-full justify-center items-center max-md:pt-[50px] pt-[40px] text-white'>
			<div className='w-full flex flex-col items-center lg:p-20 pt-20 pb-12 px-4'>
				<img
					className='absolute max-rsm:top-[-60px] max-sm:top-[-65px] max-lg:top-[-100px] max-2xl:top-[-130px] top-[-175px] w-full max-h-[250px] z-0'
					src={OfferTapeImage}
					alt=''
				/>
				<div className='w-full max-w-[1400px] flex flex-1 justify-center items-center xl:items-start flex-col mf:ml-2'>
					<h2 className='w-full max-w-[500px] 2xl:max-w-[625px] text-4xl sm:text-5xl mf:text-6xl py-1 max-rsm:text-left text-center xl:text-left z-10'>
						<img className='w-full' src={OfferHeader} alt='Tytuł sekcji z opisem wykonywanych usług' />
					</h2>
				</div>
				<div className='w-full max-w-[1400px] flex justify-center items-center flex-col xl:flex-row xl:justify-between xl:ml-10 pt-20 pb-32 xl:pb-48 text-base mf:text-lg'>
					<p className='w-full max-w-[450px]'>
						Oferujemy profesjonalne lakierowanie wszelakich kasków i motocykli przy użyciu techniki aerografu, która
						pozwala na tworzenie oryginalnych kompozycji. Nasze usługi obejmują odświeżenie wyglądu, jak i wykonanie
						unikalnych grafik dopasowanych do Twojego stylu. Każde zamówienie jest realizowane indywidualnie, więc masz
						realny wpływ na cały proces - konsultacja z Tobą będzie na kilku etapach! A Nasza praca, która odbywa się na
						najwyższej jakości farbach i lakierach zapewni trwałość oraz odporność na warunki atmosferyczne i
						uszkodzenia :)
					</p>
					<ul className='w-full h-full max-xl:mt-8 max-w-[400px] flex flex-col justify-between items-start list-disc leading-[50px] z-20 sm:pb-8 2xl:pb-0'>
						<li className='max-xl:ml-12'>Profesjonalizm</li>
						<li className='max-xl:ml-12'>Kreatywność</li>
						<li className='max-xl:ml-12'>Oryginalność</li>
						<li className='max-xl:ml-12'>Wysoka jakość materiałów</li>
						<li className='max-xl:ml-12'>Odporność na uszkodzenia</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Offer;
