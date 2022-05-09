import React from 'react';
import { Card } from 'primereact/card';
import './Card.scss'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';


const CardDemo = () => {

    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );

    return (
        <div className='card-container'>

            <Card title="Ordenadores"  style={{ width: '25em' }}  header={header}>
            </Card>
        </div>
    )}

    export default CardDemo