<template>
  <div class="hotel-detail">
    <div class="breadcrumb">
      <div class="wrapper flex flex-ver">
        <img class="icon-home" src="@/assets/images/home.png" alt="" />
        <nuxt-link to="/index">首页</nuxt-link>
        <span class="spe">/</span>
        <nuxt-link to="/hotel">精选会务酒店</nuxt-link>
        <span class="spe">/</span>
        <span>珠海哈哈哈酒店</span>
      </div>
    </div>
    <div class="info-box wrapper">
      <h1 class="title">珠海瑞吉酒店</h1>
      <p class="address flex flex-ver">
        珠海香洲区湾仔银湾路1663号
        <img src="~@/assets/images/map.png" alt="" class="icon-address" />
        <span class="">查看地图</span>
      </p>
      <div class="info-main flex">
        <div class="main-img-box">
          <img class="img" src="@/assets/images/Hotel_pic05.jpg" alt="" />
          <ul class="count-box flex flex-ver">
            <li class="count-item is-actived">全部(40)</li>
            <li class="count-item">会议室(10)</li>
            <li class="count-item">餐厅(10)</li>
          </ul>
        </div>
        <ul class="mini-img-box clearfix">
          <li @click="changeCurrentImg()" class="mini-img-item fl is-selected"><img class="mini-img" src="@/assets/images/Hotel_img01.jpg" alt="" /></li>
          <li class="mini-img-item fl"><img class="mini-img" src="@/assets/images/Hotel_img02.jpg" alt="" /></li>
          <li class="mini-img-item fl"><img class="mini-img" src="@/assets/images/Hotel_img03.jpg" alt="" /></li>
          <li class="mini-img-item fl"><img class="mini-img" src="@/assets/images/Hotel_img04.jpg" alt="" /></li>
          <li class="mini-img-item fl"><img class="mini-img" src="@/assets/images/Hotel_img05.jpg" alt="" /></li>

          <li class="mini-img-item fl"><img class="mini-img" src="@/assets/images/Hotel_img06.jpg" alt="" /></li>
          <li class="mini-img-item fl"><img class="mini-img" src="@/assets/images/Hotel_img07.jpg" alt="" /></li>
          <li class="mini-img-item fl"><img class="mini-img" src="@/assets/images/Hotel_img08.jpg" alt="" /></li>
        </ul>
        <div class="intro-box flex-1">
          <ul class="box01 clearfix">
            <li class="">
              <img class="icon" src="@/assets/images/Hotelicon01.png" alt="" />
              <span class="txt1">1500㎡</span>
              <span class="txt2">最大会议厅面积</span>
            </li>
            <li class="">
              <img class="icon" src="@/assets/images/Hotelicon02.png" alt="" />
              <span class="txt1">1500人</span>
              <span class="txt2">最多可容纳人数</span>
            </li>
            <li class="">
              <img class="icon" src="@/assets/images/Hotelicon03.png" alt="" />
              <span class="txt1">14间</span>
              <span class="txt2">会议厅数量</span>
            </li>
            <li class="">
              <img class="icon" src="@/assets/images/Hotelicon04.png" alt="" />
              <span class="txt1">300间</span>
              <span class="txt2">客房数量</span>
            </li>
          </ul>
          <ul class="box02">
            <li>
              <span class="label">双标房</span>
              149间
            </li>
            <li>
              <span class="label">客房参考价</span>
              ￥700
            </li>
            <li>
              <span class="label">餐标</span>
              ￥4,088/桌起
            </li>
          </ul>
          <ul class="box03 clearfix">
            <li class="flex flex-ver">
              <img class="icon" src="@/assets/images/Hotel_icon05.png" alt="" />
              <div>
                <p class="name">
                  林小姐
                  <span class="desc">销售联系人</span>
                </p>
                <span class="phone">15112001567</span>
              </div>
            </li>
            <li class="flex flex-ver">
              <img class="icon" src="@/assets/images/Hotel_icon06.png" alt="" />
              <div>
                <p class="name">
                  总机
                  <span class="desc"></span>
                </p>
                <span class="phone">0756-2999888</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="detail-box wrapper flex flex-jcsb flex-start">
      <div id="tab-menu-box" class="l" :class="{ fixed: tabFix }">
        <ul id="tab-menu" class="tab-menu flex">
          <li class="tab-item" :class="{ 'is-actived': currentTab == index }" v-for="(item, index) in tabArray" :key="index" @click="toScroll('box' + index, index)">{{ item }}</li>
        </ul>
        <div class="main-box">
          <div class="main01" id="box0">
            <div class="main-title">会议厅信息</div>
            <div class="main01-bd">
              <p class="desc">会议厅布局及容纳人数</p>
              <ul class="label-box flex flex-ver">
                <li class="label">会议厅名称</li>
                <li class="label">面积</li>
                <li class="label">最多可容纳人数</li>
                <li class="label">
                  <img class="icon" src="@/assets/images/layout_icon01.png" alt="" />
                  <div class="layout">
                    <h2 class="tit">{{ layoutList[0].title }}</h2>
                    <img class="layout-img" :src="layoutList[0].path" alt="" />
                    <p class="layout-txt">{{ layoutList[0].desc }}</p>
                  </div>
                </li>
                <li class="label">
                  <img class="icon" src="@/assets/images/layout_icon02.png" alt="" />
                  <div class="layout" v-if="layoutList[1]">
                    <h2 class="tit">{{ layoutList[1].title }}</h2>
                    <img class="layout-img" :src="layoutList[1].path" alt="" />
                    <p class="layout-txt">{{ layoutList[1].desc }}</p>
                  </div>
                </li>
                <li class="label">
                  <img class="icon" src="@/assets/images/layout_icon03.png" alt="" />
                  <div class="layout" v-if="layoutList[2]">
                    <h2 class="tit">{{ layoutList[2].title }}</h2>
                    <img class="layout-img" :src="layoutList[2].path" alt="" />
                    <p class="layout-txt">{{ layoutList[2].desc }}</p>
                  </div>
                </li>
                <li class="label">
                  <img class="icon" src="@/assets/images/layout_icon04.png" alt="" />
                  <div class="layout" v-if="layoutList[3]">
                    <h2 class="tit">{{ layoutList[3].title }}</h2>
                    <img class="layout-img" :src="layoutList[3].path" alt="" />
                    <p class="layout-txt">{{ layoutList[3].desc }}</p>
                  </div>
                </li>
                <li class="label">
                  <img class="icon" src="@/assets/images/layout_icon05.png" alt="" />
                  <div class="layout" v-if="layoutList[4]">
                    <h2 class="tit">{{ layoutList[4].title }}</h2>
                    <img class="layout-img" :src="layoutList[4].path" alt="" />
                    <p class="layout-txt">{{ layoutList[4].desc }}</p>
                  </div>
                </li>
                <li class="label">
                  <img class="icon" src="@/assets/images/layout_icon06.png" alt="" />
                  <div class="layout" v-if="layoutList[5]">
                    <h2 class="tit">{{ layoutList[5].title }}</h2>
                    <img class="layout-img" :src="layoutList[5].path" alt="" />
                    <p class="layout-txt">{{ layoutList[5].desc }}</p>
                  </div>
                </li>
                <li class="label">市场参考价</li>
                <li class="label">协议低价</li>
              </ul>
              <!-- 会议厅 -->
              <!-- 宴厅 -->
              <ul class="banquet-hall-wrapper">
                <li v-for="(item, index) in banquetHallList" class="banquet-hall-item">
                  <ul class="infos-box flex flex-ver">
                    <li class="info-txt info-txt-title">阿斯特宴会厅{{ index }}</li>
                    <li class="info-txt">1500m2</li>
                    <li class="info-txt">1500人</li>
                    <li class="info-txt">1500</li>
                    <li class="info-txt">596</li>
                    <li class="info-txt">596</li>
                    <li class="info-txt">5324</li>
                    <li class="info-txt">423</li>
                    <li class="info-txt">423</li>
                    <li class="info-txt"><span class="btn-view">查看</span></li>
                    <li class="info-txt"><span class="btn-price">申请低价</span></li>
                    <li class="info-txt"></li>
                  </ul>
                  <div class="desc-dv">
                    <p style="padding-bottom: 14px;">
                      <span @click="showRoomImg(index)" class="btn-show" :class="{ 'is-show': item.show }">效果展示</span>
                      位于2楼尺寸60*25m高8.5m矩形可拆分无窗无柱 无线宽带(6M)
                    </p>
                    <ul v-show="item.show" class="img-box clearfix">
                      <li v-for="i in 6" class="img-li fl"><img class="img" src="@/assets/images/Hotel_img03.jpg" alt="" /></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="main02" id="box1">
            <div class="main-title" style="line-height: 77px;">客房信息</div>
            <ul class="label-box flex flex-ver">
              <li class="label">房型</li>
              <li class="label">床型</li>
              <li class="label">面积</li>
              <li class="label">数量</li>
              <li class="label">早餐</li>
              <li class="label">宽带</li>
              <li class="label">团队参考价</li>
              <li class="label">协议低价</li>
            </ul>
            <ul class="room-item flex flex-ver">
              <li class="room-item-txt room-item-txt-title">豪华大床房</li>
              <li class="room-item-txt">大床</li>
              <li class="room-item-txt">60m2</li>
              <li class="room-item-txt">7700</li>
              <li class="room-item-txt">有</li>
              <li class="room-item-txt">有</li>
              <li class="room-item-txt"><span class="btn-view">查看</span></li>
              <li class="room-item-txt"><span class="btn-price">申请低价</span></li>
            </ul>
          </div>
          <div class="main03" id="box2">
            <div class="main-title" style="line-height: 77px;">酒店信息</div>
            <ul class="hotel-infos">
              <li style="position: relative;">
                <p class="hotel-info-title">酒店介绍</p>
                <div class="introduce" :class="{ 'is-hide': introduce.hide }">
                  <p class="introduce-txt">
                    <span class="introduce-txt-title">开业时间：2014年 大仓饭店集团(Okura)</span>
                    广州日航酒店位于广州市天河区东北部天河智慧城（IBD）的核心区——天河软件园内，毗邻科学城等高科技研发区域，尊享高端商务区的优越位置。距离举办中国进出口商品交易会的广州国际会展中心仅20分钟车程，同时到达广州白云国际机场50分钟车程便可，而仅需30分钟的车程直达广州火车东站。酒店所处地理位置交通顺畅，出行十分便利。
                    酒店备有400间具有现代东方格调的套房和客房，行政楼层环境
                    提供方便而安全、宁静而舒适的环境，所有房间地方宽敞、装潢时尚、设计独特，是客人住宿不二之选。当漫步于酒店优雅的花园，感受大自然的葱郁，放飞感官享受，享受活力城市的宁静的另一面。
                    广州享有“中国美食之都”的美誉，而位于广州的日航酒店，汇聚六间各具特色的餐厅及酒吧，不论是“弁庆”的日式料理、“桃李”的精致粤菜，或“贝拉诺”的国际佳肴，均能带给客人难忘的美食新体验。
                    广州日航酒店设有可容纳一千座位的豪华大宴会厅以及六个设备完善的会议厅。酒店的活动策划人才随侍在侧，协助安排一切细节。
                    酒店还设有水疗中心、游泳池、健身中心，贴心设备及服务令客人精神焕发、神采飞扬。商务中心设施提供多项办公设备，商务旅客可随时与外界保持联系。
                  </p>
                </div>
                <span @click="introduce.hide = !introduce.hide" class="btn-show" :class="{ 'is-show': !introduce.hide }">{{ introduce.hide ? '展开' : '收起' }}</span>
              </li>
              <li>
                <p class="hotel-info-title">酒店设施</p>
                <ol>
                  <li class="equipment-item flex flex-start">
                    <span class="label-equipment">酒店设施和服务</span>
                    <div class="equipment-box" :class="{ 'is-hide': introduce.hide }">
                      <div class="equipment-subbox"><span v-for="i in 16" class="equipment-subitem">解耦服务</span></div>
                      <span class="btn-show" style="line-height: 26px;">展开</span>
                    </div>
                  </li>
                  <li class="equipment-item flex flex-start">
                    <span class="label-equipment">酒店餐饮设施</span>
                    <div class="equipment-box" :class="{ 'is-hide': introduce.hide }">
                      <div class="equipment-subbox"><span v-for="i in 16" class="equipment-subitem">解耦服务</span></div>
                      <span class="btn-show" style="line-height: 26px;">展开</span>
                    </div>
                  </li>
                  <li class="equipment-item flex flex-start">
                    <span class="label-equipment">会议服务设施</span>
                    <div class="equipment-box" :class="{ 'is-hide': introduce.hide }">
                      <div class="equipment-subbox"><span v-for="i in 16" class="equipment-subitem">解耦服务</span></div>
                      <span class="btn-show" style="line-height: 26px;">展开</span>
                    </div>
                  </li>
                  <li class="equipment-item flex flex-start">
                    <span class="label-equipment">客房设施和服务</span>
                    <div class="equipment-box" :class="{ 'is-hide': introduce.hide }">
                      <div class="equipment-subbox"><span v-for="i in 16" class="equipment-subitem">解耦服务</span></div>
                      <span class="btn-show" style="line-height: 26px;">展开</span>
                    </div>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="r">
        <div class="r-title-box"><span class="r-title">珠海配套设施</span></div>
        <div class="r-top">
          <ul class="transport-box flex">
            <li class="flex-1">
              <img class="icon" src="@/assets/images/Hotel_icon07.png" alt="" />
              <span>机场</span>
            </li>
            <li class="flex-1">
              <img class="icon" src="@/assets/images/Hotel_icon08.png" alt="" />
              <span>码头</span>
            </li>
            <li class="flex-1">
              <img class="icon" src="@/assets/images/Hotel_icon09.png" alt="" />
              <span>高铁</span>
            </li>
          </ul>
          <div class="box box01">
            <p class="mini-title">会务资源：</p>
            <p class="txt">租车＼专业会务人员：表演、同传、主持等</p>
          </div>
          <div class="box box02">
            <p class="mini-title">搭建资源：</p>
            <p class="txt">租车＼专业会务人员：表演、同传、主持等</p>
          </div>
          <div class="box box03">
            <button class="btn-mini">旅游拓展</button>
            <button class="btn-mini">拓展介绍</button>
          </div>
        </div>
        <div class="map-box">
          <div class="map-screen">
            <div class="" id="map"></div>
            <span class="btn-view">查看地图</span>
          </div>
          <ul class="line-box">
            <li class="item">
              <img class="icon" src="" alt="" />
              <p>
                <span class="address">目的地啊</span>
                <span class="distance">距离多远啊</span>
              </p>
              <span class="btn-line">路线</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  created() {},
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  props: {},
  // 酒店详情页引入百度地图API
  head() {
    return {
      script: [
        {
          src: 'https://api.map.baidu.com/api?v=2.0&ak=eu0WedayzrZKPfvQAFxoVqF9zazdwbxg&s=1'
        }
      ]
    };
  },
  data() {
    return {
      // tab栏是否悬浮
      tabFix: false,
      // tab栏
      tabArray: ['会议厅信息', '客房信息', '酒店信息'],
      // tab
      currentTab: 0,
      // 宴厅
      banquetHallList: [{ show: false }, { show: false }, { show: false }],
      // 布局
      layoutList: [
        {
          title: '是是是布局',
          path: require('@/assets/images/Hotel_pic01.jpg'),
          desc: '某某摆设:会场面向舞台或讲台的方向，像教室一样摆放成排的桌椅。中间留有过道。'
        },
        {
          title: '是是是布局',
          path: require('@/assets/images/Hotel_pic02.jpg'),
          desc: '某某摆设:会场面向舞台或讲台的方向，像教室一样摆放成排的桌椅。中间留有过道。'
        },
        {
          title: '是是是布局',
          path: require('@/assets/images/Hotel_pic03.jpg'),
          desc: '某某摆设:会场面向舞台或讲台的方向，像教室一样摆放成排的桌椅。中间留有过道。'
        },
        {
          title: '是是是布局',
          path: require('@/assets/images/Hotel_pic04.jpg'),
          desc: '某某摆设:会场面向舞台或讲台的方向，像教室一样摆放成排的桌椅。中间留有过道。'
        },
        {
          title: '是是是布局',
          path: require('@/assets/images/Hotel_pic05.jpg'),
          desc: '某某摆设:会场面向舞台或讲台的方向，像教室一样摆放成排的桌椅。中间留有过道。'
        },
        {
          title: '是是是布局',
          path: require('@/assets/images/Hotel_pic06.jpg'),
          desc: '某某摆设:会场面向舞台或讲台的方向，像教室一样摆放成排的桌椅。中间留有过道。'
        }
      ],
      // 酒店信息
      introduce: {
        hide: true
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 顶部banner图片
    changeCurrentImg() {},
    // 会议厅效果图片展示
    showRoomImg(index) {
      if (this.banquetHallList[index].show) {
        return (this.banquetHallList[index].show = false);
      }
      this.banquetHallList.forEach(item => {
        item.show = false;
      });
      this.banquetHallList[index].show = true;
    },
    // tab切换
    tabChange(tab) {
      this.currentTab = tab;
    },
    // 锚点
    toScroll(id, index) {
      let top = this.$el.querySelector('#' + id).offsetTop;
      let height = this.$el.querySelector('#tab-menu').offsetHeight;
      this.wSetScroll(top - height);
      setTimeout(() => {
        this.currentTab = index;
      }, 100);
    },
    // 监听滚动条滚动
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0;
      // 判断tab栏是否悬浮
      let top = this.$el.querySelector('#tab-menu-box').offsetTop;
      if (scrollTop >= top) {
        this.tabFix = true;
      } else {
        this.tabFix = false;
      }

      // 改变tab栏高亮
      let tabs = this.$el.querySelector('.main-box').children;
      let height = this.$el.querySelector('#tab-menu').offsetHeight;
      for (let i = tabs.length - 1; i >= 0; i--) {
        if (tabs[i].offsetTop <= scrollTop + height) {
          this.currentTab = i;
          break;
        }
      }
    }
  }
};
</script>

<style></style>
