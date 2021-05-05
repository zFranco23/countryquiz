
import React,{Suspense} from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

import Routes from './Routes';

function App() {
  return (
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Switch>
            {
              Routes.map((route,index)=>(
               <Route key={index} exact path={route.path} component={route.component} />  
              ))
            }
          </Switch>
        </Router>
      </Suspense>
  );
}

export default App;
