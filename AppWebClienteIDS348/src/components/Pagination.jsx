import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';



export default function Pagination() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className="">
            <Paginator first={first}
             rows={rows} 
            totalRecords={120}  
            onPageChange={onPageChange} />
        </div>
    );
}
        