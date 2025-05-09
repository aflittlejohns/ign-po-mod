/// <reference types="react" />
import { Edges, Point, Transform } from '../perspective-client';
import { ComponentStore } from '../stores/ComponentStore';
export declare namespace PipeUtils {
    /** Const */
    const angleSnap = 15;
    const auxWidth = 16;
    const directionOffset = 13;
    const handleWidth = 16;
    const selectionWidth = 16;
    const snappingMargin = 8;
    const guidePointWidth = 16;
    const orthogonalMargin = 0.5;
    const defaultWidth = 10;
    const strokeWidth = 2;
    const halfStrokeWidth: number;
    const nudgeAmount = 5;
    const minClickTarget = 12;
    const notifyRate = 0;
    const mouseRate: number;
    const selectionRate: number;
    const updateDimensionsRate: number;
    const forceUpdateTimeout: number;
    const shadowDimensionMargin = 20;
    const lightenOrDarkenAmount = 40;
    const drawingMargin = 8;
    /** Types */
    type EffectivePipeAppearance = "simple" | "mimic" | "p&id";
    type PipeAppearance = EffectivePipeAppearance | "auto";
    type Pipes = Array<Pipe>;
    type PipeDecoration = "none" | "arrowInward" | "arrowOutward";
    type LineVariant = "solid" | "dashed" | "midArrow" | "wavy";
    type PointTransform = (point: Point) => Point;
    type PipeMode = null | "draw" | "move";
    /** Enum */
    enum PipeEvents {
        onPipeClicked = "onPipeClicked"
    }
    enum OrthogonalPipeDirection {
        HORIZONTAL_POSITIVE = 0,
        HORIZONTAL_NEGATIVE = 1,
        VERTICAL_POSITIVE = 2,
        VERTICAL_NEGATIVE = 3
    }
    enum PipeMoveMode {
        ALL_POINTS = 0,
        FREE_MOVE = 1,
        ORTHOGONAL = 2,
        ROTATE = 3
    }
    enum RotationMode {
        PREVIOUS_CONNECTION = 0,
        FIRST_CONNECTION_ALL = 1,
        FIRST_CONNECTION_CONNECTION_ONLY = 2,
        DISABLED = 3
    }
    enum Theme {
        ROOT = "ia_piping",
        PIPE = "ia_pipe",
        PIPE_ISOLATE = "ia_pipeIsolate",
        PIPE_SEGMENT = "ia_pipeSegment",
        PIPE_SEGMENT_PID = "ia_pipeSegment--pid",
        PIPE_SEGMENT_MIMIC = "ia_pipeSegment--mimic",
        PIPE_SEGMENT_OVERLAY = "ia_pipeSegmentOverlay",
        PIPE_SEGMENT_SELECTED = "ia_pipeSegment--selected",
        PIPE_SEGMENT_STROKE = "ia_pipeSegment__stroke",
        PIPE_SEGMENT_CLICK_TARGET = "ia_pipeSegment__click_target",
        PIPE_SEGMENT_NODE = "ia_pipeSegmentNode",
        PIPE_SEGMENT_NODE_MIMIC = "ia_pipeSegmentNode--mimic",
        PIPE_SEGMENT_NODE_PID = "ia_pipeSegmentNode--pid",
        PIPE_SEGMENT_NODE_PID_SELECTED = "ia_pipeSegmentNode--pid--selected",
        PIPE_MASK_VISIBLE = "ia_pipeMaskVisible",
        PIPE_MASK_INVISIBLE_RECTANGLE = "ia_pipeMaskInvisible--rectangle",
        PIPE_MASK_INVISIBLE_ARROW = "ia_pipeMaskInvisible--arrow",
        PIPE_MASK_INVISIBLE_LINE = "ia_pipeMaskInvisible--line",
        PIPE_PRIMARY_STOP = "ia_pipeSegmentPrimaryStopColor",
        PIPE_SECONDARY_STOP = "ia_pipeSegmentSecondaryStopColor",
        PIPE_MIX_BLEND_MODE_LIGHTEN = "pipe-blend-mode-lighten",
        PIPE_MIX_BLEND_MODE_DARKEN = "pipe-blend-mode-darken"
    }
    /** Interface */
    interface PipeSelection {
        path: string;
        selectedPipes: Array<number>;
    }
    interface ConnectedPoint extends Point {
        connections?: Array<ConnectedPoint>;
    }
    interface PID_MaskInfo {
        connectionAddress: Array<number>;
        origin: Point;
        connectedPoint: Point;
        radius: number;
    }
    interface PipeAppearanceProps {
        appearance: PipeAppearance;
        flanges?: boolean;
        lineVariant?: LineVariant;
        start?: PipeDecoration;
        end?: PipeDecoration;
        fill?: string;
        stroke?: string;
        visible?: boolean;
        width: number;
    }
    interface Pipe extends PipeAppearanceProps {
        name: string | number;
        origin?: ConnectedPoint;
    }
    interface PipeInfo {
        pipeIndex: number;
        pipe: Pipe;
        pointToProp: PipeUtils.PointTransform;
    }
    interface PipesInfo {
        pipesIndexes: Set<number>;
        pipes: Pipes;
        pointToProp: PipeUtils.PointTransform;
    }
    interface PipeConnectionInfo {
        connectionAddress: Array<number>;
        connectionIndex?: number;
        connection: ConnectedPoint;
        origin: ConnectedPoint;
        pipeWidth: number;
        pipes: Pipes;
        pointToProp: PipeUtils.PointTransform;
        previousConnection?: ConnectedPoint;
        relatedConnectionAddress?: Array<number> | null;
        dragInProgress?: boolean;
        selected?: boolean;
    }
    interface PipePointDistance {
        angle: number;
        distance: number;
        x: number;
        y: number;
    }
    interface SnapInfo {
        pipeWidth: number;
        origin: Point;
        snapX?: Point;
        snapY?: Point;
    }
    /** Functions */
    /** Event Functions */
    function getInverseTransformPoint(point: Point, screenCumulativeTransformation: Array<Transform>): Point;
    function getPipeMoveModeFromEvent(event: MouseEvent): PipeMoveMode;
    /** Math Functions */
    function distanceBetweenPoints(point1: ConnectedPoint, point2: ConnectedPoint): PipePointDistance;
    function findPipeEdges(point: ConnectedPoint): Edges;
    function findPipesEdges(pipes: Pipes): Edges;
    function findHandleEdges(pipes: Pipes): Edges;
    function getPipesMargin(pipes: Pipes): number;
    function getConnectedPointFromConnectedPoint(targetAddress: Array<number>, connectedPoint: ConnectedPoint | undefined, targetAddressIndex?: number): ConnectedPoint | undefined;
    function shouldCombine(point1: Point, point2: Point, combinedRadius?: number): boolean;
    function getConnectedPointPath(connectionAddress: Array<number>, origin: ConnectedPoint, connectedPointPath?: Array<ConnectedPoint>, connectionAddressIndex?: number): Array<ConnectedPoint>;
    function getPointAtLengthFunction(point1: ConnectedPoint, point2: ConnectedPoint): (length: number) => Point;
    function getAvailableOrthogonalDirections(connectedPoint: ConnectedPoint, previousConnection?: ConnectedPoint): Array<OrthogonalPipeDirection>;
    function isOrthogonal(direction: OrthogonalPipeDirection, connectedPoint1: ConnectedPoint, connectedPoint2: ConnectedPoint): boolean;
    function getPipeSnapPositions(originAddress: Array<number>, pipes: Pipes): Array<Point>;
    function withinOrthogonalMargin(axis1: number, axis2: number): boolean;
    function shouldMoveOrthogonal(orthoX: boolean, connection1: ConnectedPoint, connection2: ConnectedPoint): boolean;
    function snapPointToLine(pointToSnap: Point, linePoint1: Point, linePoint2: Point, combinedRadius: number): Point;
    function zeroPlus(n: number | undefined | null): number;
    function getPidMaskAppearanceProps(pipe: Pipe): Partial<PipeAppearanceProps>;
    function getPipeAppearanceProps(pipe: Pipe): PipeAppearanceProps;
    function arePipeAppearancesEqual(pipe1?: Pipe, pipe2?: Pipe, maskMode?: boolean): boolean;
    function clonePipe(pipe: Pipe): Pipe;
    function cloneConnectedPoint(connectedPoint?: ConnectedPoint): ConnectedPoint;
    function areConnectedPointCoordinatesEqual(connectedPoint1: ConnectedPoint | undefined, connectedPoint2: ConnectedPoint | undefined): boolean;
    function areConnectionAddressesEqual(address1?: Array<number>, address2?: Array<number>): boolean;
    /** Prop Functions */
    function connectionAddressToPipingProp(pipePointAddress: Array<number>, index?: number): string;
    function getPipeSegmentAddressString(segmentAddress: Array<number>): string;
    function getEffectivePipeAppearance(pipe: PipeUtils.Pipe, sessionAppearance: string): EffectivePipeAppearance;
    function isAppearanceValid(appearance: string): boolean;
    const roundPointValues: PointTransform;
    /**
     * Returns true if a connection has been added at the connection address, and connectionIndex. x, and y will snap to
     * its parent coordinates.
     *
     * @param connectionAddress
     * @param connectionIndex - if null, the newly added connection will be pushed to the end of connection.connections
     * @param connection - the origin (for the first recursive iteration)
     * @param x
     * @param y
     */
    function addConnectionRecursive(connectionAddress: Array<number>, connectionIndex: number | null, connection: ConnectedPoint, x: number, y: number, connectionAddressIndex?: number): boolean;
    function moveOrthogonal(pointToProp: PointTransform, pipeMoveAddressStrings: Set<string>, store: ComponentStore, connectionAddress: Array<number>, origin: ConnectedPoint, diffX: number, diffY: number): void;
    function moveOrthogonalOrigin(pointToProp: PointTransform, pipeMoveAddressStrings: Set<string>, store: ComponentStore, connectionAddress: Array<number>, connection: ConnectedPoint, diffX: number, diffY: number): void;
    /**
     * Moves the Pipe Segments and Writes to the Prop
     */
    function movePipeSegments(pointToProp: PointTransform, pipeMoveAddressStrings: Set<string> | null, store: ComponentStore, connectionAddress: Array<number>, connection: ConnectedPoint, diffX: number, diffY: number): void;
    /**
     * Moves the Pipe Segments and does not Write to the Prop
    */
    function translatePipeSegments(connection: ConnectedPoint, diffX: number, diffY: number): void;
    /**
     * returns an array of pipes consisting of the existing pipe (if its origin has still has a connection),
     * and the pipes made from the deleted connection's connections (if they exist).  For new pipes that are created,
     * the new Pipe's props (appearance, width, etc) equal to the original pipe's props.
     *
     * @param pipe
     * @param connectionAddress
     * @param connection - the origin (for the first recursive iteration)
     */
    function removeConnectionRecursive(pipe: Pipe, connectionAddress: Array<number>, connection: ConnectedPoint, connectionAddressIndex?: number, previousConnection?: ConnectedPoint, previousPreviousConnection?: ConnectedPoint): Pipes;
    function reorderPipes(currentPipes: Pipes, pipeIndex: number, targetIndex: number): Pipes;
    function rotatePipeSegments(pointToProp: PointTransform, pipeMoveAddressStrings: Set<string>, store: ComponentStore, connectionAddress: Array<number>, connection: ConnectedPoint, angle: number, rotationOrigin: Point): void;
    function rotateConnectedPoint(pointToProp: PointTransform, pipeMoveAddressStrings: Set<string>, store: ComponentStore, connectionAddress: Array<number>, connection: ConnectedPoint, angle: number, rotationOrigin: Point): void;
    function scaleConnectedPoint(pointToProp: PointTransform, store: ComponentStore, anchor: ConnectedPoint, connectionAddress: Array<number>, connection: ConnectedPoint, scaleFactorX: number, scaleFactorY: number): void;
    function writeDiffToConnectedPoint(pointToProp: PointTransform, pipeMoveAddressStrings: Set<string> | null, store: ComponentStore, connectionAddress: Array<number>, connection: ConnectedPoint, diffX: number, diffY: number): void;
    function writeToConnectedPoint(pointToProp: PointTransform, pipeMoveAddressStrings: Set<string>, store: ComponentStore, connectionAddress: Array<number>, connection: ConnectedPoint, newCoordinates: Point): void;
    function getRotationMode(connection: ConnectedPoint, previousConnection?: ConnectedPoint): RotationMode;
    function rotatePoint(point: Point, degrees: number, origin: Point): Point;
    function generateUniqueName(pipes: Pipes, name: string | number): string | number;
    function removeNullConnections(connectedPoint: ConnectedPoint): void;
    function isPercentToFixedConversionNeeded(connectedPoint: ConnectedPoint): boolean;
    function isFixedToPercentConversionNeeded(connectedPoint: ConnectedPoint): boolean;
    function convertConnectedPointToScreenCoordinates(connectedPoint: ConnectedPoint, width: number, height: number): void;
    /** Style Functions */
    function getMaxWidth(pipes: Pipes): number;
    function getPipeRadius(pipe: Pipe): number;
    function getPipeWidth(pipe?: Pipe): number;
    function getPipeConnectionHandleStyle(point: Point): Partial<React.CSSProperties>;
    function getStrokeDashArrayLeftRightOpen(pipeRadius: number, segmentLength: number): string;
    function getStrokeDashArrayLeftOpen(pipeRadius: number, segmentLength: number): string;
    function getMaskId(type: "mask" | "mask-part", segmentAddressString: string, viewMountPath: string, parentAddressString: string, overlapGap?: number): string;
    function getGradientId(base: "linear-gradient" | "radial-gradient", index: number, viewMountPath: string, parentAddressString: string): string;
    function getConnectionAddressId(base: "mask" | "mask-part", connectionAddress: Array<number>, viewMountPath: string, parentAddressString: string): string;
    function getDecorationWidth(pipeRadius: number): number;
    function shouldRenderMidFlange(distance: number, decorationWidth: number, pipeRadius: number): boolean;
    function getSimpleOrMimicPipeNodeStyle(appearance: "simple" | "mimic", pipeIndex: number, pipeSegmentSelected: boolean, viewMountPath: string, parentAddressString: string, fill?: string, stroke?: string): React.CSSProperties;
    function getSimpleOrMimicPipeSegmentStyle(appearance: "simple" | "mimic", pipeIndex: number, pipeSegmentSelected: boolean, viewMountPath: string, parentAddressString: string, fill?: string, stroke?: string): React.CSSProperties;
    function getSimpleOrMimicPipeOverlayStyle(appearance: "simple" | "mimic", pipeIndex: number, viewMountPath: string, parentAddressString: string, fill?: string): React.CSSProperties;
    function colorToRGB(color: any): string;
    function lightenDarkenColor(color: any, amt: number): string;
    function getLuminance(color: any): number;
    function isDarkMode(fill: string, stroke: string): boolean;
    function maybeOverlap(maskInfo1: PID_MaskInfo, maskInfo2: PID_MaskInfo): boolean;
}
