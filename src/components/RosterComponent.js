import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	Col,
	Row,
	Container,
} from "reactstrap";
import { Link } from "react-router-dom";

function Roster() {
	return (
		<Container className="main">
			<Row>
				<Col>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Roster</BreadcrumbItem>
					</Breadcrumb>
					<h2>Roster</h2>
					<hr />
				</Col>
			</Row>
		</Container>
	);
}

export default Roster;
