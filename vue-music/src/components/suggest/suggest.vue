<template>
  <scroll
    class="suggest"
    :data="result"
    :pullup="pullup"
    @scrollToEnd="searchMore"
    ref="suggest"
    :beforeScroll="beforeScroll"
    @beforeScroll="listScroll"
  >
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(item,i) in result" :key="i" @click="selectItem(item)">
        <div class="icon">
          <i :class="getIconCls(item)"></i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisPlayName(item)"></p>
        </div>
      </li>
      <loading v-show="hasMore" title></loading>
    </ul>
    <div class="no-result-wrapper" v-show="!hasMore && !result.length">
      <no-result title="抱歉，暂无搜索结果"></no-result>
    </div>
  </scroll>
</template>
<script>
import { search } from "api/search";
import { ERR_OK } from "api/config";
import { createSong } from "common/js/song";
import Scroll from "base/scroll/scroll";
import Loading from "base/loading/loading";
import Singer from "common/js/singer";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
import NoResult from "base/no-result/no-result";
const TYPE = "singer";
const PAGE = 20;
export default {
  components: {
    Scroll,
    Loading,
    NoResult
  },
  props: {
    query: {
      type: String,
      default: ""
    },
    showSinger: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    query(newVal) {
      this._search(newVal);
    }
  },
  data() {
    return {
      page: 1,
      result: [],
      pullup: true,
      hasMore: true,
      beforeScroll: true
    };
  },
  methods: {
    _search(val) {
      this.page = 1;
      this.$refs.suggest.scrollTo(0, 0);
      this.hasMore = true;
      search(val, this.page, this.showSinger, PAGE).then(res => {
        if (res.code === ERR_OK) {
          this.result = this._genResult(res.data);
          this.checkMore(res.data);
        }
      });
    },
    _genResult(data) {
      let ret = [];
      if (data.zhida && data.zhida.singerid) {
        ret.push({ ...data.zhida, ...{ type: TYPE } });
      }
      if (data.song) {
        ret = ret.concat(this._normalizeResult(data.song.list));
      }
      return ret;
    },
    _normalizeResult(list) {
      let ret = [];
      list.forEach(item => {
        if (item.songid && item.albumid) {
          ret.push(createSong(item));
        }
      });
      return ret;
    },
    getIconCls(item) {
      if (item.type === TYPE) {
        return "icon-mine";
      } else {
        return "icon-music";
      }
    },
    getDisPlayName(item) {
      if (item.type === TYPE) {
        return item.singername;
      } else {
        return `${item.name}-${item.singer}`;
      }
    },
    searchMore() {
      if (!this.hasMore) {
        return;
      }
      this.page++;
      search(this.query, this.page, this.showSinger, PAGE).then(res => {
        if (res.code === ERR_OK) {
          this.result = this.result.concat(this._genResult(res.data));
          this.checkMore(res.data);
        }
      });
    },
    checkMore(data) {
      const song = data.song;
      if (
        !song.list.length ||
        song.curnum + song.curpage * 20 >= song.totalnum
      ) {
        this.hasMore = false;
      }
    },
    selectItem(item) {
      if (item.type === TYPE) {
        const singer = new Singer({
          id: item.singermid,
          name: item.singername
        });
        this.$router.push({ path: `/singer/${singer.id}` });
        this.setSinger(singer);
      } else {
        this.insertSong(item);
      }
      this.$emit("select");
    },
    listScroll() {
      this.$emit("listScroll");
    },
    refresh() {
      this.$refs.suggest.refresh();
    },
    ...mapMutations({
      setSinger: "SET_SINGER"
    }),
    ...mapActions(["insertSong"])
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.suggest {
  height: 100%;
  overflow: hidden;

  .suggest-list {
    padding: 0 30px;

    .suggest-item {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
    }

    .icon {
      flex: 0 0 30px;
      width: 30px;

      [class^='icon-'] {
        font-size: 14px;
        color: $color-text-d;
      }
    }

    .name {
      flex: 1;
      font-size: $font-size-medium;
      color: $color-text-d;
      overflow: hidden;

      .text {
        no-wrap();
      }
    }
  }

  .no-result-wrapper {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>