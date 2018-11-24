/*
 * @Author: kim.chen 
 * @Date: 2018-11-24 15:33:07 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-24 15:45:03
 */

import {mapGetters} from 'vuex'
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
