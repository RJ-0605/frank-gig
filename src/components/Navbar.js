import React from 'react';
import  './Navbar.css';
import Profile from '../Assets/awesomebaby.jpg';


export default function Navbar() {


    return (
       

                <div className="Nav">
                     
                    
                    <div className="Navicon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className="profile">
                        <div><img src={Profile} alt="profileimage" /></div>
                        <div><p>Rodney J</p></div>
                    </div>

                </div>

                
    );

}