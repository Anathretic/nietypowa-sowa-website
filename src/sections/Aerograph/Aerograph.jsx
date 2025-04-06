import { FaCalendarAlt } from 'react-icons/fa';
import { GiCoinsPile } from 'react-icons/gi';
import { HiMiniCurrencyDollar } from 'react-icons/hi2';
import { TbPackages } from 'react-icons/tb';

import './styles/styles.css';

const Aerograph = () => {
	return (
		<section id='aerograf' className='aerograph'>
			<h2 className='aerograph-title'>Aerograf</h2>
			<div className='aerograph-text-content'>
				<div className='aerograph-text-content-box'>
					<HiMiniCurrencyDollar fontSize={56} color='c80c59' />
					<h3>Efekt 3D</h3>
					<p>
						Zwykła powierzchnia ożywa, a kompozycje nabierają trójwymiarowego charakteru. Stworzone iluzje głębi
						sprawiają, że wszystko wydaje się wystawać i pulsować życiem.
					</p>
				</div>
				<div className='aerograph-text-content-box'>
					<FaCalendarAlt fontSize={56} color='c80c59' />
					<h3>Wtapianie elementów</h3>
					<p>
						Malarstwo, które subtelnie łączy się z tłem, tworząc wrażenie, że obraz jest częścią samego przedmiotu, a
						granice między nimi znikają w niewidoczny sposób i cała praca stanowi jedność.
					</p>
				</div>
				<div className='aerograph-text-content-box'>
					<GiCoinsPile fontSize={56} color='c80c59' />
					<h3>Nietypowe powierzchnie</h3>
					<p>
						Tworzenie unikalnych projektów na trudnych powierzchniach – od skóry po tworzywa sztuczne – które zyskują
						charakter i głębię, niemożliwe do osiągnięcia przy tradycyjnych metodach.
					</p>
				</div>
				<div className='aerograph-text-content-box'>
					<TbPackages fontSize={56} color='c80c59' />
					<h3>Sztuka żyjąca z ciałem</h3>
					<p>
						Projekty, które zyskują życie z każdym ruchem – odzież, akcesoria czy obuwie, które stają się integralną
						częścią właściciela, oddychając jego stylem i osobowością.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Aerograph;
