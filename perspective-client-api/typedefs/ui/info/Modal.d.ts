import * as React from 'react';
interface ModalProps {
    children?: JSX.Element;
    classes?: string;
    onClick?: ((event: React.MouseEvent<HTMLDivElement>) => void);
    zIndex?: number;
}
export declare const Modal: (props: ModalProps) => JSX.Element;
export {};
