import Navbar from './Navbar';
import HOME from './Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import FileNotFound from './FileNotFound';
import Login from './Login';
import Register from './Register';

function App() {
 
  return (
    <Router>
    <div className="App">
      <Navbar/> 
     <div className='content'>
      <Switch>
        <Route exact path='/'>
         <HOME/>
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/blogs/:id'>
          <BlogDetails />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='*'>
         <FileNotFound/>
        </Route>

      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
