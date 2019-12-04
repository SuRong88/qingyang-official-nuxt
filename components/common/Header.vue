<template>
  <div class="header wrapper">
    <nuxt-link to="/" class="logo-box" title="清扬会务"><img class="logo" src="@/assets/images/logo.png" alt="" /></nuxt-link>
    <ul class="nav flex flex-ver">
      <nuxt-link :to="{ path: '/' }" tag="li" class="nav-item">首页</nuxt-link>
      <nuxt-link :to="{ path: '/hotel/1' }" exact tag="li" class="nav-item">精选会务酒店</nuxt-link>
      <nuxt-link :to="{ path: '/meeting/1' }" exact tag="li" class="nav-item">专题会议</nuxt-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'vHeader',
  components: {},
  created() {},
  mounted() {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style></style>
