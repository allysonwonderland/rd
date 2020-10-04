import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	Col,
	Row,
	Container,
	Card,
	CardHeader,
	CardBody,
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis
					in ligula aliquet laoreet id a tellus. Vestibulum blandit ex turpis,
					ut imperdiet dolor rutrum ut. Phasellus tincidunt hendrerit diam, in
					tincidunt erat pulvinar vitae. Nunc rutrum lorem nunc, in tincidunt
					felis vulputate congue. Vivamus bibendum mauris et mi ornare, nec
					volutpat purus lacinia. Ut sagittis feugiat sollicitudin. Aliquam
					aliquet ligula in ligula vehicula ultrices. Cras mollis mauris eu
					sollicitudin varius. Pellentesque vulputate elementum turpis, et
					ullamcorper diam viverra a. Donec nulla sapien, aliquam sit amet
					blandit id, maximus bibendum erat. Phasellus pulvinar ex nec libero
					dapibus, ut consectetur arcu hendrerit. Pellentesque habitant morbi
					tristique senectus et netus et malesuada fames ac turpis egestas.
					Donec mauris purus, malesuada sit amet maximus vitae, tempor porta
					nisi. Pellentesque porta, nunc ut sagittis aliquam, tortor lorem
					feugiat lacus, a posuere nisi nunc consequat tortor. Maecenas
					convallis quam nec lacus convallis fringilla. In sodales vulputate
					ipsum ac rhoncus. Morbi id diam sed magna ornare bibendum ac non nunc.
					Donec viverra nisl ac elit vehicula, in fermentum nisl vestibulum.
					Nunc id bibendum nibh. Integer ultrices, lacus eget facilisis
					vehicula, magna lacus consequat nisl, luctus sagittis felis nisl eu
					neque. Duis ipsum neque, tincidunt sed felis blandit, rhoncus
					convallis dui. In vel est tincidunt, rutrum est at, vestibulum erat.
					Nullam at hendrerit magna, id ullamcorper ipsum. Nulla id diam lorem.
					Curabitur rutrum efficitur arcu vel auctor. Sed mollis interdum lacus,
					ut lobortis nisi congue eu. Maecenas vel consequat libero. Etiam eu
					luctus tortor. Proin in sem interdum, laoreet quam a, volutpat leo.
				</Col>
				<Col className="col-sm-6">
					<Card>
						<CardHeader className="text-white">
							<h3>Alliance Details</h3>
						</CardHeader>
						<CardBody>
							<dl className="row">
								<dt className="col-6">Founded</dt>
								<dd className="col-6">May 27, 2020</dd>
								<dt className="col-6">Officers</dt>
								<dd className="col-6">7</dd>
								<dt className="col-6">ARKS Emblems/Trophies</dt>
								<dd className="col-6">2</dd>
								<dt className="col-6">Rank</dt>
								<dd className="col-6">7</dd>
							</dl>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
