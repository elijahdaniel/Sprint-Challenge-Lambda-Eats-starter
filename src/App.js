import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Form from './components/Form'
import Home from './components/Home'

import './style.scss'

const App = () => {
	return (
		<Route>
			<div>
				<nav>
					<NavLink className='navA' to='/'>
						Home
					</NavLink>
					<NavLink className='navA' to='/pizza'>
						Pizza
					</NavLink>
				</nav>

				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/pizza'>
						<Form />
					</Route>
				</Switch>
			</div>
		</Route>
	)
}
export default App
