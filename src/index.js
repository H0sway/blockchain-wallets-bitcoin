// Import react and reactDOM, kinda hard to make this work without them
import React from 'react';
import ReactDOM from 'react-dom';

// Import the App component
import App from './App';

// Import scss file
import './scss/index.scss';

// Tie the react script to the div build in the HTML template file.
ReactDOM.render(<App />, document.getElementById('app'));
