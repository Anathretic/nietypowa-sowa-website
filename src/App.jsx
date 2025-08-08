import { lazy, Suspense, useRef } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { CookieBanner, Footer, HomeWrapper, Navbar } from './components';
import { SubpageLoader } from './components/Loader/Loader';
import { Aerograph, Contact, Gallery, Welcome, Offer, Motto } from './sections';
import { delaySubpageImport } from './helpers/delaySubpageImport';

const PrivacyPolicy = lazy(() => delaySubpageImport(() => import('./subpages/PrivacyPolicy/PrivacyPolicy'), 1000));
const PageNotFound = lazy(() => delaySubpageImport(() => import('./subpages/PageNotFound/PageNotFound'), 1000));

const App = () => {
	const location = useLocation();
	const formRef = useRef();

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
								<Offer formRef={formRef} />
								<Motto />
								<Gallery />
								<Contact formRef={formRef} />
							</HomeWrapper>
						}
					/>
				</Route>
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
