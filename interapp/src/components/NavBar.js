import React from "react";
import "../css/designs.css";

function NavBar() {
	return (
		<header>
			<div className="mb-6 testb d-flex flex-column flex-md-row p-3 px-md-4 mb-3 border-bottom nav-header">
				<a href="#maincontent" class="skip-link">
					{" "}
					Skip to main content{" "}
				</a>
				<h1 className="my-0 mr-md-auto font-weight-normal">AppTrack</h1>
				<nav className="my-2 my-md-0 mr-md-3">
					<a className="p-2 text-dark" href="/">
						Calendar
					</a>
					<a className="p-2 text-dark" href="/newApplication">
						Enter Application
					</a>
					<a className="p-2 text-dark" href="/appliedHistory">
						History
					</a>
					
				</nav>
			</div>
		</header>
	);
}
export default NavBar;
