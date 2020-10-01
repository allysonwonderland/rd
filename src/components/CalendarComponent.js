import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function Calendar(props) {
	return (
		<div className="container main">
			<div className="row">
				<div className="col">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Calendar</BreadcrumbItem>
					</Breadcrumb>
					<h2>Calendar</h2>
					<hr />
				</div>
			</div>
			<div className="row row-content">
				<div className="col">
					<iframe
						src="https://calendar.google.com/calendar/embed?src=rainbowrappy%40gmail.com&ctz=America%2FNew_York&mode=Agenda"
						className="calendar"
						width="100%"
						height="600px"
						frameborder="0"
						scrolling="no"
						title="PSO2 Calendar"
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default Calendar;
