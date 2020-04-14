import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

interface Props {
    children: React.ReactNode | React.ReactNodeArray;
}

const TablonAnuncios: React.FC<Props> = ({children}) => {
    return (
        <ListGroup style={{ maxWidth: '512px' }}>
            {children}
        </ListGroup>
    )
}

export default TablonAnuncios;