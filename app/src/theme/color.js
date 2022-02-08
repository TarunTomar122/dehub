import { palette } from './palette';

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  palette,

  transparent: 'rgba(0, 0, 0, 0)',

  background: palette.black,

  primary: palette.pink,
  primaryBold: palette.darkPink,
  secondaryBold: palette.darkYellow,
  secondary: palette.yellow,
  tertiary: palette.blue,
  tertiaryBold: palette.darkBlue,

};
