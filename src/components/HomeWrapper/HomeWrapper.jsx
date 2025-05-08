import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const HomeWrapper = ({ children }) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<>
			<Helmet>
				<title>Aerograf - Lakiernictwo - Sztuka | Nietypowa Sowa</title>
				<meta
					name='description'
					content='Twój kask jest po prostu zwyczajny? Bak motocykla prosi się o dodatkowe kolory? Napisz, a coś na to poradzę! Oferuję profesjonalne malowanie aerografem na zamówienie.'
				/>
				<meta
					name='keywords'
					content='airbrush, aerograf, lakiernictwo, rysowanie aerografem, malowanie aerografem, dzieło artystyczne, lakierowanie motocykli, airbrush na zamówienie, custom airbrush, aerograf na odzieży, artysta airbrush, airbrush graffiti, dekoracja aerografem, sztuka aerografowa, technika airbrush, malarstwo aerografowe, odnowa kasków'
				/>
				<meta property='og:title' content='Aerograf - Lakiernictwo - Sztuka | Nietypowa Sowa' />
				<meta
					property='og:description'
					content='Chcesz, aby Twój kask lub motocykl zyskały unikalny wygląd? Skontaktuj się ze mną i zamów usługe na miarę swoich potrzeb!'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://nietypowa-sowa.pl' />
				<link rel='canonical' href='https://nietypowa-sowa.pl' />
			</Helmet>
			<main>{children}</main>
		</>
	);
};

export default HomeWrapper;
