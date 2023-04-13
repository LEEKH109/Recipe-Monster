import React from 'react';
import styled, { keyframes } from 'styled-components';
import RisingButton from './RisingButton';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Container>
					<RisingButton />
					<RisingButton />
				</Container>
			</header>
		</div>
	);
}

const Container = styled.div`
	width: 100%;
	height: 1000px;
	display: flex;
	justify-content: center;
	align-content: center;
`;
export default App;
