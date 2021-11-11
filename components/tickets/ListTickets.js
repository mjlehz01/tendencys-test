import { useState } from "react";
import PropTypes from "prop-types";
//componets
import SearchBar from "@/tickets/SearchBar";

const ListTickets = ({ data }) => {
	const [filterList, setFilterList] = useState(-0);

	console.log(data);

	return (
		<>
			<SearchBar params={["status", "id"]} />
		</>
	);
};

ListTickets.propTypes = {};

export default ListTickets;
