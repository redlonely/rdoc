<script setup lang="ts">
import { ref } from 'vue';

import { useData } from 'vitepress';

const defaultAuthor = 'Redlonely';
const { frontmatter } = useData();

const author = ref(defaultAuthor);

if (frontmatter.value?.author) author.value = frontmatter.value?.author;

const pageHref = location.href;
</script>

<template>
  <div
    class="bg-[var(--vp-box-bg)] px-[1.2rem] relative py-[1rem] border-1 w-full min-h-[32px] border-solid mt-[32px] leading-[24px] rounded-[4px]"
  >
    <section class="flex flex-col gap-y-[8px] overflow-hidden">
      <div>
        <span class="font-bold">文章作者：</span>
        <span>
          <a
            href="https://github.com/redlonely"
            rel="noreferrer"
            target="_blank"
          >
            {{ author }}
          </a>
        </span>
      </div>
      <div class="text-nowrap overflow-hidden text-ellipsis">
        <span class="font-bold">文章链接：</span>
        <span>
          <a
            :href="pageHref"
            class="text-ellipsis"
            rel="noreferrer"
            target="_blank"
          >
            {{ pageHref }}
          </a>
        </span>
      </div>
      <div>
        <span class="font-bold">版权声明：</span>
        <span>
          本博客所有文章除特别声明外，均采用
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            rel="noreferrer"
            target="_blank"
            >CC BY-NC-SA 4.0</a
          >
          许可协议。转载请注明来自
          <a href="https://www.redlonely.com/" rel="noreferrer" target="_blank"
            >Redlonely</a
          ></span
        >！
      </div>
    </section>
  </div>
</template>
