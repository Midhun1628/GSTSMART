<script setup lang="ts">
import { shallowRef } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';
// assets
import Logo from './LogoMain.vue';

const value: string = window.location.search;
const params = new URLSearchParams(value);
const ispValue = params.get('isp');

const getFinalUrl = (link: string) => {
  if (link !== '#!' && ispValue) {
    return `${link}?isp=1`;
  }
  return link;
};

const list1 = shallowRef([
  {
    name: 'Profile',
    link: 'https://themeforest.net/user/phoenixcoded'
  },
  {
    name: 'Portfolio',
    link: 'https://themeforest.net/user/phoenixcoded/portfolio'
  },
  {
    name: 'Follow Us',
    link: 'https://themeforest.net/user/phoenixcoded/followers'
  },
  {
    name: 'Website',
    link: 'https://phoenixcoded.net/'
  }
]);
const list2 = shallowRef([
  {
    name: 'Documentation',
    link: 'https://phoenixcoded.gitbook.io/able-pro'
  },
  {
    name: 'Feature Request',
    link: 'https://phoenixcoded.authordesk.app/'
  },
  {
    name: 'RoadMap',
    link: 'https://phoenixcoded.gitbook.io/able-pro/v/vue/roadmap/'
  },
  {
    name: 'Support',
    link: 'https://phoenixcoded.authordesk.app/'
  },
  {
    name: 'Email Us',
    link: 'https://themeforest.net/user/phoenixcoded#contact'
  }
]);
const list3 = shallowRef([
  {
    name: 'Tailwind',
    link: 'https://1.envato.market/XmNK1X'
  },
  {
    name: 'React',
    link: 'https://1.envato.market/OrJ5nn'
  },
  {
    name: 'Vue with laravel',
    link: 'https://1.envato.market/6e0Arm'
  },
  {
    name: 'Angular',
    link: 'https://1.envato.market/XYAZnb'
  },
  {
    name: 'Next Js',
    link: 'https://1.envato.market/jrEAbP'
  },
  {
    name: 'Bootstrap 5',
    link: 'https://1.envato.market/baeyGk'
  }
]);
const list4 = shallowRef([
  {
    name: 'Support Policy',
    link: 'https://themeforest.net/page/item_support_policy'
  },
  {
    name: 'Licenses Term',
    link: 'https://themeforest.net/licenses/standard'
  }
]);
</script>

<template>
  <v-footer class="bg-gray100 py-md-16 py-8 flex-column position-relative">
    <v-row>
      <v-col cols="12">
        <v-container>
          <v-row>
            <v-col lg="4" cols="12">
              <div class="contactDetails pe-lg-6">
                <Logo />
                <p class="mt-4 text-h6">
                  Phoenixcoded has gained the trust of over 5.5K+ customers since 2015, thanks to our commitment to delivering high-quality
                  products. Our experienced team players are responsible for managing Able Pro.
                </p>
              </div>
            </v-col>
            <v-col lg="2" md="3" cols="6">
              <h5 class="text-h5 mb-md-6 mb-4">Company</h5>
              <div class="d-flex flex-column footer-list">
                <a v-for="(list, i) in list1" :key="i" :href="list.link" class="text-h6" target="_blank">
                  {{ list.name }}
                </a>
              </div>
            </v-col>
            <v-col lg="2" md="3" cols="6">
              <h5 class="text-h5 mb-md-6 mb-4">Help & Support</h5>
              <div class="d-flex flex-column footer-list">
                <a v-for="(list, i) in list2" :key="i" :href="list.link" class="text-h6" target="_blank">
                  {{ list.name }}
                </a>
              </div>
            </v-col>
            <v-col lg="2" md="3" cols="6">
              <h5 class="text-h5 mb-md-6 mb-4">More products</h5>
              <div class="d-flex flex-column footer-list">
                <a v-for="(list, i) in list3" :key="i" :href="getFinalUrl(list.link)" class="text-h6" target="_blank">
                  {{ list.name }}
                </a>
              </div>
            </v-col>
            <v-col lg="2" md="3" cols="6">
              <h5 class="text-h5 mb-md-6 mb-4">Useful Resources</h5>
              <div class="d-flex flex-column footer-list">
                <a v-for="(list, i) in list4" :key="i" :href="list.link" class="text-h6" target="_blank">
                  {{ list.name }}
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-footer>
  <v-divider></v-divider>
  <div class="sub-footer text-surface bg-gray100 py-4">
    <v-container class="py-0">
      <v-row class="align-center">
        <v-col sm="6">
          <h6 class="text-h6 text-lightText mb-0">
            © Handcrafted by Team
            <a href="https://themeforest.net/user/phoenixcoded" class="text-primary text-decoration-none">Phoenixcoded</a>
          </h6>
        </v-col>
        <v-col sm="6" class="text-end">
          <ul class="d-flex justify-end">
            <li>
              <v-btn
                icon
                variant="plain"
                size="small"
                href="https://github.com/phoenixcoded"
                target="_"
                aria-label="github"
                color="secondary"
              >
                <SvgSprite name="custom-github-outline" />
                <v-tooltip activator="parent" aria-label="tooltip" location="top" content-class="smallTooltip">Github</v-tooltip>
              </v-btn>
            </li>
            <li>
              <v-btn
                icon
                variant="plain"
                size="small"
                href="https://dribbble.com/Phoenixcoded"
                target="_"
                aria-label="dribbble"
                color="secondary"
              >
                <SvgSprite name="custom-dribble-fill" />
                <v-tooltip activator="parent" aria-label="tooltip" location="top" content-class="smallTooltip">Dribbble</v-tooltip>
              </v-btn>
            </li>
            <li>
              <v-btn
                icon
                variant="plain"
                size="small"
                href="https://www.youtube.com/@phoenixcoded"
                target="_"
                aria-label="youtube"
                color="secondary"
              >
                <SvgSprite name="custom-youtube-fill" />
                <v-tooltip activator="parent" aria-label="tooltip" location="top" content-class="smallTooltip">Youtube</v-tooltip>
              </v-btn>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.footer-list {
  a {
    color: rgb(var(--v-theme-darkText));
    &:hover {
      color: rgb(var(--v-theme-primary));
      text-decoration: none;
    }
    + a {
      margin-top: 20px;
      @media (max-width: 991px) {
        margin-top: 10px;
      }
    }
  }
}
</style>
