import React from 'react';
import { Row, Typography, Button } from 'antd';
import { CommonConfig } from '../context';

export class ClassPage extends React.Component {
	static contextType = CommonConfig;

	render() {
		return (
			<Row>
				<Typography.Title level={2}>this is calss component</Typography.Title>
				<Typography.Text>this is theme: {this.context.theme}</Typography.Text>
				<Button
					type='primary'
					onClick={() => {
						this.context.changeTheme();
					}}
				>
					change theme
				</Button>
			</Row>
		);
	}
}

// static contextType = CommonConfig === ClassPage.contextType = CommonConfig;
