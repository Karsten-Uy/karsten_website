import React from 'react';
import styles from './style';

import {Navbar,Button,CentreBlock,Footer} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">

    <div className={[styles.paddingX, styles.flexCenter].join(' ')}>
      <div className={[styles.boxWidth].join(' ')}>
        <Navbar />
      </div>
    </div>

    <div className={["bg-primary", styles.flexStart].join(' ')}>
      <div className={[styles.boxWidth].join(' ')}>
        <CentreBlock />
      </div>
    </div>

    <div className={["bg-primary", styles.paddingX, styles.flexStart].join(' ')}>
      <div className={[styles.boxWidth].join(' ')}>
        <Footer />
      </div>
    </div>

  </div>
);

export default App;