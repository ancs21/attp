import React from 'react';
import { HMR } from '@pwa/preset-react';
import { Link } from 'react-router-dom';
import style from './index.scss';

function Add(props) {
	return (
		<article className={ style.article }>
		
		</article>
	);
}

export default HMR(Add, module);
