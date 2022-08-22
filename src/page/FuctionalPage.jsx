import React, { useContext } from 'react';
import { Button, Row, Typography } from 'antd';
import { CommonConfig } from '../context';

export const FuctionalPage = () => {
	const { theme, changeTheme } = useContext(CommonConfig);

	return (
		<Row>
			<Typography.Title>hello func</Typography.Title>
			<Typography.Text>this is {theme}</Typography.Text>
			<Button
				type='default'
				onClick={() => {
					changeTheme();
				}}
			>
				chasb
			</Button>
		</Row>
	);
};
