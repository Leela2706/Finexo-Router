import React, { Component } from 'react'
import Slider from './Slider';

export default class Header extends Component {
  render() {
    return <div>

      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="images/hero-bg.png" alt />
          </div>
        </div>
        {/* header section strats */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>
                  Finexo
                </span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html"> about</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="service.html">services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="why.html">why Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="team.html">team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true" /> login</a>
                  </li>
                  <form className="form-inline">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}

        <Slider />
      </div>
    </div>

  }
}
