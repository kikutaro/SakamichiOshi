Vue.use(VeeValidate, { locale: 'ja' })

var app = new Vue({
  el: '#app',
  data: {
    sakamichimembers: {
      乃木坂46 : [
        '秋元 真夏','生田 絵梨花','伊藤 かりん','伊藤 純奈','伊藤 理々杏',
        '井上 小百合','岩本 蓮加','梅澤 美波','衛藤 美彩','大園 桃子',
        '川後 陽菜','北野 日奈子','久保 史緒里','齋藤 飛鳥','斉藤 優里',
        '阪口 珠美','桜井 玲香','佐々木 琴子','佐藤 楓','白石 麻衣',
        '新内 眞衣','鈴木 絢音','高山 一実','寺田 蘭世','中田 花奈',
        '中村 麗乃','西野 七瀬','能條 愛未','樋口 日奈','星野 みなみ',
        '堀 未央奈','松村 沙友理','向井 葉月','山崎 怜奈','山下 美月',
        '吉田 綾乃クリスティー','与田 祐希','若月 佑美','渡辺 みり愛','和田 まあや',
        '生駒 里奈','市來 玲奈','伊藤 万理華','伊藤 寧々','川村 真洋',
        '斎藤 ちはる','相楽 伊織','畠中 清羅','橋本 奈々未','深川 麻衣',
        '永島 聖羅','中元 日芽香','松井 玲奈'
      ],
      欅坂46: [
        '石森 虹花','上村 莉菜','尾関 梨香','織田 奈那','小池 美波',
        '小林 由依','齋藤 冬優花','佐藤 詩織','菅井 友香','鈴本 美愉',
        '長沢 菜々香','長濱 ねる','土生 瑞穂','原田 葵','平手 友梨奈',
        '守屋 茜','渡辺 梨加','渡邉 理佐',
        '今泉 佑唯','志田 愛佳','米谷 奈々未'
      ],
      けやき坂46: [
        '井口 眞緒','潮 紗理菜','柿崎 芽実','影山 優佳','加藤 史帆',
        '齊藤 京子','佐々木 久美','佐々木 美玲','高瀬 愛奈','高本 彩花',
        '東村 芽依','金村 美玖','河田 陽菜','小坂 菜緒','富田 鈴花',
        '丹生 明里','濱岸 ひより','松田 好花','宮田 愛萌','渡邉 美穂'
      ]
    },
    selectedmember: { id: '', group: null, name: '', oshi: 0, edit: false},
    editmember: { id: '', group: '', name: '', oshi: 0, edit: false},
    oshimembers: []
  },
  methods: {
    initSelected() {
      this.selectedmember.group = ''
      this.selectedmember.name = ''
      this.selectedmember.oshi = ''
      this.selectedmember.edit = false
    },
    getGroups() {
      return Object.keys(this.sakamichimembers)
    },
    selectGroup(member) {
      return this.sakamichimembers[member.group]
    },
    addOshi() {
      this.oshimembers.push({
        id: this.oshimembers.length,
        group: this.selectedmember.group,
        name: this.selectedmember.name,
        oshi: this.selectedmember.oshi,
        edit: this.selectedmember.edit
       })
       this.initSelected()
    },
    deleteOshi(member) {
      this.oshimembers = this.oshimembers.filter(o => o.name !== member.name)
    },
    oshiMax(value) {
      return 100 - +this.oshitotal
    }
  },
  computed: {
    oshitotal() {
      return this.oshimembers.reduce(function(acc,cur) { return acc + +cur.oshi } ,0)
    }
  }
})