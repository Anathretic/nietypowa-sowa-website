import { Link } from 'react-router-dom';
import { ContactForm } from '../../components/Forms/ContactForm';
import { scrollToTop } from '../../utils/scrollToTopUtils';
import { FiMail, FiPhone } from 'react-icons/fi';
import { GiOwl } from 'react-icons/gi';

import './styles/styles.css';

const Contact = () => {
	return (
		<section className='contact' id='kontakt'>
			<div className='contact-container'>
				<div className='contact-title-box'>
					<h2 className='contact-title'>Kontakt</h2>
					<p className='contact-title-subtext'>
						Gotowy na spotkanie ze sztuką? Świetnie! Uzupełnij formularz o swoje dane oraz przybliżoną wizję projektu i
						zacznijmy współpracę!
					</p>
					<p className='contact-title-subtext'>
						<span>Pamiętaj, że moja pracownia znajduje się w okolicy Zamościa w województwie lubelskim!</span>
					</p>
					<p className='contact-title-subtext'>
						Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z obowiązującą{' '}
						<Link to='/polityka-prywatnosci' onClick={scrollToTop}>
							polityką prywatności.
						</Link>
					</p>
					<ul className='contact-title-info-box'>
						<li>
							<div>
								<FiMail />
							</div>
							<div>
								<p>E-mail:</p>
								<a href='mailto:nietypowasowa@gmail.com'>nietypowasowa@gmail.com</a>
							</div>
						</li>
						<li>
							<div>
								<FiPhone />
							</div>
							<div>
								<p>Telefon:</p>
								<a href='tel:+48577738995'>+48 577 738 995</a>
							</div>
						</li>
					</ul>
					<GiOwl className='contact-title-icon contact-title-icon--first' fontSize={70} />
					<GiOwl className='contact-title-icon contact-title-icon--second' fontSize={66} />
					<GiOwl className='contact-title-icon contact-title-icon--third' fontSize={54} />
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
