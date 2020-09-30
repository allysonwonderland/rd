import React, { Component } from "react";
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	render() {
		return (
			<React.Fragment>
				<Navbar dark sticky="top" ml-auto expand="md">
					<div className="container">
						<a class="navbar-brand" href="#">
							Rainbow Drop
						</a>
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar className="justify-content-end ml-auto">
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<i className="fa fa-home fa-lg" /> Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/about">
										<i className="fa fa-info fa-lg" /> About
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/rules">
										<i className="fa fa-list fa-lg" /> Rules
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/roster">
										<i className="fa fa-list fa-lg" /> Roster
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/apply">
										<i className="fa fa-address-card fa-lg" /> Apply
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/resources">
										<i className="fa fa-info fa-lg" /> Resources
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>


				<div className="container top">
					<Jumbotron fluid>
						<div className="row">
							<div className="col">
								<h1>Rainbow Drop</h1>
								<h2>PSO2 Global - Ship 2</h2>
							</div>
						</div>
					</Jumbotron>{" "}
				</div>
			</React.Fragment>
		);
	}
}

export default Header;
