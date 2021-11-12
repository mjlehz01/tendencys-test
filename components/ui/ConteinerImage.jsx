import styled from "styled-components";

const ConteinerImage = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	overflow: hidden;
	border-radius: 0.5rem;
	position: relative;
	margin:0 auto 2rem auto;
`;

export default ConteinerImage;
