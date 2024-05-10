<script lang='ts' setup>
defineProps<{
  tip: string;
}>();
</script>


<template>
  <div class="inline-block relative">
    <div class="tip w-[100px] text-centerp py-5 px-2 rounded bg-slate-400 absolute top-0 left-0"> {{  tip }}</div>
    <div class="bg-slate-300 bg-opacity-50 mx-2 inline-block px-2 font-bold"><slot></slot></div>
  </div>
</template>