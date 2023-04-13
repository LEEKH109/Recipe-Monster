import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const RisingComponent: React.FC = () => {
	const [isStretched, setIsStretched] = useState<boolean>(false);

	const handleClick = () => {
		setIsStretched(!isStretched);
	};

	return (
		<Container>
			<RisingButton isStretched={isStretched} onClick={handleClick}>
				<InfoText>{isStretched ? 'LONG' : 'SHORT'}</InfoText>
			</RisingButton>
		</Container>
	);
};

export default RisingComponent;

const Container = styled.div`
	width: 100px;
	height: 400px;
	position: relative;
	overflow: hidden;
	margin: 10px;
`;

const tongueStretch = keyframes`
  from {
    height: 35%;
  }
  to {
    height: 100%;
  }
`;

const tongueShrink = keyframes`
  from {
    height: 100%;
  }
  to {
    height: 35%;
  }
`;

const RisingButton = styled.div<{ isStretched: boolean }>`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 20%;
	background-color: red;
	cursor: pointer;
	border-radius: 30px 30px 0 0;
	animation: ${({ isStretched }) => (isStretched ? tongueStretch : tongueShrink)} 0.5s forwards;
`;

const InfoText = styled.p`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: 0;
`;
