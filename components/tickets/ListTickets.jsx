import { useState } from "react";
import PropTypes from "prop-types";
//componets
import SearchBar from "@/tickets/SearchBar";
import ItemTicket from "@/tickets/ItemTicket";
import { UiListGroup, UiPlaceHolder } from "@/customBootstrap";

const ListTickets = ({ data }) => {
	const [filterList, setFilterList] = useState(-0);

	console.log(data);
	const handleQuery = (r, q) => {
		console.log(r, q);
	};

	return (
		<>
			<SearchBar params={["status", "id"]} onResultQuery={handleQuery} />
			<UiListGroup overflow={data.length}>
				{!data.length ? (
					<>
						{[0, 1, 3, 4].map((lo) => (
							<UiPlaceHolder
								animation="wave"
								className="w-100"
								key={`loading-${lo}`}
							/>
						))}
					</>
				) : (
					<>
						{data.map((ticket, index) => (
							<ItemTicket key={`${ticket.id}`} itemData={ticket} />
						))}
					</>
				)}
			</UiListGroup>
		</>
	);
};

ListTickets.propTypes = {};

export default ListTickets;
