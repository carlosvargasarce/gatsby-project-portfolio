import Typography from "typography"
//import kirkhamTheme from "typography-theme-kirkham"
const typography = new Typography({
  baseFontSize: "16px",
  headerFontFamily: [
    'Montserrat',
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ['Montserrat', "Helvetica", "Arial", "sans-serif"],
})
export default typography
export const rhythm = typography.rhythm