import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast'

interface ToastContainerProps {
    toasts: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
    const toastsWithTransaitions = useTransition(
        toasts, 
        toast => toast.id, 
        {
            from: { right: '-120%', opacity: 0 },
            enter: { right: '0%', opacity: 1 },
            leave: { right: '-120%', opacity: 0 },
        }
    );
    return (
        <Container>
            {toastsWithTransaitions.map(({ item, key, props }) => (
                <Toast key={key} style={props} toast={item} />
            ))}
        </Container>
    );
};

export default ToastContainer;