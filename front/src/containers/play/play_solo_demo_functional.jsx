import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";

//css
import './../../css/Play.css';

//functions
import { Player_grid_demo } from "./player_grid_demo_functional";
import { NextTetrimino } from "./next_tetrimino";

const ENDPOINT = "http://localhost:4001";

export function PlaySoloFunctional(){
	const[grid, setGrid] = useState([]);

	useEffect(() => {
		const socket = socketIOClient(ENDPOINT);
		socket.emit("startGame");
		socket.on("gameData", data => {
			setGrid(JSON.parse(data));
		});
		document.addEventListener('keydown', detectKeyDown, true);
	  }, []);

	// more advanced version with id handling, still WIP
	// useEffect(() => {
	// 	const socket = socketIOClient(ENDPOINT);
	// 	const cookieValue = document.cookie.split("; ").find((row) => row.startsWith("playerId="))?.split("=")[1];
	// 	var id = cookieValue ? cookieValue : Math.floor(Math.random() * 1000000);
	// 	console.log("Cookie is " + id);
	// 	document.cookie = "playerId=" + id + "; SameSite=None; Secure";
	// 	socket.emit("startGame1", id);
	// 	socket.on("startGame2", data => {
	// 		console.log("Server answered with data to start game!");
	// 		console.log(data);
	// 	});
	// 	document.addEventListener('keydown', detectKeyDown, true);
	//   }, []);

	const detectKeyDown = (e) => {
	    const socket = socketIOClient(ENDPOINT);
	    socket.emit("keydown", e.key);
		console.log(e.key);
	}
	return(
		<React.Fragment>
			<div className="flex-container">
				<Player_grid_demo grid={grid}/>
				<div className="flex-column-space"></div>
				<div className="info-game-lvl0">
					<div className="info-game-lvl1">
						<b>Next tetrimino</b> :
					</div>
					<div className="info-game-lvl1">
						{NextTetrimino("T")}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
