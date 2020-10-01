import React from "react";
import PSO2Logo from "../img/pso2logo.png";

function Footer(props) {
	return (
		<footer className="site-footer">
			<div class="container">
				<div class="row">
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" alt="pso2" />
					</div>
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" alt="pso2" />
					</div>
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" alt="pso2" />
					</div>
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" alt="pso2" />
					</div>
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" alt="pso2" />
					</div>
					<div class="col">
						<img src={PSO2Logo} className="img-fluid" alt="pso2" />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
