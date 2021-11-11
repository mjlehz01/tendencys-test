import PropTypes from "prop-types";

//componets
import { UiListGroupItem, UiBadge } from "@/customBootstrap";
import { TextP } from "@/ui/Text";

const TICKET_TYPE_ID = {
	8: "Delay in delivery",
	9: "Payment not reflected",
	12: "Shipment without movement",
};

const ItemTicket = ({ itemData }) => {
	const {
		id,
		created_at,
		ticket_type_id,
		comments,
		data,
		ticket_status_color,
		ticket_status_name,
	} = itemData;

	const dataConvert = (obj) => {
		const dataParse = JSON.parse(obj);
		const traN = dataParse.tracking_number ?? null;
		if (traN) {
			return `Traking No: ${traN}`;
		}
		const payM = dataParse?.payment_method_description;
		if (payM) {
			return `Payment method: ${
				dataParse.payment_method_name === "bank_transfer"
					? payM
					: "Credit or Debit Card"
			}`;
		}
		console.log(dataParse);
	};

	return (
		<UiListGroupItem>
			<div className="d-flex flex-wrap align-items-end">
				<TextP fs="1.5rem" fw="700" className="me-3">
					#{id}
				</TextP>
				<TextP fs="1.25rem" fw="500" className="me-4">
					{TICKET_TYPE_ID[ticket_type_id] ?? null}
				</TextP>
				<TextP fs="1rem" fw="300" className="opacity-75">
					&#40; {created_at} &#41;
				</TextP>
			</div>
			<TextP fw="0.875rem" fw="500" className="w-100">
				comments:
				<br />
				{comments ? comments : <br />}
			</TextP>
			<TextP>{dataConvert(data)}</TextP>
			<UiBadge bg="none" className="mt-2 text-capitalize fw-bold" bgCustom={ticket_status_color}>
				{ticket_status_name}
			</UiBadge>
		</UiListGroupItem>
	);
};

ItemTicket.propTypes = {};

export default ItemTicket;