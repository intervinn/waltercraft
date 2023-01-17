<template>
    <div class="address" data-aos="fade-up" @click="copyAddress">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        text : String
    },
    methods: {
    async copyAddress() {
      await navigator.clipboard.writeText(this.text)
      const text = document.querySelector(".address")

      text.innerHTML = "Скопировано!"
      window.setInterval(() => {
        text.innerHTML = this.text
      }, 2000)
    }
  },
}
</script>