// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
} from "./navbarElements";
import logo from '../Assets/developing.png'

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />
				<div className="logo" >
					<img src={logo} alt="logo" width="60px" height="70px"/>
				</div>

				<NavMenu>
					<NavLink to ="/">
						Home
					</NavLink>
					<NavLink to="/about" >
						About
					</NavLink>
					<NavLink to ="/contact">
						Contact
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
