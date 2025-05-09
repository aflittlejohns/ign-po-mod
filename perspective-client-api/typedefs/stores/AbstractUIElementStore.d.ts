import { JL } from 'jsnlog';
import { ComponentStore } from './ComponentStore';
import { ViewStore } from './ViewStore';
import { EventGroupType, PlainObject } from '../perspective-client';
/**
 * Abstract superclass of ViewStore and ComponentStore
 */
export declare abstract class AbstractUIElementStore {
    abstract get view(): ViewStore;
    parent: ComponentStore | null;
    abstract get children(): Array<ComponentStore>;
    addressPathString: string;
    abstract get log(): JL.JSNLogLogger;
    /**
     * Called from the event collections when events from the browser are fired that have a gateway-scoped action
     * associated with them.
     */
    onEventFired(eventType: EventGroupType, eventName: string, event: PlainObject): void;
    /**
     * Takes an string with embedded property references that must be surrounded with brackets, and looks up the
     * values referenced by the paths, and replaces them. For example, the input string "Mickey{this.props.rodentType}"
     * might evaluate to "MickeyMarmot"
     *
     */
    interpolate(obj: any): any;
    private evalTokenEncoded;
    private evalTokenPlain;
    private evalToken;
    private findDescendantByNames;
    /**
     *
     * @param owner The owner of a property tree
     * @param {string} path path to a property prepended with scope, like custom.foo[4] or whatever
     * @param readStrategy used to read from the property tree, some methods require readPlain, others readEncoded
     */
    private evalPropertyOwner;
    /**
     * @param {string} path path to a property prepended with scope, like custom.foo[4] or whatever
     * @param readStrategy used to read from the property tree, some methods require readPlain, others readEncoded
     */
    private evalSession;
}
