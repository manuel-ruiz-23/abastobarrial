import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

interface Props {
    titulo: string;
    date: string;
    body: string;
    contacto: string;
}

const TablonItem: React.FC<Props> = ({
    titulo,
    date,
    body,
    contacto
}) => {
    return (
        <ListGroup.Item className="list-group-item-action text-center">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{titulo}</h5>
                    <small>{date}</small>
                </div>
                <p className="mb-1">{body}</p>
                <small>{contacto}</small>
        </ListGroup.Item>
    )
}

export default TablonItem;