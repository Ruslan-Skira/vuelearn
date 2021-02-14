import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.pink.darken2,
        secondary: colors.purple.darken2,
        accent: colors.indigo.darken2,
      },
    },
  },
});
