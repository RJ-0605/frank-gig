

import React from 'react';
import './OnHeroComp.css';
import OnHeroContents from './OnHeroContents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'




export default function OnHeroComp() {



        return(
        
        	
        
        
        
      <div className="OnheroNav"> 
		   <nav>
		   <ul>
		   
		    
		    <li><FontAwesomeIcon icon={faUser} /><span>User Profile</span></li>
		   <li>Goal Tracking</li>
		   <li>Appointments</li>
		   <li>Selections</li>
		   <li>Finance</li>
		   <li>Settings</li>
		   </ul>
		   </nav>
		    
		   <div className="top-button" ><button type="button" className="buton">Primary</button> </div>
		   
		   <OnHeroContents />
		   
     </div>
        )

}
