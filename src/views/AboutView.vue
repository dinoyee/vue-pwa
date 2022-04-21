<template>
  <div class="about">
    <h1>This is an about page - cache test v{{ version }}</h1>
    <img style="width: 100%; height: auto" :src="imgSrc" alt="" />
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      version: 1, // <--- change here
    };
  },
  computed: {
    imgSrc() {
      const fileName = `photo-v${this.version}.jpeg`;
      return require("@/assets/" + fileName);
    },
  },
};
</script>
