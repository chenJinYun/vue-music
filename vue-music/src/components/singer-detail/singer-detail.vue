<template>
    <transition name='slide'>
        <music-list
            :songs='songs'
            :title='title'
            :bgImage='bgImage'
        ></music-list>
    </transition>
</template>
<script>
import { mapGetters } from "vuex";
import { getSingerDetail } from "api/singer";
import { ERR_OK } from "api/config";
import { createSong } from "common/js/song";
import MusicList from "components/music-list/music-list";
export default {
  components: {
    MusicList
  },
  data() {
    return {
      songs: null
    };
  },
  computed: {
    title() {
      return this.singer.name;
    },
    bgImage() {
      return this.singer.avatar;
    },
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
          this.songs = this._normailzeSongs(res.data.list);
        }
      });
    },
    _normailzeSongs(list) {
      let ret = [];
      list.forEach(item => {
        let { musicData } = item;
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData));
        }
      });
      return ret;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable';

.slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
}
</style>


