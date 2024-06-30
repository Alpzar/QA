// importa el modulo de react y el hook useRef
import React, { useRef } from 'react';
// importacion del componente de las tarjetas de tareas
import { TaskCard } from './TaskCard.jsx';
// importa la informacion que estará en las tarjetas 
import { tasks } from './DataTasks.jsx';
// crea la funcion del carrusel 
export function Carousel() {
    // la variable para hacer el llamado del componente useRef
    const scrollRef = useRef();
    // funcion que le da direccion al carrusel 
    const handleScroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 200;
        if (direction === 'left') {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
    };
    return (
        // contenedor de las tarjetas que estarán en el carrusel 
        <div className="flex overflow-y-hidden p-[2rem] gap-[2vw] cursor-pointer overflow-x-hidden w-full" ref={scrollRef}>
            {/* bucle que crea las tarjetas*/}
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    bgColor={task.bgColor}
                    number={task.number}
                    title={task.title}
                    course={task.course}
                    dueDate={task.dueDate}
                />
            ))}
            {/* boton para mover el carrusel hacia la izquierda */}
            <button
                className="absolute top-1/2 transform -translate-y-1/2 left-100 bg-white bg-opacity-25 hover:bg-opacity-85 rounded-full p-4"
                onClick={() => handleScroll('left')}
            >
                &lt;
            </button>
            {/* boton para mover el carrusel hacia la derecha */}
            <button
                className="absolute top-1/2 transform -translate-y-1/2 right-20 bg-white bg-opacity-25 hover:bg-opacity-85 rounded-full p-4"
                onClick={() => handleScroll('right')}
            >
                &gt;
            </button>
        </div>
    );
}


