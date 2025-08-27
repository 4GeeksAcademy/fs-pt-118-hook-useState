import React, { useState } from "react";
import Modal from "./modeal";
import EjemploComponenteConEstados from "./EjemploComponenteConEstados";

//create your first component
const Home = () => {

	/*
	antes:
	
		let age = 50 
		age++ 
		age+10 
	
		const [age, setAge] = useState(50)
		setAge(age+1)
		setAge(age+10)
	
	*/

	/*
			la variable,  modificador de           (aginacion del 
							variable				valor de la variable)
							 
	
		const [miVariable, setMiVariable] = useState()


		- cada vez que el valor de mi estado (useState) sea modificado, 
		- se volvera a renderizar el componewnte
		- el useState vuelve a su estado inicial cuando se recarga la pagina
		- no se puede modificar directamente miVariable, solo usando setMiVariable
	*/
	const [age, setAge] = useState(55)


	const [counter, setCounter] = useState(0)
	const [textValue, setTextValue] = useState('pepe')

	const handleClick = () => {
		setAge(age + 1)
		console.log(age)
	}


	const handleDown = () => {
		setCounter(counter - 1)
	}
	const handleUp = () => {
		setCounter(counter + 1)
	}


	const handleChange = (e) => {
		//const {name, value} = e.target
		setTextValue(e.target.value)
		console.log(textValue)
	}


	const handleSubmit = e => {
		console.log('-------')
		e.preventDefault(); // evita que se recargue la pagina y asi no perdemos nuestros estados
	}


	/*

		+++++++++EJEMPLO NOMBRE

	*/

	const [fname, setFname] = useState('')
	const [username, setUsername] = useState('')
	const handleNameSubmit = (e) => {
		e.preventDefault();
		setUsername(fname)
	}
	const handleNameChange = (e) => {
		setFname(e.target.value)
	}


	/*

		--------EJEMPLO NOMBRE

	*/



	/*
				MODAL 
	*/

	const [show, setShow] = useState(false);

	const handleModal = () => {
		setShow(!show)
	}

	const closeModal = () => setShow(false)

	console.log('----------actualizacion------------')
	return (
		<div className="text-center">
			{age}
			<button onClick={handleClick}>
				feliz cumple!
			</button>


			<div className="card w-50 mx-auto my-5">
				<h2>ejemplo counter</h2>
				<p className="fs-5">
					{counter}
				</p>
				<div className="d-flex justify-content-between p-3">
					<button
						className="btn btn-danger"
						onClick={handleDown}>
						down
					</button>
					<button
						className="btn btn-primary"
						onClick={handleUp}>
						up
					</button>
				</div>


			</div>

			{/* 
con los inputs se tiene que hacer una conexion doble
los inputs en el onChange van a conectar con el setMiVariable para modificar el estado
y en el atributo value se van a conectar con miVariable del estado 
*/}

			<form
				onSubmit={handleSubmit}
				className="form-control w-75 mx-auto bg-dark-subtle">
				<input
					onChange={handleChange}
					value={textValue}
					className="form-control" type="text" />
				<input className="btn btn-success" type="submit" />
			</form>




			<div className="container bg-dark-subtle">
				<form
					onSubmit={handleNameSubmit}
					className="form-control w-75 mx-auto bg-dark-subtle">
					<input
						onChange={handleNameChange}
						value={fname}
						className="form-control" type="text" />
					<input className="btn btn-success" type="submit" />
				</form>

				<h3>Hola, {username}</h3>

			</div>


			<div className="container">
				<button className="btn btn-primary"
					onClick={handleModal}
				>Toggle Modal</button>

				{
					show && <Modal
						title='una cuasi modal'
						body='aun le falta para que sea una modal de verdad'
						close={closeModal}
					/>
				}


			</div>

			<EjemploComponenteConEstados info={age} />

		</div>
	);
};

export default Home;