import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { LoadingSpinner } from './styles';

export default function Loading() {
    return (
        <LoadingSpinner>
            <FaSpinner color="#FFF" size={64} />
        </LoadingSpinner>
    );
}
