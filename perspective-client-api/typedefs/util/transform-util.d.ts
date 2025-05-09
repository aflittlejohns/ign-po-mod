import * as TransformationMatrix from 'transformation-matrix';
import { DetailedRectangle, Point } from '../perspective-client';
export interface Transform {
    origin?: Point;
    matrix: TransformationMatrix.Matrix;
}
export declare function getMousePosition(e: MouseEvent): Point;
export declare function getTouchPosition(e: Event): Point;
/**
 * Is this matrix expressed by parts the identity matrix
 * @param a
 * @param b
 * @param c
 * @param d
 * @param e
 * @param f
 */
export declare function isIdentity(a?: number, b?: number, c?: number, d?: number, e?: number, f?: number): boolean;
/**
 * Is this matrix an identity matrix
 * @param matrix
 */
export declare function isIdentityMatrix(matrix?: TransformationMatrix.Matrix): boolean;
/**
 * Given an array of transformations, returns a single string representing the css of this transform
 * (not adjusted for origin).
 */
export declare function transformationsToTransformCss(transformations: Array<Transform>): string | undefined;
export declare function tranformationsToTransformationMatrix(transformations: Array<Transform>): TransformationMatrix.Matrix | undefined;
export declare function getScreenPosition(element: HTMLElement): Point;
export declare function getScreenCumulativeTransformation(element: HTMLElement): Array<Transform>;
/**
 * Given a point, this calculator can apply the appropriate Transformations to determine where this point should be after transformations
 */
export declare class PointTransform {
    private point;
    constructor(x: number, y: number);
    /**
     * Transform this point by the specified matrix
     * @param matrix
     */
    transformByMatrix(matrix: TransformationMatrix.Matrix): PointTransform;
    /**
     * Transform this point by this transformation (matrix & origin) and apply any specified origin adjustment
     * @param transformation
     * @param originAdjustment
     * @param inverse
     */
    transformByTransformation(transformation: Transform, originAdjustment?: Point, inverse?: boolean): PointTransform;
    /**
     * Transform this point by this array of transformations (matrix & origin)
     * @param transformationArray
     * @param originAdjustment
     * @param inverse
     */
    transformByTransformationArray(transformationArray: Array<Transform>, originAdjustment?: Point, inverse?: boolean): PointTransform;
    /**
     * Translate this point by this x and y
     * @param x
     * @param y
     * @param inverse
     */
    translate(x: number, y: number, inverse?: boolean): PointTransform;
    /**
     * Translate this point by this point
     * @param point
     * @param inverse
     */
    translateByPoint(point: Point, inverse?: boolean): PointTransform;
    /**
     * Return a new point object representing this point
     */
    toPoint(): Point;
}
export declare class PointsTransform {
    protected _points: Array<Point>;
    protected _leftEdge: number;
    protected _rightEdge: number;
    protected _topEdge: number;
    protected _bottomEdge: number;
    protected _centerPoint: Point;
    protected rect: DetailedRectangle;
    constructor(rect: DetailedRectangle);
    private setEdges;
    get leftEdge(): number;
    get rightEdge(): number;
    get topEdge(): number;
    get bottomEdge(): number;
    get centerPoint(): Point;
    transformByTransformation(transformation?: Transform, setEdges?: boolean): PointsTransform;
    transformByTransformationArray(transformationArray: Array<Transform>): PointsTransform;
    translate(x: number, y: number): PointsTransform;
    toPointsArray(): Array<Point>;
    clone(): PointsTransform;
}
