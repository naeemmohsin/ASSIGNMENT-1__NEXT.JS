import Link from "next/link";
import React from 'react';

const Navbar = () => (
  <body> 
    
    <h1> DAWOOD PUBLIC SCHOOL</h1>

    <nav>
    <Link href="/about"><button>About</button></Link> | 
    <Link href="/Contact"><button>Contact</button></Link> | 
    <Link href="/Service"><button>Services</button></Link>
  </nav>

    <p>To develop an educational institution that produces young women who possess the capabilities of critical thinking, 
      analysis and awareness of disparate environments. They will be instilled with knowledge and acumen to enable them to 
      become proactive members of their culture and society, as well as to equip them with the practical tools necessary for 
      their survival and autonomy.Every student of Dawood Public School will be nurtured to explore and cultivate her aptitudes,
      interests and skills.The School’s vision is to expand this ethos to include all people associated with the institution so 
      as to create a ‘learning community’.A communal network whose members will be worthy role models for others; confident, 
      well rounded, possessing values of integrity and sensitivity to the plight of others, 
      common sense and recognition of their position and their roles amongst their families and in the development of their Country.</p>

      </body>
);

export default Navbar;