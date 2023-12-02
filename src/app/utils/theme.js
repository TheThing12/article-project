import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const base = createTheme({
  palette: {
    primary: {
      main: '#E50914',
    },
    secondary: {
      main: 'FFFFF',
    },
    error: {
        main: red[400]

    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 720,
          md: 960,
          lg: 1100,
          xl: 1536,
        },
      },
  },
});
const theme = responsiveFontSizes(base)
export default theme