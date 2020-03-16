import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";

const App = () => (
    <Router>
            <div>
                <HomePage/>
            </div>
    </Router>
);

export default App;
