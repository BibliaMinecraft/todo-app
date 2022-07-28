import React from 'react'
import { Ring } from "react-awesome-spinners";

import "../style/LoadingSpinner.css"
export function LoadingSpinner({ value }) {
    if (value)return (
        <div className='loading-spinner'>
            <Ring color="#1b1b32" />
            <span className='loading-spinner__text'>Cargando...</span>
        </div>
    );
    if (!value)return;
}
