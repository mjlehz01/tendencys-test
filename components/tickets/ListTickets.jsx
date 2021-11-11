import { useState } from "react";
import PropTypes from "prop-types";
//componets
import SearchBar from "@/tickets/SearchBar";
import ItemTicket from "@/tickets/ItemTicket";
import { UiListGroup, UiPlaceHolder } from "@/customBootstrap";

const ListTickets = ({ data }) => {
	const [filterList, setFilterList] = useState([]);
	console.log(data);

	const handleQuery = (r, q) => {
		let timeout = null;
		if (r === "status") {
			clearTimeout(timeout);
			const resultQuery = [];
			data.forEach((e, i) => {
				if (e.ticket_status_name.toLowerCase().indexOf(q) != -1) {
					resultQuery.push(i);
				}
			});

			resultQuery.length
				? (timeout = setTimeout(() => {
						setFilterList(resultQuery);
				  }, 150))
				: setFilterList([]);
		}

		if (r === "id") {
			clearTimeout(timeout);
			const resultQuery = [];
			data.forEach((e, i) => {
				let id = `${e.id}`;
				if (id.indexOf(q) != -1) {
					resultQuery.push(i);
				}
			});
			resultQuery.length
				? (timeout = setTimeout(() => {
						setFilterList(resultQuery);
				  }, 150))
				: setFilterList([]);
		}
	};

	return (
		<>
			<SearchBar
				params={["status", "id"]}
				onResultQuery={handleQuery}
				clear={() => setFilterList([])}
			/>
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
							<ItemTicket
								key={`${ticket.id}`}
								itemData={ticket}
								iterador={ticket.id}
								hidden={filterList.length && !filterList.includes(index)}
							/>
						))}
					</>
				)}
			</UiListGroup>
		</>
	);
};

ListTickets.propTypes = {};

export default ListTickets;
