import React from "react";
import { Breadcrumb, BreadcrumbItem, Row, Container, Col } from "reactstrap";
import { Link } from "react-router-dom";

const CalendarEmbed = () => (
	<iframe
		src="https://calendar.google.com/calendar/embed?src=rainbowrappy%40gmail.com&ctz=America%2FNew_York&mode=Agenda"
		className="calendar"
		width="100%"
		height="600px"
		frameborder="0"
		scrolling="no"
		title="PSO2 Calendar"
	></iframe>
);

function Calendar(props) {
	return (
		<Container className="main">
			<Row>
				<Col>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Calendar</BreadcrumbItem>
					</Breadcrumb>
					<h2>Calendar</h2>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<CalendarEmbed />
				</Col>
			</Row>
		</Container>
	);
}

export default Calendar;
