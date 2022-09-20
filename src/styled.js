import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Dropdown = styled(motion.div)`
	position: absolute;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	width: ${(props) => props.w};
	height: ${(props) => props.h};
	background-color: white;
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 5px grey;
	border: 1px solid white;
	border-radius: 10px;
	align-items: center;
	padding: 0.5em 0;
	gap: 1em;
	user-select: none;
	z-index: 50;
`;

export const MenuItem = styled.div`
	text-align: center;
	width: 100%;
	cursor: pointer;
	font-size: 1.5rem;
	background-color: white;
	transition: all 0.1s;

	&:hover {
		background-color: purple;
		color: white;
	}
`;

export const Avatar = styled.button`
	width: 3em;
	border-radius: 50%;
	background-color: #075e55;
	color: white;
	padding: 0.8em 0;
	font-size: 1.1rem;
`;
