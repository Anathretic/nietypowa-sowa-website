import { HashLink } from 'react-router-hash-link';
import { SlArrowDown } from 'react-icons/sl';

import './styles/styles.css';

const Welcome = () => {
	return (
		<section className='welcome'>
			<div className='welcome-container'>
				<h1 className='welcome-title'>Nietypowa Sowa</h1>
			</div>
			<HashLink smooth to='/#aerograf' className='welcome-button'>
				<div className='welcome-arrow'>
					<SlArrowDown className='welcome-arrow-icon' />
				</div>
			</HashLink>
		</section>
	);
};

export default Welcome;
