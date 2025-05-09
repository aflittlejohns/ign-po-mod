/**
 * AppModal page which is displayed when the project status action item is clicked.  Contains information about the
 * state of the project, such as version, description, update status, etc.
 */
import * as React from 'react';
import { ResourceStore } from "../../stores/ResourceStore";
export interface ProjectPageProps {
    project: ResourceStore;
}
export declare class ProjectPage extends React.Component<ProjectPageProps> {
    render(): JSX.Element;
}
