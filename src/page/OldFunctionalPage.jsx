import React from 'react';
import { withContext } from '../context';

export const OldFunctionalPage = withContext((props) => {
	console.log(props);
	return <div>OldFunctionalPage</div>;
});
