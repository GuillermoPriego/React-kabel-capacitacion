import * as React from 'react';
import noDataSvg from './svg/no_data.svg';

const NoData = ({ text = "No hay datos disponibles" }) =>
    (
        <div className="text-center">
            <img src={noDataSvg} className="m-auto w-2/6" />
            <p className="my-3">{text}</p>
        </div>
    );

export default NoData;