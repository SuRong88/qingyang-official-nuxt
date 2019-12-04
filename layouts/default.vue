<template>
  <div>
    <v-header></v-header>
    <nuxt />
    <v-footer></v-footer>
  </div>
</template>
<script>
export default {
  components: {
    vHeader(resolve) {
      require(['@/components/common/Header'], resolve);
    },
    vFooter(resolve) {
      require(['@/components/common/Footer'], resolve);
    }
  },
  props: {},
  created() {},
  data() {
    return {
      interface: {},

      frontend: {}
    };
  },
  watch: {
    $route() {
      this.$wSetScroll(0, 0);
    }
  },
  methods: {}
};
</script>

<style></style>
