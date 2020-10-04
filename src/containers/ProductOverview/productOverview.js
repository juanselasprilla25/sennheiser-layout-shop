import React, { Component } from "react";

/**
 * Styles
 */
import "./productOverview.css";

/**
 * Images
 */
import SennHeiser from "../../assets/sennheiser.png";
import SennHeiser_HeadPhones from "../../assets/sennheiser_headphones.png";
import SennHeiser_Parts from "../../assets/sennheiser_parts.png";
import Touch from "../../assets/touch.png";
import Equalizer from "../../assets/equalizer.png";
import Noise from "../../assets/noise.png";

export default class ProductOverview extends Component {
  constructor(props) {
    super();
    this.state = {
      imgSelected: SennHeiser,
      imgFiles: [SennHeiser, SennHeiser_HeadPhones, SennHeiser_Parts],
    };
  }

  imgSelectedHandler(img) {
    this.setState({ imgSelected: img });
  }

  render() {
    return (
      <div className='ProductOverview-container'>
        <div className='row bigImage'>
          <div className='col'>
            <img
              src={this.state.imgSelected}
              alt='sennheiser headphones'
              tabIndex='0'
            />
          </div>
        </div>
        <div className='row smallImage'>
          {this.state.imgFiles.map((image, _i) => (
            <div className='col' key={_i}>
              <img
                src={image}
                alt={image}
                tabIndex='0'
                onClick={() => {
                  this.imgSelectedHandler(image);
                }}
              />
            </div>
          ))}
        </div>
        <div className='row features'>
          <div className='col' tabIndex='0'>
            <img src={Touch} alt='Momentum Touch Controls' />
            <p>Customizable Touch Controls</p>
          </div>
          <div className='col' tabIndex='0'>
            <img src={Equalizer} alt='Momentum Touch Controls' />
            <p>Built-in equalizer</p>
          </div>
          <div className='col' tabIndex='0'>
            <img src={Noise} alt='Momentum Touch Controls' />
            <p>Active noise cancellation</p>
          </div>
        </div>
      </div>
    );
  }
}
