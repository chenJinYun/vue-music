/*
 * @Author: kim.chen 
 * @Date: 2018-11-24 15:33:07 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2019-01-17 19:08:18
 */

import {
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import {
  playMode
} from "common/js/config";
import {
  shuffle
} from "common/js/util";


export const playListMixin = {
  computed: {
    ...mapGetters(['playList'])
  },
  mounted() {
    this.handlePlayList(this.playList)
  },
  activated() {
    this.handlePlayList(this.playList)
  },
  watch: {
    playList(newVal) {
      this.handlePlayList(newVal)

    }
  },
  methods: {
    handlePlayList(playList) {
      throw new Error('component must implement handlePlayList method')
    }
  }
}

export const playerMixin = {
  computed: {
    iconMode() {
      return this.mode === playMode.sequence ?
        "icon-sequence" :
        this.mode === playMode.loop ?
        "icon-loop" :
        "icon-random";
    },
    ...mapGetters(["sequenceList", "currentSong", "playList", "mode"])

  },
  methods: {
    // 改变播放模式
    changeMode() {
      const mode = (this.mode + 1) % 3;
      this.setPlayMode(mode);
      let list = this.sequenceList;
      if (mode === playMode.random) {
        list = shuffle(this.sequenceList);
      }
      this.resetCurrentIndex(list);
      this.setPlayList(list);
    },
    resetCurrentIndex(list) {
      let index = list.findIndex(item => {
        return item.id === this.currentSong.id;
      });
      this.setCurrentIndex(index);
    },
    ...mapMutations({
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX",
      setPlayMode: "SET_PLAY_MODE",
      setPlayList: "SET_PLAYLIST"
    })
  },
}

export const searchMixin = {
  computed: {
    ...mapGetters(["searchHistory"])
  },
  data() {
    return {
      query: "",
      refreshDelay: 100
    };
  },
  methods: {
    addQuery(k) {
      this.$refs.searchBox.setQuery(k);
    },
    blurInput() {
      this.$refs.searchBox.blur();
    },
    saveSearch() {
      this.saveSearchHistory(this.query);
    },
    onQueryChange(query) {
      this.query = query;
    },
    ...mapActions([
      "saveSearchHistory",
      "deleteSearchHistory",
    ])
  },
}
