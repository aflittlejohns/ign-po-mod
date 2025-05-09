/**
 * These are global classes that can be reused across components, and
 * are exposed as class selectors in the theme files.
 *
 * More specific classes can be declared by the component itself,
 * and then exposed in the appropriate theme files.
 *
 * We use a modified form of the BEM (Block Element Modifier) ABEM (Atomic Block Element Modifier)
 * to minimize collisions, help provide structure and provide a standardized convention for CSS classnames.
 *
 * You can read up on the basics here: http://getbem.com/naming/.
 * For the modified form https://css-tricks.com/abem-useful-adaptation-bem/.
 *
 * The format in a nutshell:
 * .ia_blockName__elementName--modifierName
 *                  or
 * .ia_cylindricalTank__liquid--animation
 *
 * Use an atomic prefix of 'ia_' to clearly mark that this class is
 * reserved for theming purposes.
 *
 * Use camel case for words between hyphen and underscore separators.
 * Hyphens and underscores are reserved to provide clear separation of groups (A_B__E--M)
 *
 * Constants are declared in all caps.  This makes it easy to distinguish
 * between enums (which use Pascal Case).
 */
export declare namespace Theming {
    enum Container {
        ROOT = "ia_container--root",
        PRIMARY = "ia_container--primary",
        SECONDARY = "ia_container--secondary"
    }
    namespace Designing {
        enum Container {
            ADD_CHILD = "ia_designing__container__addChild"
        }
        enum Selection {
            SELECTED = "ia_designing__selection--selected",
            DEEP_SELECTED = "ia_designing__selection--deepSelected",
            PENDING_SELECTION = "ia_designing__selection--pending",
            MARQUEE = "ia_designing__selectionMarquee",
            MARQUEE_INTERSECT = "ia_designing__selectionMarquee--intersect",
            MARQUEE_ENCOMPASS = "ia_designing__selectionMarquee--encompass",
            OVERLAY = "ia_designing__selectionOverlay",
            OVERLAY_DEEP = "ia_designing__selectionOverlayDeep"
        }
        enum Duplication {
            GHOST = "ia_designing__duplicationGhost"
        }
    }
}
