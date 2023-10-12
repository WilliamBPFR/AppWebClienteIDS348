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
        return <img src={item.itemImageSrc} alt={item.alt}/>
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt}/>
    }

    return (
     <div>
     <div>
    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} item={itemTemplate} thumbnail={thumbnailTemplate} />
    </div>
  
    </div>
    )
}

export default ProductPhotos;


// import React, { useState, useEffect } from 'react';
// import { Galleria } from 'primereact/galleria';
// import { PhotoService } from './service/PhotoService';

// export default function BasicDemo() {
//     const [images, setImages] = useState(null);
//     const responsiveOptions = [
//         {
//             breakpoint: '991px',
//             numVisible: 4
//         },
//         {
//             breakpoint: '767px',
//             numVisible: 3
//         },
//         {
//             breakpoint: '575px',
//             numVisible: 1
//         }
//     ];

//     useEffect(() => {
//         PhotoService.getImages().then(data => setImages(data));
//     }, [])

//     const itemTemplate = (item) => {
//         return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
//     }

//     const thumbnailTemplate = (item) => {
//         return <img src={item.thumbnailImageSrc} alt={item.alt} />
//     }

//     return (
//         <div className="card">
//             <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
//                 item={itemTemplate} thumbnail={thumbnailTemplate} />
//         </div>
//     )
// }
        