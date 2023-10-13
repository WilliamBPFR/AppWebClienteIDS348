import React, { useState ,useEffect}from "react";
import { Paginator } from 'primereact/paginator';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import { totalProductos,totalProductosSoundex } from "@/services/productoService";
import { useLocation } from 'react-router-dom';




export default function Pagination({onPageChange}) {
    const location = useLocation(); // Utiliza useLocation para obtener la ubicación actual
    const searchParam = new URLSearchParams(location.search).get('search'); // Obtiene el valor del parámetro search
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(8);
    const [totalRecords, setTotalRecords] = useState(0); // Inicializa totalRecords en 0
    const handlePageChange = (event) => {
      setFirst(event.first);
      setRows(event.rows);
      onPageChange(event.page)
  };

    useEffect(() => {
        // Llama a la función totalProductos para obtener la cantidad total de productos
        if(location.pathname == "/"){
        if(searchParam == undefined || searchParam == "" || searchParam == null){
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
        }else{
            totalProductosSoundex(searchParam)
            .then(response => {
                // Actualiza el estado de totalRecords con el valor obtenido
                console.log("ESTOOOO FUNCIONNAAAA");
                console.log(response.data);
                setTotalRecords(response.data.value); // Asegúrate de que response.data contenga la cantidad total
            })
            .catch(error => {
                console.error('Error al obtener la cantidad total de productos:', error);
            });
        }
    }
    }, [searchParam]); // Este efecto se ejecutará una vez al cargar el componente

    // const onPageChange = (event) => {
    //   console.log("ENTRE ONPAGECHANGE");
    //   console.log("Primero: "+event.first);
    //   console.log("Filas: "+event.rows);
    //     setFirst(event.first);
    //     setRows(event.rows);
    // };


    return (
        <div className="">
            <Paginator first={first}
             rows={rows} 
            totalRecords={totalRecords}
            onPageChange={handlePageChange} />
        </div>
    );
}
        