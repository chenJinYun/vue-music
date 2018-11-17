<template>
    <transition name='slide'>
        <div class="singer-detail"></div>
    </transition>
</template>
<script>
import { mapGetters } from "vuex";
import { getSingerDetail } from "api/singer";
import { ERR_OK } from "api/config";

export default {
  computed: {
    ...mapGetters(["singer"])
  },
  created() {
    this._getDetail();
  },
  methods: {
    _getDetail() {
        // 边界处理，没有singer，则返回上一级歌手页面
      if (!this.singer.id) {
        this.$router.push("/singer");
      }
      getSingerDetail(this.singer.id).then(res => {
        if (ERR_OK === res.code) {
          console.log(res.data.list);
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable';

.singer-detail {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $color-background;
}

.slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
}
</style>


