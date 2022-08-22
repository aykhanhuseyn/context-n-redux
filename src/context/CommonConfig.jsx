import React from 'react';

export const CommonConfig = React.createContext({});

export const CommonConfigContext = ({ children }) => {
	// light => dark
	const [theme, setTheme] = React.useState('light');

	const changeTheme = React.useCallback((props) => {
		// TODO: make this function secure
		// changeTheme('qirmizi')
		// if (props || props !== 'light' || props !== 'dark') return;

		setTheme((prevTheme) => (props ?? prevTheme === 'dark' ? 'light' : 'dark'));
	}, []);

	return (
		<CommonConfig.Provider value={{ theme, changeTheme }}>
			{children}
		</CommonConfig.Provider>
	);
};

export const withContext = (Child) => (props) =>
	(
		<CommonConfig.Consumer>
			{(context) => <Child {...props} {...context} />}
		</CommonConfig.Consumer>
	);

// const Home = ({context}) => <div>home {context.theme}</div>
// export default withContext(Home);
