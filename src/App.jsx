import { Outlet, Route, Routes } from 'react-router-dom';
import { Aerograph, Contact, Gallery, HeroImage, Offer, Quote } from './sections';
import { GallerySubpage, PrivacyPolicy, PageNotFound } from './subpages';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { CookieBaner } from './components/CookieBaner';

const App = () => {
	return (
		<div className='min-h-screen'>
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
									<HeroImage />
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
						<Route path='*' element={<PageNotFound />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
