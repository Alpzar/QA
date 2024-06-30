// Importa el archivo CSS principal
import "../../index.css";
// importa el componente Carousel
import { Carousel } from "./Carousel.jsx";
// define el componente Task
export function Task() {
    return (
        <div className="mt-[4em]">
            {/* contenedor del carrusel y el banner de información */}
            <section className="bg-[#212121] rounded-[5rem] md:p-20 p-[2rem] md:grid md:grid-cols-[1fr_2fr] mx-[4vw] relative">
                {/* Contiene el texto de las tareas pendientes*/}
                <div className="content-end">
                    <h2 class="md:text-[1.5vw] text-[3vw] mb-1 text-white font-bold md:text-start text-center">Pending jobs</h2>
                    <p class="md:text-[2vw] text-[3.5vw] md:mb-4 mb-1 text-white font-normal md:text-start text-center">Hello (usuario)</p>
                    <h3 class="md:text-[1vw] text-[2vw] text-white md:text-start text-center">This week you have <br />
                        <span className="pt-4 md:text-[2vw] text-[4vw] font-semibold md:text-start text-center">10 tasks</span> </h3>
                    <div className="flex md:justify-start justify-center">
                        <button class="flex md:py-4 py-3 px-12 md:mt-[10vw] mt-[2rem] mb-[1.5rem] bg-[#6BDD8F] text-[#fff] md:text-[1vw] text-[3vw] items-center rounded-[1rem] hover:scale-[1.08] hover:duration-500 hover:bg-[#48ad68]">View all ~ </button>
                    </div>
                </div>
                {/* componente Carousel */}
                <Carousel />
            </section>
            {/* texto que sería el subtitulo de la siguiente seccion */}
            <p className="text-2xl font-semibold pt-[2vw] text-center">Calendar and Tasks</p>
        </div>
    )
}
