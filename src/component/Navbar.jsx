import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
     useEffect(() => {
          const handleScroll = () => {
               const navbar = document.querySelector('.navbar');
               if (window.scrollY > 50) {
                    navbar.classList.add('py-5');
               } else {
                    navbar.classList.remove('py-5');
               }
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     return (

          <nav className="navbar navbar-expand-lg nav-custom-style fixed-top p-3">
               <div className="container">
                    <NavLink className="navbar-brand text-uppercase text-white fw-bold fs-1" to={'/'}>Start Framework</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
                              <li className="nav-item">
                                   <NavLink className="nav-link" to={'/about'}>About</NavLink>
                              </li>
                              <li className="nav-item">
                                   <NavLink className="nav-link" to={'/portfolio'}>portfolio</NavLink>
                              </li>
                              <li className="nav-item">
                                   <NavLink className="nav-link" to={'/contact'} >Contact</NavLink>
                              </li>
                         </ul>

                    </div>
               </div>
          </nav>

     )
}
