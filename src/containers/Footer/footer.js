import React, { Component } from "react";

import { Button } from "react-bootstrap";

/**
 * Styles
 */
import "./footer.css";

export default class Footer extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <footer className='Footer-container'>
        <div className='row'>
          <div className='col-md-5 col-lg-6'>
            <div className='row'>
              <div className='col-md-12 col-lg-6' tabIndex='0'>
                <p className='bold d-none d-md-block'>Free Shipping</p>
                <p className='darkgrey d-none d-lg-block'>
                  Get 2-day free shipping anywhere in North America.
                </p>
              </div>
              <div className='col-md-12 col-lg-6' tabIndex='0'>
                <p className='bold d-none d-md-block'>2 years warranty</p>
                <p className='darkgrey  d-none d-lg-block'>
                  If anything goes wrong in the first two years, we'll replace
                  it for free.
                </p>
              </div>
            </div>
          </div>
          <div className='col d-none d-lg-block'></div>
          <div className='col-sm-12 col-md-7 col-lg-4 buy'>
            <div className='row'>
              <div className='col-sm-12 col-md-8 col-lg-8'>
                <div className='text'>
                  <h1 className='bold'>$ {this.props.price}</h1>
                  <p className='darkgrey' tabIndex='0'>
                    Need financing? Learn more
                  </p>
                </div>
              </div>
              <div className='col-sm-12 col-md-3 col-lg-3'>
                <Button variant='primary'>Buy now</Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
