import React, { Component } from "react";
import {
	Navbar,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
	NavbarBrand
} from "reactstrap";
import { NavLink } from "react-router-dom";
import RDicon from "../img/RDicon.png";

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
				<Navbar dark sticky="top" ml-auto expand="lg">
					<div className="container">
						<NavbarBrand className="mr-auto" href="/">
							<img
								src={RDicon}
								height="30"
								alt="Rainbow Drop"
							/> Rainbow Drop
						</NavbarBrand>
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar className="justify-content-end align-middle ml-auto">
								<NavItem className="headerlink">
									<NavLink className="nav-link headerlink" to="/home">
										Home
									</NavLink>
								</NavItem>
								<NavItem className="headerlink">
									<NavLink className="nav-link headerlink" to="/calendar">
										Calendar
									</NavLink>
								</NavItem>
								<NavItem className="headerlink">
									<NavLink className="nav-link headerlink" to="/about">
										About
									</NavLink>
								</NavItem>
								<NavItem className="headerlink">
									<NavLink className="nav-link headerlink" to="/rules">
										Rules
									</NavLink>
								</NavItem>
								<NavItem className="headerlink">
									<NavLink className="nav-link headerlink" to="/roster">
										Roster
									</NavLink>
								</NavItem>
								<NavItem className="headerlink">
									<NavLink className="nav-link headerlink" to="/apply">
										Apply
									</NavLink>
								</NavItem>
								<NavItem className="headerlink">
									<NavLink className="nav-link headerlink" to="/resources">
										Resources
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>

				<div className="container top">
					<Jumbotron fluid>
						<div className="container rowtop align-text-bottom">
							<div className="row">
								<div className="col">
									<h1>Rainbow Drop</h1>
									<h2>PSO2 Global, Ship 2 Alliance</h2>
								</div>
							</div>
						</div>
					</Jumbotron>{" "}
				</div>
			</React.Fragment>
		);
	}
}

export default Header;
