import React from 'react';
import '../../styles/styleUsefrispes.css'
const Logos = () => {
    const logoFiles = require.context('../../../public/Empresas', false, /\.(png|jpg|jpeg|gif)$/);
    const logos = logoFiles.keys().map(logoFiles);

    return (
        <div className='logosmolecule'>
            {logos.map((logo, index) => (
                <img
                key={index}
                src={`/Empresas/Logo${index + 1}.png`}
                alt={`Logo ${index + 1}`}
                style={{ marginRight: '10px' }}
                className={`Logo${index + 1}`}
                />
            ))}
        </div>
    );
};

export default Logos;
