import React from "react";
import {
	Card,
	CardBody,
	CardHeader,
	Media,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import PSO2Logo from "../img/pso2logo.png";
import { Link } from "react-router-dom";

function Footer(props) {
	return (
		<footer className="site-footer">
			<div class="container">
				<div class="row">
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" />
					</div>
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" />
					</div>
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" />
					</div>
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" />
					</div>
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" />
					</div>
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
