import * as React from 'react';
import { ClientStore } from "../../stores/ClientStore";
export interface AboutPageProps {
    client: ClientStore;
}
export declare class AboutPage extends React.Component<AboutPageProps, any> {
    props: AboutPageProps;
    render(): JSX.Element;
}
