import { Outlet, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Aerograph, Contact, Gallery, Offer, PageNotFound, PrivacyPolicy, TermsOfUse } from './sections';
import { Footer } from './components/Footer/Footer';
import { CookieBaner } from './components/CookieBaner';

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='main-bg-color'>
				<Routes>
					<Route
						element={
							<>
								<Outlet />
								<CookieBaner />
							</>
						}>
						<Route
							element={
								<>
									<Navbar />
									<Outlet />
									<Footer />
								</>
							}>
							<Route path='/' element={<Aerograph />} />
							<Route path='/nasze-uslugi' element={<Offer />} />
							<Route path='/galeria' element={<Gallery />} />
							<Route path='/kontakt' element={<Contact />} />
							<Route path='/polityka-prywatnosci' element={<PrivacyPolicy />} />
							<Route path='/warunki-uzytkowania' element={<TermsOfUse />} />
							<Route path='*' element={<PageNotFound />} />
						</Route>
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
