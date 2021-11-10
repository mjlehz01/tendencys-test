//components
import { Row, Col } from "react-bootstrap";
import { UiContainer } from "@/customBootstrap";
import { TitleH3, TitleH6 } from "@/ui/Text";

export default function Home() {
  return (
    <UiContainer>
      <Row>
        <Col md={4}>
          <TitleH3>Tickets</TitleH3>
          <TitleH6>Manange the diffrerent ticket options we have</TitleH6>
        </Col>
        <Col md={8}></Col>
      </Row>
    </UiContainer>
  );
}
