[**Documentation**](../../index.md)

***

[Documentation](../../index.md) / [perspective-client](../index.md) / ClientStoreProviderContext

# Variable: ClientStoreProviderContext

> `const` **ClientStoreProviderContext**: `React.Context`\<[`Partial`](../type-aliases/Partial.md)\<[`ClientStore`](../../stores/ClientStore/classes/ClientStore.md)\>\>

Defined in: perspective-client.d.ts:29

Important. Needs to precede Client and I18n exports. Order matters.
Declares a Client Store React provider context that is used in app level
components for the primary reason (currently) to give our I18n component access to
the client store.
