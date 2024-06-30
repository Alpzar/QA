// Importa el modulo principal de react
import React from 'react';
// Importa el archivo CSS principal
import "../../index.css";

/**
 * Renders a task card component with the given background color, task number, title, course, and due date.
 *
 * @param {Object} props - The properties object containing the following properties:
 *   - {string} bgColor: The background color of the task card.
 *   - {number} number: The task number.
 *   - {string} title: The title of the task.
 *   - {string} course: The course associated with the task.
 *   - {string} dueDate: The due date of the task.
 * @return {JSX.Element} The task card component.
 */
export function TaskCard({bgColor, number, title, course, dueDate}) {
    return (
        <div className={`${bgColor} p-[4vw] rounded-[3rem] grid hover:scale-[0.97] hover:duration-700 md:w-auto`}>
            <p className="font-bold md:text-[1rem] text-[2.4vw] mb-[2rem]">{number}</p>
            <p className="md:text-[1.5rem] text-[2.5vw] font-normal w-[8vw] md:mr-[2rem] mr-[10vw] mb-2">{title}</p>
            <p className="font-semibold mb-[5vw]">{course}</p>
            <p className="text-[#2c2c2c] font-semibold md:text-[1rem] text-[2vw]">{dueDate}</p>
        </div>
    );
}