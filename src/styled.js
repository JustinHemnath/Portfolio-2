import styled from 'styled-components';

export const Dropdown = styled.div`
	position: absolute;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	width: ${(props) => props.w};
	height: ${(props) => props.h};
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 5px grey;
	border-radius: 5px;
	align-items: center;
	padding: 1em 0;
	gap: 1em;
	user-select: none;
	z-index: 50;
`;

export const MenuItem = styled.div`
	text-align: center;
	width: 100%;
	cursor: pointer;
	font-size: 1.5rem;

	&:hover {
		border-left: 3px solid purple;
	}
`;

export const Avatar = styled.button`
	width: 3em;
	border-radius: 50%;
	background-color: #74389c;
	color: white;
	padding: 0.8em 0;
	margin: 0 1em;
	font-size: 1.1rem;
`;
