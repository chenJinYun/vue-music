<template>
    <transition name='slide'>
        <music-list
            :songs="songs"
            :title='title'
            :bgImage='bgImage'
        ></music-list>
    </transition>
</template>
<script>
import { mapGetters } from "vuex";
import { getSongList } from "api/recommend";
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
      return this.disc && this.disc.dissname;
    },
    bgImage() {
      return this.disc && this.disc.imgurl;
    },
    ...mapGetters(["disc"])
  },
  created() {
    this._getSongList();
  },
  methods: {
    _getSongList() {
      if (!this.disc || !this.disc.dissid) {
        this.$router.push("/recommend");
        return;
      }
      getSongList(this.disc.dissid).then(res => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSong(res.cdlist[0].songlist);
          console.log(this.songs);
        }
      });
    },
    _normalizeSong(list) {
      let ret = [];
      list.forEach(musicData => {
        if (musicData.mid && musicData.album) {
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


