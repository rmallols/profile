
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Profile from './profile/Profile';
import NotFound from './common/NotFound';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => <Redirect to="/users/12345" />} />
                    <Route path="/users/:userId" exact component={Profile} />
                    <Route path="/not-found" exact component={NotFound} />                    
                </Switch>
            </Router>
        </div>
    );
}

export default App;
