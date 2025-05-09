[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [theming/Theme](../../index.md) / Theming

# Theming

These are global classes that can be reused across components, and
are exposed as class selectors in the theme files.

More specific classes can be declared by the component itself,
and then exposed in the appropriate theme files.

We use a modified form of the BEM (Block Element Modifier) ABEM (Atomic Block Element Modifier)
to minimize collisions, help provide structure and provide a standardized convention for CSS classnames.

You can read up on the basics here: http://getbem.com/naming/.
For the modified form https://css-tricks.com/abem-useful-adaptation-bem/.

The format in a nutshell:
.ia_blockName__elementName--modifierName
                 or
.ia_cylindricalTank__liquid--animation

Use an atomic prefix of 'ia_' to clearly mark that this class is
reserved for theming purposes.

Use camel case for words between hyphen and underscore separators.
Hyphens and underscores are reserved to provide clear separation of groups (A_B__E--M)

Constants are declared in all caps.  This makes it easy to distinguish
between enums (which use Pascal Case).

## Namespaces

- [Designing](namespaces/Designing/index.md)

## Enumerations

- [Container](enumerations/Container.md)
