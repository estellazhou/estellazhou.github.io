import React from "react";
import { Nav, NavLink, NavMenu }
	from "./navbarelements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/" activeStyle>
						Estella 
					</NavLink>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/projects" activeStyle>
						Projects 
					</NavLink>
					<NavLink to="/resume" activeStyle>
						Resume
					</NavLink>
					<NavLink to="/sidequests" activeStyle>
						Side Quests
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
