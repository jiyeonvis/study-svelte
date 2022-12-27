const sveltePreprocess = require('svelte-preprocess');
// import { src_url_equal } from 'svelte/internal';

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  mode,
  prod,
  compilerOptions: {
      dev: !prod
    },
    emitCss: prod,
    hotReload: !prod,
    preprocess : sveltePreprocess({
      sourceMap : !prod
    })

}
