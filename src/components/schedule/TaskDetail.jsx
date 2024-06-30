// Importa el archivo CSS principal para estilos globales
import "../../index.css";

import { Footer } from "../basics/Footer";

import { useFetchEvent } from "../hooks/useFetchEvent";

import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";


// Define el componente funcional Course
export function TaskDetail() {


    const id = useLocation();
    console.log(id.state);

    const { data, isLoading } = useFetchEvent(id.state);
    console.log(data);

    const createData = (data) => {
        console.log(data);
        return (
            <>
             {/* Sección principal con estilos para el contenedor del curso*/}
            <section className="bg-white rounded-lg border border-[#E0E0E0] w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto gap-4 mt-4 mb-8">
                {/* Contenedor de la imagen del curso */}
                <div>
                    <img className="w-full h-[20rem] rounded-t-lg" src={"http://localhost/taskflowbackend/public/" + data[0].image} alt="#" />
                </div>
                {/* Contenedor de los detalles del curso */}
                <div className="p-8">
                    <div>
                        {/* Título del curso */}
                        <h2 className="clamp-xl font-bold mt-4 mb-4">{data[0].title}</h2>
                    </div>
                    <div className="mt-6">
                        {/* Subtítulo y descripción del curso */}
                        <h3 className="clamp-md font-bold">Description</h3>
                        <p className="clamp-md line-clamp-3">{data[0].description}</p>
                    </div>

                    <div className="mt-6">
                        {/* estado del curso */}
                        <h3 className="clamp-md font-bold">Status</h3>
                        <p className="clamp-md line-clamp-3">{data[0].status}</p>
                    </div>

                    <div className="mt-6">
                        {/* Fcha de creacion */}
                        <h3 className="clamp-md font-bold">Created</h3>
                        <p className="clamp-md line-clamp-3">{data[0].created_at}</p>
                    </div>


                    <div className="mt-8 flex justify-end">
                        {/* Fcha de creacion */}
                        <a href="/schedulepage" className="text-center  bg-[#6BDD8F] hover:bg-green-600 text-white py-4 px-4 rounded-2xl w-[10rem]">Back</a>
                    </div>
                </div>
            </section>

            <Footer/>

            </>
        );
    }

    return (
        <>
            {isLoading ? <p>Loading...</p> : createData(data)}
        </>
    );

}
