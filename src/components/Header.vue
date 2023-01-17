
<template>
  <header class="header">
    <div class="headerinfo">
      <h1>Ватеркрафт</h1>
      <h2>Здесь происходят пранки</h2>
      <Address/>
    </div>
    <div class="img">
      <img src="../assets/watergrad.png" />
    </div>
  </header>
</template>

<script>
import Address from './Address.vue';

export default {
  components: {
    Address
  }
}
</script>