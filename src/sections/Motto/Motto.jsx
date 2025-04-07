import { FaPencilAlt } from 'react-icons/fa';
import { GiAerosol, GiEasel, GiPaintBrush } from 'react-icons/gi';

import './styles/styles.css';

const Motto = () => {
	return (
		<section className='motto'>
			<div className='motto-container'>
				<h2 className='motto-maintext'>&quot;Sztuka nie ma wyglądać ładnie. Ma sprawić, że coś poczujesz!&quot;</h2>
				<span className='motto-subtext'>~ Rainbow Rowell</span>
				<GiAerosol className='motto-icon motto-icon--first' fontSize={78} />
				<FaPencilAlt className='motto-icon motto-icon--second' fontSize={72} />
				<GiPaintBrush className='motto-icon motto-icon--third' fontSize={68} />
				<GiEasel className='motto-icon motto-icon--fourth' fontSize={120} />
			</div>
			<div className='motto-special-block motto-special-block--left' />
			<div className='motto-special-block motto-special-block--right' />
		</section>
	);
};

export default Motto;
