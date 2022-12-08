import logo from './logo.svg';
import './App.scss';
import ListToDo from './Todos/ListToDo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav.js';
import MyComponet from './MyComponent/MyComponent.js'
import Home from './MyComponent/Home';
import User from './Users/ListUser';
import DetailUser from './Users/DetailUser'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/todo"  ><ListToDo /></Route>
            <Route path="/about"  ><MyComponet /></Route>
            <Route path="/user" exact><User /></Route>
            <Route path="/user/:id"><DetailUser /></Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
