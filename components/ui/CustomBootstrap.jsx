import styled from "styled-components";
import {
	Container,
	FormControl,
	Dropdown,
	Placeholder,
	ListGroup,
	Badge,
} from "react-bootstrap";

export const UiContainer = styled(Container)`
	padding: 15vh 2% 0 3%;
	height: 100vh;
`;

export const UiFormControl = styled(FormControl)``;

export const UiDropDownContainter = styled(Dropdown)`
	max-width: ${(props) => props.mw};
`;

export const UiDropDownToggle = styled(Dropdown.Toggle)`
	border-radius: 999px;
	background-color: var(--bs-custom-blue);
	min-width: 4rem;
	color: white;
	border-color: var(--bs-custom-blue);
`;

export const UiDropDownMenu = styled(Dropdown.Menu)`
	min-width: -webkit-fill-available;
	text-align: center;
`;

export const UiDropDownItem = styled(Dropdown.Item)`
	display: ${(props) => (props.tabIndex === 0 ? "none" : null)};
`;

export const UiListGroup = styled(ListGroup)`
	overflow-y: ${(props) => (props.overflow ? "scroll" : null)};
	height: calc(85vh - 2.375rem);
	justify-content: space-between;
	padding-top: 0.625rem;
	scroll-behavior: smooth;
`;

export const UiPlaceHolder = styled(Placeholder)`
	height: 21%;
	background-color: var(--bs-gray-400);
	border-radius: 0.75rem;
`;

export const UiListGroupItem = styled(ListGroup.Item)`
	border-radius: 0.5rem;
	padding: 1.5rem;
	margin-bottom: 1rem;
`;

export const UiBadge = styled(Badge)`
	background-color: ${(props) => props.bgCustom};
`;
