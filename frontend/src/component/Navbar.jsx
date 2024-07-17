import React from 'react'
import logo from"../assets/download.jpg"
import "../component/nav.css"
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light " style={{backgroundColor:'white'}}>
  <div className="container-fluid">
  <div className="logo">
  <a className="navbar-brand  " href="#" > <span><img className='img-fluid' src="https://img.freepik.com/premium-vector/cake-logo-design_221218-46.jpg" alt="" width={55} height={55}/></span><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJS1lZM-cgv4fQko2fvOTtnlyQwbhtiqTMgw&usqp=CAU" alt="" width={175} height={40} /> </a>
  </div>
  <div className="d-md d-lg-none d-sm d-xl-none">
  <button className="btn-nav  mt-2 fs-5 ms-3  searchbar "><FaSearch /></button>
       
       
       <button className="btn-nav mt-2 fs-5 ms-3  cart "><FaShoppingCart /></button>
  </div>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" style={{ background: 'none', border: 'none',marginRight:20,marginBottom:5 }}>
    <TiThMenu className='menubtn' />

    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-5">
        <li className="nav-item ">
        <Link to="/Home" className='nav-link ms-3 '> Home </Link>
        </li>
        <li className="nav-item ">
        <Link to="/Product" className='nav-link ms-3 '>  Product</Link>
        </li>
        <li className="nav-item">
        <Link to="/speciality cakes" className='nav-link ms-3 '> Speciality Cakes </Link>
        </li>    
        <li className="nav-item">
        <Link to="/About" className='nav-link ms-3 '> About </Link>
        </li>
        <li className="nav-item">
        <Link to="/Contactus" className='nav-link ms-3'> Contact Us </Link>
        </li>
        </ul>
       <div className=' nav-button ms-5 d-flex ms-auto'  >

   
        <button className="btn-nav  mt-2 fs-5 ms-3  searchbar "><FaSearch /></button>
       
       
        <button className="btn-nav mt-2 fs-5 ms-3  cart "><FaShoppingCart /></button>
      
        <button className="   ordernow-button  mt-2 px-4  ms-3 btn-sm w-100 " data-bs-toggle="modal" data-bs-target="#myModal">Order Now</button>
      <div className="ordernowmodel">
      <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
     
     <div className="modal-content">
  <div className="modal-header">
    <button type="button" className="close" data-bs-dismiss="modal">×</button>
    <h4 className="modal-title">Modal Header</h4>
  </div>
  <div className="modal-body">
    <p>Some text in the modal.</p>
  </div>
  <div className="modal-footer">
    <button type="button" className="btn btn-default" data-bs-dismiss="modal">Close</button>
  </div>
</div>

      
    </div>
  </div>
  
      </div>
       </div>
    </div>
  </div>
  
</nav>


  
  )
}

export default Navbar