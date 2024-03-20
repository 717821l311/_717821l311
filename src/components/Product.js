import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Home from "./Home";
import ProductCard from "./ProductCard";
export default class Product extends Component {
    render() {
        return (
            <Router>
                    <Route path="/home"  element={<Home/>} />
                    <Route path="/productcard" element={<ProductCard/>} />
            </Router>
        )
    }
}