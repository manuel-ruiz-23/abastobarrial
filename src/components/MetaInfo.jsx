import React from 'react';
import  MetaData  from 'react-meta-tags';

const MetaInfo = props => {

    const descripcion = props.descripcion ? props.descripcion : "Los hermosillenses juntos podemos más.";
    const titulo = props.titulo ? props.titulo : "Abasto Barrial";
    const imagen = props.imagen ? props.imagen : "../ logo.png";
        return (
            <MetaData>
                <meta property="og:type" content="article" />
                <meta property="og:title" content={titulo} />
                <meta property="og:description" content={descripcion} />
                <meta property="og:image" content={imagen} />
                <meta property="og:locale" content="es-mx" />
            </MetaData>
        )
}

export default MetaInfo