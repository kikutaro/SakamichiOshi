Vue.use(VeeValidate, { locale: 'ja' })

var app = new Vue({
  el: '#app',
  data: {
    sakamichimembers: {
      乃木坂46 : [
        {no: 1, name: '秋元 真夏', img: "http://img.nogizaka46.com/www/member/img/akimotomanatsu_prof.jpg", selected: false},
        {no: 2, name: '生田 絵梨花', img: "http://img.nogizaka46.com/www/member/img/ikutaerika_prof.jpg", selected: false},
        {no: 3, name: '伊藤 かりん', img: "http://img.nogizaka46.com/www/member/img/itoukarin_prof.jpg", selected: false},
        {no: 4, name: '伊藤 純奈', img: "http://img.nogizaka46.com/www/member/img/itoujunna_prof.jpg", selected: false},
        {no: 5, name: '伊藤 理々杏', img: "https://img.nogizaka46.com/www/member/img/itouriria_prof.jpg", selected: false},
        {no: 6, name: '井上 小百合', img: "http://img.nogizaka46.com/www/member/img/inouesayuri_prof.jpg", selected: false},
        {no: 7, name: '岩本 蓮加', img: "https://img.nogizaka46.com/www/member/img/iwamotorenka_prof.jpg", selected: false},
        {no: 8, name: '梅澤 美波', img: "https://img.nogizaka46.com/www/member/img/umezawaminami_prof.jpg", selected: false},
        {no: 9, name: '衛藤 美彩', img: "http://img.nogizaka46.com/www/member/img/etoumisa_prof.jpg", selected: false},
        {no: 10, name: '大園 桃子', img: "https://img.nogizaka46.com/www/member/img/oozonomomoko_prof.jpg", selected: false},
        {no: 11, name: '北野 日奈子', img: "http://img.nogizaka46.com/www/member/img/kitanohinako_prof.jpg", selected: false},
        {no: 12, name: '久保 史緒里', img: "https://img.nogizaka46.com/www/member/img/kuboshiori_prof.jpg", selected: false},
        {no: 13, name: '齋藤 飛鳥', img: "http://img.nogizaka46.com/www/member/img/saitouasuka_prof.jpg", selected: false},
        {no: 14, name: '斉藤 優里', img: "http://img.nogizaka46.com/www/member/img/saitouyuuri_prof.jpg", selected: false},
        {no: 15, name: '阪口 珠美', img: "https://img.nogizaka46.com/www/member/img/sakaguchitamami_prof.jpg", selected: false},
        {no: 16, name: '桜井 玲香', img: "http://img.nogizaka46.com/www/member/img/sakuraireika_prof.jpg", selected: false},
        {no: 17, name: '佐々木 琴子', img: "http://img.nogizaka46.com/www/member/img/sasakikotoko_prof.jpg", selected: false},
        {no: 18, name: '佐藤 楓', img: "https://img.nogizaka46.com/www/member/img/satoukaede_prof.jpg", selected: false},
        {no: 19, name: '白石 麻衣', img: "http://img.nogizaka46.com/www/member/img/shiraishimai_prof.jpg", selected: false},
        {no: 20, name: '新内 眞衣', img: "http://img.nogizaka46.com/www/member/img/shinuchimai_prof.jpg", selected: false},
        {no: 21, name: '鈴木 絢音', img: "http://img.nogizaka46.com/www/member/img/suzukiayane_prof.jpg", selected: false},
        {no: 22, name: '高山 一実', img: "http://img.nogizaka46.com/www/member/img/takayamakazumi_prof.jpg", selected: false},
        {no: 23, name: '寺田 蘭世', img: "http://img.nogizaka46.com/www/member/img/teradaranze_prof.jpg", selected: false},
        {no: 24, name: '中田 花奈', img: "http://img.nogizaka46.com/www/member/img/nakadakana_prof.jpg", selected: false},
        {no: 25, name: '中村 麗乃', img: "https://img.nogizaka46.com/www/member/img/nakamurareno_prof.jpg", selected: false},
        {no: 26, name: '樋口 日奈', img: "http://img.nogizaka46.com/www/member/img/higuchihina_prof.jpg", selected: false},
        {no: 27, name: '星野 みなみ', img: "http://img.nogizaka46.com/www/member/img/hoshinominami_prof.jpg", selected: false},
        {no: 28, name: '堀 未央奈', img: "http://img.nogizaka46.com/www/member/img/horimiona_prof.jpg", selected: false},
        {no: 29, name: '松村 沙友理', img: "http://img.nogizaka46.com/www/member/img/matsumurasayuri_prof.jpg", selected: false},
        {no: 30, name: '向井 葉月', img: "https://img.nogizaka46.com/www/member/img/mukaihazuki_prof.jpg", selected: false},
        {no: 31, name: '山崎 怜奈', img: "http://img.nogizaka46.com/www/member/img/yamazakirena_prof.jpg", selected: false},
        {no: 32, name: '山下 美月', img: "https://img.nogizaka46.com/www/member/img/yamashitamizuki_prof.jpg", selected: false},
        {no: 33, name: '吉田 綾乃クリスティー', img: "https://img.nogizaka46.com/www/member/img/yoshidaayanochristie_prof.jpg", selected: false},
        {no: 34, name: '与田 祐希', img: "https://img.nogizaka46.com/www/member/img/yodayuuki_prof.jpg", selected: false},
        {no: 35, name: '渡辺 みり愛', img: "http://img.nogizaka46.com/www/member/img/watanabemiria_prof.jpg", selected: false},
        {no: 36, name: '和田 まあや', img: "http://img.nogizaka46.com/www/member/img/wadamaaya_prof.jpg", selected: false},
        {no: 37, name: '遠藤 さくら', img: "https://img.nogizaka46.com/www/member/img/endousakura_prof.jpg", selected: false},
        {no: 38, name: '賀喜 遥香', img: "https://img.nogizaka46.com/www/member/img/kakiharuka_prof.jpg", selected: false},
        {no: 39, name: '掛橋 沙耶香', img: "https://img.nogizaka46.com/www/member/img/kakehashisayaka_prof.jpg", selected: false},
        {no: 40, name: '金川 紗耶', img: "https://img.nogizaka46.com/www/member/img/kanagawasaya_prof.jpg", selected: false},
        {no: 41, name: '北川 悠理', img: "https://img.nogizaka46.com/www/member/img/kitagawayuri_prof.jpg", selected: false},
        {no: 42, name: '柴田 柚菜', img: "https://img.nogizaka46.com/www/member/img/shibatayuna_prof.jpg", selected: false},
        {no: 43, name: '清宮 レイ', img: "https://img.nogizaka46.com/www/member/img/seimiyarei_prof.jpg", selected: false},
        {no: 44, name: '田村 真佑', img: "https://img.nogizaka46.com/www/member/img/tamuramayu_prof.jpg", selected: false},
        {no: 45, name: '筒井 あやめ', img: "http://img.nogizaka46.com/www/member/img/tsutsuiayame_prof.jpg", selected: false},
        {no: 46, name: '早川 聖来', img: "https://img.nogizaka46.com/www/member/img/hayakawaseira_prof.jpg", selected: false},
        {no: 47, name: '矢久保 美緒', img: "https://img.nogizaka46.com/www/member/img/yakubomio_prof.jpg", selected: false},
        {no: 48, name: '生駒 里奈', img: "https://www.nogizaka46.com/member/img/ikomarina_prof.jpg", selected: false},
        {no: 49, name: '市來 玲奈', img: "https://www.nogizaka46.com/member/img/ichikirena_prof.jpg", selected: false},
        {no: 50, name: '伊藤 万理華', img: "https://www.nogizaka46.com/member/img/itoumarika_prof.jpg", selected: false},
        {no: 51, name: '伊藤 寧々', img: "https://www.nogizaka46.com/member/img/itounene_prof.jpg", selected: false},
        {no: 52, name: '川村 真洋', img: "https://www.nogizaka46.com/member/img/kawamuramahiro_prof.jpg", selected: false},
        {no: 53, name: '川後 陽菜', img: "https://www.nogizaka46.com/member/img/kawagohina_prof.jpg", selected: false},
        {no: 54, name: '斎藤 ちはる', img: "https://www.nogizaka46.com/member/img/saitouchiharu_prof.jpg", selected: false},
        {no: 55, name: '相楽 伊織', img: "https://www.nogizaka46.com/member/img/sagaraiori_prof.jpg", selected: false},
        {no: 56, name: '畠中 清羅', img: "https://www.nogizaka46.com/member/img/hatanakaseira_prof.jpg", selected: false},
        {no: 57, name: '橋本 奈々未', img: "https://www.nogizaka46.com/member/img/hashimotonanami_prof.jpg", selected: false},
        {no: 58, name: '深川 麻衣', img: "https://www.nogizaka46.com/member/img/fukagawamai_prof.jpg", selected: false},
        {no: 59, name: '永島 聖羅', img: "https://www.nogizaka46.com/member/img/nagashimaseira_prof.jpg", selected: false},
        {no: 60, name: '中元 日芽香', img: "http://img.nogizaka46.com/www/member/img/nakamotohimeka_prof.jpg", selected: false},
        {no: 61, name: '西野 七瀬', img: "http://img.nogizaka46.com/www/member/img/nishinonanase_prof.jpg", selected: false},
        {no: 62, name: '能條 愛未', img: "https://www.nogizaka46.com/member/img/noujouami_prof.jpg", selected: false},
        {no: 63, name: '若月 佑美', img: "https://www.nogizaka46.com/member/img/wakatsukiyumi_prof.jpg", selected: false},
        {no: 64, name: '松井 玲奈', img: "https://www.nogizaka46.com/member/img/matsuirena_prof.jpg", selected: false}
      ],
      欅坂46: [
        {no: 1, name: '石森 虹花', img: "http://cdn.keyakizaka46.com/images/14/b66/d35aeccda74c746128c825c76bab9/400_320_102400.jpg", selected: false},
        {no: 2, name: '上村 莉菜', img: "http://cdn.keyakizaka46.com/images/14/82c/ac93d53c8eeb482888e4778515a6d/400_320_102400.jpg", selected: false},
        {no: 3, name: '尾関 梨香', img: "http://cdn.keyakizaka46.com/images/14/341/40f9dc347ca7f409cc07e618a713c/400_320_102400.jpg", selected: false},
        {no: 4, name: '織田 奈那', img: "http://cdn.keyakizaka46.com/images/14/714/3ffb5239b76026f21ef66e44c9236/400_320_102400.jpg", selected: false},
        {no: 5, name: '小池 美波', img: "http://cdn.keyakizaka46.com/images/14/8ce/3ad4eeda5e49b66162856a6aab572/400_320_102400.jpg", selected: false},
        {no: 6, name: '小林 由依', img: "http://cdn.keyakizaka46.com/images/14/fd4/aa188cf6628e3e374200fad737759/400_320_102400.jpg", selected: false},
        {no: 7, name: '齋藤 冬優花', img: "http://cdn.keyakizaka46.com/images/14/3ab/6c7679adfc99bad0ec559c6c045ed/400_320_102400.jpg", selected: false},
        {no: 8, name: '佐藤 詩織', img: "http://cdn.keyakizaka46.com/images/14/d2d/d950c72fa93b33ff8fbb74d7e2698/400_320_102400.jpg", selected: false},
        {no: 9, name: '菅井 友香', img: "http://cdn.keyakizaka46.com/images/14/a16/9acd98237dcf95d83503b809f21ab/400_320_102400.jpg", selected: false},
        {no: 10, name: '鈴本 美愉', img: "http://cdn.keyakizaka46.com/images/14/792/d5d35747d7858909c335ba3e6db66/400_320_102400.jpg", selected: false},
        {no: 11, name: '長沢 菜々香', img: "http://cdn.keyakizaka46.com/images/14/001/c9315e8cbd5fceb3e08a19ea8751e/400_320_102400.jpg", selected: false},
        {no: 12, name: '長濱 ねる', img: "http://cdn.keyakizaka46.com/images/14/7a9/a41f36ba76109caa89202fafa6564/400_320_102400.jpg", selected: false},
        {no: 13, name: '土生 瑞穂', img: "http://cdn.keyakizaka46.com/images/14/956/f6e8089dc5174a297029fa880e724/400_320_102400.jpg", selected: false},
        {no: 14, name: '原田 葵', img: "http://cdn.keyakizaka46.com/images/14/b58/5098183eacf65f2d96162e4452b88/400_320_102400.jpg", selected: false},
        {no: 15, name: '平手 友梨奈', img: "http://cdn.keyakizaka46.com/images/14/178/2397fe70e0fecb83ad55e26809649/400_320_102400.jpg", selected: false},
        {no: 16, name: '守屋 茜', img: "http://cdn.keyakizaka46.com/images/14/90d/8278067de7d64820318b3c1bc8ee8/400_320_102400.jpg", selected: false},
        {no: 17, name: '渡辺 梨加', img: "http://cdn.keyakizaka46.com/images/14/54f/31ad334239c04245b6118f3296488/400_320_102400.jpg", selected: false},
        {no: 18, name: '渡邉 理佐', img: "http://cdn.keyakizaka46.com/images/14/752/02396f50b62224f8b6b686b1cffcb/400_320_102400.jpg", selected: false},
        {no: 19, name: '井上 梨名', img: "http://cdn.keyakizaka46.com/images/14/f2a/548bb12378a23edf77d3eb73a73b9/400_320_102400.jpg", selected: false},
        {no: 20, name: '関 有美子', img: "http://cdn.keyakizaka46.com/images/14/697/812c86ba90fc5ee86580d311dfdf0/400_320_102400.jpg", selected: false},
        {no: 21, name: '武元 唯衣', img: "http://cdn.keyakizaka46.com/images/14/113/f50cd11079258b9b9beb385506469/400_320_102400.jpg", selected: false},
        {no: 22, name: '田村 保乃', img: "http://cdn.keyakizaka46.com/images/14/365/3c7e97dd0fdca3f4c3ed0b2ca2f6d/400_320_102400.jpg", selected: false},
        {no: 23, name: '藤吉 夏鈴', img: "http://cdn.keyakizaka46.com/images/14/fe2/c10726fc0995b818cf442178086a6/400_320_102400.jpg", selected: false},
        {no: 24, name: '松田 里奈', img: "http://cdn.keyakizaka46.com/images/14/9cd/8faf1208d41ece6af2d698514ace6/400_320_102400.jpg", selected: false},
        {no: 25, name: '松平 璃子', img: "http://cdn.keyakizaka46.com/images/14/42e/1e29e11b88d4cc8197cdd7bd53d05/400_320_102400.jpg", selected: false},
        {no: 26, name: '森田 ひかる', img: "http://cdn.keyakizaka46.com/images/14/292/2081762ff7b17d24ab110ba3fc67b/400_320_102400.jpg", selected: false},
        {no: 27, name: '山﨑 天', img: "http://cdn.keyakizaka46.com/images/14/7a6/7b8e19dbf5460fcc8aa4aa1fe098b/400_320_102400.jpg", selected: false},
        {no: 28, name: '今泉 佑唯', img: "http://cdn.keyakizaka46.com/images/14/0cc/b96bd60c3ee8b9d2670aae2604879/400_320_102400.jpg", selected: false},
        {no: 29, name: '志田 愛佳', img: "http://cdn.keyakizaka46.com/images/14/e8c/7a28300a25cd82d89d04a7dceaeeb/400_720_102400.jpg", selected: false},
        {no: 30, name: '米谷 奈々未', img: "http://cdn.keyakizaka46.com/images/14/0d2/67667c2ddfd59fe852ce71ba5178f/400_720_102400.jpg", selected: false}
      ],
      けやき坂46: [
        {no: 1, name: '井口 眞緒', img: "http://cdn.keyakizaka46.com/images/14/214/3302a6269297174c2474cf900b67b/400_320_102400.jpg", selected: false},
        {no: 2, name: '潮 紗理菜', img: "http://cdn.keyakizaka46.com/images/14/889/55ee0311fa96af442a9bea1176e8c/400_320_102400.jpg", selected: false},
        {no: 3, name: '柿崎 芽実', img: "http://cdn.keyakizaka46.com/images/14/c34/6ca0737dca69cfab05b2861820cf2/400_320_102400.jpg", selected: false},
        {no: 4, name: '影山 優佳', img: "http://cdn.keyakizaka46.com/images/14/114/1fe6713d31157db8889ebde24bb2e/400_320_102400.jpg", selected: false},
        {no: 5, name: '加藤 史帆', img: "http://cdn.keyakizaka46.com/images/14/2b5/275b8cfae99da5d6551e95bd73099/400_320_102400.jpg", selected: false},
        {no: 6, name: '齊藤 京子', img: "http://cdn.keyakizaka46.com/images/14/2ef/8bed0b379314bd02a222cbb1c5731/400_320_102400.jpg", selected: false},
        {no: 7, name: '佐々木 久美', img: "http://cdn.keyakizaka46.com/images/14/ecc/ebb59100e95f5229e6c119bff8f96/400_320_102400.jpg", selected: false},
        {no: 8, name: '佐々木 美玲', img: "http://cdn.keyakizaka46.com/images/14/589/13d9ddcb293c9d843f0aeb2d9a451/400_320_102400.jpg", selected: false},
        {no: 9, name: '高瀬 愛奈', img: "http://cdn.keyakizaka46.com/images/14/33c/bc0f0fa7ce5609fd5f2ae5addf2ad/400_320_102400.jpg", selected: false},
        {no: 10, name: '高本 彩花', img: "http://cdn.keyakizaka46.com/images/14/e3a/6f4d2e06c91ba64becddc08f0f31c/400_320_102400.jpg", selected: false},
        {no: 11, name: '東村 芽依', img: "http://cdn.keyakizaka46.com/images/14/19a/b91f19137d96947e40af0d2f98c46/400_320_102400.jpg", selected: false},
        {no: 12, name: '金村 美玖', img: "http://cdn.keyakizaka46.com/images/14/b23/732fa8bfb372d7c422ec33b2b7175/400_320_102400.jpg", selected: false},
        {no: 13, name: '河田 陽菜', img: "http://cdn.keyakizaka46.com/images/14/fca/65014e388cb36872dc6f0f41064d4/400_320_102400.jpg", selected: false},
        {no: 14, name: '小坂 菜緒', img: "http://cdn.keyakizaka46.com/images/14/fe7/ddc6522ca1288493e520f4d72bd3f/400_320_102400.jpg", selected: false},
        {no: 15, name: '富田 鈴花', img: "http://cdn.keyakizaka46.com/images/14/1e8/517f5f701a0360776525a726649c9/400_320_102400.jpg", selected: false},
        {no: 16, name: '丹生 明里', img: "http://cdn.keyakizaka46.com/images/14/0af/96a6b5c661af80e0c2a718a32b6d0/400_320_102400.jpg", selected: false},
        {no: 17, name: '濱岸 ひより', img: "http://cdn.keyakizaka46.com/images/14/932/c99888b323d5e238c36ecaa24e44c/400_320_102400.jpg", selected: false},
        {no: 18, name: '松田 好花', img: "http://cdn.keyakizaka46.com/images/14/23b/784966d157f3cb4db367fccfa376a/400_320_102400.jpg", selected: false},
        {no: 19, name: '宮田 愛萌', img: "http://cdn.keyakizaka46.com/images/14/483/f9b4cdc82f47c3b43afe8174ac3dd/400_320_102400.jpg", selected: false},
        {no: 20, name: '渡邉 美穂', img: "http://cdn.keyakizaka46.com/images/14/678/1a935d4f41e630abeacde865c76b7/400_320_102400.jpg", selected: false},
        {no: 21, name: '上村 ひなの', img: "http://cdn.keyakizaka46.com/images/14/084/7a5d3b0bb211facfe2500b1ada0f0/400_320_102400.jpg", selected: false}
      ]
    },
    selectedGroup: '乃木坂46',
    oshi: 10,
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
      this.selectedmember.group = this.selectedGroup
      this.selectedmember.oshi = this.oshi
      this.oshimembers.push(this.selectedmember)
      if(this.oshimembers.length > 0) {
        this.oshitotal = this.oshitotal + +this.oshi
      }
      idx = (this.sakamichimembers[this.selectedGroup]).findIndex(obj => obj.selected == false)
      this.selectedmember = this.sakamichimembers[this.selectedGroup][idx]
      this.oshi = 10
    },
    deleteOshi(member) {
      idx = (this.sakamichimembers[member.group]).findIndex(obj => obj.name === member.name)
      this.sakamichimembers[member.group][idx].selected = false
      this.oshitotal = (this.oshitotal - member.oshi)
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