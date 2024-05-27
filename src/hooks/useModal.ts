import { ModalContext } from '@/contexts/ModalContext';
import { useContext } from 'react';

export const useModal = () => {
    const context = useContext(ModalContext);

    return { ...context };
};
