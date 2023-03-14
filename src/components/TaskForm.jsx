import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("") // const title = ""   --> es lo mismo
    const [descripcion, setDescripcion] = useState("") // const descripcion = ""   --> es lo mismo
    const { createTask } = useContext(TaskContext) // Aqui vienen todos los datos del context

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ title, descripcion });
        setTitle(''); {/*DEjar en blanco el titulo*/ }
        setDescripcion(''); {/*DEjar en blanco la descripcion*/ }
    };

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4"> {/*Cuando se ejecute el formulario*/}
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                < input className="bg-slate-300 p-3 w-full mb-2" placeholder="Escribe tu tarea" onChange={
                    (e) => { setTitle(e.target.value) }
                } value={title} autoFocus />{/*value para dejar igual que el titulo*/}
                < textarea className="bg-slate-300 p-3 w-full mb-2" placeholder="Escribe la descripcion de la tarea" onChange={
                    (e) => { setDescripcion(e.target.value) }
                } value={descripcion} />{/*value para dejar igual que la descripcion*/}
                <button className='bg-indigo-500 px-3 py-1 text-white'>
                    Guardar
                </button >
            </form >
        </div>

    )
}

export default TaskForm