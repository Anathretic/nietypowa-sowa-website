import { GiPencilBrush, GiBlackBook, GiLaptop, GiHealthNormal } from 'react-icons/gi';

import './styles/styles.css';

const Aerograph = () => {
	return (
		<section id='aerograf' className='aerograph'>
			<h2 className='aerograph-title'>Aerograf</h2>
			<div className='aerograph-text-content'>
				<div className='aerograph-text-content-box'>
					<GiPencilBrush fontSize={56} color='c80c59' />
					<h3>Sztuka i precyzja</h3>
					<p>
						Choć aerograf kojarzy się głównie z malarstwem, to jest to również niezwykle precyzyjne narzędzie
						wykorzystywane w modelarstwie, kosmetologii czy nawet w produkcji ozdób cukierniczych. Dzięki swojej
						dokładności pozwala na tworzenie detali na poziomie mikroskalowym, który jest nieosiągalny dla tradycyjnych
						pędzli.
					</p>
				</div>
				<div className='aerograph-text-content-box'>
					<GiBlackBook fontSize={56} color='c80c59' />
					<h3>Historia od XIX wieku</h3>
					<p>
						Pierwsze próby użycia aerografu miały miejsce już w 1876 roku, kiedy to wynaleziono urządzenie, które
						pozwalało na precyzyjne nanoszenie farby w sposób podobny do dzisiejszych aerografów. To narzędzie było
						pierwotnie wykorzystywane do malowania portretów, ale szybko znalazło swoje miejsce w innych dziedzinach, na
						przykład reklamie.
					</p>
				</div>
				<div className='aerograph-text-content-box'>
					<GiLaptop fontSize={56} color='c80c59' />
					<h3>Połączenie z cyfrową sztuką</h3>
					<p>
						Nowoczesne aerografy, dzięki precyzyjnej regulacji przepływu powietrza i farby, stały się jednym z
						ulubionych narzędzi artystów cyfrowych, którzy tworzą cyfrowe obrazy przypominające tradycyjne malowanie
						aerografem. Technika ta pozwala na uzyskanie efektów przejść tonalnych i detali, które są charakterystyczne
						dla aerografii tradycyjnej.
					</p>
				</div>
				<div className='aerograph-text-content-box'>
					<GiHealthNormal fontSize={56} color='c80c59' />
					<h3>Zastosowanie w medycynie</h3>
					<p>
						Aerografy znalazły zastosowanie w medycynie, szczególnie w dermatologii i kosmetologii, gdzie są używane do
						aplikacji leczenia skóry, a także w procesach takich jak mikropigmentacja brwi. Precyzyjne kontrolowanie
						ilości pigmentu pozwala na osiąganie naturalnych efektów, takich jak subtelne poprawki na skórze bez ryzyka
						nierówności.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Aerograph;
