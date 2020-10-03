import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	Col,
	Row,
	Container,
	Card,
	CardHeader,
	CardBody
} from "reactstrap";
import { Link } from "react-router-dom";

function About(props) {
	return (
		<Container className="main">
			<Row>
				<Col>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>About</BreadcrumbItem>
					</Breadcrumb>
					<h2>About Us</h2>
					<hr />
				</Col>
			</Row>
			<Row className="row-content">
				<Col className="col-sm-6">					
						We present a curated database of the best campsites in the vast
						woods and backcountry of the World Wide Web Wilderness. We increase
						access to adventure for the public while promoting safe and
						respectful use of resources. The expert wilderness trekkers on our
						staff personally verify each campsite to make sure that they are up
						to our standards. We also present a platform for campers to share
						reviews on campsites they have visited with each other.
				</Col>
				<Col className="col-sm-6">
					<Card>
						<CardHeader className="text-white">
							<h3>Facts At a Glance</h3>
						</CardHeader>
						<CardBody>
							<dl className="row">
								<dt className="col-6">Founded</dt>
								<dd className="col-6">February 3, 2016</dd>
								<dt className="col-6">No. of Campsites in 2019</dt>
								<dd className="col-6">563</dd>
								<dt className="col-6">No. of Reviews in 2019</dt>
								<dd className="col-6">4388</dd>
								<dt className="col-6">Employees</dt>
								<dd className="col-6">42</dd>
							</dl>
						</CardBody>
					</Card>
				</Col>

			</Row>
			
		</Container>
	);
}

export default About;
