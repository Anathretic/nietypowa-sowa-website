import { Outlet, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import {
	Aerograph,
	Contact,
	Gallery,
	GallerySubpage,
	Offer,
	PageNotFound,
	PrivacyPolicy,
	Quote,
	TermsOfUse,
} from './sections';
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
							<Route
								path='/'
								element={
									<main>
										<Aerograph />
										<Offer />
										<Quote />
										<Gallery />
										<Contact />
									</main>
								}
							/>
							<Route path='/galeria-prac' element={<GallerySubpage />} />
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
