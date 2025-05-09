import * as React from 'react';
import { ClientStore, ClientStoreProviderContext, ComponentStore } from '../../perspective-client';
export interface I18nProps {
    children: React.ReactNode;
    store?: ClientStore;
}
/**
 * A utility function that attempts to translate the given term, based on the translations defined on the gateway,
 * using the locale defined in `session.props.locale`
 * @param store: a ComponentStore or the global ClientStore - required to reach the ResourceStore that contains the
 *     actual translations
 * @param term the term to translate. Returned unmodified if there is no translation available.
 */
export declare function i18n(store: ClientStore | ComponentStore, term: string): string;
/**
 * A utility component that provides functionality for rendering text that is translatable via Ignition's translation
 * system.  If the session's locale is set to a value which has translations registered, and the text being supplied
 * to this component matches any term that locale, then the actual displayed term will be the translated version.
 *
 *
 * Note that the property value does not change, just the text being displayed.
 */
export declare class I18n extends React.Component<I18nProps> {
    static contextType: React.Context<import("../../perspective-client").Partial<ClientStore>>;
    context: React.ContextType<typeof ClientStoreProviderContext>;
    render(): React.ReactNode;
}
