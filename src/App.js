import React, { useState } from "react";

/**
 * Components
 */
import { NavBar } from "./components/Navbar/navbar";

/**
 * Containers
 */
import ProductOverview from "./containers/ProductOverview/productOverview";
import DetailsOverview from "./containers/DetailsOverview/detailsOverview";
import Footer from "./containers/Footer/footer";

function App() {
  const [price, setPrice] = useState(295.95);

  return (
    <React.Fragment>
      {/* NavBar Component */}
      <NavBar />
      <div className='row mainContent'>
        {/* Right Column */}
        <div className='col-md-12 col-lg-6 right'>
          {/* Right Column - Product-Features Overview Comp */}
          <ProductOverview />
        </div>
        {/* Left Column */}
        <div className='col-md-12 col-lg-6 left'>
          {/* Left Column - Details Overview Comp */}
          <DetailsOverview price={price} setPrice={setPrice} />
        </div>
      </div>
      {/* Footer */}
      <Footer price={price} setPrice={setPrice} />
    </React.Fragment>
  );
}

export default App;
