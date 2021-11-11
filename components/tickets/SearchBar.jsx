import { useState } from "react";
import {
	UiFormControl,
	UiDropDownContainter,
	UiDropDownToggle,
	UiDropDownMenu,
	UiDropDownItem,
} from "@/customBootstrap";

import Box from "@/ui/Box";

const SearchBar = ({ params, onResultQuery }) => {
	const [typeQuery, setTypeQuery] = useState(params);

	const handleChange = (e) => {
		const q = e.target.value;
		console.log(q);
	};
	const handleSelect = (i) => {
		console.log(i);
	};

	return (
		<div className="d-flex w-100 g-0">
			<Box width="5%" className="me-2" />
			<UiDropDownContainter mw="12%" >
				<UiDropDownToggle
					id="change-search"
					className="text-capitalize px-3"
					variant
				>
					{params[0]}
				</UiDropDownToggle>
				<UiDropDownMenu>
					{params.map((item, index) => (
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
			<Box width="5%" className="me-0 ms-auto" />
		</div>
	);
};

export default SearchBar;
