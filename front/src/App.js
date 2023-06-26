import React, { useState, useEffect } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom';
import socketIOClient from "socket.io-client";

//css
import './css/App.css'

//functions
import { Home } from './containers/home/home';
import { NotFound } from './containers/utils_functions/not_found';
import { Ranking } from './containers/Ranking/ranking';
import { SelectMode } from './containers/select_mode/select_mode';
import { Play } from './containers/play/play';
import { PlaySoloFunctional } from './containers/play/play_solo_demo_functional';


const ENDPOINT = "http://localhost:4001";

export default function App() {

	return(
		<React.Fragment>
			<HashRouter>
				<div className='Main-div'>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/SelectMode" element={<SelectMode />} />
						<Route path="/Functional" element={<PlaySoloFunctional />} />
						<Route path='/Ranking' element={<Ranking />} />
						<Route path=':gid' element={<Play />} />
						<Route element={<NotFound />} />
					</Routes>
				</div>
			</HashRouter>
		</React.Fragment>
	);
}
