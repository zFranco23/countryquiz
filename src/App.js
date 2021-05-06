
import React from 'react';
import CardHome from './components/CardHome';

import Provider from './Provider/Provider';

function App() {
  return (
    <Provider>
      <CardHome />
    </Provider>
  );
}

export default App;
