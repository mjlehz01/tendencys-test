import { useState, useEffect } from "react";

//components
import { Row, Col } from "react-bootstrap";
import { UiContainer } from "@/customBootstrap";
import { TitleH3, TitleH6 } from "@/ui/Text";
import ListTickets from "@/tickets/ListTickets";
import DetailTicket from "@/tickets/DetailTicket";

//api
import { getAllTicketsApi, getTicketApi } from "/api/tickets";

export default function Home() {
  const [ticketsList, setTicketsList] = useState([]);
  const [ticket, setTicket] = useState({});

  const getTicket = async (id) => {
    const response = await getTicketApi(id);
    setTicket(response[0]);
  };

  useEffect(() => {
    (async () => {
      const result = await getAllTicketsApi();
      setTicketsList(result);
    })();

    return () => {
      setTicketsList([]);
    };
  }, []);

  return (
    <UiContainer fluid>
      <Row className="h-100">
        <Col md={4} className="h-100 overflow-auto">
          <TitleH3>Tickets</TitleH3>
          <TitleH6>Manange the diffrerent ticket options we have</TitleH6>
          <DetailTicket ticketData={ticket} />
        </Col>
        <Col md={8} className="h-100">
          <ListTickets data={ticketsList} onShowModal={(e) => getTicket(e)} />
        </Col>
      </Row>
    </UiContainer>
  );
}
