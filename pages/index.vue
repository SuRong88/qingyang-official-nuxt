<template>
	<div class="index">
		<div class="index-banner" :style="{ backgroundImage: 'url(' + require('@/assets/images/index_banner.jpg') + ')' }">
			<img class="banner-img" src="@/assets/images/index_img.png" alt="">
		</div>
		<div class="map-box wrapper">
			<h1 class="title">珠海酒店热度地图</h1>
			<div class="map-box-main flex">
				<ul class="l map-hotel-menu">
					<li v-for="i in 7" class="hotel-menu-item flex flex-ver">
						<span class="item-index">
							{{i}}
						</span>
						<p class="flex flex-col">
							<span class="item-title">
								长隆横琴湾酒店
							</span>
							<span class="hot-num">
								<img class="icon-hot" src="@/assets/images/index_hot.png" alt="">
								46646
							</span>
						</p>
					</li>
				</ul>
				<div class="r flex-1 flex flex-align-center">
					<img src="@/assets/images/index_map.png" alt="" class="map-img">
				</div>
			</div>
		</div>
		<div class="meeting-box">
			<h1 class="title">专题会议</h1>
			<ul class="meeting-menu wrapper clearfix">
				<nuxt-link :to="'/meetingDetail/' + i" :key="i" v-for="i in 3" class="meeting-item">
					<img class="item-img" src="@/assets/images/img01.jpg" alt="">
					<div class="infos">
						<h2 class="item-title">
							2020年第13届中国国际航空航天博览会
						</h2>
						<p class="item-date">
							<span class="label">
								会议时间
							</span>
							2020.01.20
						</p>
						<p class="item-place">
							<span class="label">
								会议地点
							</span>
							珠海航展中心
						</p>
					</div>
				</nuxt-link>
			</ul>
			<button type="button" class="btn-more flex flex-ver">
				更多会议<img class="icon-arrow" src="@/assets/images/arrow.png" alt="">
			</button>
		</div>
	</div>
</template>

<script>
export default {
	created() {},
	mounted() {},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	methods: {}
};
</script>

<style></style>
