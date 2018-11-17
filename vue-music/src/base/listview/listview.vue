<template>
    <scroll
        class='listview'
        :data='data'
        ref='listview'
        :listenScroll='listenScroll'
        :probeType='probeType'
        @scroll='scroll'
    >
        <ul>
            <li
                v-for="(group,index) in data"
                :key='index' class='list-group'
                ref='listGroup'
            >
                <h2 class="list-group-title">{{group.title}}</h2>
                <ul>
                    <li
                        v-for='(item,index) in group.items'
                        :key="index"
                        @click="selectItem(item)"
                        class="list-group-item"
                    >
                        <img class="avatar" v-lazy="item.avatar" alt="">
                        <span class="name">{{item.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="list-shortcut" @touchstart.stop.prevent="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove"
         @touchend.stop>
            <ul>
                <li
                    v-for="(item,index) in shortcutList"
                    :data-index='index'
                    :key='index'
                    class="item"
                    :class="{'current':currentIndex===index}"
                >{{item}}</li>
            </ul>
        </div>
        <div class="list-fixed" v-show='fixedTitle' ref='fixed'>
            <h1 class="fixed-title">{{fixedTitle}}</h1>
        </div>
        <div class="loading-container" v-show='!data.length'>
            <loading></loading>
        </div>
    </scroll>
</template>

<script type="text/ecmascript-6">
import Scroll from "base/scroll/scroll";
import { getData } from "common/js/dom";
import Loading from "base/loading/loading";

// 每一个字母的高度是18
const ANCHOR_HEIGHT = 18;
const TTILE_HEIGHT = 30;

export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      scrollY: -1,
      currentIndex: 0, //当前的字母的index
      diff: -1
    };
  },
  created() {
    //   不需要监听touch的变化，所以不再data定义
    this.touch = {}; //touch事件共享一个对象
    this.listenScroll = true;
    this.listHeight = null;
    this.probeType = 3;
  },
  computed: {
    shortcutList() {
      return this.data.map(group => {
        return group.title.substr(0, 1);
      });
    },
    fixedTitle() {
      if (this.scrollY > 0) {
        return "";
      }
      return this.data[this.currentIndex]
        ? this.data[this.currentIndex].title
        : "";
    }
  },
  methods: {
    selectItem(item) {
        this.$emit('select',item)
    },
    onShortcutTouchStart(e) {
      let anchorIndex = getData(e.target, "index");
      let firstTouch = e.touches[0]; //第一个手指的位置
      this.touch.y1 = firstTouch.pageY;
      this.touch.anchorIndex = anchorIndex; //一开始的字母
      this._scrollTo(anchorIndex);
    },
    onShortcutTouchMove(e) {
      let firstTouch = e.touches[0];
      this.touch.y2 = firstTouch.pageY;
      //   |0 是或0
      let delta = ((this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT) | 0; //计算y轴，滚动的元素个数
      let anchorIndex = parseInt(this.touch.anchorIndex) + delta; //在原来的基础上加滚动的字母个数
      this._scrollTo(anchorIndex);
    },
    scroll(pos) {
      // 获取y滚动的距离
      this.scrollY = pos.y;
    },
    // 使页面滚动
    _scrollTo(index) {
      if (!index) {
        return;
      }
      if (index < 0) {
        index = 0;
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2;
      }
      this.scrollY = -this.listHeight[index];
      this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0);
    },
    _calculateHeight() {
      this.listHeight = [];
      const list = this.$refs.listGroup;
      let height = 0;
      this.listHeight.push(height);
      for (let index = 0; index < list.length; index++) {
        const element = list[index];
        height += element.clientHeight;
        this.listHeight.push(height);
      }
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this._calculateHeight();
      }, 20);
    },
    scrollY(newVal, oldVal) {
      const listHeight = this.listHeight;
      //   当滚动到顶部，newY>0
      if (newVal > 0) {
        this.currentIndex = 0;
        return;
      }
      //   在中间部分滚动
      for (let i = 0; i < listHeight.length - 1; i++) {
        const h1 = listHeight[i];
        const h2 = listHeight[i + 1];
        if (-newVal >= h1 && -newVal < h2) {
          this.currentIndex = i;
          this.diff = h2 + newVal;
          return;
        }
      }
      //   当滚动到底部且-newVal大于最后一个元素的上限
      this.currentIndex = listHeight.length - 2;
    },
    diff(newVal) {
      let fixedTop =
        newVal > 0 && newVal < TTILE_HEIGHT ? newVal - TTILE_HEIGHT : 0;
      if (this.fixedTop === fixedTop) {
        return;
      }
      this.fixedTop = fixedTop;
      this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`;
    }
  },
  components: {
    Scroll,
    Loading
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.listview {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $color-background;

    .list-group {
        padding-bottom: 30px;

        .list-group-title {
            height: 30px;
            line-height: 30px;
            padding-left: 20px;
            font-size: $font-size-small;
            color: $color-text-l;
            background: $color-highlight-background;
        }

        .list-group-item {
            display: flex;
            align-items: center;
            padding: 20px 0 0 30px;

            .avatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            .name {
                margin-left: 20px;
                color: $color-text-l;
                font-size: $font-size-medium;
            }
        }
    }

    .list-shortcut {
        position: absolute;
        z-index: 30;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        padding: 20px 0;
        border-radius: 10px;
        text-align: center;
        background: $color-background-d;
        font-family: Helvetica;

        .item {
            padding: 3px;
            line-height: 1;
            color: $color-text-l;
            font-size: $font-size-small;

            &.current {
                color: $color-theme;
            }
        }
    }

    .list-fixed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        .fixed-title {
            height: 30px;
            line-height: 30px;
            padding-left: 20px;
            font-size: $font-size-small;
            color: $color-text-l;
            background: $color-highlight-background;
        }
    }

    .loading-container {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
