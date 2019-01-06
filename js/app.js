Vue.use(VeeValidate, { locale: 'ja' })

var app = new Vue({
  el: '#app',
  data: {
    sakamichimembers: {
      乃木坂46 : [
        {no: 1, name: '秋元 真夏', selected: false},{no: 2, name: '生田 絵梨花', selected: false},{no: 3, name: '伊藤 かりん', selected: false},{no: 4, name: '伊藤 純奈', selected: false},{no: 5, name: '伊藤 理々杏', selected: false},
        {no: 6, name: '井上 小百合', selected: false},{no: 7, name: '岩本 蓮加', selected: false},{no: 8, name: '梅澤 美波', selected: false},{no: 9, name: '衛藤 美彩', selected: false},{no: 10, name: '大園 桃子', selected: false},
        {no: 11, name: '北野 日奈子', selected: false},{no: 12, name: '久保 史緒里', selected: false},{no: 13, name: '齋藤 飛鳥', selected: false},{no: 14, name: '斉藤 優里', selected: false},{no: 15, name: '阪口 珠美', selected: false},
        {no: 16, name: '桜井 玲香', selected: false},{no: 17, name: '佐々木 琴子', selected: false},{no: 18, name: '佐藤 楓', selected: false},{no: 19, name: '白石 麻衣', selected: false},{no: 20, name: '新内 眞衣', selected: false},
        {no: 21, name: '鈴木 絢音', selected: false},{no: 22, name: '高山 一実', selected: false},{no: 23, name: '寺田 蘭世', selected: false},{no: 24, name: '中田 花奈', selected: false},{no: 25, name: '中村 麗乃', selected: false},
        {no: 26, name: '西野 七瀬', selected: false},{no: 27, name: '樋口 日奈', selected: false},{no: 28, name: '星野 みなみ', selected: false},{no: 29, name: '堀 未央奈', selected: false},{no: 30, name: '松村 沙友理', selected: false},
        {no: 31, name: '向井 葉月', selected: false},{no: 32, name: '山崎 怜奈', selected: false},{no: 33, name: '山下 美月', selected: false},{no: 34, name: '吉田 綾乃クリスティー', selected: false},{no: 35, name: '与田 祐希', selected: false},
        {no: 36, name: '渡辺 みり愛', selected: false},{no: 37, name: '和田 まあや', selected: false},
        {no: 38, name: '生駒 里奈', selected: false},{no: 39, name: '市來 玲奈', selected: false},{no: 40, name: '伊藤 万理華', selected: false},{no: 41, name: '伊藤 寧々', selected: false},{no: 42, name: '川村 真洋', selected: false},
        {no: 43, name: '川後 陽菜', selected: false},{no: 44, name: '斎藤 ちはる', selected: false},{no: 45, name: '相楽 伊織', selected: false},{no: 46, name: '畠中 清羅', selected: false},{no: 47, name: '橋本 奈々未', selected: false},
        {no: 48, name: '深川 麻衣', selected: false},{no: 49, name: '永島 聖羅', selected: false},{no: 50, name: '中元 日芽香', selected: false},{no: 51, name: '能條 愛未', selected: false},{no: 52, name: '若月 佑美', selected: false},
        {no: 53, name: '松井 玲奈', selected: false}
      ],
      欅坂46: [
        {no: 1, name: '石森 虹花', selected: false},{no: 2, name: '上村 莉菜', selected: false},{no: 3, name: '尾関 梨香', selected: false},{no: 4, name: '織田 奈那', selected: false},{no: 5, name: '小池 美波', selected: false},
        {no: 6, name: '小林 由依', selected: false},{no: 7, name: '齋藤 冬優花', selected: false},{no: 8, name: '佐藤 詩織', selected: false},{no: 9, name: '菅井 友香', selected: false},{no: 10, name: '鈴本 美愉', selected: false},
        {no: 11, name: '長沢 菜々香', selected: false},{no: 12, name: '長濱 ねる', selected: false},{no: 13, name: '土生 瑞穂', selected: false},{no: 14, name: '原田 葵', selected: false},{no: 15, name: '平手 友梨奈', selected: false},
        {no: 16, name: '守屋 茜', selected: false},{no: 17, name: '渡辺 梨加', selected: false},{no: 18, name: '渡邉 理佐', selected: false},
        {no: 19, name: '今泉 佑唯', selected: false},{no: 20, name: '志田 愛佳', selected: false},{no: 21, name: '米谷 奈々未', selected: false}
      ],
      けやき坂46: [
        {no: 1, name: '井口 眞緒', selected: false},{no: 2, name: '潮 紗理菜', selected: false},{no: 3, name: '柿崎 芽実', selected: false},{no: 4, name: '影山 優佳', selected: false},{no: 5, name: '加藤 史帆', selected: false},
        {no: 6, name: '齊藤 京子', selected: false},{no: 7, name: '佐々木 久美', selected: false},{no: 8, name: '佐々木 美玲', selected: false},{no: 9, name: '高瀬 愛奈', selected: false},{no: 10, name: '高本 彩花', selected: false},
        {no: 11, name: '東村 芽依', selected: false},{no: 12, name: '金村 美玖', selected: false},{no: 13, name: '河田 陽菜', selected: false},{no: 14, name: '小坂 菜緒', selected: false},{no: 15, name: '富田 鈴花', selected: false},
        {no: 16, name: '丹生 明里', selected: false},{no: 17, name: '濱岸 ひより', selected: false},{no: 18, name: '松田 好花', selected: false},{no: 19, name: '宮田 愛萌', selected: false},{no: 20, name: '渡邉 美穂', selected: false}
      ]
    },
    selectedGroup: '乃木坂46',
    oshi: 0,
    oshitotal: 0,
    selectedmember: {},
    oshimembers: []
  },
  methods: {
    getGroups() {
      return Object.keys(this.sakamichimembers)
    },
    addOshi() {
      idx = (this.sakamichimembers[this.selectedGroup]).findIndex(obj => obj.no == this.selectedmember.no)
      this.sakamichimembers[this.selectedGroup][idx].selected = true
      this.oshimembers.push({
        no: this.selectedmember.no,
        group: this.selectedGroup,
        name: this.selectedmember.name,
        oshi: this.oshi
      })
      if(this.oshimembers.length > 0) {
        this.oshitotal = this.oshitotal + +this.oshi
      }
      idx = (this.sakamichimembers[this.selectedGroup]).findIndex(obj => obj.selected == false)
      this.selectedmember = this.sakamichimembers[this.selectedGroup][idx]
      this.oshi = 1
    },
    deleteOshi(member) {
      idx = (this.sakamichimembers[member.group]).findIndex(obj => obj.name == member.name)
      this.sakamichimembers[member.group][idx].selected = false
      this.oshitotal = this.oshitotal - +member.oshi
      this.oshimembers = this.oshimembers.filter(m => m.name !== member.name)
    },
    oshiMax(value) {
      return 100 - +this.oshitotal
    },
    onChangeGroup() {
      this.selectedmember = this.sakamichimembers[this.selectedGroup].filter(m => m.selected === false)[0]
    }
  },
  computed: {
    getMembers() {
      return this.sakamichimembers[this.selectedGroup].sort((acc, cur) => acc.no - cur.no).filter(m => m.selected === false)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.selectedmember = this.sakamichimembers[this.selectedGroup][0]
    })
  }
})