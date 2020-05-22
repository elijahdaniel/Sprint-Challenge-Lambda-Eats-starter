import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Form from './components/Form'
import Home from './components/Home'

import './style.scss'

const App = () => {
	return (
		<Route>
			<div>
				<section className='nav'>
					<h3>Lambda Eats</h3>
					<section>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/'>Help</NavLink>
					</section>
				</section>
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
