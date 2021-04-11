import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Images/logo.png";


class NavbarComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark ">
  
  <a class="navbar-brand" href="#">
    <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""></img>
     &nbsp;&nbsp;AlgoExpert
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="nav navbar-nav ml-auto ">
      <li class="nav-item ">
        <a class="nav-link">
        <Link to="/">Home</Link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
            <Link to="/linearsearch">Linear Search</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
            <Link to="/binarysearch">Binary Search</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
            <Link to="/bubblesort">Bubble Sort</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
            <Link to="/selectionsort">Selection Sort</Link></a>
      </li>
    </ul>
    </div>
    </nav>
         );
    }
}
 
export default NavbarComponent;