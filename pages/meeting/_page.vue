<template>
  <div class="meeting">
    <div class="meeting-banner" :style="{ backgroundImage: 'url(' + require('@/assets/images/Meeting_banner.jpg') + ')' }"></div>
    <ul class="meeting-list wrapper clearfix">
      <nuxt-link :to="'/meetingDetail/' + i" :key="i" v-for="i in 15" class="meeting-item">
        <img class="item-img" src="@/assets/images/img01.jpg" alt="" />
        <div class="infos">
          <h2 class="item-title">2020年第13届中国国际航空航天博览会{{current_page}}</h2>
          <p class="item-date">
            <span class="label">会议时间</span>
            2020.01.20
          </p>
          <p class="item-place">
            <span class="label">会议地点</span>
            珠海航展中心
          </p>
        </div>
      </nuxt-link>
    </ul>
    <div class="flex flex-center">
      <el-pagination
        @current-change="handleCurrentChange"
        class="pagination"
        background
        layout="prev, pager, next"
        :page-size="limit"
        :current-page="current_page"
        :total="total_page"
        prev-text="上一页"
        next-text="下一页"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  created() {
    this.current_page = this.$route.params.page * 1 || 1;
  },
  mounted() {},
  props: {},
  data() {
    return {
      limit: 15,
      current_page: 1,
      total_page: 99
    };
  },
  computed: {},
  watch: {
    '$route.params': function(newVal, oldVal) {
      console.log('oldVal' + oldVal.page);
      console.log('newVal' + newVal.page);
    }
  },
  methods: {
    handleCurrentChange(page) {
      let params = JSON.parse(JSON.stringify(this.$route.params));
      params.page = page;
      this.$router.push({
        params: params
      });
    }
  }
};
</script>

<style></style>
