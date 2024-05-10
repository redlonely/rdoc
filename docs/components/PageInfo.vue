<script setup lang="ts">
import { computed, ref } from 'vue';

import { useData } from 'vitepress';

import { getDate, getFromNow } from '../utils';

defineProps<{
  words?: string;
}>();

const defaultAuthor = 'redlonely';
const author = ref(defaultAuthor);
const { frontmatter, page } = useData();

const publishedTime = getDate(frontmatter.value?.date);

if (frontmatter.value?.author) author.value = frontmatter.value?.author;

// const lastUpdatedDate = computed(() => new Date('2023-10-11'));
const lastUpdatedDate = computed(() => new Date(page.value.lastUpdated!));
const isoDatetime = computed(() => lastUpdatedDate.value.toISOString());
const timeFormNow = getFromNow(isoDatetime.value);

const isAfter2020 = computed(() => {
  const date = new Date(isoDatetime.value);
  return date.getFullYear() >= 2020;
});
</script>

<template>
  <section class="vp-page-info">
    <div class="info">
      <svg
        t="1713966285745"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="7829"
        width="20"
        height="20"
      >
        <path
          d="M331.434667 610.255238c21.333333 13.336381 44.373333 24.210286 68.705523 32.231619L219.428571 853.333333h377.344v73.142857H219.428571a73.142857 73.142857 0 0 1-55.539809-120.734476zM499.248762 97.52381c134.656 0 243.809524 109.153524 243.809524 243.809523s-109.153524 243.809524-243.809524 243.809524-243.809524-109.153524-243.809524-243.809524 109.153524-243.809524 243.809524-243.809523z m0 73.142857a170.666667 170.666667 0 1 0 0 341.333333 170.666667 170.666667 0 0 0 0-341.333333z m316.952381 487.619047v97.52381h97.523809v73.142857h-97.523809v97.523809h-73.142857v-97.523809h-97.52381v-73.142857h97.52381v-97.52381h73.142857z"
          p-id="7830"
        ></path>
      </svg>
      作者:<span class="uppercase"> {{ author }} </span>
    </div>
    <div class="info" v-if="publishedTime">
      <svg
        t="1713966095216"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="7505"
        width="20"
        height="20"
      >
        <path
          d="M512 109.714286c222.183619 0 402.285714 180.102095 402.285714 402.285714S734.183619 914.285714 512 914.285714l-2.901333-0.121904c-104.545524-8.313905-189.415619-43.52-253.074286-105.130667L256 889.904762h-73.142857V658.285714H390.095238v73.142857h-106.105905c52.857905 65.048381 128.560762 101.400381 229.449143 109.714286l7.631238-0.121905C698.660571 836.217905 841.142857 690.736762 841.142857 512c0-181.784381-147.358476-329.142857-329.142857-329.142857S182.857143 330.215619 182.857143 512h-73.142857c0-222.183619 180.102095-402.285714 402.285714-402.285714zM463.238095 292.571429h73.142857v182.857142h182.857143v73.142858H463.238095V292.571429z"
          p-id="7506"
        ></path>
      </svg>
      发表于:<span>{{ publishedTime }}</span>
    </div>
    <div class="info" v-if="isAfter2020">
      <svg
        t="1713966741517"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="7989"
        width="20"
        height="20"
      >
        <path
          d="M667.257905 139.873524l3.85219 3.632762 252.903619 254.537143a73.142857 73.142857 0 0 1 0 103.107047L604.501333 822.686476H828.952381v73.142857H266.532571l-172.129523-173.226666a73.142857 73.142857 0 0 1 0-103.131429L567.344762 143.530667a73.142857 73.142857 0 0 1 99.913143-3.632762zM227.181714 589.604571L146.285714 671.036952l150.674286 151.649524h163.303619l-233.081905-233.081905zM619.227429 195.047619L278.747429 537.721905l253.70819 253.70819 339.675429-341.820952L619.227429 195.047619z"
          p-id="7990"
        ></path>
      </svg>
      更新于:<span>{{ timeFormNow }}</span>
    </div>
    <div class="info" v-if="words">
      <svg
        t="1713966215969"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="7667"
        width="20"
        height="20"
      >
        <path
          d="M146.285714 609.52381h121.904762v243.809523H146.285714z m195.047619-195.04762h121.904762v438.857143h-121.904762z m195.047619 48.761905h121.904762v390.095238h-121.904762z m195.047619-292.571428h121.904762v682.666666h-121.904762z"
          p-id="7668"
        ></path>
      </svg>
      字数统计:<span>{{ words }} 字</span>
    </div>
  </section>
</template>
