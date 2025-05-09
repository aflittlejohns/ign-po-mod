[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [action/PopupAction](../index.md) / PopupAction

# Variable: PopupAction

> `const` **PopupAction**: [`ActionFactory`](../../../api/action/ActionRegistry/interfaces/ActionFactory.md)\<[`PopupActionConfig`](../interfaces/PopupActionConfig.md)\>

Defined in: action/PopupAction.d.ts:61

Popup action - creates a new popup window, or closes an existing one
type = "popup"
scope = "C"
config:
  type {"open" | "close" | "toggle"} - Determines which operation to apply on popup
  id {string} - unique popup identity
  viewPath {string} - path to view
  viewParams {string} - parameters to pass to view
  title {string} - text to display in titlebar. If not present or empty, no titlebar is rendered
  position {object} - Optional dimensions for positioning and sizing popup
           properties:
                 width {number} - Optional width in pixels. If none supplied, defaults to view default width.
                 height {number} - Optional height in pixels. If none supplied, defaults to view default height.
                 left {number} - Optional left position in pixels. If neither 'left' nor 'right' supplied, defaults
                                 to horizontal center of screen.
                 top {number} - Optional top position in pixels. If neither 'top' nor 'bottom' supplied, defaults
                                to vertical center of screen.
                 right {number} - Optional right position in pixels. If neither 'left' nor 'right' supplied, defaults
                                  to horizontal center of screen.
                 bottom {number} - Optional top position in pixels. If neither 'top' nor 'bottom' supplied, defaults
                                   to vertical center of screen.
  closeIcon {boolean} - display close icon
  draggable {boolean} - popup is able to be dragged to new positions
  resizable {boolean} - popup is able to be resized
  modal {boolean} - while open, a popup with modal set to true is only window a user can interact with
  overlayDismiss {boolean} - option for modal popups - whether user can dismiss/close window by clicking outside it
