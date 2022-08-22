import React from 'react';
import { Button, Row, Col, Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions';

export const Home = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter);

	return (
		<Row>
			<Typography.Title>Home</Typography.Title>
			<Typography.Text>count: {count}</Typography.Text>
			<Row>
				<Col span={8}>
					<Button
						type='primary'
						onClick={() => {
							dispatch(increment());
						}}
					>
						increment
					</Button>
				</Col>
				<Col span={8}>
					<Button
						onClick={() => {
							dispatch(decrement());
						}}
					>
						decrement
					</Button>
				</Col>
				<Col span={8}>
					<Button
						type='ghost'
						onClick={() => {
							dispatch(reset());
						}}
					>
						reset
					</Button>
				</Col>
			</Row>
		</Row>
	);
};
