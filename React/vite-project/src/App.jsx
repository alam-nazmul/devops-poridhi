import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo}
						className="logo"
						alt="Vite logo"/>
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo}
						className="logo react"
						alt="React logo"/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={
					() => setCount((count) => count + 1)
				}>
					count is {count} </button>
				<p>
					Edit
					<code>src/App.jsx</code>
					and save to test HMR
				</p>
			</div>
			<div>
				<h3>About me</h3>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus id corporis quos pariatur quod iste harum, quidem reprehenderit et cupiditate, voluptatum labore sint optio, amet asperiores excepturi ipsum iusto autem!</p>
				<h3>Education</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint deserunt, odit consectetur iure quia quasi, soluta eaque repellendus similique corporis? Iste maiores in enim ducimus deserunt distinctio asperiores aliquam!</p>
				<p>Experience</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
