<template>
    <div class='singer'>
        <list-view :data='singers'></list-view>
    </div>
</template>
<script type="text/ecmascript-6">
import { getSingerList } from "api/singer";
import { ERR_OK } from "api/config";
import Singer from "common/js/singer";
import ListView from "base/listview/listview";

const HOT_NAME = "热门";
const HOT_SINGER_LENGTH = 10;
export default {
  data() {
    return {
      singers: []
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (ERR_OK == res.code) {
          this.singers = this._normalizSinger(res.data.list);
        }
      });
    },
    _normalizSinger(list) {
      // 热门数据 ，
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LENGTH) {
          map.hot.items.push(
            new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            })
          );
        }
        //  字母排序数据
        const key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        map[key].items.push(
          new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          })
        );
      });
      // 为了得到有序列表，我们需要处理Map
      let hot = [];
      let ret = [];
      for (const key in map) {
        const val = map[key];
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val);
        } else if (val.title === HOT_NAME) {
          hot.push(val);
        }
      }
      //   按照字母排序
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      return hot.concat(ret);
    }
  },
  components: {
    ListView
  }
};
</script>
<style lang="stylus" scoped rel="styleheet/stylus">
.singer {
    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%;
}
</style>