/*
 * @Author: kim.chen 
 * @Date: 2018-12-22 12:42:37 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-12-22 14:47:32
 */
import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options
} from './config'

export function getHotKeys() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}

export function search(query, page, zhida, perpage) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  // const data = Object.assign({}, commonParams, {
  //   w: query,
  //   p: page,
  //   perpage,
  //   n: perpage,
  //   catZhida: zhida ? 1 : 0,
  //   zhidaqu: 1,
  //   t: 0,
  //   flag: 1,
  //   ie: 'utf-8',
  //   sem: 1,
  //   aggr: 0,
  //   remoteplace: 'txt.mqq.all',
  //   uin: 0,
  //   needNewCode: 1,
  //   platform: 'h5',
  //   format: 'json',
  //   uin: 0
  // })
  let data = {"code":0,"data":{"keyword":"林俊杰","priority":0,"qc":[],"semantic":{"curnum":0,"curpage":1,"list":[],"totalnum":0},"song":{"curnum":20,"curpage":1,"list":[{"albumid":5634155,"albummid":"001iSEF22IqiYB","albumname":"梦想的声音第三季 第9期","albumname_hilight":"梦想的声音第三季 第9期","alertid":2,"chinesesinger":0,"docid":"3932648117532865965","grp":[],"interval":310,"isonly":1,"lyric":"","lyric_hilight":"","msgid":14,"nt":2965448833,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":0,"tryend":0,"trysize":0},"pubtime":1545321600,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":4974350,"size320":12435396,"sizeape":0,"sizeflac":38354320,"sizeogg":6794846,"songid":225712632,"songmid":"004MvPeJ3o7Rwv","songname":"像我这样的人 (Live)","songname_hilight":"像我这样的人 (Live)","stream":1,"switch":636675,"t":1,"tag":10,"type":0,"ver":0,"vid":""},{"albumid":8036,"albummid":"000y5gq7449K9I","albumname":"第二天堂","albumname_hilight":"第二天堂","alertid":2,"chinesesinger":0,"docid":"1943774058310078813","grp":[],"interval":267,"isonly":0,"lyric":"","lyric_hilight":"","msgid":14,"nt":2177447885,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":84032,"tryend":119000,"trysize":0},"pubtime":1086278400,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":4288463,"size320":10720855,"sizeape":30396109,"sizeflac":31486598,"sizeogg":6567464,"songid":9063002,"songmid":"004TXEXY2G2c7C","songname":"江南","songname_hilight":"江南","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":36160,"albummid":"002g6zv02X7SNi","albumname":"JJ陆","albumname_hilight":"JJ陆","alertid":2,"chinesesinger":0,"docid":"7746637530638658393","grp":[],"interval":218,"isonly":0,"lyric":"《爱情睡醒了》电视剧插曲","lyric_hilight":"《爱情睡醒了》电视剧插曲","msgid":14,"nt":2208611707,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":0,"tryend":0,"trysize":0},"pubtime":1224259200,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"},{"id":4856,"mid":"000N3nfJ398H07","name":"蔡卓妍","name_hilight":"蔡卓妍"}],"size128":3489735,"size320":8724047,"sizeape":24689333,"sizeflac":24811022,"sizeogg":4912954,"songid":447253,"songmid":"003h3CYS3UxDB4","songname":"小酒窝 (国语)","songname_hilight":"小酒窝 (国语)","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":852443,"albummid":"001IV22P1RDX7p","albumname":"新地球","albumname_hilight":"新地球","alertid":23,"chinesesinger":0,"docid":"10086055767843353282","grp":[],"interval":298,"isonly":1,"lyric":"《这！就是街舞》第八期背景音乐|《杜鹃之巢》韩剧中文主题曲|《对我而言，可爱的她》韩剧中文片尾曲","lyric_hilight":"《这！就是街舞》第八期背景音乐|《杜鹃之巢》韩剧中文主题曲|《对我而言，可爱的她》韩剧中文片尾曲","msgid":14,"nt":3545367508,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":59247,"tryend":109936,"trysize":0},"pubtime":1419609600,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":4773709,"size320":11933977,"sizeape":33816935,"sizeflac":33967774,"sizeogg":6640604,"songid":101555425,"songmid":"004295Et37taLD","songname":"可惜没如果","songname_hilight":"可惜没如果","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":36160,"albummid":"002g6zv02X7SNi","albumname":"JJ陆","albumname_hilight":"JJ陆","alertid":2,"chinesesinger":0,"docid":"2442282227594979046","grp":[],"interval":281,"isonly":0,"lyric":"《赤壁Online》网游主题曲","lyric_hilight":"《赤壁Online》网游主题曲","msgid":14,"nt":1330307979,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":55928,"tryend":105836,"trysize":0},"pubtime":1224259200,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":4505794,"size320":11264194,"sizeape":32045543,"sizeflac":32170188,"sizeogg":6166737,"songid":105388642,"songmid":"003UTRfZ12wGOs","songname":"醉赤壁","songname_hilight":"醉赤壁","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":36160,"albummid":"002g6zv02X7SNi","albumname":"JJ陆","albumname_hilight":"JJ陆","alertid":2,"chinesesinger":0,"docid":"12185126936086867443","grp":[],"interval":222,"isonly":0,"lyric":"联想idea Pad S9/S10笔记本主题曲|《Cries In A Distance》国语版","lyric_hilight":"联想idea Pad S9/S10笔记本主题曲|《Cries In A Distance》国语版","msgid":14,"nt":1763617264,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":48428,"tryend":77880,"trysize":0},"pubtime":1224259200,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":3558130,"size320":8880059,"sizeape":24668326,"sizeflac":25311145,"sizeogg":5245718,"songid":447257,"songmid":"001N8e5Q4Gjxda","songname":"Always Online","songname_hilight":"Always Online","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":62342,"albummid":"000TuW8h0AH2n4","albumname":"她说 概念自选辑","albumname_hilight":"她说 概念自选辑","alertid":2,"chinesesinger":0,"docid":"16389503696289091552","grp":[],"interval":320,"isonly":0,"lyric":"《爱情睡醒了》电视剧插曲","lyric_hilight":"《爱情睡醒了》电视剧插曲","msgid":14,"nt":1125652363,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":71424,"tryend":116624,"trysize":0},"pubtime":1291737600,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":5129815,"size320":12824234,"sizeape":31102439,"sizeflac":31402641,"sizeogg":6631324,"songid":102415346,"songmid":"001IpbDW34m1Gy","songname":"她说","songname_hilight":"她说","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":421264,"albummid":"001gqOnU3DTg2S","albumname":"因你而在","albumname_hilight":"因你而在","alertid":23,"chinesesinger":0,"docid":"9029251286917089763","grp":[],"interval":287,"isonly":1,"lyric":"","lyric_hilight":"","msgid":14,"nt":1556589106,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":46410,"tryend":102039,"trysize":0},"pubtime":1363104000,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":4593151,"size320":11482581,"sizeape":32884595,"sizeflac":33200214,"sizeogg":6566586,"songid":5063375,"songmid":"002CxSLT41D5tD","songname":"修炼爱情","songname_hilight":"修炼爱情","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":62342,"albummid":"000TuW8h0AH2n4","albumname":"她说 概念自选辑","albumname_hilight":"她说 概念自选辑","alertid":2,"chinesesinger":0,"docid":"13485264915864878463","grp":[],"interval":249,"isonly":0,"lyric":"","lyric_hilight":"","msgid":14,"nt":3488488334,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":46939,"tryend":76758,"trysize":0},"pubtime":1291737600,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":3992807,"size320":9972683,"sizeape":27512829,"sizeflac":28610773,"sizeogg":5793297,"songid":764255,"songmid":"001nUzRq0GgCVb","songname":"当你","songname_hilight":"当你","stream":1,"switch":636675,"t":1,"tag":12,"type":0,"ver":0,"vid":""},{"albumid":36160,"albummid":"002g6zv02X7SNi","albumname":"JJ陆","albumname_hilight":"JJ陆","alertid":2,"chinesesinger":0,"docid":"9045717666542221654","grp":[],"interval":245,"isonly":0,"lyric":"《爱情睡醒了》电视剧插曲","lyric_hilight":"《爱情睡醒了》电视剧插曲","msgid":14,"nt":769315095,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":55300,"tryend":91109,"trysize":0},"pubtime":1224259200,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":3933039,"size320":9819423,"sizeape":30519762,"sizeflac":31020075,"sizeogg":5797246,"songid":447260,"songmid":"003gUMnj3mMwLZ","songname":"我还想她","songname_hilight":"我还想她","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":1799714,"albummid":"003nTYBs3bDc6X","albumname":"梦想的声音 第10期","albumname_hilight":"梦想的声音 第10期","alertid":2,"chinesesinger":0,"docid":"16763311793119848383","grp":[],"interval":237,"isonly":1,"lyric":"","lyric_hilight":"","msgid":14,"nt":372328177,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":48016,"tryend":82135,"trysize":0},"pubtime":1483200000,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":3801972,"size320":9504264,"sizeape":25567904,"sizeflac":25509449,"sizeogg":5081572,"songid":200282136,"songmid":"000H3L9R1fk6DM","songname":"爱要怎么说出口 (Live)","songname_hilight":"爱要怎么说出口 (Live)","stream":1,"switch":636675,"t":1,"tag":12,"type":0,"ver":0,"vid":""},{"albumid":8440,"albummid":"002aaUOS24kcwh","albumname":"曹操","albumname_hilight":"曹操","alertid":2,"chinesesinger":0,"docid":"4062374665433232312","grp":[],"interval":242,"isonly":0,"lyric":"","lyric_hilight":"","msgid":14,"nt":2785728060,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":53560,"tryend":83561,"trysize":0},"pubtime":1140105600,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":3874864,"size320":9683585,"sizeape":28653429,"sizeflac":29362099,"sizeogg":5208973,"songid":101014,"songmid":"0003y8uR1ZZwOI","songname":"曹操","songname_hilight":"曹操","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":1220218,"albummid":"003nbc0602Tgfx","albumname":"不为谁而作的歌","albumname_hilight":"不为谁而作的歌","alertid":23,"chinesesinger":0,"docid":"14570579941565371461","grp":[],"interval":265,"isonly":1,"lyric":"","lyric_hilight":"","msgid":14,"nt":1499992084,"pay":{"payalbum":1,"payalbumprice":200,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":70377,"tryend":106112,"trysize":0},"pubtime":1449072000,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":4254198,"size320":10635181,"sizeape":31212795,"sizeflac":31418862,"sizeogg":5945078,"songid":105095766,"songmid":"002K4xqW4A7m7q","songname":"不为谁而作的歌","songname_hilight":"不为谁而作的歌","stream":1,"switch":636675,"t":1,"tag":10,"type":0,"ver":0,"vid":""},{"albumid":54866,"albummid":"002C0kX720gMQi","albumname":"100天","albumname_hilight":"100天","alertid":2,"chinesesinger":0,"docid":"8822624296444140095","grp":[],"interval":234,"isonly":0,"lyric":"","lyric_hilight":"","msgid":14,"nt":2158779990,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":48401,"tryend":83195,"trysize":0},"pubtime":1261065600,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":3763347,"size320":9399034,"sizeape":26470738,"sizeflac":27103284,"sizeogg":5323370,"songid":648231,"songmid":"002E8ebM3TFWmA","songname":"背对背拥抱","songname_hilight":"背对背拥抱","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":8036,"albummid":"000y5gq7449K9I","albumname":"第二天堂","albumname_hilight":"第二天堂","alertid":2,"chinesesinger":0,"docid":"12094432494334594349","grp":[],"interval":253,"isonly":0,"lyric":"","lyric_hilight":"","msgid":14,"nt":2297679942,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":58729,"tryend":97665,"trysize":0},"pubtime":1086278400,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":4062946,"size320":10163193,"sizeape":30505815,"sizeflac":31343853,"sizeogg":6510357,"songid":95292,"songmid":"002ASCKm3ROw7t","songname":"美人鱼","songname_hilight":"美人鱼","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":88971,"albummid":"002PQCmo2azasb","albumname":"学不会","albumname_hilight":"学不会","alertid":23,"chinesesinger":0,"docid":"16446140126480682331","grp":[],"interval":245,"isonly":1,"lyric":"","lyric_hilight":"","msgid":14,"nt":3239431521,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":69900,"tryend":97999,"trysize":0},"pubtime":1325260800,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":3929020,"size320":9822245,"sizeape":27144952,"sizeflac":27340175,"sizeogg":5424840,"songid":102388808,"songmid":"002kADrZ01iC2L","songname":"那些你很冒险的梦","songname_hilight":"那些你很冒险的梦","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":36160,"albummid":"002g6zv02X7SNi","albumname":"JJ陆","albumname_hilight":"JJ陆","alertid":2,"chinesesinger":0,"docid":"7664359032593665402","grp":[],"interval":233,"isonly":0,"lyric":"《乌鸦嘴妙女郎》电视剧插曲","lyric_hilight":"《乌鸦嘴妙女郎》电视剧插曲","msgid":14,"nt":678394521,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":57019,"tryend":74626,"trysize":0},"pubtime":1224259200,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":3742032,"size320":9345744,"sizeape":27516876,"sizeflac":28168438,"sizeogg":5269060,"songid":447252,"songmid":"0026G2Lq3Cl7ig","songname":"不潮不用花钱","songname_hilight":"不潮不用花钱","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":8035,"albummid":"001HwwNH1inlz9","albumname":"编号89757","albumname_hilight":"编号89757","alertid":2,"chinesesinger":0,"docid":"3794497119039857895","grp":[],"interval":227,"isonly":0,"lyric":"","lyric_hilight":"","msgid":14,"nt":1530059606,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":49473,"tryend":86743,"trysize":0},"pubtime":1112284800,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":3644569,"size320":9107846,"sizeape":24969003,"sizeflac":25627145,"sizeogg":5026177,"songid":95272,"songmid":"002gcuPM3LQpCi","songname":"一千年以后","songname_hilight":"一千年以后","stream":1,"switch":636675,"t":1,"tag":0,"type":0,"ver":0,"vid":""},{"albumid":1819469,"albummid":"000XiCya3Js8Yi","albumname":"梦想的声音 第12期","albumname_hilight":"梦想的声音 第12期","alertid":2,"chinesesinger":0,"docid":"651944364370575613","grp":[],"interval":286,"isonly":1,"lyric":"","lyric_hilight":"","msgid":14,"nt":580189763,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":106326,"tryend":132614,"trysize":0},"pubtime":1484236800,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":4581874,"size320":11454060,"sizeape":34847981,"sizeflac":35044240,"sizeogg":6352027,"songid":200468254,"songmid":"003JlYgD1SvCYe","songname":"崇拜 (Live)","songname_hilight":"崇拜 (Live)","stream":1,"switch":636675,"t":1,"tag":12,"type":0,"ver":0,"vid":""},{"albumid":2104967,"albummid":"003nkrW42K3FLd","albumname":"“反正都精彩”浙江卫视年中盛典","albumname_hilight":"“反正都精彩”浙江卫视年中盛典","alertid":2,"chinesesinger":0,"docid":"16650718019629032558","grp":[],"interval":305,"isonly":1,"lyric":"","lyric_hilight":"","msgid":14,"nt":3349054722,"pay":{"payalbum":0,"payalbumprice":0,"paydownload":1,"payinfo":1,"payplay":0,"paytrackmouth":1,"paytrackprice":200},"preview":{"trybegin":0,"tryend":0,"trysize":0},"pubtime":1497024000,"pure":0,"singer":[{"id":4286,"mid":"001BLpXF2DyJe2","name":"林俊杰","name_hilight":"<span class=\"c_tx_highlight\">林俊杰</span>"}],"size128":4881983,"size320":0,"sizeape":0,"sizeflac":0,"sizeogg":0,"songid":202716476,"songmid":"000RofQF2qULcU","songname":"我怀念的 (Live)","songname_hilight":"我怀念的 (Live)","stream":1,"switch":636675,"t":1,"tag":12,"type":0,"ver":0,"vid":""}],"totalnum":398},"totaltime":0,"zhida":{"albumnum":37,"singerid":4286,"singermid":"001BLpXF2DyJe2","singername":"林俊杰","songnum":441,"type":2}},"message":"","notice":"","subcode":0,"time":1545461207,"tips":""}
  return Promise.resolve(data)
}
