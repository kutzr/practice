import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Projects } from '../imports/collections/projects'
import Workspace from './components/workspace'
import ProjectList from './components/projectList'

// import { Meteor } from 'meteor/meteor';
// import { render } from 'react-dom';
// import '../imports/startup/accounts-config.js';
// import App from '../imports/ui/App.jsx';
// import Wrapper from '../imports/ui/Wrapper.jsx';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
// import EditItem from '../imports/ui/EditItem.jsx';
//
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute  component={ProjectList} />
      <Route path='workspace/:projectId' component={Workspace}>
      </Route>
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('render-target'));
});
