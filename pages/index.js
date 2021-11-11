import { useState, useEffect } from "react";
//components
import { Row, Col } from "react-bootstrap";
import { UiContainer } from "@/customBootstrap";
import { TitleH3, TitleH6 } from "@/ui/Text";
import ListTickets from "@/tickets/ListTickets";

//api
import { getAllTicketsApi } from "/api/tickets";

export default function Home() {
  const [ticketsList, setTicketsList] = useState([]);

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
        <Col md={4}>
          <TitleH3>Tickets</TitleH3>
          <TitleH6>Manange the diffrerent ticket options we have</TitleH6>
        </Col>
        <Col md={8} className="h-100">
          <ListTickets data={ticketsList} />
        </Col>
      </Row>
    </UiContainer>
  );
}
