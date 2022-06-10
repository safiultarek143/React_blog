import logo from './logo.svg';
import './App.css';
import Header from "./components/includes/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/products/AddProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Protected from "./components/Protected";
import ProductList from "./components/products/ProductList";
import SearchProduct from "./components/products/SearchProduct";
import AddBlog from "./components/blogs/AddBlog";
import UpdateBlog from "./components/blogs/UpdateBlog";
import BlogList from "./components/blogs/BlogList";
import SearchBlog from "./components/blogs/SearchBlog";
import Profile from "./components/user/Profile";
import ShowBlog from './components/blogs/ShowBlog';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/blog-details/:id">
                    <ShowBlog/>
                </Route>
                
                <Route path="/add">
                    <Protected Cmp={AddProduct} />
                </Route>
                <Route path="/update/:id">
                    <Protected Cmp={UpdateProduct} />
                </Route>
                
                <Route path="/profile/:id">
                    <Protected Cmp={Profile} />
                </Route>
                <Route path="/addblog">
                    <Protected Cmp={AddBlog} />
                </Route>
                <Route path="/update/:id">
                    <Protected Cmp={UpdateBlog} />
                </Route>
                <Route path="/search">
                    <Protected Cmp={SearchBlog} />
                </Route>
                <Route path="/bloglist">
                    <Protected Cmp={BlogList} />
                </Route>
                <Route path="/productlist">
                    <Protected Cmp={ProductList} />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
