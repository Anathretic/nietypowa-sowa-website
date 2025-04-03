import { Outlet, Route, Routes } from 'react-router-dom';
import { CookieBanner, Footer, Navbar } from './components';
import { Aerograph, Contact, Gallery, Welcome, Offer, Motto } from './sections';
import { GallerySubpage, PrivacyPolicy, PageNotFound } from './subpages';

const App = () => {
	return (
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
							<Navbar />
							<Outlet />
							<Footer />
						</>
					}>
					<Route
						path='/'
						element={
							<main>
								<Welcome />
								<Aerograph />
								<Offer />
								<Motto />
								<Gallery />
								<Contact />
							</main>
						}
					/>
				</Route>
				<Route path='/galeria-prac' element={<GallerySubpage />} />
				<Route path='/polityka-prywatnosci' element={<PrivacyPolicy />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
