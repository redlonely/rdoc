import vitepressBackToTop from 'vitepress-plugin-back-to-top';
import DefaultTheme from 'vitepress/theme-without-fonts';

import './main.scss';
import './style.css';
import './var.css';

import CopyRight from '../../docs/components/CopyRight.vue';
import Pageinfo from '../../docs/components/PageInfo.vue';
import Contributors from '../../docs/components/Contributors.vue';
import Tip from '../../docs/components/Tip.vue';
import Img from '../../docs/components/Img.vue';

import 'vitepress-plugin-back-to-top/dist/style.css';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    vitepressBackToTop();
    app.component('Pageinfo', Pageinfo);
    app.component('Contributors', Contributors);
    app.component('CopyRight', CopyRight);
    app.component('Tip', Tip);
    app.component('Img', Img);
  },
};
