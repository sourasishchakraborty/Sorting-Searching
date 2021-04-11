import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class FooterComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <footer>
  <div class="container">
    <div class="row">
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
            
          <li class="nav-item mb-2">
            <span class="footer-title">Searching Algorithms</span>
          </li>
          
          <li class="nav-item">
            <Link to="/linearsearch">Linear Search</Link>
          </li>
          <li class="nav-item">
            <Link to="/binarysearch">Binary Search</Link>
          </li>
          
        </ul>
      </div>
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <span class="footer-title">Sorting Algorithms</span>
          </li>
          <li class="nav-item">
            <Link to="/bubblesort">Bubble Sort</Link>
          </li>
          <li class="nav-item">
            <Link to="/selectionsort">Selection Sort</Link>
          </li>
        </ul>
      </div>
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <span class="footer-title">Contact & Support</span>
          </li>
          <li class="nav-item">
            <span class="nav-link"><i class="fas fa-phone"></i>+91 9870345816</span>
          </li>
          <li class="nav-item">
            
            <span class="nav-link"><i class="fab fa-whatsapp fa-lg"></i> +91 8959001820</span>
          </li>
          
        </ul>
      </div>
    </div>

    <div class="text-center"><i class="fas fa-ellipsis-h"></i></div>
    
    <div class="row text-center">
      <div class="col-md-4 box">
        <span class="copyright quick-links">Copyright &nbsp; &copy; AlgoExpert &nbsp;2020 
        </span>
      </div>
      <div class="col-md-4 box">
        <ul class="list-inline social-buttons">
          <li class="list-inline-item">
            <a href="#">
            <i class="fab fa-youtube"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
            <i class="fab fa-github"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
          </li>
        </ul>
      </div>
      <div class="col-md-4 box">
        <ul class="list-inline quick-links">
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
         );
    }
}
 
export default FooterComponent;