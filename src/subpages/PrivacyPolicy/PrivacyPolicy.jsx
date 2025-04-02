import { Link } from 'react-router-dom';
import { MailToButton } from '../../components/MailToButton';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import './styles/styles.css';

const PrivacyPolicy = () => {
	return (
		<section className='privacy-policy'>
			<div className='privacy-policy-container'>
				<h1 className='privacy-policy-title'>Polityka Prywatności</h1>
				<div className='privacy-policy-box'>
					<h2>1. Informacje ogólne</h2>
					<p>
						Dziękuję za odwiedzenie mojej strony internetowej! Zależy mi na ochronie prywatności użytkowników, dlatego
						dokładam wszelkich starań, aby Twoje dane były przetwarzane w sposób bezpieczny i zgodny z obowiązującymi
						przepisami prawa. Poniżej przedstawiam szczegóły dotyczące zbierania, przetwarzania oraz ochrony Twoich
						danych osobowych.
					</p>
				</div>
				<div className='privacy-policy-box'>
					<h2>2. Administrator Danych Osobowych</h2>
					<p>
						Administratorem danych osobowych jest Magdalena Sowa - właściciel marki Nietypowa Sowa. Możliwy kontakt pod
						adresem e-mail: <MailToButton label='nietypowasowa@gmail.com' mailto='mailto:nietypowasowa@gmail.com' />
					</p>
				</div>
				<div className='privacy-policy-box'>
					<h2>3. Jakie dane zbieram?</h2>
					<p>Podczas korzystania ze strony, mogę zbierać następujące dane osobowe:</p>
					<ul>
						<li>Imię i nazwisko</li>
						<li>Adres e-mail</li>
						<li>Numer telefonu</li>
						<li>Treść zapytania lub wiadomości wysłanej za pośrednictwem formularza kontaktowego</li>
					</ul>
				</div>
				<div className='privacy-policy-box'>
					<h2>4. Cel przetwarzania danych</h2>
					<p>Twoje dane osobowe zbieram w celu:</p>
					<ul>
						<li>Odpowiedzi na zapytania przesłane za pośrednictwem formularza kontaktowego</li>
						<li>Utrzymania kontaktu z użytkownikami</li>
						<li>Świadczenia usług związanych z działalnością artystyczną</li>
					</ul>
				</div>
				<div className='privacy-policy-box'>
					<h2>5. Podstawy prawne przetwarzania danych</h2>
					<p>
						Przetwarzam Twoje dane osobowe na podstawie Twojej zgody (art. 6 ust. 1 lit. a RODO) wyrażonej przez
						przesłanie zapytania lub wiadomości za pośrednictwem formularza kontaktowego. Mogę również przetwarzać Twoje
						dane w celu wykonania umowy, jeżeli zapytanie dotyczy wykonania usług artystycznych (art. 6 ust. 1 lit. b
						RODO).
					</p>
				</div>
				<div className='privacy-policy-box'>
					<h2>6. Jak długo przechowuję Twoje dane?</h2>
					<p>
						Dane osobowe przechowuję przez okres niezbędny do udzielenia odpowiedzi na Twoje zapytanie oraz przez czas
						niezbędny do realizacji umowy (jeśli dojdzie do jej zawarcia). Po tym okresie dane mogą być przechowywane,
						jeżeli obowiązują przepisy prawa nakładające obowiązek ich przechowywania.
					</p>
				</div>
				<div className='privacy-policy-box'>
					<h2>7. Odbiorcy danych osobowych</h2>
					<p>Twoje dane osobowe mogą zostać udostępnione wyłącznie:</p>
					<ul className='privacy-policy-cookie-box-ul'>
						<li>Osobom i podmiotom, które pomagają w realizacji usług (np. dostawcy usług hostingowych)</li>
						<li>Organom ścigania lub innym organom publicznym, jeśli wymaga tego prawo</li>
					</ul>
				</div>
				<div className='privacy-policy-box'>
					<h2>8. Twoje prawa związane z danymi osobowymi</h2>
					<p>Masz prawo do:</p>
					<ul>
						<li>Dostępu do swoich danych osobowych</li>
						<li>Sprostowania danych, jeśli są one nieprawidłowe lub niekompletne</li>
						<li>
							Usunięcia danych (prawo do bycia zapomnianym), jeśli nie ma podstaw prawnych do ich dalszego przetwarzania
						</li>
						<li>Ograniczenia przetwarzania danych w określonych przypadkach</li>
						<li>Przenoszenia danych do innego administratora</li>
						<li>
							Wycofania zgody na przetwarzanie danych w dowolnym momencie (w przypadku, gdy przetwarzanie odbywa się na
							podstawie zgody)
						</li>
					</ul>
					<p style={{ paddingTop: '0.75em' }}>
						Aby skorzystać z tych praw, proszę o kontakt pod adresem:{' '}
						<MailToButton label='nietypowasowa@gmail.com' mailto='mailto:nietypowasowa@gmail.com' />.
					</p>
				</div>
				<div className='privacy-policy-box'>
					<h2>9. Bezpieczeństwo danych</h2>
					<p>
						Podejmuję wszelkie środki techniczne i organizacyjne, aby zapewnić bezpieczeństwo Twoich danych osobowych, w
						tym zabezpieczenie przed dostępem osób nieuprawnionych oraz przed nieautoryzowaną zmianą, ujawnieniem lub
						zniszczeniem danych.
					</p>
				</div>
				<div className='privacy-policy-box'>
					<h2>10. Cookies</h2>
					<p>
						Używam plików cookies (ciasteczek) w celu poprawy jakości użytkownia strony internetowej. Pliki cookies mogą
						być wykorzystywane do zbierania anonimowych informacji o użytkownikach, takich jak preferencje językowe,
						rodzaj urządzenia, itp. Możesz zarządzać ustawieniami cookies w swojej przeglądarce internetowej.
					</p>
				</div>
				<div className='privacy-policy-box'>
					<h2>11. Google reCAPTCHA</h2>
					<p>
						Aby zapewnić bezpieczeństwo i zapobiec nadużyciom, na mojej stronie korzystam z usługi Google reCAPTCHA,
						która służy do weryfikacji, czy formularze są wypełniane przez prawdziwych użytkowników, a nie przez
						automatyczne boty.
					</p>
					<p style={{ paddingTop: '1em' }}>
						Google reCAPTCHA zbiera i przetwarza dane, takie jak adres IP, dane dotyczące urządzenia, a także sposób, w
						jaki użytkownik korzysta z mojej strony internetowej. Informacje te są wykorzystywane przez Google do
						analizy interakcji z formularzami i poprawy jakości usługi reCAPTCHA.
					</p>
					<p style={{ paddingTop: '1em' }}>
						Dalsze informacje na temat przetwarzania danych przez Google reCAPTCHA można znaleźć w Polityce Prywatności
						Google: https://policies.google.com/privacy oraz w Warunkach Usługi reCAPTCHA:
						https://www.google.com/recaptcha/
					</p>
					<p style={{ paddingTop: '1em' }}>
						Korzystając z formularza kontaktowego, użytkownik wyraża zgodę na przetwarzanie danych przez Google w celu
						weryfikacji użytkownika za pomocą reCAPTCHA.
					</p>
				</div>
				<div className='privacy-policy-box'>
					<h2>12. Zmiany w polityce prywatności</h2>
					<p>
						Zastrzegam sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. O wszelkich zmianach będę
						informować na stronie internetowej.
					</p>
				</div>
				<div className='privacy-policy-box'>
					<p>Wsparcie merytoryczne, kodowanie oraz wykonanie:</p>
					<a href='https://www.linkedin.com/in/konrad-wojtylo' target='_blank' rel='noreferrer'>
						Konrad Wojtyło
					</a>
				</div>
				<Link to='/' className='privacy-policy-btn' onClick={scrollToTop} aria-label='Powrót na stronę główną'>
					Powrót
				</Link>
			</div>
		</section>
	);
};

export default PrivacyPolicy;
