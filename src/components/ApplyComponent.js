import React, { Component } from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Label,
	Col,
	Row,
	Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;

class Apply extends Component {
	constructor(props) {
		super(props);

		this.state = {
			discordTag: "",
			playerId: "",
			levels: "",
			timezone: "",
			agree: false,
			joinReason: "",
			touched: {
				discordTag: false,
				playerId: false,
				levels: false,
				timezone: false,
			},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		console.log("Current state is: " + JSON.stringify(values));
		alert("Current state is: " + JSON.stringify(values));
	}

	render() {
		return (
			<Container className="main">
				<Row>
					<Col>
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to="/home">Home</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>Apply</BreadcrumbItem>
						</Breadcrumb>
						<h2>Apply</h2>
					</Col>
				</Row>

				<Row className="row-content">
					<Col className="col-md-10">
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="discordTag" md={3}>
									Discord Tag
								</Label>
								<Col md={9}>
									<Control.text
										model=".discordTag"
										id="discordTag"
										name="discordTag"
										placeholder="Name#1234"
										className="form-control"
										validators={{
											required,
										}}
									/>
									<Errors
										className="text-danger"
										model=".discordTag"
										show="touched"
										component="div"
										messages={{
											required: "Required",
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="playerId" md={3}>
									PSO2 Player ID
								</Label>
								<Col md={9}>
									<Control.text
										model=".playerId"
										id="playerId"
										name="playerId"
										placeholder=""
										className="form-control"
										validators={{
											required,
										}}
									/>
									<Errors
										className="text-danger"
										model=".playerId"
										show="touched"
										component="div"
										messages={{
											required: "Required",
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="levels" md={3}>
									Main/Sub Class Levels
								</Label>
								<Col md={9}>
									<Control.text
										model=".levels"
										id="levels"
										name="levels"
										placeholder="90 main/90 sub"
										className="form-control"
										validators={{
											required,
										}}
									/>
									<Errors
										className="text-danger"
										model=".levels"
										show="touched"
										component="div"
										messages={{
											required: "Required",
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="timezone" md={3}>
									Timezone
								</Label>
								<Col md={9}>
									<Control.text
										model=".timezone"
										id="timezone"
										name="timezone"
										placeholder="EST America/New York"
										className="form-control"
										validators={{
											required,
										}}
									/>
									<Errors
										className="text-danger"
										model=".timezone"
										show="touched"
										component="div"
										messages={{
											required: "Required",
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="joinReason" md={3}>
									Why do you want to join Rainbow Drop?
								</Label>
								<Col md={9}>
									<Control.textarea
										model=".joinReason"
										id="joinReason"
										name="joinReason"
										rows="10"
										className="form-control"
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Col md={{ size: 9, offset: 3 }}>
									<Button type="submit" className="button">
										Send Application
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Apply;
