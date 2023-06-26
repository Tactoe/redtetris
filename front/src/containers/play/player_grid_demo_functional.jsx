import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";

//css
import './../../css/Play.css'

export function Player_grid_demo(gridObject){

	function nice(grid)
	{
		console.log(grid);
		var gridContent = [];
		for (var y = 0; y < grid.length; y++)
		{
			var columnContent = [];
			for (var x = 0; x < grid[0].length; x++)
			{
				if (grid[y][x] === 'X')
					columnContent.push(<div className="grid-empty-square"></div>);
				else if (grid[y][x] === 'N')
					columnContent.push(<div className="grid-indestructible"></div>);
				else
					columnContent.push(<div className={"grid-tetrimino" + grid[y][x]}></div>);
			}
			gridContent.push(<div className="grid-column">{columnContent}</div>);
		}
		return gridContent;
	}

	function cool (gridObject) {

	// var grid = JSON.parse(`[["X","X","X","X","X","T","X","X","X","X"],["X","X","X","X","T","T","T","X","X","X"],["X","X","X","X","O","O","O","X","X","X"],["X","X","X","X","O","O","O","X","X","X"],["X","X","X","X","O","O","O","X","X","X"],["X","X","X","X","X","T","X","X","X","X"],["X","X","X","X","T","T","T","X","X","X"],["X","X","X","X","O","O","O","X","X","X"],["X","X","X","X","O","O","O","X","X","X"],["X","X","X","X","O","O","O","X","X","X"],["X","X","X","X","X","X","L","X","X","X"],["X","X","X","X","L","L","L","X","X","X"],["X","X","X","X","O","O","O","X","X","X"],["X","X","X","X","O","O","O","X","X","X"],["X","X","X","X","O","O","O","X","X","X"],["X","X","X","X","I","I","I","X","X","X"],["X","X","X","X","X","X","I","X","X","X"],["L","S","X","X","O","O","O","X","X","X"],["L","S","S","X","O","O","O","X","X","L"],["L","L","S","X","O","O","O","L","L","L"]]`);

	var gridContent = <div className="grid-row">
	{nice(gridObject.grid)}
	</div>;

	return (gridContent);
	}
	return(
		<React.Fragment>
			<div className="player-game-grid">
			{cool(gridObject)}
			</div>
		</React.Fragment>
	);
}