import React from 'react'
import { NavLink } from 'react-router-dom'

import '../style.scss'

function Home() {
	return (
		<div className='home'>
			<div className='header'>
				<h1>Your favorite food, delivered while coding</h1>
				<NavLink to='/pizza' className='pizzaLink'>
					Pizza?
				</NavLink>
			</div>
		</div>
	)
}

export default Home
