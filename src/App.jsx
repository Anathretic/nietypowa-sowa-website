import { lazy, Suspense } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { CookieBanner, Footer, HomeWrapper, Navbar } from './components';
import { SubpageLoader } from './components/Loader/Loader';
import { Aerograph, Contact, Gallery, Welcome, Offer, Motto } from './sections';
import { delaySubpageImport } from './helpers/delaySubpageImport';

const GallerySubpage = lazy(() => delaySubpageImport(() => import('./subpages/GallerySubpage/GallerySubpage'), 1000));
const PrivacyPolicy = lazy(() => delaySubpageImport(() => import('./subpages/PrivacyPolicy/PrivacyPolicy'), 1000));
const PageNotFound = lazy(() => delaySubpageImport(() => import('./subpages/PageNotFound/PageNotFound'), 1000));

const App = () => {
	const location = useLocation();

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
							<HomeWrapper>
								<Welcome />
								<Aerograph />
								<Offer />
								<Motto />
								<Gallery />
								<Contact />
							</HomeWrapper>
						}
					/>
				</Route>
				<Route
					path='/galeria-prac'
					element={
						<Suspense key={location.pathname} fallback={<SubpageLoader />}>
							<GallerySubpage />
						</Suspense>
					}
				/>
				<Route
					path='/polityka-prywatnosci'
					element={
						<Suspense key={location.pathname} fallback={<SubpageLoader />}>
							<PrivacyPolicy />
						</Suspense>
					}
				/>
				<Route
					path='*'
					element={
						<Suspense key={location.pathname} fallback={<SubpageLoader />}>
							<PageNotFound />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	);
};

export default App;
