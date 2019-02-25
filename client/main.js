<<<<<<< HEAD
	import React from 'react';
=======
import React from 'react';
>>>>>>> d62fc2009c8d2cd1715c6380d4490ae6bcc3c14d
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './main.html';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
