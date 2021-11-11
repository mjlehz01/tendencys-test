import styled from "styled-components";

export const TitleH3 = styled.h3`
	color: var(--bs-gray-800);
	font-weight: 700;
	font-size: 2rem;
`;

export const TitleH6 = styled.h6`
	color: var(--bs-gray-600);
	font-size: 0.95rem;
`;

export const TextP = styled.p`
	font-size: ${(props) => props.fs};
	font-weight: ${(props) => props?.fw};
	margin: 0;
`;
