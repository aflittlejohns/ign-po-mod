import * as React from 'react';
import { Point } from '../perspective-client';
import { PortalDestinationMeta } from '../util/utils';
export interface TooltipProps {
    hasTail: boolean;
    isComponentTooltip: boolean;
    positionContext: PortalDestinationMeta;
    style: React.CSSProperties;
    text: string;
    location?: string;
    mouseLocation?: Point;
    parentDimensons?: any;
    width?: string | number;
}
export declare class ComponentTooltip extends React.PureComponent<TooltipProps, any> {
    tooltip: HTMLElement | null;
    tail: HTMLElement | null;
    constructor(props: TooltipProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: TooltipProps): void;
    setTooltipRef(tooltip: HTMLElement | null): void;
    setTooltipTailRef(tail: HTMLElement | null): void;
    maybeUpdateTooltipPosition(prevProps: TooltipProps): void;
    delegateTooltipPosition(parentDimensons: any, styleProp: string, location: string): string;
    delegateTailPosition(tailDimensions: any, styleProp: string, location: string): string;
    calculateTailPositionTop(tooltipDimensions: DOMRect, tailDimensions: any, location: string, position: string): string;
    calculateTailPositionLeft(tooltipDimensions: DOMRect, tailDimensions: any, location: string, position: string): string;
    calculateTooltipPositionTop(tooltipDimensions: DOMRect, parentDimensons: DOMRect, location: string, position: string): string;
    handleTooltipOutsideViewportTop(position: string, tooltipDimensions: DOMRect, viewportHeight: number): string;
    calculateTooltipPositionLeft(tooltipDimensions: DOMRect, parentDimensons: any, location: string, position: string): string;
    handleTooltipOutsideViewportLeft(position: string, tooltipDimensions: DOMRect, viewportWidth: number): string;
    handleTailDirection(): string;
    renderTail(): JSX.Element;
    render(): JSX.Element;
}
