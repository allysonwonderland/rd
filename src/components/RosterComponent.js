import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function Roster(props) {
	return (
		<div className="container main">
			<div className="row">
				<div className="col">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem acti666ve>Roster</BreadcrumbItem>
					</Breadcrumb>
					<h2>Roster</h2>
					<hr />
				</div>
			</div>
			<div className="row row-content">
				<div className="col"></div>
			</div>
		</div>
	);
}

export default Roster;
