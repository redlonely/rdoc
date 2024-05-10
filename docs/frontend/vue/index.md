---
title: Vue
layout: doc
author: redlonely
date: 2024-03-01
editLink: false
---

# {{ $frontmatter.title }}
  
<script setup lang="ts">
  import PageInfo from '../../components/PageInfo.vue'
</script>

```vue
<script>
import { ref } from 'vue';

const count = ref(0);
const increment = () => count.value++;
</script>
```
