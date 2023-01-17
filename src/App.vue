<template>
  <Header/>
  <Info/>
</template>

<script>

import Header from './components/Header.vue';
import Info from './components/Info.vue';

export default {
  name: "app",
  components: {
    Header,
    Info,
  }
}
</script>