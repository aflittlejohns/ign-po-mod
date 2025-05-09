import * as React from 'react';
import { QualityCode } from '../../props/QualityCode';
export interface DataPageProps {
    issues: Array<QualityCode>;
    swipeableActions: {
        updateHeight(): void;
    };
}
export interface QualityIssueProp {
    issue: QualityCode;
    swipeableActions: {
        updateHeight(): void;
    };
}
export interface DataPageState {
    expanded: boolean;
}
/**
 * Page which launches from the app modal quality item, and displays information about data quality issues.
 */
export declare class DataPage extends React.Component<DataPageProps, DataPageState> {
    render(): JSX.Element;
}
