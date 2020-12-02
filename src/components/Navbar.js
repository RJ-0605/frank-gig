import React from 'react';
import './Navbar.css';
import Profile from '../Assets/awesomebaby.jpg';


export default function Navbar() {

	return (
		<div className="nav">

			<svg className="Navicon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"></path></svg>
			<div className="profile">
				<div>
					<img src={Profile} alt="profileimage" />
					Rodney J
				</div>
			</div>

		</div>


	);

}