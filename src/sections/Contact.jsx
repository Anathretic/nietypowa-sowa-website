import { ContactForm } from '../components/Forms/ContactForm';
import { MailToButton } from '../components/MailToButton';
import ContactHeader from '../images/contact-section/contact-header.png';

const Contact = () => {
	return (
		<section id='kontakt' className='flex w-full justify-center items-center max-md:pt-[50px] pt-[40px]'>
			<div className='flex flex-col items-center md:p-20 py-12 px-4'>
				<div className='flex flex-1 justify-center items-center flex-col mf:ml-2'>
					<h2 className='w-full max-w-[500px] 2xl:max-w-[725px] text-4xl sm:text-5xl mf:text-6xl py-1 max-rsm:text-left text-center mf:text-left z-10'>
						<img src={ContactHeader} alt='Tytuł sekcji z formularzem kontaktowym' />
					</h2>
					<div className='mf:text-lg text-center mt-5 text-white font-light text-base italic'>
						<br />
						<p className='mb-2'>
							Wypełnij poniższy formularz, a ja na pewno się odezwę i dogadamy wszystkie szczegóły!
						</p>
						<br />
						<p className='mb-2'>A jeśli chcesz skontaktować się w inny sposób skorzystaj z danych poniżej:</p>
						<br />
						<p className='mb-2'>
							<span className='pr-[10px]'>⚬</span>
							<MailToButton label='nietypowasowa@gmail.com' mailto='mailto:nietypowasowa@gmail.com' />
							<span className='pl-[10px]'>⚬</span>
						</p>
						<br />
						<p className='mb-2'>
							<span className='pr-[10px]'>⚬</span>
							+48 577 738 995
							<span className='pl-[10px]'>⚬</span>
						</p>
						<br />
						<p className='mb-2'>
							Pamiętaj, że moja pracownia znajduje się w okolicy{' '}
							<span className='not-italic underline underline-offset-4'>Zamościa!</span>
						</p>
					</div>
				</div>
				<div className='flex flex-col flex-1 items-center justify-start w-full max-w-[1000px] mf:mt-4 mt-10'>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
