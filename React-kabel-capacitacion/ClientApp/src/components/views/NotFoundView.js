import * as React from 'react';
import notFoundSvg from '../utils/svg/not_found.svg';

const NotFoundView = () =>
    (
        <div className="text-center">
            <img className="m-auto" src={notFoundSvg} style={{ width: '400px', maxWidth: '90vw' }} alt="not found"/>
            <p className="my-4">
                No hay nada por aquí <br />
                Añade una feed o seleciona una existente
            </p>
        </div>
    );

export default NotFoundView;
