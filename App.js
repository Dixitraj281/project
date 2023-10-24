// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
        		<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
