import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { HashRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Projects from './pages/projects';
import SecretPage from './pages/secretpage';
import SideQuests from './pages/sidequests';

function App() {
	return (
		<Router>
			<Routes>				
				<Route path='/' element={<Home/>}/>
			</Routes>
			<Routes>
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/secretpage' element={<SecretPage />} />
				<Route path='/sidequests' element={<SideQuests />} />
			</Routes>
		</Router>
	);
}

export default App;
