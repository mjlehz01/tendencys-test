import { useState } from "react";
import {
	UiFormControl,
	UiDropDownContainter,
	UiDropDownToggle,
	UiDropDownMenu,
	UiDropDownItem,
} from "@/customBootstrap";

import Box from "@/ui/Box";

const SearchBar = ({ params, onResultQuery, clear }) => {
	const [typeQuery, setTypeQuery] = useState(params);
	const [changeText, setChangeText] = useState(false);

	const handleChange = (e) => {
		const q = e.target.value;
		if (q.length > 2) {
			onResultQuery(typeQuery[0], q);
		} else {
			clear();
		}
	};
	const handleSelect = (i) => {
		const typeQueryTemp = [...typeQuery];
		typeQueryTemp.splice(i, 1);
		typeQueryTemp.unshift(typeQuery[i]);

		setTypeQuery(typeQueryTemp);
	};

	const handleText = () => {
		setChangeText(true);
		setTimeout(() => setChangeText(false), 1000);
	};

	return (
		<div className="d-flex w-100 g-0">
			<Box width="7.5%" className="me-2" />
			<UiDropDownContainter mw="12%" onSelect={handleText}>
				<UiDropDownToggle
					id="change-search"
					className={`text-capitalize px-3 ${
						changeText && "animation-fade-in"
					}`}
					variant
				>
					{typeQuery[0]}
				</UiDropDownToggle>
				<UiDropDownMenu>
					{typeQuery.map((item, index) => (
						<UiDropDownItem
							onClick={() => handleSelect(index)}
							key={`select-q${index}`}
							tabIndex={index}
						>
							{item}
						</UiDropDownItem>
					))}
				</UiDropDownMenu>
			</UiDropDownContainter>

			<UiFormControl
				type="search"
				placeholder="Search for"
				className="w-25 ms-2 rounded-pill py-0"
				aria-label="Search"
				onChange={handleChange}
			/>
			<Box width="15%" className="me-0 ms-auto" />
		</div>
	);
};

export default SearchBar;
