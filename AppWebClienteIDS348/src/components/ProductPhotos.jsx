import React, { useState } from 'react';
import { Galleria } from 'primereact/galleria';
import foto1 from '@/assets/foto1.jpg';
import foto1min from '@/assets/foto1.gif';
import foto2 from '@/assets/foto2.jpg';
import foto2mini from '@/assets/foto2mini.jpg';
import foto3 from '@/assets/foto3.jpg';
import foto3min from '@/assets/foto3.gif';

function ProductPhotos() {
    const [images] = useState([
        {
            itemImageSrc: foto1,
            thumbnailImageSrc: foto1min,
            alt: 'Descripción de la imagen 1'
        },
        {
            itemImageSrc: foto2,
            thumbnailImageSrc: foto2mini,
            alt: 'Descripción de la imagen 2'
        },
        {
            itemImageSrc: foto3,
            thumbnailImageSrc: foto3min,
            alt: 'Descripción de la imagen 3'
        },
    ]);

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 2
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return (
        <div> {/* Agrega una clase al div contenedor */}
            <div className="border border-gray rounded">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
        </div>
    )
}

export default ProductPhotos;
