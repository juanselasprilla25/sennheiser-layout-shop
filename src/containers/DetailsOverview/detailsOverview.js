import React, { Component } from "react";

import { Tabs, Tab } from "react-bootstrap";

/**
 * Styles
 */
import "./detailsOverview.css";

export default class DetailsOverview extends Component {
  constructor(props) {
    super();

    this.state = {
      SumHigh: 75,
      SumLow: 25,
    };
  }

  render() {
    return (
      <div className='DetailsOverview-container'>
        <span className='colored'>NEW RELEASE</span>
        <h1 tabIndex='0'>MOMENTUM True Wireless 2</h1>
        <h3 className='darkgrey'>Earbuds that put sound first</h3>
        <h4>STARTING AT</h4>
        <h1 tabIndex='0'>$ {this.props.price}</h1>
        <Tabs className='tab' defaultActiveKey='overview'>
          <Tab eventKey='overview' title='Overview' tabIndex='0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            rem exercitationem corrupti nostrum inventore distinctio asperiores
            voluptas nulla culpa odit ea aspernatur corporis quis tenetur,
            excepturi amet minima ab ullam. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Animi fuga ipsam minus molestiae
            sapiente repudiandae dignissimos ullam dolorem blanditiis sint
            dolorum sed adipisci cupiditate natus, quis distinctio, porro, vel
            rem?
          </Tab>
          <Tab eventKey='features' title='Features' tabIndex='0'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            earum unde doloremque nulla repudiandae natus accusamus tempora
            sapiente architecto? Sapiente ratione eius ut tempora excepturi iste
            adipisci a non nulla. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Laboriosam voluptas qui ex, cum libero, quae ipsam
            illo unde aliquam vitae impedit quisquam nihil hic eum nostrum ad
            sapiente vero maiores.
          </Tab>
          <Tab eventKey='box' title="What's in the box?" tabIndex='0'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            earum unde doloremque nulla repudiandae natus accusamus tempora
            sapiente architecto? Sapiente ratione eius ut tempora excepturi iste
            adipisci a non nulla. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Fugiat doloremque sapiente aperiam! Cupiditate
            magnam itaque rem. Quaerat, maxime distinctio, sunt ipsa quasi enim
            tempora ratione minus laudantium nulla error repellendus.
          </Tab>
        </Tabs>
        <h2>Choose your finish.</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md col-lg box' tabIndex='0'>
              <h4>Ivory White</h4>
              <p>
                For the past 75 years, Sennheiser has put sound first. The new
                MOMENTUM True.
              </p>
            </div>
            <div className='col-sm-12 col-md col-lg box' tabIndex='0'>
              <h4>Matte Black</h4>
              <p>
                Of all the celestial bodies that capture our attention and
                fascination as astronomers.
              </p>
            </div>
          </div>
        </div>
        <h2>Would you like to add extended warranty coverage?.</h2>
        <div className='container'>
          <div className='row'>
            <div
              className='col box marginNone uniqueActive'
              tabIndex='0'
              onClick={() => {
                this.props.setPrice(295.95);
              }}
            >
              <div className='col-sm-12 col-lg-8'>
                <h4>2 years coverage</h4>
                <p>For the past 75 years, Sennheiser has put sound first.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div
              className='col box extra'
              tabIndex='0'
              onClick={() => {
                this.props.setPrice(this.props.price + this.state.SumHigh);
              }}
            >
              <div className='col-8'>
                <h4>3 years coverage</h4>
                <p>For the past 75 years, Sennheiser has put sound first.</p>
              </div>
              <p>+ $75</p>
            </div>
          </div>
        </div>
        <h2>Features.</h2>
        <div className='container'>
          <div className='row'>
            <div
              className='col box marginNone uniqueActive'
              tabIndex='0'
              onClick={() => {
                this.props.setPrice(this.props.price - this.state.SumLow);
              }}
            >
              <div className='col-8'>
                <h4>Voice Assistant support</h4>
              </div>
            </div>
          </div>
          <div className='row'>
            <div
              className='col box extra'
              tabIndex='0'
              onClick={() => {
                this.props.setPrice(this.props.price + this.state.SumLow);
              }}
            >
              <div className='col-8'>
                <h4>Customizable controls</h4>
              </div>
              <p>+ $25</p>
            </div>
          </div>
        </div>
        <h2>Specifications.</h2>
        <div className='container'>
          <div className='row'>
            <div className='col rowTable' tabIndex='0'>
              <h4>Dimensions</h4>
              <p>76.8 x 43.8 x 34.7 mm (Earbuds and charging case)</p>
            </div>
          </div>
          <div className='row'>
            <div className='col rowTable' tabIndex='0'>
              <h4>USB Standard</h4>
              <p>USB-C</p>
            </div>
          </div>
          <div className='row'>
            <div className='col rowTable' tabIndex='0'>
              <h4>Power supply</h4>
              <p>Sennheiser 7mm dynamic driver</p>
            </div>
          </div>
          <div className='row'>
            <div className='col rowTable' tabIndex='0'>
              <h4>Frecuency response (Microphone)</h4>
              <p>100 Hz to 10 kHz</p>
            </div>
          </div>
          <div className='row'>
            <div className='col rowTable' tabIndex='0'>
              <h4>Frecuency response</h4>
              <p>5 - 21,000 Hz</p>
            </div>
          </div>
          <div className='row'>
            <div className='col rowTable' tabIndex='0'>
              <h4>Noise cancellation</h4>
              <p>Single-Mic ANC per earbud side</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
