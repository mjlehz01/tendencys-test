import styled from "styled-components";
import { Container, FormControl, Dropdown } from "react-bootstrap";

export const UiContainer = styled(Container)`
	margin-top: 15vh;
`;

export const UiFormControl = styled(FormControl)``;

export const UiDropDownContainter = styled(Dropdown)`
	max-width: ${(props) => props.mw};
`;

export const UiDropDownToggle = styled(Dropdown.Toggle)`
	border-radius: 999px;
	background-color: var(--bs-custom-blue);
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
