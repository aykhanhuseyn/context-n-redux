import { CommonConfigContext } from './context';
import { ClassPage, FuctionalPage, OldFunctionalPage } from './page';

function App() {
	return (
		<CommonConfigContext>
			<div className='App'>Hello Context and Redux</div>
			<ClassPage />
			<FuctionalPage />
			<OldFunctionalPage />
		</CommonConfigContext>
	);
}

export default App;
