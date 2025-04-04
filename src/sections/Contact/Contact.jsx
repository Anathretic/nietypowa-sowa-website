import { Link } from 'react-router-dom';
import { ContactForm } from '../../components/Forms/ContactForm';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import './styles/styles.css';

const Contact = () => {
	return (
		<section className='contact' id='kontakt'>
			<div className='contact-container'>
				<div className='contact-title-box'>
					<h2 className='contact-title'>Kontakt</h2>
					<p className='contact-title-subtext'>
						Gotowy na spotkanie ze sztuką? Świetnie! Ale jeśli Twoją głowę męczy jakieś pytanie skorzystaj z formularza
						kontaktowego lub zadzwoń na poniższy numer!
					</p>
					<p className='contact-title-subtext'>
						<span>Pamiętaj, że moja pracownia znajduje się w okolicy Zamościa!</span>
					</p>
					<p className='contact-title-subtext'>
						Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z obowiązującą{' '}
						<Link to='/polityka-prywatnosci' onClick={scrollToTop}>
							polityką prywatności.
						</Link>
					</p>
					<ul className='contact-title-info-box'>
						<li>
							<p>E-mail:</p>
							<p>nietypowasowa@gmail.com</p>
						</li>
						<li>
							<p>Telefon:</p>
							<p>+48 577 738 995</p>
						</li>
					</ul>
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
