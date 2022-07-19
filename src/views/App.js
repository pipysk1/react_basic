import logo from "./logo.svg"
import "./App.scss"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import MyComponent from "./Example/MyComponent"
import ListTodo from "./Todos/ListTodo"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Nav from "./Nav/Nav"
import Home from "./Example/Home"
import ApiService from "./API/ApiService"
import ListUser from "./User/ListUser"
import DetailUser from "./User/DetailUser"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <ApiService />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path='/user' exact >
              <ListUser />
            </Route>
            <Route path='/user/:id' >
              <DetailUser />
            </Route>
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
        />
      </div>
    </BrowserRouter>
  )
}

export default App
