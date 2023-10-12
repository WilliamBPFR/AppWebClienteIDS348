import React, { useState ,useEffect}from "react";
import { Paginator } from 'primereact/paginator';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import { totalProductos } from "@/services/productoService";



export default function Pagination() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(8);
    const [totalRecords, setTotalRecords] = useState(0); // Inicializa totalRecords en 0

    useEffect(() => {
        // Llama a la función totalProductos para obtener la cantidad total de productos
        totalProductos()
            .then(response => {
                // Actualiza el estado de totalRecords con el valor obtenido
                console.log("ESTOOOO FUNCIONNAAAA");
                console.log(response.data);
                setTotalRecords(response.data.value); // Asegúrate de que response.data contenga la cantidad total
            })
            .catch(error => {
                console.error('Error al obtener la cantidad total de productos:', error);
            });
    }, []); // Este efecto se ejecutará una vez al cargar el componente

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

  //   const handlePageChange = (event) => {
  //     setFirst(event.first);
  //     setRows(event.rows);

  //     // Llama a la función onPageChange y pasa el número de página actual (event.page)
  //     onPageChange(event.page);
  // };
    return (
        <div className="">
            <Paginator first={first}
             rows={rows} 
            totalRecords={totalRecords}  
            onPageChange={onPageChange} />
        </div>
    );
}
        