import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function Roster(props) {
	// const Hello = (props) => (
	// 	<div>
	// 		{props.db.sheet1.map((data) => (
	// 			<span>{data.id}</span>
	// 		))}
	// 	</div>
	// );

	// Hello.propTypes = {
	// 	db: PropTypes.shape({
	// 		sheet1: PropTypes.arrayOf(PropTypes.object),
	// 	}),
	// };
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
