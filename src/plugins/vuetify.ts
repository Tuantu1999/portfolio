/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#2B5CAD',
          secondary: '#424242',
          accent: '#82B1FF',
          //#region TAG COLORS
          accent1: '#BA1B1B',
          accent2: '#FF8A65',
          accent3: '#FFB74D',
          accent4: '#81C784',
          accent5: '#26C6DA',
          accent6: '#9575CD',
          accent7: '#A1887F',
          //#endregion
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          'v-footer': '#4472C4',
          black: '#001A43',
          lightGray: '#C4C4C4',
          gray: '#8F8F8F',
          textGray: '#575E71',
          deepOrange: '#FF8A65',
          brown: '#A1887F',
          orange: '#FFB74D',
          cyan: '#26C6DA',
          deepPurple: '#9575CD',
          background: '#F7F7FA',
          red: '#BA1B1B',
          green: '#81C784',
          pink: '#F06292',
          blue: '#ACC7FF',
          lightBlue: '#D6E2FF',
          disabled: '#E1E2EC',
          smoke: '#F2F6F8',
          smoke1: '#F1F3F4',
          dee: '#deebf7',
          sky_darken4: '#033d5f',
          sky_darken3: '#086894',
          sky_darken2: '#2b5cad',
          sky_darken1: '#95aed6',
          sky_lighten5: '#42a5f5',
          sky_lighten4: '#3737f4',
          sky_lighten3: '#054cb6',
          sky_lighten2: '#0a6afa',
          sky_lighten1: '#EBF5FD'
        }
      }
    }
  }
})
