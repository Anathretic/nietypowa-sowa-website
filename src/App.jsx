import { Outlet, Route, Routes } from 'react-router-dom';
import { CookieBanner, Footer, Navbar } from './components';
import { Aerograph, Contact, Gallery, Welcome, Offer, Quote } from './sections';
import { GallerySubpage, PrivacyPolicy, PageNotFound } from './subpages';

const App = () => {
	return (
		<div className='min-h-screen'>
			<Routes>
				<Route
					element={
						<>
							<Outlet />
							<CookieBanner />
						</>
					}>
					<Route
						element={
							<>
								<Outlet />
								<Footer />
							</>
						}>
						<Route
							element={
								<>
									<Navbar />
									<Outlet />
								</>
							}>
							<Route
								path='/'
								element={
									<main>
										<Welcome />
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
						</Route>
						<Route path='*' element={<PageNotFound />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
