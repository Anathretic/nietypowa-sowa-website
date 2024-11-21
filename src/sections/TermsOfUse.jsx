import { MailToButton } from '../components/MailToButton';

const TermsOfUse = () => {
	const termsBoxStyle = 'p-3 mt-5 max-[360px]:w-full w-9/12 md:w-2/3 lg:w-1/2';

	return (
		<main>
			<section className='flex justify-center items-center flex-col min-h-[83vh] md:min-h-[90vh] p-5 text-white text-sm md:text-base pt-[120px]'>
				<div className={termsBoxStyle}>
					<p className='mb-3 font-bold'>1. Administrator danych</p>
					<p className='font-light'>
						Administratorem Państwa danych jest Magdalena Sowa, właściciel strony Nietypowa Sowa.
					</p>
				</div>
				<div className={termsBoxStyle}>
					<p className='mb-3 font-bold'>2. Kiedy zbieram Twoje dane?</p>
					<p className='font-light'>
						Dane użytkownika (takie jak adres e-mail) są gromadzone wyłącznie podczas korzystania z formularza
						kontaktowego.
					</p>
				</div>
				<div className={termsBoxStyle}>
					<p className='mb-3 font-bold'>3. Jak wygląda przepływ danych?</p>
					<p className='font-light'>
						Twoje dane zbierane poprzez formularz kontaktowy są przetwarzane wyłącznie w celach kontaktowych. Nikomu ich
						nie udostępniam, ani nie sprzedaję.
					</p>
					<p className='font-light mt-2'>Korzystanie z formularza kontaktowego jest dobrowolne.</p>
				</div>
				<div className={termsBoxStyle}>
					<p className='mb-3 font-bold'>4. Pozostałe informacje</p>
					<p className='font-light'>
						W razie jakichkolwiek pytań proszę o kontakt na mój adres mailowy:{' '}
						<MailToButton
							className='transition duration-300 hover:text-[#c80c59]'
							label='nietypowasowa@gmail.com'
							mailto='mailto:nietypowasowa@gmail.com'
						/>
					</p>
				</div>
				<div className={termsBoxStyle}>
					<p className='mb-3 font-bold'>5. Projekt strony</p>
					<p className='font-light'>
						Rozplanowanie i makieta:{' '}
						<a
							className='hover:text-[#c80c59] transition duration-300'
							href='https://github.com/KamiRaLsr'
							target='_blank'
							rel='noreferrer'>
							Kamila Lipiec
						</a>
					</p>
					<p className='font-light'>
						Kod, tekst oraz małe poprawki graficzne:{' '}
						<a
							className='hover:text-[#c80c59] transition duration-300'
							href='https://konrad-wojtylo.com/'
							target='_blank'
							rel='noreferrer'>
							Konrad Wojtyło
						</a>
					</p>
				</div>
			</section>
		</main>
	);
};

export default TermsOfUse;
