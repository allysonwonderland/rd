import React from "react";
import PSO2Logo from "../img/pso2logo.png";
import { Container, Col, Row } from "reactstrap";

function Footer(props) {
	return (
		<footer className="site-footer">
			<Container>
				<Row>
					<Col>
						<img src={PSO2Logo} className="img-fluid" alt="pso2" />
					</Col>
					<Col className="col-10">
						footer text footer text footer text footer text footer text footer
						text footer text footer text footer text footer text footer text
						footer text footer text footer text footer text footer text
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
