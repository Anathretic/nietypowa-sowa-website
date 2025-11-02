import { lazy, Suspense } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { delaySubpageImport } from '../shared/helpers/delaySubpageImport';
import CookieBanner from '../shared/components/CookieBanner/CookieBanner';
import Navbar from '../shared/components/Navbar/Navbar';
import Footer from '../shared/components/Footer/Footer';
import { SubpageLoader } from '../shared/components/Loader/Loader';
import { Home } from '../features/Home/Home';

const PrivacyPolicy = lazy(() => delaySubpageImport(() => import('../features/PrivacyPolicy/PrivacyPolicy'), 1000));
const PageNotFound = lazy(() => delaySubpageImport(() => import('../features/PageNotFound/PageNotFound'), 1000));

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
					<Route path='/' element={<Home />} />
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
