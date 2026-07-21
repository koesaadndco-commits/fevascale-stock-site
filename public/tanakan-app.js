const DEFAULT_HACHIBAN_ITEMS = [{"category":"冷蔵","no":1,"name":"味噌タレ(2k)","supplier":"","unit":"Ｐ","price":1579.4,"id":"h0001","kind":"food"},{"category":"冷凍","no":45,"name":"冷凍炒飯Ｈ","supplier":"","unit":"Ｐ","price":174.3,"id":"h0002","kind":"food"},{"category":"冷蔵","no":2,"name":"塩　タレ(2k)","supplier":"","unit":"Ｐ","price":1356.8,"id":"h0003","kind":"food"},{"category":"冷凍","no":46,"name":"五目ベースＢ","supplier":"","unit":"Ｐ","price":179.5,"id":"h0004","kind":"food"},{"category":"冷蔵","no":3,"name":"醤油タレ(1k)","supplier":"","unit":"Ｐ","price":698.0,"id":"h0005","kind":"food"},{"category":"冷凍","no":47,"name":"担々肉味噌B","supplier":"","unit":"Ｐ","price":113.0,"id":"h0006","kind":"food"},{"category":"冷蔵","no":4,"name":"ＫＢＨタレ(500g)","supplier":"","unit":"Ｐ","price":450.0,"id":"h0007","kind":"food"},{"category":"冷凍","no":48,"name":"ストレートポテト（尾家）","supplier":"尾家","unit":"袋","price":960.0,"id":"h0008","kind":"food"},{"category":"冷蔵","no":5,"name":"とんこつ醬油タレ","supplier":"","unit":"P","price":375.0,"id":"h0009","kind":"food"},{"category":"冷凍","no":49,"name":"ミンチ","supplier":"","unit":"Ｐ","price":356.0,"id":"h0010","kind":"food"},{"category":"冷蔵","no":6,"name":"とんこつタレ","supplier":"","unit":"Ｐ","price":730.0,"id":"h0011","kind":"food"},{"category":"冷凍","no":50,"name":"コーン1Ｋ（尾家）","supplier":"尾家","unit":"袋","price":445.0,"id":"h0012","kind":"food"},{"category":"冷蔵","no":7,"name":"唐麺タレ","supplier":"","unit":"Ｐ","price":54.3,"id":"h0013","kind":"food"},{"category":"冷凍","no":51,"name":"ＨＰＥ－５０冷凍スープ","supplier":"","unit":"Ｐ","price":1108.8,"id":"h0014","kind":"food"},{"category":"冷蔵","no":8,"name":"担々麺タレ","supplier":"","unit":"Ｐ","price":505.0,"id":"h0015","kind":"food"},{"category":"冷凍","no":52,"name":"８番餃子　３０入り","supplier":"","unit":"袋","price":408.8,"id":"h0016","kind":"food"},{"category":"冷蔵","no":9,"name":"酸辣湯麺タレ","supplier":"","unit":"Ｐ","price":880.0,"id":"h0017","kind":"food"},{"category":"冷凍","no":53,"name":"チャーシューＣ4Ｋ","supplier":"","unit":"Ｋ","price":3440.0,"id":"h0018","kind":"food"},{"category":"冷蔵","no":10,"name":"冷麺タレ","supplier":"","unit":"Ｐ","price":990.0,"id":"h0019","kind":"food"},{"category":"冷凍","no":54,"name":"８番唐揚げ肉","supplier":"","unit":"Ｋ","price":1123.7,"id":"h0020","kind":"food"},{"category":"冷蔵","no":11,"name":"ザルタレ","supplier":"","unit":"Ｐ","price":1064.0,"id":"h0021","kind":"food"},{"category":"冷凍","no":55,"name":"凍結全卵","supplier":"","unit":"Ｐ","price":350.0,"id":"h0022","kind":"food"},{"category":"冷蔵","no":12,"name":"トマトタレ(1K)","supplier":"","unit":"Ｐ","price":1193.0,"id":"h0023","kind":"food"},{"category":"冷凍","no":56,"name":"204調味油","supplier":"","unit":"Ｐ","price":378.0,"id":"h0024","kind":"food"},{"category":"冷蔵","no":13,"name":"太　麺","supplier":"","unit":"玉","price":50.1,"id":"h0025","kind":"food"},{"category":"冷凍","no":57,"name":"ツブ脂","supplier":"","unit":"Ｐ","price":719.0,"id":"h0026","kind":"food"},{"category":"冷蔵","no":14,"name":"細　麺","supplier":"","unit":"玉","price":49.3,"id":"h0027","kind":"food"},{"category":"冷凍","no":58,"name":"錦糸たまご","supplier":"","unit":"Ｐ","price":350.0,"id":"h0028","kind":"food"},{"category":"冷蔵","no":15,"name":"中島菜麺","supplier":"","unit":"玉","price":80.3,"id":"h0029","kind":"food"},{"category":"冷凍","no":59,"name":"８番春巻き","supplier":"","unit":"本","price":56.8,"id":"h0030","kind":"food"},{"category":"冷蔵","no":16,"name":"８番餃子のタレ","supplier":"","unit":"本","price":246.0,"id":"h0031","kind":"food"},{"category":"冷凍","no":60,"name":"カットレモン","supplier":"","unit":"Ｐ","price":689.0,"id":"h0032","kind":"food"},{"category":"冷蔵","no":17,"name":"８番かまぼこ","supplier":"","unit":"本","price":263.0,"id":"h0033","kind":"food"},{"category":"冷凍","no":61,"name":"にらにんにく餃子","supplier":"","unit":"袋","price":184.0,"id":"h0034","kind":"food"},{"category":"冷蔵","no":18,"name":"８番コンパウンド","supplier":"","unit":"Ｐ","price":644.5,"id":"h0035","kind":"food"},{"category":"冷凍","no":62,"name":"海老餃子","supplier":"","unit":"袋","price":594.8,"id":"h0036","kind":"food"},{"category":"冷蔵","no":19,"name":"８番味付メンマ","supplier":"","unit":"Ｐ","price":802.0,"id":"h0037","kind":"food"},{"category":"冷凍","no":63,"name":"麻辣辛肉味噌","supplier":"","unit":"Ｐ","price":98.0,"id":"h0038","kind":"food"},{"category":"冷蔵","no":20,"name":"紅生姜0.5ｋ（アコス）","supplier":"アコス","unit":"Ｐ","price":255.0,"id":"h0039","kind":"food"},{"category":"冷凍","no":64,"name":"鶏むねチャーシュー","supplier":"","unit":"Ｐ","price":459.0,"id":"h0040","kind":"food"},{"category":"冷蔵","no":21,"name":"漬物2ｋ（尾家）","supplier":"尾家","unit":"Ｐ","price":378.0,"id":"h0041","kind":"food"},{"category":"冷凍","no":65,"name":"国産柚子果汁１５0ｇ","supplier":"","unit":"Ｐ","price":140.0,"id":"h0042","kind":"food"},{"category":"冷蔵","no":22,"name":"８番辣油","supplier":"","unit":"本","price":390.0,"id":"h0043","kind":"food"},{"category":"冷凍","no":66,"name":"刻みゆず１００ｇ","supplier":"","unit":"Ｐ","price":587.0,"id":"h0044","kind":"food"},{"category":"冷凍","no":67,"name":"８番ゆず豚肉5００ｇ","supplier":"","unit":"Ｐ","price":1267.0,"id":"h0045","kind":"food"},{"category":"冷蔵","no":24,"name":"おろしニンニク(アコス）","supplier":"アコス","unit":"袋","price":4.0,"id":"h0046","kind":"food"},{"category":"冷凍","no":68,"name":"8番唐揚げ300ｇ国産むね肉","supplier":"","unit":"Ｐ","price":500.0,"id":"h0047","kind":"food"},{"category":"冷蔵","no":26,"name":"サンラーペッパー","supplier":"","unit":"袋","price":200.0,"id":"h0048","kind":"food"},{"category":"常温","no":69,"name":"一味唐辛子","supplier":"","unit":"袋","price":500.0,"id":"h0049","kind":"food"},{"category":"冷蔵","no":27,"name":"紅油","supplier":"","unit":"Ｐ","price":790.0,"id":"h0050","kind":"food"},{"category":"常温","no":70,"name":"牛もつ用スパイス","supplier":"","unit":"袋","price":840.0,"id":"h0051","kind":"food"},{"category":"冷蔵","no":28,"name":"乾燥わかめ（本部)","supplier":"本部","unit":"Ｐ","price":1333.0,"id":"h0052","kind":"food"},{"category":"常温","no":71,"name":"和だし用八味１００ｇ","supplier":"","unit":"袋","price":402.0,"id":"h0053","kind":"food"},{"category":"冷蔵","no":29,"name":"麻辣タレ","supplier":"","unit":"P","price":840.0,"id":"h0054","kind":"food"},{"category":"常温","no":72,"name":"ねりわさび","supplier":"","unit":"本","price":410.0,"id":"h0055","kind":"food"},{"category":"冷蔵","no":30,"name":"バジルソース","supplier":"","unit":"P","price":960.0,"id":"h0056","kind":"food"},{"category":"常温","no":73,"name":"ラード缶15Ｋ（尾家）","supplier":"尾家","unit":"缶","price":5350.0,"id":"h0057","kind":"food"},{"category":"冷蔵","no":31,"name":"シュレッドチーズ","supplier":"","unit":"袋","price":595.0,"id":"h0058","kind":"food"},{"category":"常温","no":74,"name":"純ゴマ油（8ｋ）","supplier":"","unit":"缶","price":7100.0,"id":"h0059","kind":"food"},{"category":"冷蔵","no":32,"name":"レモンソース","supplier":"","unit":"P","price":195.0,"id":"h0060","kind":"food"},{"category":"常温","no":75,"name":"8番スパイスＣ","supplier":"","unit":"袋","price":420.0,"id":"h0061","kind":"food"},{"category":"冷蔵","no":33,"name":"粉チーズ","supplier":"","unit":"袋","price":510.0,"id":"h0062","kind":"food"},{"category":"常温","no":76,"name":"塩（小袋）","supplier":"小袋","unit":"袋","price":2.3,"id":"h0063","kind":"food"},{"category":"冷蔵","no":34,"name":"完熟カットトマト","supplier":"","unit":"個","price":195.0,"id":"h0064","kind":"food"},{"category":"常温","no":77,"name":"８番唐揚げ粉","supplier":"","unit":"袋","price":570.0,"id":"h0065","kind":"food"},{"category":"冷蔵","no":35,"name":"トマトソース","supplier":"","unit":"P","price":142.0,"id":"h0066","kind":"food"},{"category":"常温","no":78,"name":"８番特製胡椒","supplier":"","unit":"袋","price":980.0,"id":"h0067","kind":"food"},{"category":"冷蔵","no":36,"name":"プチパン","supplier":"","unit":"袋","price":283.0,"id":"h0068","kind":"food"},{"category":"常温","no":79,"name":"８番酢","supplier":"","unit":"本","price":428.0,"id":"h0069","kind":"food"},{"category":"冷蔵","no":37,"name":"鬼辛８唐辛子","supplier":"","unit":"P","price":22.0,"id":"h0070","kind":"food"},{"category":"常温","no":80,"name":"麻辣オイル","supplier":"","unit":"Ｐ","price":1150.0,"id":"h0071","kind":"food"},{"category":"冷蔵","no":38,"name":"サワークリーム","supplier":"","unit":"P","price":1250.0,"id":"h0072","kind":"food"},{"category":"常温","no":81,"name":"８番マー油","supplier":"","unit":"袋","price":1004.0,"id":"h0073","kind":"food"},{"category":"冷蔵","no":39,"name":"牛もつ煮パック","supplier":"","unit":"P","price":175.0,"id":"h0074","kind":"food"},{"category":"常温","no":82,"name":"ねりからし小袋","supplier":"","unit":"袋","price":2.0,"id":"h0075","kind":"food"},{"category":"冷蔵","no":40,"name":"8番牛もつ用スパイス１００ｇ","supplier":"","unit":"袋","price":184.0,"id":"h0076","kind":"food"},{"category":"常温","no":83,"name":"刻みのり（本部）","supplier":"本部","unit":"袋","price":580.0,"id":"h0077","kind":"food"},{"category":"常温","no":84,"name":"ギョーザ袋タレ","supplier":"","unit":"Ｐ","price":9.6,"id":"h0078","kind":"food"},{"category":"冷蔵","no":42,"name":"肉ざるパック","supplier":"","unit":"Ｐ","price":1510.0,"id":"h0079","kind":"food"},{"category":"常温","no":85,"name":"おにぎりのり","supplier":"","unit":"Ｐ","price":650.0,"id":"h0080","kind":"food"},{"category":"冷蔵","no":43,"name":"香辣油","supplier":"","unit":"Ｐ","price":1400.0,"id":"h0081","kind":"food"},{"category":"常温","no":86,"name":"りんごジュース（本部）","supplier":"本部","unit":"個","price":48.0,"id":"h0082","kind":"food"},{"category":"冷蔵","no":44,"name":"長ネギ斜め切り","supplier":"","unit":"Ｐ","price":360.0,"id":"h0083","kind":"food"},{"category":"常温","no":87,"name":"ネギ油","supplier":"","unit":"袋","price":1380.0,"id":"h0084","kind":"food"},{"category":"野菜","no":74,"name":"キャベツキロ（岩谷）","supplier":"岩谷","unit":"K","price":70.0,"id":"h0085","kind":"food"},{"category":"ドリンク・その他","no":112,"name":"米（本部）","supplier":"本部","unit":"Ｋ","price":375.0,"id":"h0086","kind":"food"},{"category":"野菜","no":75,"name":"キャベツ１０キロ（岩谷）","supplier":"岩谷","unit":"ｃ／ｓ","price":700.0,"id":"h0087","kind":"food"},{"category":"ドリンク・その他","no":113,"name":"もやし","supplier":"","unit":"Ｋ","price":130.0,"id":"h0088","kind":"food"},{"category":"野菜","no":76,"name":"キャベツ10キロ（武生青果）","supplier":"武生青果","unit":"ｃ／ｓ","price":1600.0,"id":"h0089","kind":"food"},{"category":"ドリンク・その他","no":114,"name":"コーラ","supplier":"","unit":"本","price":55.0,"id":"h0090","kind":"food"},{"category":"野菜","no":77,"name":"カットネギ","supplier":"","unit":"Ｋ","price":500.0,"id":"h0091","kind":"food"},{"category":"ドリンク・その他","no":115,"name":"ビール中","supplier":"","unit":"本","price":250.0,"id":"h0092","kind":"food"},{"category":"野菜","no":78,"name":"ネギ(武生青果）","supplier":"武生青果","unit":"c/s","price":1500.0,"id":"h0093","kind":"food"},{"category":"ドリンク・その他","no":116,"name":"キリンゼロイチ","supplier":"","unit":"本","price":120.0,"id":"h0094","kind":"food"},{"category":"野菜","no":79,"name":"カット人参（本部）","supplier":"本部","unit":"袋","price":250.0,"id":"h0095","kind":"food"},{"category":"ドリンク・その他","no":117,"name":"松竹梅上選旅カップ","supplier":"","unit":"本","price":170.0,"id":"h0096","kind":"food"},{"category":"野菜","no":80,"name":"タマネギ（10ｋｇ）（青果）","supplier":"青果","unit":"袋","price":3000.0,"id":"h0097","kind":"food"},{"category":"ドリンク・その他","no":118,"name":"空ビン中","supplier":"","unit":"本","price":15.0,"id":"h0098","kind":"food"},{"category":"野菜","no":81,"name":"カット玉ねぎ","supplier":"","unit":"Ｋ","price":300.0,"id":"h0099","kind":"food"},{"category":"野菜","no":82,"name":"カットキャベツ（岩谷）","supplier":"岩谷","unit":"Ｋ","price":87.5,"id":"h0100","kind":"food"},{"category":"ドリンク・その他","no":120,"name":"キリン一番搾り生３Ｌ","supplier":"","unit":"本","price":1467.0,"id":"h0101","kind":"food"},{"category":"野菜","no":83,"name":"カットキャベツ（武生青果）","supplier":"武生青果","unit":"Ｋ","price":200.0,"id":"h0102","kind":"food"},{"category":"ドリンク・その他","no":121,"name":"ハイボール","supplier":"","unit":"本","price":1880.0,"id":"h0103","kind":"food"},{"category":"野菜","no":84,"name":"カットキャベツ（滋賀）","supplier":"滋賀","unit":"Ｋ","price":92.11,"id":"h0104","kind":"food"},{"category":"ドリンク・その他","no":122,"name":"ホワイトホース（ハイボール）","supplier":"ハイボール","unit":"本","price":5180.0,"id":"h0105","kind":"food"},{"category":"野菜","no":85,"name":"青梗菜（武生青果）","supplier":"武生青果","unit":"袋","price":120.0,"id":"h0106","kind":"food"},{"category":"ドリンク・その他","no":123,"name":"炭酸水","supplier":"","unit":"本","price":49.0,"id":"h0107","kind":"food"},{"category":"野菜","no":87,"name":"ぶなしめじ（本部）","supplier":"本部","unit":"Ｐ","price":200.0,"id":"h0108","kind":"food"},{"category":"野菜","no":88,"name":"ニラ(本部）","supplier":"本部","unit":"袋","price":156.0,"id":"h0109","kind":"food"},{"category":"野菜","no":89,"name":"大根","supplier":"","unit":"本","price":300.0,"id":"h0110","kind":"food"},{"category":"野菜","no":90,"name":"胡瓜","supplier":"","unit":"本","price":60.0,"id":"h0111","kind":"food"},{"category":"野菜","no":91,"name":"かいわれ","supplier":"","unit":"Ｐ","price":75.0,"id":"h0112","kind":"food"},{"category":"ドリンク・その他","no":129,"name":"カップアイス（尾家産業）","supplier":"尾家産業","unit":"個","price":98.0,"id":"h0113","kind":"food"},{"category":"野菜","no":92,"name":"水菜200ｇ（本部）","supplier":"本部","unit":"束","price":130.0,"id":"h0114","kind":"food"},{"category":"ドリンク・その他","no":130,"name":"アイス","supplier":"","unit":"個","price":103.0,"id":"h0115","kind":"food"},{"category":"野菜","no":93,"name":"レモン","supplier":"","unit":"個","price":100.0,"id":"h0116","kind":"food"},{"category":"ドリンク・その他","no":131,"name":"アイスコーン","supplier":"","unit":"本","price":10.0,"id":"h0117","kind":"food"},{"category":"野菜","no":94,"name":"カットキャベツ（）","supplier":"","unit":"K","price":81.3,"id":"h0118","kind":"food"},{"category":"ドリンク・その他","no":132,"name":"一味唐辛子（本部）","supplier":"本部","unit":"Ｐ","price":103.0,"id":"h0119","kind":"food"},{"category":"野菜","no":95,"name":"白髪ねぎカット１００ｇ","supplier":"","unit":"Ｐ","price":185.0,"id":"h0120","kind":"food"},{"category":"ドリンク・その他","no":133,"name":"いりごま（アコス）","supplier":"アコス","unit":"Ｐ","price":565.0,"id":"h0121","kind":"food"},{"category":"野菜","no":96,"name":"パクチー","supplier":"","unit":"束","price":450.0,"id":"h0122","kind":"food"},{"category":"ドリンク・その他","no":134,"name":"白絞油（尾家産業）","supplier":"尾家産業","unit":"缶","price":4200.0,"id":"h0123","kind":"food"},{"category":"野菜","no":97,"name":"ネギ（エフテック）","supplier":"エフテック","unit":"K","price":367.0,"id":"h0124","kind":"food"},{"category":"ドリンク・その他","no":135,"name":"マヨネーズ小袋","supplier":"","unit":"袋","price":13.0,"id":"h0125","kind":"food"},{"category":"野菜","no":98,"name":"カットネギ（エフテック）","supplier":"エフテック","unit":"K","price":367.0,"id":"h0126","kind":"food"},{"category":"ドリンク・その他","no":136,"name":"鬼おろし（尾家）（冷凍）","supplier":"尾家","unit":"Ｐ","price":430.0,"id":"h0127","kind":"food"},{"category":"ドリンク・その他","no":137,"name":"乾燥わかめ500g（尾家）","supplier":"尾家","unit":"袋","price":1200.0,"id":"h0128","kind":"food"},{"category":"備品","no":1,"name":"ナプキン5000入","supplier":"","unit":"ｃ/ｓ","price":2880.0,"id":"h0129","kind":"supplies"},{"category":"備品","no":39,"name":"アルコール１８Ｌ","supplier":"","unit":"箱","price":3060.0,"id":"h0130","kind":"supplies"},{"category":"備品","no":2,"name":"天ぷら敷紙400入","supplier":"","unit":"袋","price":675.0,"id":"h0131","kind":"supplies"},{"category":"備品","no":40,"name":"ペーパータオル","supplier":"","unit":"箱","price":2600.0,"id":"h0132","kind":"supplies"},{"category":"備品","no":3,"name":"デンカラップ","supplier":"","unit":"巻","price":900.0,"id":"h0133","kind":"supplies"},{"category":"備品","no":41,"name":"トイレットペーパー","supplier":"","unit":"袋","price":435.0,"id":"h0134","kind":"supplies"},{"category":"備品","no":4,"name":"弁当パック（１００入り）","supplier":"１００入り","unit":"冊","price":250.0,"id":"h0135","kind":"supplies"},{"category":"備品","no":42,"name":"エンボス手袋","supplier":"","unit":"箱","price":140.0,"id":"h0136","kind":"supplies"},{"category":"備品","no":5,"name":"レジパックＮｏ45（１００入り）","supplier":"１００入り","unit":"冊","price":460.0,"id":"h0137","kind":"supplies"},{"category":"備品","no":43,"name":"南越指定ゴミ袋４５Ｌ","supplier":"","unit":"枚","price":8.36,"id":"h0138","kind":"supplies"},{"category":"備品","no":6,"name":"持ち帰り袋1000入りＢＩＯ","supplier":"","unit":"１００/袋","price":275.0,"id":"h0139","kind":"supplies"},{"category":"備品","no":44,"name":"南越指定ゴミ袋90Ｌ","supplier":"","unit":"枚","price":28.0,"id":"h0140","kind":"supplies"},{"category":"備品","no":7,"name":"ニューフクロール（１０００枚）","supplier":"１０００枚","unit":"枚","price":1250.0,"id":"h0141","kind":"supplies"},{"category":"備品","no":45,"name":"鯖江指定ゴミ袋45Ｌ","supplier":"","unit":"枚","price":10.4,"id":"h0142","kind":"supplies"},{"category":"備品","no":8,"name":"ストロー５００入","supplier":"","unit":"袋","price":350.0,"id":"h0143","kind":"supplies"},{"category":"備品","no":46,"name":"鯖江指定ゴミ袋90Ｌ","supplier":"","unit":"枚","price":36.0,"id":"h0144","kind":"supplies"},{"category":"備品","no":9,"name":"風船１００入り","supplier":"","unit":"袋","price":1200.0,"id":"h0145","kind":"supplies"},{"category":"備品","no":47,"name":"ポリ袋LD45－90透明","supplier":"","unit":"枚","price":35.0,"id":"h0146","kind":"supplies"},{"category":"備品","no":10,"name":"サーマルロール（レジ）","supplier":"レジ","unit":"本","price":80.0,"id":"h0147","kind":"supplies"},{"category":"備品","no":48,"name":"ポリ袋LD35－70透明","supplier":"","unit":"枚","price":21.0,"id":"h0148","kind":"supplies"},{"category":"備品","no":11,"name":"サーマルロール（プリンタ）","supplier":"プリンタ","unit":"本","price":190.0,"id":"h0149","kind":"supplies"},{"category":"備品","no":49,"name":"ゴ　ミ　袋(90L）","supplier":"","unit":"ｃ/ｓ","price":2480.0,"id":"h0150","kind":"supplies"},{"category":"備品","no":12,"name":"爪楊枝","supplier":"","unit":"箱","price":850.0,"id":"h0151","kind":"supplies"},{"category":"備品","no":50,"name":"ゴ　ミ　袋透明(45L）","supplier":"","unit":"枚","price":6.9,"id":"h0152","kind":"supplies"},{"category":"備品","no":13,"name":"爪楊枝（的場）","supplier":"的場","unit":"個","price":98.0,"id":"h0153","kind":"supplies"},{"category":"備品","no":51,"name":"spハンドラベル賞味期限","supplier":"","unit":"巻","price":80.0,"id":"h0154","kind":"supplies"},{"category":"備品","no":14,"name":"紙オシボリ","supplier":"","unit":"本","price":2.8,"id":"h0155","kind":"supplies"},{"category":"備品","no":52,"name":"ニトリルグローブ","supplier":"","unit":"枚","price":4.75,"id":"h0156","kind":"supplies"},{"category":"備品","no":16,"name":"ゴムバンド","supplier":"","unit":"袋","price":300.0,"id":"h0157","kind":"supplies"},{"category":"テイクアウト","no":53,"name":"持帰点心容器（透明）100","supplier":"透明","unit":"個","price":25.52,"id":"h0158","kind":"supplies"},{"category":"備品","no":17,"name":"ス　ポ　ン　ジ","supplier":"","unit":"個","price":59.6,"id":"h0159","kind":"supplies"},{"category":"テイクアウト","no":54,"name":"持帰り炒飯容器（本体）30","supplier":"本体","unit":"個","price":22.0,"id":"h0160","kind":"supplies"},{"category":"備品","no":18,"name":"がんこたわし","supplier":"","unit":"個","price":198.0,"id":"h0161","kind":"supplies"},{"category":"テイクアウト","no":55,"name":"持帰り炒飯容器（ふた）90","supplier":"ふた","unit":"個","price":8.0,"id":"h0162","kind":"supplies"},{"category":"備品","no":19,"name":"ストリームコンク","supplier":"","unit":"本","price":2200.0,"id":"h0163","kind":"supplies"},{"category":"テイクアウト","no":56,"name":"ポテトボックス(小）子セ","supplier":"小","unit":"袋","price":1300.0,"id":"h0164","kind":"supplies"},{"category":"備品","no":20,"name":"ストリームコンク","supplier":"","unit":"缶","price":2500.0,"id":"h0165","kind":"supplies"},{"category":"テイクアウト","no":57,"name":"子供用はし","supplier":"","unit":"本","price":1.4,"id":"h0166","kind":"supplies"},{"category":"備品","no":21,"name":"ハンドソープ4Ｌ（的場）","supplier":"的場","unit":"本","price":1180.0,"id":"h0167","kind":"supplies"},{"category":"テイクアウト","no":58,"name":"持帰らーめん容器本体","supplier":"","unit":"個","price":38.0,"id":"h0168","kind":"supplies"},{"category":"備品","no":22,"name":"マジックリン4.5Ｌ（的場）","supplier":"的場","unit":"本","price":1450.0,"id":"h0169","kind":"supplies"},{"category":"テイクアウト","no":59,"name":"TOらーめん容器中皿","supplier":"","unit":"個","price":15.0,"id":"h0170","kind":"supplies"},{"category":"備品","no":23,"name":"ハイターＥ　5Ｋ（的場）","supplier":"的場","unit":"本","price":680.0,"id":"h0171","kind":"supplies"},{"category":"テイクアウト","no":60,"name":"TOらーめん容器ふた","supplier":"","unit":"個","price":14.0,"id":"h0172","kind":"supplies"},{"category":"備品","no":24,"name":"無リンビッグ（5Ｋ×2）（的場）","supplier":"5Ｋ×2","unit":"ｃ/ｓ","price":3380.0,"id":"h0173","kind":"supplies"},{"category":"テイクアウト","no":61,"name":"持帰らーめん用レンゲ","supplier":"","unit":"本","price":4.8,"id":"h0174","kind":"supplies"},{"category":"備品","no":25,"name":"ガラスマジックリン4.5Ｌ（的場）","supplier":"的場","unit":"本","price":1280.0,"id":"h0175","kind":"supplies"},{"category":"テイクアウト","no":62,"name":"持帰用割り箸","supplier":"","unit":"本","price":2.5,"id":"h0176","kind":"supplies"},{"category":"備品","no":26,"name":"ガラスクリーナー","supplier":"","unit":"本","price":1280.0,"id":"h0177","kind":"supplies"},{"category":"テイクアウト","no":63,"name":"持帰らーめんシール","supplier":"","unit":"枚","price":1.8,"id":"h0178","kind":"supplies"},{"category":"備品","no":27,"name":"スケール除去剤","supplier":"","unit":"本","price":2900.0,"id":"h0179","kind":"supplies"},{"category":"テイクアウト","no":64,"name":"保冷バック（タ）","supplier":"タ","unit":"袋","price":84.0,"id":"h0180","kind":"supplies"},{"category":"備品","no":28,"name":"キッチンハイター（的場）","supplier":"的場","unit":"本","price":890.0,"id":"h0181","kind":"supplies"},{"category":"テイクアウト","no":65,"name":"保冷剤（タ）","supplier":"タ","unit":"袋","price":20.0,"id":"h0182","kind":"supplies"},{"category":"備品","no":29,"name":"グリストﾗｯﾌﾟクリーナー","supplier":"","unit":"本","price":3360.0,"id":"h0183","kind":"supplies"},{"category":"テイクアウト","no":66,"name":"透明クロステープ","supplier":"","unit":"巻","price":250.0,"id":"h0184","kind":"supplies"},{"category":"備品","no":30,"name":"ケミクール","supplier":"","unit":"缶","price":4300.0,"id":"h0185","kind":"supplies"},{"category":"テイクアウト","no":67,"name":"持帰ざるタレ容器","supplier":"","unit":"個","price":11.5,"id":"h0186","kind":"supplies"},{"category":"備品","no":31,"name":"JD-FLEX","supplier":"","unit":"本","price":2450.0,"id":"h0187","kind":"supplies"},{"category":"テイクアウト","no":68,"name":"持帰ざるタレ容器蓋","supplier":"","unit":"個","price":7.4,"id":"h0188","kind":"supplies"},{"category":"備品","no":32,"name":"サーマルロール（ＥＰＡＲＫ）","supplier":"ＥＰＡＲＫ","unit":"本","price":130.0,"id":"h0189","kind":"supplies"},{"category":"テイクアウト","no":69,"name":"持帰ざる薬味皿","supplier":"","unit":"個","price":6.2,"id":"h0190","kind":"supplies"},{"category":"備品","no":33,"name":"コジカレジロール","supplier":"","unit":"本","price":80.0,"id":"h0191","kind":"supplies"},{"category":"テイクアウト","no":70,"name":"フラットバック(本部）","supplier":"本部","unit":"枚","price":12.5,"id":"h0192","kind":"supplies"},{"category":"備品","no":34,"name":"紙エプロン（本部）","supplier":"本部","unit":"枚","price":9.25,"id":"h0193","kind":"supplies"},{"category":"テイクアウト","no":71,"name":"テークアウト用底板（タ）","supplier":"タ","unit":"枚","price":13.0,"id":"h0194","kind":"supplies"},{"category":"テイクアウト","no":72,"name":"持帰ざるタレ大盛びん","supplier":"","unit":"個","price":16.0,"id":"h0195","kind":"supplies"}];
const DEFAULT_KOMEDA_ITEMS = [{"id":"k0001","category":"豆類","no":1,"name":"ブレンドコーヒー豆","supplier":"コメダ本部","unit":"kg","price":2800.0,"kind":"food"},{"id":"k0002","category":"豆類","no":2,"name":"カフェオレ用豆","supplier":"コメダ本部","unit":"kg","price":2600.0,"kind":"food"},{"id":"k0003","category":"豆類","no":3,"name":"ブラジル豆","supplier":"コメダ本部","unit":"kg","price":3200.0,"kind":"food"},{"id":"k0004","category":"豆類","no":4,"name":"カフェインレス豆","supplier":"コメダ本部","unit":"kg","price":3400.0,"kind":"food"},{"id":"k0005","category":"豆類","no":5,"name":"エスプレッソ豆","supplier":"コメダ本部","unit":"kg","price":3000.0,"kind":"food"},{"id":"k0006","category":"豆類","no":6,"name":"アイスコーヒー豆","supplier":"コメダ本部","unit":"kg","price":2500.0,"kind":"food"},{"id":"k0007","category":"豆類","no":7,"name":"ココアパウダー","supplier":"コメダ本部","unit":"kg","price":1800.0,"kind":"food"},{"id":"k0008","category":"豆類","no":8,"name":"抹茶パウダー","supplier":"コメダ本部","unit":"kg","price":4500.0,"kind":"food"},{"id":"k0009","category":"乳製品","no":9,"name":"牛乳1L","supplier":"北陸乳業","unit":"本","price":280.0,"kind":"food"},{"id":"k0010","category":"乳製品","no":10,"name":"生クリーム","supplier":"北陸乳業","unit":"本","price":450.0,"kind":"food"},{"id":"k0011","category":"乳製品","no":11,"name":"ホイップクリーム","supplier":"北陸乳業","unit":"本","price":380.0,"kind":"food"},{"id":"k0012","category":"乳製品","no":12,"name":"コーヒーフレッシュ","supplier":"コメダ本部","unit":"個","price":5.0,"kind":"food"},{"id":"k0013","category":"乳製品","no":13,"name":"バター","supplier":"北陸乳業","unit":"kg","price":1800.0,"kind":"food"},{"id":"k0014","category":"乳製品","no":14,"name":"チーズスライス","supplier":"北陸乳業","unit":"枚","price":25.0,"kind":"food"},{"id":"k0015","category":"シロップ・ソース","no":15,"name":"ガムシロップ","supplier":"コメダ本部","unit":"個","price":8.0,"kind":"food"},{"id":"k0016","category":"シロップ・ソース","no":16,"name":"メープルシロップ","supplier":"コメダ本部","unit":"本","price":980.0,"kind":"food"},{"id":"k0017","category":"シロップ・ソース","no":17,"name":"チョコソース","supplier":"コメダ本部","unit":"本","price":580.0,"kind":"food"},{"id":"k0018","category":"シロップ・ソース","no":18,"name":"キャラメルソース","supplier":"コメダ本部","unit":"本","price":620.0,"kind":"food"},{"id":"k0019","category":"シロップ・ソース","no":19,"name":"ハニートースト用ハチミツ","supplier":"コメダ本部","unit":"本","price":850.0,"kind":"food"},{"id":"k0020","category":"シロップ・ソース","no":20,"name":"ジャム(いちご)","supplier":"コメダ本部","unit":"個","price":45.0,"kind":"food"},{"id":"k0021","category":"シロップ・ソース","no":21,"name":"ジャム(マーマレード)","supplier":"コメダ本部","unit":"個","price":45.0,"kind":"food"},{"id":"k0022","category":"シロップ・ソース","no":22,"name":"ピーナッツクリーム","supplier":"コメダ本部","unit":"個","price":35.0,"kind":"food"},{"id":"k0023","category":"パン・食材","no":23,"name":"山食パン","supplier":"地元ベーカリー","unit":"斤","price":280.0,"kind":"food"},{"id":"k0024","category":"パン・食材","no":24,"name":"デニッシュ","supplier":"コメダ本部","unit":"個","price":120.0,"kind":"food"},{"id":"k0025","category":"パン・食材","no":25,"name":"シロノワール用デニッシュ","supplier":"コメダ本部","unit":"個","price":180.0,"kind":"food"},{"id":"k0026","category":"パン・食材","no":26,"name":"サンドイッチ用パン","supplier":"地元ベーカリー","unit":"斤","price":320.0,"kind":"food"},{"id":"k0027","category":"パン・食材","no":27,"name":"ハム","supplier":"業務スーパー","unit":"kg","price":1800.0,"kind":"food"},{"id":"k0028","category":"パン・食材","no":28,"name":"卵Lサイズ","supplier":"地元農家","unit":"個","price":28.0,"kind":"food"},{"id":"k0029","category":"パン・食材","no":29,"name":"ツナ缶","supplier":"業務スーパー","unit":"缶","price":180.0,"kind":"food"},{"id":"k0030","category":"パン・食材","no":30,"name":"レタス","supplier":"地元青果","unit":"玉","price":180.0,"kind":"food"},{"id":"k0031","category":"パン・食材","no":31,"name":"トマト","supplier":"地元青果","unit":"kg","price":450.0,"kind":"food"},{"id":"k0032","category":"パン・食材","no":32,"name":"きゅうり","supplier":"地元青果","unit":"本","price":60.0,"kind":"food"},{"id":"k0033","category":"パン・食材","no":33,"name":"玉ねぎ","supplier":"地元青果","unit":"kg","price":280.0,"kind":"food"},{"id":"k0034","category":"パン・食材","no":34,"name":"ベーコン","supplier":"業務スーパー","unit":"kg","price":1600.0,"kind":"food"},{"id":"k0035","category":"パン・食材","no":35,"name":"ソーセージ","supplier":"業務スーパー","unit":"kg","price":1400.0,"kind":"food"},{"id":"k0036","category":"スイーツ・冷凍","no":36,"name":"バニラアイス4L","supplier":"コメダ本部","unit":"缶","price":3800.0,"kind":"food"},{"id":"k0037","category":"スイーツ・冷凍","no":37,"name":"ソフトクリームミックス","supplier":"コメダ本部","unit":"L","price":480.0,"kind":"food"},{"id":"k0038","category":"スイーツ・冷凍","no":38,"name":"シロノワール用ソフト","supplier":"コメダ本部","unit":"L","price":520.0,"kind":"food"},{"id":"k0039","category":"スイーツ・冷凍","no":39,"name":"ケーキ(ショート)","supplier":"コメダ本部","unit":"個","price":280.0,"kind":"food"},{"id":"k0040","category":"スイーツ・冷凍","no":40,"name":"プリン","supplier":"コメダ本部","unit":"個","price":180.0,"kind":"food"},{"id":"k0041","category":"スイーツ・冷凍","no":41,"name":"ミニシロノワール","supplier":"コメダ本部","unit":"個","price":220.0,"kind":"food"},{"id":"k0042","category":"ドリンク","no":42,"name":"オレンジジュース1L","supplier":"業務スーパー","unit":"本","price":380.0,"kind":"food"},{"id":"k0043","category":"ドリンク","no":43,"name":"トマトジュース1L","supplier":"業務スーパー","unit":"本","price":350.0,"kind":"food"},{"id":"k0044","category":"ドリンク","no":44,"name":"りんごジュース1L","supplier":"業務スーパー","unit":"本","price":380.0,"kind":"food"},{"id":"k0045","category":"ドリンク","no":45,"name":"コーラ","supplier":"業務スーパー","unit":"本","price":55.0,"kind":"food"},{"id":"k0046","category":"ドリンク","no":46,"name":"炭酸水","supplier":"業務スーパー","unit":"本","price":49.0,"kind":"food"},{"id":"k0047","category":"ドリンク","no":47,"name":"ビール中瓶","supplier":"酒販","unit":"本","price":250.0,"kind":"food"},{"id":"k0048","category":"ドリンク","no":48,"name":"アイスティー用茶葉","supplier":"コメダ本部","unit":"袋","price":480.0,"kind":"food"},{"id":"k0049","category":"ドリンク","no":49,"name":"ホットティー用茶葉","supplier":"コメダ本部","unit":"袋","price":520.0,"kind":"food"},{"id":"k0050","category":"備品・包材","no":50,"name":"紙ナプキン","supplier":"業務サポート","unit":"袋","price":580.0,"kind":"supplies"},{"id":"k0051","category":"備品・包材","no":51,"name":"コースター","supplier":"コメダ本部","unit":"枚","price":8.0,"kind":"supplies"},{"id":"k0052","category":"備品・包材","no":52,"name":"テイクアウトカップ","supplier":"コメダ本部","unit":"個","price":12.0,"kind":"supplies"},{"id":"k0053","category":"備品・包材","no":53,"name":"カップ蓋","supplier":"コメダ本部","unit":"個","price":5.0,"kind":"supplies"},{"id":"k0054","category":"備品・包材","no":54,"name":"ストロー","supplier":"業務サポート","unit":"袋","price":350.0,"kind":"supplies"},{"id":"k0055","category":"備品・包材","no":55,"name":"おしぼり","supplier":"業務サポート","unit":"本","price":5.0,"kind":"supplies"},{"id":"k0056","category":"備品・包材","no":56,"name":"豆お持ち帰り袋","supplier":"コメダ本部","unit":"袋","price":250.0,"kind":"supplies"},{"id":"k0057","category":"備品・包材","no":57,"name":"ロゴ入りペーパーバッグ","supplier":"コメダ本部","unit":"枚","price":35.0,"kind":"supplies"},{"id":"k0058","category":"備品・包材","no":58,"name":"スプーン(プラ)","supplier":"業務サポート","unit":"袋","price":280.0,"kind":"supplies"},{"id":"k0059","category":"備品・包材","no":59,"name":"アルコール","supplier":"業務サポート","unit":"本","price":980.0,"kind":"supplies"},{"id":"k0060","category":"備品・包材","no":60,"name":"ハンドソープ","supplier":"業務サポート","unit":"本","price":680.0,"kind":"supplies"},{"id":"k0061","category":"備品・包材","no":61,"name":"ペーパータオル","supplier":"業務サポート","unit":"箱","price":2400.0,"kind":"supplies"},{"id":"k0062","category":"備品・包材","no":62,"name":"ゴミ袋45L","supplier":"業務サポート","unit":"枚","price":10.0,"kind":"supplies"},{"id":"k0063","category":"備品・包材","no":63,"name":"ゴミ袋90L","supplier":"業務サポート","unit":"枚","price":28.0,"kind":"supplies"}];


// =========================================================
// Supabase Layer (Authentication + Realtime Storage)
// =========================================================
// =========================================================
// Supabase Configuration  ★★★ご自身の値に書き換え可能 ★★★
// =========================================================
const SUPABASE_URL = 'https://bvfpfbryzsavmilngxgr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2ZnBmYnJ5enNhdm1pbG5neGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4Njg3MDIsImV4cCI6MjA5NTQ0NDcwMn0._EZDmFzXZD_NmUOA8LKbhvuu0eXGnprw_-13tW9X6Fs';

const sb = (typeof supabase !== 'undefined' && supabase.createClient)
  ? supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

// =========================================================
// Supabase-backed storage shim
//   既存の storage.get/set インタフェースを維持しつつ、内部でSupabaseと通信。
//   キー → テーブルのマッピング：
//   - 'master_items'       → items
//   - 'stores'             → stores
//   - 'users'              → profiles（読み取り専用、書き込みは管理画面APIから）
//   - 'brands'             → brands
//   - 'inventory_YYYY-MM'  → inventory_entries + inventory_meta
//   - 'approvals_YYYY-MM'  → approvals
//   - 'supplier_notes'     → supplier_notes
// =========================================================
const sbStorage = (() => {
  const fallbackMem = {};
  if (!sb) {
    return {
      async get(key) { return fallbackMem[key] ?? null; },
      async set(key, value) { fallbackMem[key] = value; return true; },
      async del(key) { delete fallbackMem[key]; return true; }
    };
  }

  // schema_version はローカルで持つ（Supabase版は自動的にv2扱い）
  let localSchemaVersion = 5; // FIX: SCHEMA_VERSIONと一致させ、毎回のマスタ初期化を防止

  async function fetchItemsByBrand() {
    const { data, error } = await fetchAllRows((f, t) => sb.from('items').select('*').eq('archived', false).order('brand').order('id').range(f, t));
    if (error) { console.error('items fetch', error); return {}; }
    const map = {};
    for (const it of data) {
      if (!map[it.brand]) map[it.brand] = [];
      map[it.brand].push({
        id: it.id, category: it.category, no: it.no, name: it.name,
        supplier: it.supplier || '', unit: it.unit, price: Number(it.price),
        kind: it.kind, seasonal: !!it.seasonal, alertThreshold: (it.alert_threshold == null ? null : Number(it.alert_threshold))
      });
    }
    return map;
  }

  async function saveItemsByBrand(itemsByBrand) {
    // 全件upsert（変更検知は省略・常に全件送る）
    const rows = [];
    for (const [brand, list] of Object.entries(itemsByBrand)) {
      for (const it of list) {
        rows.push({
          id: it.id, brand, category: it.category, no: it.no || null,
          name: it.name, supplier: it.supplier || null, unit: it.unit || '個',
          price: it.price || 0, kind: it.kind || 'food', seasonal: !!it.seasonal,
          alert_threshold: (it.alertThreshold == null ? null : it.alertThreshold),
          archived: false
        });
      }
    }
    if (rows.length === 0) return true;
    // 500件ずつ分割
    for (let i = 0; i < rows.length; i += 500) {
      const chunk = rows.slice(i, i + 500);
      const { error } = await sb.from('items').upsert(chunk, { onConflict: 'id' });
      if (error) { console.error('items upsert', error); _lastDbError = '商品マスタ: ' + (error.message || JSON.stringify(error)); return false; }
    }
    return true;
  }

  // 単品INSERT（新規追加用）。IDが既に存在すれば conflict:true を返し、呼び出し側で採番し直す。
  async function insertOneItem(brand, it) {
    const row = {
      id: it.id, brand, category: it.category, no: it.no || null,
      name: it.name, supplier: it.supplier || null, unit: it.unit || '個',
      price: it.price || 0, kind: it.kind || 'food', seasonal: !!it.seasonal,
      alert_threshold: (it.alertThreshold == null ? null : it.alertThreshold),
      archived: false
    };
    const { error } = await sb.from('items').insert([row]);
    if (error) {
      const conflict = error.code === '23505' || /duplicate|unique/i.test(error.message || '');
      if (!conflict) { console.error('item insert', error); _lastDbError = '商品マスタ追加: ' + (error.message || JSON.stringify(error)); }
      return { ok: false, conflict };
    }
    return { ok: true };
  }

  // 単品更新（既存1件のみ上書き。全件スナップショットを送らないので他者の変更を巻き戻さない）
  async function updateOneItem(brand, it) {
    const row = {
      id: it.id, brand, category: it.category, no: it.no || null,
      name: it.name, supplier: it.supplier || null, unit: it.unit || '個',
      price: it.price || 0, kind: it.kind || 'food', seasonal: !!it.seasonal,
      alert_threshold: (it.alertThreshold == null ? null : it.alertThreshold),
      archived: false
    };
    const { error } = await sb.from('items').upsert([row], { onConflict: 'id' });
    if (error) { console.error('item update', error); _lastDbError = '商品マスタ更新: ' + (error.message || JSON.stringify(error)); return false; }
    return true;
  }

  // 単品アーカイブ（削除）。その1件だけ archived:true にする。
  async function archiveOneItem(id) {
    const { error } = await sb.from('items').update({ archived: true }).eq('id', id);
    if (error) { console.error('item archive', error); _lastDbError = '商品マスタ削除: ' + (error.message || JSON.stringify(error)); return false; }
    return true;
  }

  async function fetchStores() {
    const { data, error } = await sb.from('stores').select('*').eq('archived', false).order('sort_order');
    if (error) { console.error('stores fetch', error); return []; }
    return data.map(s => ({ id: s.id, brand: s.brand, name: s.name }));
  }

  async function saveStoresList(stores) {
    const rows = stores.map(s => ({ id: s.id, brand: s.brand, name: s.name, archived: false }));
    if (rows.length === 0) return true;
    const { error } = await sb.from('stores').upsert(rows, { onConflict: 'id' });
    if (error) { console.error('stores upsert', error); return false; }
    return true;
  }

  async function fetchBrands() {
    const { data, error } = await sb.from('brands').select('*').eq('archived', false).order('sort_order');
    if (error) { console.error('brands fetch', error); return []; }
    return data.map(b => ({ id: b.id, name: b.name, idPrefix: b.id_prefix, sortOrder: b.sort_order }));
  }

  async function saveBrandsList(list) {
    if (!sb) return false;
    const rows = list.map((b, idx) => ({
      id: b.id,
      name: b.name,
      id_prefix: b.idPrefix || b.id.charAt(0),
      sort_order: b.sortOrder ?? (idx + 1) * 10,
      archived: false
    }));
    const { error } = await sb.from('brands').upsert(rows, { onConflict: 'id' });
    if (error) { console.error('brands upsert', error); return false; }
    return true;
  }

  async function deleteBrandRow(brandId) {
    if (!sb) return false;
    // 物理削除ではなくアーカイブフラグで対応
    const { error } = await sb.from('brands').update({ archived: true }).eq('id', brandId);
    if (error) { console.error('brand archive', error); return false; }
    return true;
  }

  async function fetchAppUsers() {
    if (!sb) return null;
    // 停止中（archived=true）も含めて取得し、管理画面で「停止中」として扱う
    const { data, error } = await sb.from('app_users').select('*').order('id');
    if (error) { const _m = error.message || error.details || error.hint || error.code || JSON.stringify(error); console.error('app_users fetch:', _m, error); _lastDbError = 'ユーザー取得: ' + _m; return null; }
    return data.map(u => ({
      id: u.id,
      name: u.name,
      position: u.position || '',
      password: u.password || '',
      role: u.role || 'staff',
      approveBrand: u.approve_brand || null,
      defaultStore: u.default_store || null,
      archived: !!u.archived
    }));
  }

  async function saveAppUsersList(list) {
    if (!sb) return false;
    const rows = list.map(u => ({
      id: u.id,
      name: u.name || '',
      position: u.position || '',
      password: u.password || '',
      role: u.role || 'staff',
      approve_brand: u.approveBrand || null,
      default_store: u.defaultStore || null,
      archived: !!u.archived
    }));
    const { error } = await sb.from('app_users').upsert(rows, { onConflict: 'id' });
    if (error) { const _m = error.message || error.details || error.hint || error.code || JSON.stringify(error); console.error('app_users upsert:', _m, error); _lastDbError = 'ユーザー保存: ' + _m; return false; }
    return true;
  }

  async function deleteAppUserRow(userId) {
    if (!sb) return false;
    const { error } = await sb.from('app_users').update({ archived: true }).eq('id', userId);
    if (error) { const _m = error.message || error.details || error.hint || error.code || JSON.stringify(error); console.error('app_users archive:', _m, error); _lastDbError = 'ユーザー削除: ' + _m; return false; }
    return true;
  }

  // 1000行上限対策：range() で全件をページング取得（全件select系の取りこぼし防止）
  async function fetchAllRows(buildQuery, pageSize = 1000) {
    let all = [];
    for (let from = 0; ; from += pageSize) {
      const { data, error } = await buildQuery(from, from + pageSize - 1);
      if (error) return { data: null, error };
      const rows = data || [];
      all = all.concat(rows);
      if (rows.length < pageSize) break;
    }
    return { data: all, error: null };
  }

  async function fetchInventory(ym) {
    const [entriesRes, metaRes] = await Promise.all([
      fetchAllRows((f, t) => sb.from('inventory_entries').select('*').eq('month', ym).order('store_id').order('item_id').range(f, t)),
      sb.from('inventory_meta').select('store_id,month,completed,completed_at,completed_by_name,input_by,order_by,mgr_confirmed,mgr_confirmed_by,mgr_confirmed_at').eq('month', ym)
    ]);
    if (entriesRes.error) { console.error('entries fetch', entriesRes.error); return null; }
    if (metaRes.error) { console.error('meta fetch', metaRes.error); return null; }
    const inv = {};
    for (const e of (entriesRes.data || [])) {
      if (!inv[e.store_id]) inv[e.store_id] = { entries: {}, notes: {}, prices: {} };
      if (!inv[e.store_id].prices) inv[e.store_id].prices = {};
      inv[e.store_id].entries[e.item_id] = Number(e.quantity);
      if (e.note) inv[e.store_id].notes[e.item_id] = e.note;
      if (e.entered_by) inv[e.store_id].enteredBy = e.entered_by;
      if (e.unit_price != null) inv[e.store_id].prices[e.item_id] = Number(e.unit_price);
    }
    for (const m of (metaRes.data || [])) {
      if (!inv[m.store_id]) inv[m.store_id] = { entries: {}, notes: {} };
      inv[m.store_id].completed = !!m.completed;
      inv[m.store_id].completedAt = m.completed_at;
      if (m.completed_by_name) inv[m.store_id].completedByName = m.completed_by_name;
      if (m.input_by != null) inv[m.store_id].inputBy = m.input_by;
      if (m.order_by != null) inv[m.store_id].orderBy = m.order_by;
      if (m.mgr_confirmed != null) inv[m.store_id].mgrConfirmed = !!m.mgr_confirmed;
      if (m.mgr_confirmed_by) inv[m.store_id].mgrConfirmedBy = m.mgr_confirmed_by;
      if (m.mgr_confirmed_at) inv[m.store_id].mgrConfirmedAt = m.mgr_confirmed_at;
      if (m.mgr_signature) inv[m.store_id].mgrSignature = m.mgr_signature;
    }
    return inv;
  }

  async function saveInventory(ym, inventory) {
    // entries
    const entryRows = [];
    const metaRows = [];
    const enteredByName = (typeof State !== 'undefined' && State.enteredByName) || null;
    for (const [storeId, inv] of Object.entries(inventory)) {
      const entries = inv.entries || {};
      const notes = inv.notes || {};
      const allIds = new Set([...Object.keys(entries), ...Object.keys(notes)]);
      for (const itemId of allIds) {
        const q = entries[itemId];
        const note = notes[itemId] || null;
        // 数量0は「クリア」を意味するため、スキップせず quantity:0 でupsertしサーバ側の旧値を確実に上書き消去する（0はDELETE代替）。
        // 本当に未入力（キー無し/空）かつメモも無い場合のみ送信対象外とする。
        if ((q === undefined || q === '') && !note) continue;
        const _row = {
          store_id: storeId,
          month: ym,
          item_id: itemId,
          quantity: q || 0,
          note,
          entered_by: enteredByName
        };
        const _up = masterPriceOf(itemId); if (_up != null) _row.unit_price = _up; // 保存時点の単価を記録
        entryRows.push(_row);
      }
      const hasMeta = inv.completed !== undefined ||
                      (inv.inputBy != null && inv.inputBy !== '') ||
                      (inv.orderBy != null && inv.orderBy !== '');
      if (hasMeta) {
        metaRows.push({
          store_id: storeId,
          month: ym,
          completed: !!inv.completed,
          completed_at: inv.completedAt || (inv.completed ? new Date().toISOString() : null),
          completed_by_name: inv.completedByName || enteredByName,
          input_by: (inv.inputBy != null && inv.inputBy !== '') ? inv.inputBy : null,
          order_by: (inv.orderBy != null && inv.orderBy !== '') ? inv.orderBy : null
        });
      }
    }
    if (entryRows.length > 0) {
      for (let i = 0; i < entryRows.length; i += 500) {
        const chunk = entryRows.slice(i, i + 500);
        const { error } = await sb.from('inventory_entries').upsert(chunk, { onConflict: 'store_id,month,item_id' });
        if (error) { console.error('entries upsert', error); _lastDbError = '在庫数量: ' + (error.message || JSON.stringify(error)); return false; }
      }
    }
    if (metaRows.length > 0) {
      const { error } = await sb.from('inventory_meta').upsert(metaRows, { onConflict: 'store_id,month' });
      if (error) { console.error('meta upsert', error); _lastDbError = '完了/承認情報: ' + (error.message || JSON.stringify(error)); return false; }
    }
    return true;
  }

  // 保存時点のマスタ単価を取得（スナップショット用）。マスタ未取得なら null（列を送らず既存値を温存）。
  function masterPriceOf(itemId) {
    const groups = (typeof State !== 'undefined' && State.items) || {};
    for (const b of Object.keys(groups)) {
      const it = (groups[b] || []).find(x => x && x.id === itemId);
      if (it) return Number(it.price) || 0;
    }
    return null;
  }

  // 単一エントリのみ upsert（他端末が編集した別項目を巻き込まない＝数値の戻り/増減対策）
  async function saveOneEntryRow(storeId, ym, itemId, quantity, note) {
    const enteredByName = (typeof State !== 'undefined' && State.enteredByName) || null;
    const row = { store_id: storeId, month: ym, item_id: itemId, quantity: quantity || 0, note: note || null, entered_by: enteredByName };
    const up = masterPriceOf(itemId); if (up != null) row.unit_price = up; // 保存時点の単価を記録
    const { error } = await sb.from('inventory_entries').upsert([row], { onConflict: 'store_id,month,item_id' });
    if (error) { console.error('entry upsert(one)', error); _lastDbError = '在庫数量: ' + (error.message || JSON.stringify(error)); return false; }
    return true;
  }
  // 単一店舗の meta のみ upsert（完了フラグ・担当者名）
  async function saveOneMetaRow(storeId, ym, inv) {
    const enteredByName = (typeof State !== 'undefined' && State.enteredByName) || null;
    const row = {
      store_id: storeId, month: ym,
      completed: !!inv.completed,
      completed_at: inv.completedAt || (inv.completed ? new Date().toISOString() : null),
      completed_by_name: inv.completedByName || enteredByName,
      input_by: (inv.inputBy != null && inv.inputBy !== '') ? inv.inputBy : null,
      order_by: (inv.orderBy != null && inv.orderBy !== '') ? inv.orderBy : null
    };
    const { error } = await sb.from('inventory_meta').upsert([row], { onConflict: 'store_id,month' });
    if (error) { console.error('meta upsert(one)', error); _lastDbError = '完了/担当情報: ' + (error.message || JSON.stringify(error)); return false; }
    return true;
  }
  // meta の指定フィールドだけ upsert（onConflict 更新は渡した列のみ → 氏名や完了フラグの相互上書きを防ぐ）
  async function saveMetaFieldsRow(storeId, ym, fields) {
    const row = Object.assign({ store_id: storeId, month: ym }, fields);
    const { error } = await sb.from('inventory_meta').upsert([row], { onConflict: 'store_id,month' });
    if (error) { console.error('meta fields upsert', error); _lastDbError = '担当/完了情報: ' + (error.message || JSON.stringify(error)); return false; }
    return true;
  }

  async function fetchAlertComments(ym) {
    const { data, error } = await sb.from('alert_comments').select('*').eq('month', ym);
    if (error) { console.error('alert_comments fetch', error); return null; }
    const map = {};
    for (const c of (data || [])) {
      map[c.store_id] = {
        storeComment: c.store_comment || '',
        storeBy: c.store_comment_by || '',
        managerComment: c.manager_comment || '',
        managerBy: c.manager_comment_by || ''
      };
    }
    return map;
  }

  async function saveAlertCommentRow(storeId, ym, row) {
    const payload = {
      store_id: storeId,
      month: ym,
      store_comment: row.storeComment || '',
      store_comment_by: row.storeBy || '',
      manager_comment: row.managerComment || '',
      manager_comment_by: row.managerBy || '',
      updated_by: (typeof State !== 'undefined' && State.user && State.user.name) || null,
      updated_at: new Date().toISOString()
    };
    const { error } = await sb.from('alert_comments').upsert([payload], { onConflict: 'store_id,month' });
    if (error) { console.error('alert_comments upsert', error); _lastDbError = 'アラートコメント: ' + (error.message || JSON.stringify(error)); return false; }
    return true;
  }

  async function saveStoreConfirmationRow(storeId, ym, data) {
    // inventory_meta に mgr_* 列のうち data に含まれるものだけ単行upsert（他列に触れない）
    const row = { store_id: storeId, month: ym };
    if ('confirmed' in data) row.mgr_confirmed = !!data.confirmed;
    if ('by' in data) row.mgr_confirmed_by = data.by || null;
    if ('at' in data) row.mgr_confirmed_at = data.at || null;
    if ('signature' in data) row.mgr_signature = data.signature || null;
    const { error } = await sb.from('inventory_meta').upsert([row], { onConflict: 'store_id,month' });
    if (error) { console.error('store confirm upsert', error); _lastDbError = '店舗確認: ' + (error.message || JSON.stringify(error)); return false; }
    return true;
  }

  async function fetchTransferSlips(month) {
    const { data, error } = await sb.from('transfer_slips').select('*').eq('month', month).order('created_at');
    if (error) { console.error('slips fetch', error); _lastDbError = '伝票取得: ' + (error.message || JSON.stringify(error)); return null; }
    return (data || []).map(r => ({
      id: r.id, month: r.month, fromStore: r.from_store, toStore: r.to_store,
      date: r.slip_date, time: r.slip_time, lines: r.lines || [],
      sellerName: r.seller_name, sellerSig: r.seller_sig, sellerAt: r.seller_at,
      buyerName: r.buyer_name, buyerSig: r.buyer_sig, buyerAt: r.buyer_at,
      buyerReason: r.buyer_reason || '',
      hqBy: r.hq_by, hqAt: r.hq_at, status: r.status, createdBy: r.created_by, createdAt: r.created_at
    }));
  }
  async function saveTransferSlipRow(slip) {
    const row = {
      id: slip.id, month: slip.month, from_store: slip.fromStore, to_store: slip.toStore,
      slip_date: slip.date || null, slip_time: slip.time || null, lines: slip.lines || [],
      seller_name: slip.sellerName || null, seller_sig: slip.sellerSig || null, seller_at: slip.sellerAt || null,
      buyer_name: slip.buyerName || null, buyer_sig: slip.buyerSig || null, buyer_at: slip.buyerAt || null,
      buyer_reason: slip.buyerReason || null,
      hq_by: slip.hqBy || null, hq_at: slip.hqAt || null, status: slip.status || 'draft',
      created_by: slip.createdBy || null
    };
    let { error } = await sb.from('transfer_slips').upsert([row], { onConflict: 'id' });
    // buyer_reason 列が未追加でも保存を止めない（移行前フォールバック）
    if (error && /buyer_reason/.test((error.message || '') + (error.code || ''))) {
      const { buyer_reason, ...rowNoReason } = row;
      ({ error } = await sb.from('transfer_slips').upsert([rowNoReason], { onConflict: 'id' }));
    }
    if (error) { console.error('slip upsert', error); _lastDbError = '伝票保存: ' + (error.message || JSON.stringify(error)); return false; }
    return true;
  }
  async function deleteTransferSlipRow(id) {
    const { error } = await sb.from('transfer_slips').delete().eq('id', id);
    if (error) { console.error('slip delete', error); _lastDbError = '伝票削除: ' + (error.message || JSON.stringify(error)); return false; }
    return true;
  }

  async function fetchApprovals(ym) {
    const { data, error } = await sb.from('approvals').select('*').eq('month', ym);
    if (error) { console.error('approvals fetch', error); return null; }
    const map = {};
    for (const a of (data || [])) {
      map[a.brand] = {
        by: a.approved_by,
        at: a.approved_at,
        signature: a.signature
      };
    }
    return map;
  }

  async function saveApprovals(ym, approvals) {
    const rows = [];
    for (const [brand, ap] of Object.entries(approvals)) {
      rows.push({
        brand, month: ym,
        approved_by: ap.by,
        approved_at: ap.at || new Date().toISOString(),
        signature: ap.signature || null
      });
    }
    // 削除されたものを取り除く
    const { data: existing } = await sb.from('approvals').select('brand').eq('month', ym);
    const existingBrands = (existing || []).map(r => r.brand);
    const newBrands = rows.map(r => r.brand);
    const toDelete = existingBrands.filter(b => !newBrands.includes(b));
    if (toDelete.length > 0) {
      await sb.from('approvals').delete().eq('month', ym).in('brand', toDelete);
    }
    if (rows.length > 0) {
      const { error } = await sb.from('approvals').upsert(rows, { onConflict: 'brand,month' });
      if (error) { console.error('approvals upsert', error); _lastDbError = '承認: ' + (error.message || JSON.stringify(error)); return false; }
    }
    return true;
  }


  async function fetchSuppliersByBrand() {
    const { data, error } = await sb.from('suppliers').select('*').eq('archived', false).order('sort_order').order('name');
    if (error) { console.error('suppliers fetch', error); return {}; }
    const map = {};
    for (const s of (data || [])) {
      if (!map[s.brand]) map[s.brand] = [];
      map[s.brand].push({
        id: s.id,
        name: s.name,
        contact: s.contact || '',
        memo: s.memo || '',
        isHeadquarters: !!s.is_headquarters,
        sortOrder: s.sort_order || 100
      });
    }
    return map;
  }

  async function upsertSupplier(brand, supplierData) {
    const row = {
      brand,
      name: supplierData.name,
      contact: supplierData.contact || null,
      memo: supplierData.memo || null,
      is_headquarters: !!supplierData.isHeadquarters,
      archived: false
    };
    if (supplierData.id) row.id = supplierData.id;
    const { data, error } = await sb.from('suppliers').upsert(row, { onConflict: 'brand,name' }).select().maybeSingle();
    if (error) { console.error('supplier upsert', error); return null; }
    return data;
  }

  async function deleteSupplierRow(brand, name) {
    const { error } = await sb.from('suppliers').delete().eq('brand', brand).eq('name', name);
    if (error) { console.error('supplier delete', error); return false; }
    return true;
  }

  async function bulkUpsertSuppliers(brand, suppliers) {
    const rows = suppliers.map(s => ({
      brand,
      name: s.name,
      contact: s.contact || null,
      memo: s.memo || null,
      is_headquarters: !!s.isHeadquarters,
      archived: false
    }));
    if (rows.length === 0) return true;
    const { error } = await sb.from('suppliers').upsert(rows, { onConflict: 'brand,name' });
    if (error) { console.error('suppliers bulk upsert', error); return false; }
    return true;
  }

  async function fetchSupplierNotes() {
    const { data, error } = await sb.from('supplier_notes').select('*');
    if (error) { console.error('supplier_notes fetch', error); return {}; }
    const map = {};
    for (const r of (data || [])) {
      const raw = r.note || '';
      // JSON形式（{contact, memo}）かそれ以外（旧形式の文字列）かを判定
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && ('contact' in parsed || 'memo' in parsed)) {
          map[r.supplier] = { contact: parsed.contact || '', memo: parsed.memo || '' };
          continue;
        }
      } catch (e) { /* not JSON */ }
      // 旧形式：文字列だったらmemoとして扱う
      map[r.supplier] = { contact: '', memo: raw };
    }
    return map;
  }

  async function saveSupplierNotes(notes) {
    const rows = [];
    for (const [supplier, val] of Object.entries(notes)) {
      let noteStr;
      if (val && typeof val === 'object') {
        noteStr = JSON.stringify({ contact: val.contact || '', memo: val.memo || '' });
      } else {
        noteStr = JSON.stringify({ contact: '', memo: val || '' });
      }
      rows.push({ supplier, note: noteStr });
    }
    if (rows.length === 0) return true;
    const { error } = await sb.from('supplier_notes').upsert(rows, { onConflict: 'supplier' });
    if (error) { console.error('supnotes upsert', error); return false; }
    return true;
  }

  async function fetchSettings() {
    try {
      const { data, error } = await sb.from('app_settings').select('*');
      if (error) { console.error('settings fetch', error); return null; }
      const map = {};
      for (const r of (data || [])) {
        try { map[r.key] = JSON.parse(r.value); } catch (e) { map[r.key] = r.value; }
      }
      return map;
    } catch (e) { console.error('settings fetch', e); return null; }
  }
  async function saveSettings(value) {
    try {
      const rows = Object.entries(value || {}).map(([k, v]) => ({ key: k, value: JSON.stringify(v) }));
      if (rows.length === 0) return true;
      const { error } = await sb.from('app_settings').upsert(rows, { onConflict: 'key' });
      if (error) { console.error('settings upsert', error); _lastDbError = '設定: ' + (error.message || JSON.stringify(error)); return false; }
      return true;
    } catch (e) { console.error('settings save', e); _lastDbError = '設定: ' + (e.message || ''); return false; }
  }

  // 既存storageインタフェース互換のラッパー
  return {
    async get(key) {
      try {
        if (key === 'schema_version') return localSchemaVersion;
        if (key === 'master_items') return await fetchItemsByBrand();
        if (key === 'stores') return await fetchStores();
        if (key === 'users') return await fetchAppUsers();
        if (key === 'brands') return await fetchBrands();
        if (key === 'suppliers_by_brand') return await fetchSuppliersByBrand();
        if (key === 'supplier_notes') return await fetchSupplierNotes();
        if (key.startsWith('inventory_')) return await fetchInventory(key.replace('inventory_', ''));
        if (key.startsWith('approvals_')) return await fetchApprovals(key.replace('approvals_', ''));
        if (key.startsWith('alert_comments_')) return await fetchAlertComments(key.replace('alert_comments_', ''));
        if (key === 'app_settings') return await fetchSettings();
        return null;
      } catch (e) {
        console.error('storage.get', key, e);
        return null;
      }
    },
    async set(key, value) {
      try {
        if (typeof markLocalWrite === 'function') markLocalWrite(); // 自分の保存直後はリアルタイム反映を抑制
        if (key === 'schema_version') { localSchemaVersion = value; return true; }
        if (key === 'master_items') return await saveItemsByBrand(value);
        if (key === 'stores') return await saveStoresList(value);
        if (key === 'brands') return await saveBrandsList(value);
        if (key === 'users') return await saveAppUsersList(value);
        if (key === 'supplier_notes') return await saveSupplierNotes(value);
        if (key.startsWith('inventory_')) return await saveInventory(key.replace('inventory_', ''), value);
        if (key.startsWith('approvals_')) return await saveApprovals(key.replace('approvals_', ''), value);
        if (key === 'app_settings') return await saveSettings(value);
        return true;
      } catch (e) {
        console.error('storage.set', key, e);
        return false;
      }
    },
    async del(key) { return true; },
    // 仕入先専用API（追加）
    async upsertSupplier(brand, data) { return await upsertSupplier(brand, data); },
    async deleteSupplier(brand, name) { return await deleteSupplierRow(brand, name); },
    async bulkUpsertSuppliers(brand, list) { return await bulkUpsertSuppliers(brand, list); },
    // ブランド削除API
    async deleteBrand(brandId) { return await deleteBrandRow(brandId); },
    // ユーザー削除API
    async deleteAppUser(userId) { return await deleteAppUserRow(userId); },
    // 商品マスタ 単品API（同時編集での取りこぼし/上書き防止）
    async insertItem(brand, item) { return await insertOneItem(brand, item); },
    async updateItem(brand, item) { return await updateOneItem(brand, item); },
    async archiveItem(id) { return await archiveOneItem(id); },
    async saveAlertComment(storeId, ym, row) { return await saveAlertCommentRow(storeId, ym, row); },
    async saveStoreConfirmation(storeId, ym, data) { return await saveStoreConfirmationRow(storeId, ym, data); },
    async fetchTransferSlips(month) { return await fetchTransferSlips(month); },
    async saveTransferSlip(slip) { return await saveTransferSlipRow(slip); },
    async deleteTransferSlip(id) { return await deleteTransferSlipRow(id); },
    async saveOneEntry(storeId, ym, itemId, quantity, note) { return await saveOneEntryRow(storeId, ym, itemId, quantity, note); },
    async saveOneMeta(storeId, ym, inv) { return await saveOneMetaRow(storeId, ym, inv); },
    async saveMetaFields(storeId, ym, fields) { return await saveMetaFieldsRow(storeId, ym, fields); }
  };
})();

// =========================================================
// Supabase Auth helpers
// =========================================================
const sbAuth = {
  async signIn(email, password) {
    if (!sb) throw new Error('Supabase未接続');
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },
  async signOut() {
    if (!sb) return;
    await sb.auth.signOut();
  },
  async getSession() {
    if (!sb) return null;
    const { data } = await sb.auth.getSession();
    return data.session;
  },
  async getCurrentProfile() {
    if (!sb) return null;
    const session = await this.getSession();
    if (!session) return null;
    const { data, error } = await sb.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
    if (error) { console.error('profile fetch', error); return null; }
    if (!data) return null;
    return {
      id: data.login_id || data.id,
      authId: data.id,
      email: session.user.email,
      name: data.name,
      role: data.role === 'super_admin' ? 'admin' : data.role,
      isSuperAdmin: data.role === 'super_admin',
      position: data.position || '',
      defaultStore: data.default_store,
      approveBrand: data.approve_brand
    };
  },
  async sendPasswordReset(email) {
    if (!sb) throw new Error('Supabase未接続');
    const { error } = await sb.auth.resetPasswordForEmail(email);
    if (error) throw error;
  },
  async updatePassword(newPassword) {
    if (!sb) throw new Error('Supabase未接続');
    const { error } = await sb.auth.updateUser({ password: newPassword });
    if (error) throw error;
  }
};

// =========================================================
// Realtime sync (Supabaseの変更を自動反映)
// =========================================================
let _realtimeChannel = null;

// --- リアルタイム・エコー対策（多端末同時利用での「勝手に動く/固まる」防止）---
let _lastLocalWriteAt = 0;                 // この端末が最後に保存した時刻
const LOCAL_WRITE_SUPPRESS_MS = 2500;      // 自分の保存直後は反映を抑制する時間
const REALTIME_DEBOUNCE_MS = 2000;         // 連続した変更通知をまとめる間隔
let _realtimeTimer = null;
let _pendingRealtime = { inventory:false, approvals:false, items:false, stores:false };
let _pendingSave = false;                  // ローカル編集の保存が確定するまで true（その間は再読込しない）
let _lastDbError = '';                      // 直近の保存エラー（失敗を画面に出すため）

function markLocalWrite() { _lastLocalWriteAt = Date.now(); }

function isUserActivelyEditing() {
  const a = document.activeElement;
  if (!a) return false;
  // ステッパー（▲▼）操作中はフォーカスがボタンに移るため、編集中として扱う
  if (a.dataset && a.dataset.step !== undefined) return true;
  return (a.tagName === 'INPUT' || a.tagName === 'SELECT' || a.tagName === 'TEXTAREA') && !a.readOnly && !a.disabled;
}

function scheduleRealtimeApply(kind) {
  _pendingRealtime[kind] = true;
  if (_realtimeTimer) clearTimeout(_realtimeTimer);
  _realtimeTimer = setTimeout(applyRealtime, REALTIME_DEBOUNCE_MS);
}

async function applyRealtime() {
  _realtimeTimer = null;
  // 入力中、または自分が保存した直後は画面を作り直さない（数字が消える/カーソルが飛ぶ/固まるを防止）
  if (isUserActivelyEditing() || _pendingSave || (Date.now() - _lastLocalWriteAt) < LOCAL_WRITE_SUPPRESS_MS) {
    _realtimeTimer = setTimeout(applyRealtime, REALTIME_DEBOUNCE_MS);
    return;
  }
  const p = _pendingRealtime;
  _pendingRealtime = { inventory:false, approvals:false, items:false, stores:false };
  try {
    if ((p.inventory || p.approvals) && typeof loadInventory === 'function' && State.month) {
      await loadInventory(State.month); // 棚卸データと承認をまとめて再取得
    }
    if (p.items)  State.items  = await sbStorage.get('master_items') || {};
    if (p.stores) State.stores = await sbStorage.get('stores') || [];
  } catch (e) { console.error('realtime apply', e); }
  if (typeof render === 'function' && !isUserActivelyEditing()) render();
}

function startRealtimeSync() {
  if (!sb || _realtimeChannel) return;
  // 購読範囲を役割で限定（Realtimeメッセージ削減）：店舗(staff)は自店のみ／責任者・役員・本社・管理者は全店
  const _rtStore = (State.user && isStaffLike(State.user.role) && State.user.defaultStore) ? State.user.defaultStore : null;
  const _entOpt  = _rtStore ? { event: '*', schema: 'public', table: 'inventory_entries', filter: 'store_id=eq.' + _rtStore } : { event: '*', schema: 'public', table: 'inventory_entries' };
  const _metaOpt = _rtStore ? { event: '*', schema: 'public', table: 'inventory_meta',    filter: 'store_id=eq.' + _rtStore } : { event: '*', schema: 'public', table: 'inventory_meta' };
  _realtimeChannel = sb.channel('app-sync')
    .on('postgres_changes', _entOpt,  () => scheduleRealtimeApply('inventory'))
    .on('postgres_changes', _metaOpt, () => scheduleRealtimeApply('inventory'))
    .on('postgres_changes', { event: '*', schema: 'public', table: 'approvals' },          () => scheduleRealtimeApply('approvals'))
    .on('postgres_changes', { event: '*', schema: 'public', table: 'items' },              () => scheduleRealtimeApply('items'))
    .on('postgres_changes', { event: '*', schema: 'public', table: 'stores' },             () => scheduleRealtimeApply('stores'))
    .subscribe();
}
function stopRealtimeSync() {
  if (_realtimeChannel) {
    sb.removeChannel(_realtimeChannel);
    _realtimeChannel = null;
  }
}

// 既存コードとの互換のため storage を sbStorage に向ける
const storage = sbStorage;

// =========================================================
// Default seed data (Supabase未接続時のフォールバック用)
// =========================================================
const DEFAULT_STORES = [{"id":"h-kunidaka","brand":"hachiban","name":"8番らーめん 国高店"},{"id":"h-sabae","brand":"hachiban","name":"8番らーめん 鯖江店"},{"id":"h-sabae-east","brand":"hachiban","name":"8番らーめん 鯖江東店"},{"id":"h-shinmei","brand":"hachiban","name":"8番らーめん 神明店"},{"id":"h-takefu","brand":"hachiban","name":"8番らーめん 武生店"},{"id":"k-otsu-ouji","brand":"komeda","name":"コメダ珈琲店 大津皇子が丘店"},{"id":"k-otsu-katata","brand":"komeda","name":"コメダ珈琲店 大津堅田店"},{"id":"k-sabae","brand":"komeda","name":"コメダ珈琲店 鯖江店"},{"id":"k-setagawa","brand":"komeda","name":"コメダ珈琲店 瀬田川唐橋店"},{"id":"k-takefu","brand":"komeda","name":"コメダ珈琲店 武生店"},{"id":"k-ritto","brand":"komeda","name":"コメダ珈琲店 栗東綣店"},{"id":"p-owada","brand":"hyonchan","name":"ヒョンチャンプルコギ 福井大和田店"}];
const DEFAULT_USERS_LIST = [{"id":"admin","password":"admin","role":"admin","name":"管理者","position":"管理者","defaultStore":null,"approveBrand":null},{"id":"mgr-h","password":"pass","role":"manager","name":"8番統括 鈴木","position":"業態責任者","defaultStore":null,"approveBrand":"hachiban"},{"id":"mgr-k","password":"pass","role":"manager","name":"コメダ統括 高橋","position":"業態責任者","defaultStore":null,"approveBrand":"komeda"},{"id":"mgr-p","password":"pass","role":"manager","name":"ヒョンチャン統括","position":"業態責任者","defaultStore":null,"approveBrand":"hyonchan"},{"id":"soumu","password":"pass","role":"soumu","name":"総務部 中村","position":"総務","defaultStore":null,"approveBrand":null},{"id":"u001","password":"pass","role":"staff","name":"前田 昭仁","position":"社員","defaultStore":"h-kunidaka","approveBrand":null},{"id":"u002","password":"pass","role":"staff","name":"中野 和美","position":"店長","defaultStore":"h-kunidaka","approveBrand":null},{"id":"u003","password":"pass","role":"staff","name":"井上 実代子","position":"社員","defaultStore":"h-sabae","approveBrand":null},{"id":"u004","password":"pass","role":"staff","name":"橋本 武志","position":"店長","defaultStore":"h-sabae","approveBrand":null},{"id":"u005","password":"pass","role":"staff","name":"竹内 美加","position":"副店長","defaultStore":"h-sabae","approveBrand":null},{"id":"u006","password":"pass","role":"staff","name":"髙島 孝仁","position":"社員","defaultStore":"h-sabae","approveBrand":null},{"id":"u007","password":"pass","role":"staff","name":"渡辺 有加里","position":"社員","defaultStore":"h-sabae-east","approveBrand":null},{"id":"u008","password":"pass","role":"staff","name":"野嶋 郁甫","position":"係長","defaultStore":"h-sabae-east","approveBrand":null},{"id":"u009","password":"pass","role":"staff","name":"谷口 康裕","position":"社員","defaultStore":"h-sabae-east","approveBrand":null},{"id":"u010","password":"pass","role":"staff","name":"齋藤 貴文","position":"店長","defaultStore":"h-sabae-east","approveBrand":null},{"id":"u011","password":"pass","role":"staff","name":"高橋 孝予","position":"店長","defaultStore":"h-shinmei","approveBrand":null},{"id":"u012","password":"pass","role":"staff","name":"細井 大貴","position":"社員","defaultStore":"h-shinmei","approveBrand":null},{"id":"u013","password":"pass","role":"staff","name":"増永 聖音","position":"社員","defaultStore":"h-shinmei","approveBrand":null},{"id":"u014","password":"pass","role":"staff","name":"冨坂 莉那","position":"社員","defaultStore":"h-shinmei","approveBrand":null},{"id":"u015","password":"pass","role":"staff","name":"見附 大輔","position":"店長","defaultStore":"h-takefu","approveBrand":null},{"id":"u016","password":"pass","role":"staff","name":"櫻井 路子","position":"係長","defaultStore":"h-takefu","approveBrand":null},{"id":"u017","password":"pass","role":"staff","name":"神戸 剛","position":"係長","defaultStore":"h-takefu","approveBrand":null},{"id":"u018","password":"pass","role":"staff","name":"山田 直樹","position":"社員","defaultStore":"k-otsu-ouji","approveBrand":null},{"id":"u019","password":"pass","role":"staff","name":"橋野 恵","position":"アシスト社員","defaultStore":"k-otsu-ouji","approveBrand":null},{"id":"u020","password":"pass","role":"staff","name":"筈井 友香里","position":"アシスト社員","defaultStore":"k-otsu-ouji","approveBrand":null},{"id":"u021","password":"pass","role":"staff","name":"山本 遥","position":"社員","defaultStore":"k-otsu-katata","approveBrand":null},{"id":"u022","password":"pass","role":"staff","name":"竹内 沙羅","position":"店長","defaultStore":"k-otsu-katata","approveBrand":null},{"id":"u023","password":"pass","role":"staff","name":"城野 茜","position":"サービストレーナー","defaultStore":"k-sabae","approveBrand":null},{"id":"u024","password":"pass","role":"staff","name":"大町 里奈","position":"社員","defaultStore":"k-setagawa","approveBrand":null},{"id":"u025","password":"pass","role":"staff","name":"内田 遥都","position":"社員","defaultStore":"k-setagawa","approveBrand":null},{"id":"u026","password":"pass","role":"staff","name":"大丁 聖也","position":"社員","defaultStore":"k-takefu","approveBrand":null},{"id":"u027","password":"pass","role":"staff","name":"白崎 智之","position":"SV兼コメダ福井地区店長","defaultStore":"k-takefu","approveBrand":null},{"id":"u028","password":"pass","role":"staff","name":"森口 嵩史","position":"社員","defaultStore":"k-ritto","approveBrand":null},{"id":"u029","password":"pass","role":"staff","name":"田代 美代子","position":"アシスト社員","defaultStore":"k-ritto","approveBrand":null},{"id":"u030","password":"pass","role":"staff","name":"岩嵜 恒次","position":"店長","defaultStore":"p-owada","approveBrand":null}];


const HIGH_VALUE_THRESHOLD = 10000; // ¥10,000 超で赤字表示

// =========================================================
// App state
// =========================================================
const State = {
  user: null,
  view: 'login',
  brand: 'all', // 'all' | 'hachiban' | 'komeda'
  storeId: null,
  month: currentMonth(),
  items: { hachiban: [], komeda: [], hyonchan: [] },
  stores: [],
  users: [],
  inventory: {},   // { storeId: { entries: { itemId: qty }, notes: { itemId: text }, completed, completedAt, completedBy, inputBy, orderBy } }
  approvals: {},   // { hachiban: {by, at, signature}, komeda: {...} }
  alertComments: {}, // { storeId: { storeComment, storeBy, managerComment, managerBy } } 当月アラート改善コメント
  deadlines: {},   // { 'YYYY-MM': 'YYYY-MM-DDTHH:MM' }  入力締切（月別）
  approvalDeadlines: {}, // { 'YYYY-MM': 'YYYY-MM-DDTHH:MM' }  業態責任者 承認締切（月別・既定=22日13:00）
  soumuConfirmations: {}, // { 'YYYY-MM': { by, at } }  本社（総務部）最終確認
  transferSlips: [], // 店舗間 売買伝票（当月度ぶん）
  foodLoss: [],           // 食材ロス（当月度ぶん）
  foodLossPeriod: null,   // 食材ロスの当月度(21日〜翌20日)
  foodLossDraft: { storeId:'', category:'', staffName:'', date:'', time:'', itemId:'', itemName:'', qty:'', unit:'', reason:'', amountExcl:'' },
  aiConfig: { flEnabled:false, flUrl:'', supportEnabled:false, photoEnabled:false, analysisEnabled:false, edgeUrl:'', apiKey:'', supportMail:'support-labo@fevascale.jp', promoScope:'manager', promoText:'' }, // Fevascale AI Support（既定OFF）/ promoScope=案内表示対象 manager|all|off
  // --- 器物破損管理（v9.11.0） ---
  breakage: [],            // 器物破損（当月度ぶん）
  breakagePeriod: null,    // 器物破損の当月度(21日〜翌20日)
  breakageDraft: { storeId:'', category:'', staffName:'', date:'', time:'', itemId:'', itemName:'', qty:'', unit:'', reason:'', amountExcl:'' },
  breakageItems: {},       // 備品機器マスタ（ブランド別）
  badgeCounts: { transfers:0, foodloss:0, breakage:0 },
  // --- FevaCOIN（v9.12.0） ---
  coinConfig: { inv:[10,6,3], loss:[8,5,2], breakage:[8,5,2] },
  coinAwards: [],          // 確定済みコイン（年間用）
  coinLoss: [],            // 当月度の食材ロス（集計用）
  coinBreakage: [],        // 当月度の器物破損（集計用）
  _coinLoadedFor: null,
  sealStamps: { president:null, director:null },
  sealAssign: { presUid:'', presName:'濱端', dirUid:'', dirName:'今川' },
  sealLoadedFor: null,
  slipPeriod: null,  // 売買伝票の当月度(20日締め)
  supplierNotes: {}, // { supplierName: { contact, memo } }
  activeCategory: null,
  searchQuery: '',
  adminTab: 'hachiban',
  adminFilter: '',
  adminFilterCat: '',
  busy: false,
  // ===== コンソール(v9.9.0) =====
  consoleTab: 'features',     // 'features' | 'perms' | 'branding' | 'preview' | 'ai'
  _aiCfgLoaded: false,
  branding: null,             // {companyName, loginTitle, loginSubtitle, logoUrl}
  featureFlags: null,         // {coin:false,...}
  rolePermissions: null,      // {pageId:{role:bool}}  ※未保存(null)の間は全許可=現行動作維持
  _brandingLogoDraft: undefined, // ロゴ差し替え一時保持(dataURL)
  _brandBoardLogoDraft: undefined, // ボードロゴ一時保持(dataURL)
  _brandingStockLogoDraft: undefined, // Stockロゴ一時保持(dataURL)
  _brandingCityLogoDraft: undefined, // Cityロゴ一時保持(dataURL)
};

function currentMonth() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function formatMonth(ym) {
  const [y, m] = ym.split('-');
  return `${y}年${parseInt(m, 10)}月度`;
}

function shiftMonth(ym, delta) {
  const [y, m] = ym.split('-').map(Number);
  const d = new Date(y, m - 1 + delta, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// 認印（朱色・氏名から描画。画像/ base64 は一切保存しない）
function sealHtml(name, size) {
  name = (name == null ? '' : String(name)).trim();
  if (!name) return '';
  size = size || 56;
  var txt = name.split(/[\s\u3000]+/)[0] || name;       // 認印は姓のみが自然
  var chars = Array.from(txt).slice(0, 4);
  var n = chars.length;
  var red = '#c0341d';
  var font = "'Yu Mincho','Hiragino Mincho ProN','MS Mincho',serif";
  var body = '';
  if (n <= 3) {
    var fs = n === 1 ? size * 0.52 : (n === 2 ? size * 0.42 : size * 0.32);
    var startY = size / 2 - ((n - 1) * fs * 1.05) / 2 + fs * 0.36;
    for (var i = 0; i < n; i++) {
      body += '<text x="' + (size/2) + '" y="' + (startY + i*fs*1.05) + '" font-size="' + fs + '" text-anchor="middle" fill="' + red + '" font-family="' + font + '" font-weight="700">' + escapeHtml(chars[i]) + '</text>';
    }
  } else {
    var fs2 = size * 0.30;
    var xs = [size*0.63, size*0.37]; // 右列→左列（縦書き慣習）
    var cols = [[chars[0], chars[1]], [chars[2], chars[3]]];
    for (var ci = 0; ci < 2; ci++) for (var ri = 0; ri < 2; ri++) {
      body += '<text x="' + xs[ci] + '" y="' + (size*0.42 + ri*fs2*1.1) + '" font-size="' + fs2 + '" text-anchor="middle" fill="' + red + '" font-family="' + font + '" font-weight="700">' + escapeHtml(cols[ci][ri]) + '</text>';
    }
  }
  var sw = Math.max(2, size * 0.05);
  return '<svg class="ninin-seal" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="認印 ' + escapeHtml(txt) + '">' +
    '<circle cx="' + (size/2) + '" cy="' + (size/2) + '" r="' + (size/2 - sw) + '" fill="none" stroke="' + red + '" stroke-width="' + sw + '"/>' +
    body + '</svg>';
}

function formatYen(n) {
  const v = Number(n);
  return '¥' + Math.round(isFinite(v) ? v : 0).toLocaleString('ja-JP');
}

function brandOf(storeId) {
  // まずStateの店舗マスタを優先
  const s = (State.stores || []).find(x => x.id === storeId);
  if (s && s.brand) return s.brand;
  // 次にState.brandsのidPrefixでマッチング
  if (State.brands && State.brands.length > 0) {
    for (const b of State.brands) {
      if (b.idPrefix && storeId.startsWith(b.idPrefix + '-')) return b.id;
    }
  }
  // 最後にハードコードでフォールバック
  if (storeId.startsWith('h-')) return 'hachiban';
  if (storeId.startsWith('k-')) return 'komeda';
  if (storeId.startsWith('p-')) return 'hyonchan';
  return 'hachiban';
}

function brandLabel(b) {
  if (State.brands && State.brands.length > 0) {
    const found = State.brands.find(br => br.id === b);
    if (found) return found.name;
  }
  // フォールバック
  if (b === 'hachiban') return '8番らーめん';
  if (b === 'komeda') return 'コメダ珈琲店';
  if (b === 'hyonchan') return 'ヒョンチャンプルコギ';
  return b;
}

function allBrands() {
  // Supabase版: State.brands から取得（読み込み済み前提）
  if (State.brands && State.brands.length > 0) {
    return State.brands.map(b => b.id);
  }
  // フォールバック
  return ['hachiban', 'komeda', 'hyonchan'];
}

// Bump this when default data shape changes, to force-refresh seeded data
const SCHEMA_VERSION = 5;

// Categories considered as "supplies" (非食材)
const SUPPLY_CATEGORIES = new Set(['備品', 'テイクアウト', '備品・包材']);

function inferKind(category) {
  return SUPPLY_CATEGORIES.has(category) ? 'supplies' : 'food';
}

// =========================================================
// Data load / save
// =========================================================
async function loadAll() {
  // brands を先にロード（Supabaseから、無ければデフォルト投入）
  const defaultBrands = [
    { id: 'hachiban', name: '8番らーめん', idPrefix: 'h', sortOrder: 10 },
    { id: 'komeda', name: 'コメダ珈琲店', idPrefix: 'k', sortOrder: 20 },
    { id: 'hyonchan', name: 'ヒョンチャンプルコギ', idPrefix: 'p', sortOrder: 30 }
  ];
  let brandsFromDb = null;
  // 起動時の読み込みを並列化（順次awaitだとデータ件数ぶん待たされ「ログインが遅い」原因になる）
  // 棚卸データ・アプリ設定も同じバッチに含めて、往復回数を減らす
  let _preVer = null, _preItems = null, _preStores = null, _preUsers = null, _preSupNotes = null, _preSuppliersByBrand = null, _preSettings = null;
  try {
    [brandsFromDb, _preVer, _preItems, _preStores, _preUsers, _preSupNotes, _preSuppliersByBrand, , , _preSettings] = await Promise.all([
      storage.get('brands').catch(() => null),
      storage.get('schema_version').catch(() => null),
      storage.get('master_items').catch(() => null),
      storage.get('stores').catch(() => null),
      storage.get('users').catch(() => null),
      storage.get('supplier_notes').catch(() => null),
      sbStorage.get('suppliers_by_brand').catch(() => null),
      loadBulletins().catch(() => null),
      loadInventory(State.month).catch(() => null),   // 棚卸データを並行取得
      storage.get('app_settings').catch(() => null),   // 締切等の設定を並行取得
    ]);
  } catch (e) {
    console.error('loadAll prefetch error', e);
  }
  if (brandsFromDb && brandsFromDb.length > 0) {
    State.brands = brandsFromDb;
  } else {
    // Supabaseが空 or 取得失敗 → デフォルトを投入して保存試行
    State.brands = defaultBrands;
    await storage.set('brands', defaultBrands);
  }
  const storedVer = _preVer;
  const versionOk = storedVer === SCHEMA_VERSION;

  // master items
  let items = _preItems;
  if (!items || !versionOk) {
    items = { hachiban: DEFAULT_HACHIBAN_ITEMS, komeda: DEFAULT_KOMEDA_ITEMS, hyonchan: [] };
    await storage.set('master_items', items);
  } else {
    // 空の業態に初期マスタを自動復元しない（「全削除」したのに復活してしまうため）
    if (!items.hachiban) items.hachiban = [];
    if (!items.komeda)   items.komeda   = [];
    if (!items.hyonchan) items.hyonchan = [];
  }
  // 全ブランド（カスタム追加分含む）について空配列を保証
  for (const b of (State.brands || [])) {
    if (!items[b.id]) items[b.id] = [];
  }
  // Backfill missing fields (supplier, kind) on every load
  for (const brand of allBrands()) {
    for (const it of (items[brand] || [])) {
      if (it.supplier === undefined) it.supplier = '';
      if (!it.kind) it.kind = inferKind(it.category);
    }
  }
  State.items = items;

  // stores
  let stores = _preStores;
  if (!stores || !versionOk) {
    stores = DEFAULT_STORES;
    await storage.set('stores', stores);
  }
  State.stores = stores;

  // users（Supabaseから、無ければデフォルトを投入）
  let users = _preUsers;
  if (!users || users.length === 0) {
    users = DEFAULT_USERS_LIST;
    await storage.set('users', users);
  }
  // Backfill role-related fields
  for (const u of users) {
    if (u.approveBrand === undefined) u.approveBrand = null;
    if (u.position === undefined) u.position = '';
  }
  State.users = users;

  if (!versionOk) {
    await storage.set('schema_version', SCHEMA_VERSION);
  }

  // Supplier notes (contact / memo)
  let supplierNotes = _preSupNotes;
  State.supplierNotes = supplierNotes || {};
  
  // 新仕入先マスタ（業態別）
  State.suppliersByBrand = _preSuppliersByBrand || {};

  // 棚卸データは上の並列バッチで loadInventory 済み

  // アプリ設定（入力締切など）※上の並列バッチで取得済みの _preSettings を使用
  try {
    const settings = _preSettings;
    State.deadlines = (settings && settings.deadlines) || {};
    State.approvalDeadlines = (settings && settings.approval_deadlines) || {};
    State.soumuConfirmations = (settings && settings.soumu_confirmations) || {};
  } catch (e) { State.deadlines = State.deadlines || {}; }
}
async function init() {
  // Supabase未接続フォールバック
  if (!sb) {
    toast('Supabaseに接続できません。SUPABASE_URLとSUPABASE_KEYを確認してください', 'error');
    State.currentView = 'login';
    render();
    return;
  }

  // 認証はサーバー側（/api/auth/login）で行うため、ログイン前にユーザー一覧は
  // 取得しない。実ユーザーはログイン後に loadAll() が読み込む。

  // 設定(ブランディング/機能/権限)を先読み ※ログイン前に必要・失敗しても続行
  try {
    const s = await storage.get('app_settings');
    if (s) {
      State.branding        = s.branding || null;
      State.featureFlags    = s.feature_flags || null;
      State.rolePermissions = s.role_permissions || null;
    }
  } catch (e) { console.error('settings preload', e); }

  // 未ログイン
  State.currentView = 'login';
  render();
  startDeadlineTicker();
}


async function saveSupplierNotes() {
  await storage.set('supplier_notes', State.supplierNotes);
}

async function saveUsers() {
  // Supabaseに保存（全端末で同期）
  return await storage.set('users', State.users);
}

// =========================================================
// ユーザーデータ専用：localStorageによるブラウザ保存
// （Supabaseには保存せず、各ブラウザで独立管理）
// =========================================================
const USERS_LOCAL_KEY = 'tanaoroshi_users_v1';

function loadUsersLocal() {
  try {
    const json = localStorage.getItem(USERS_LOCAL_KEY);
    if (!json) return null;
    const arr = JSON.parse(json);
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr;
  } catch (e) {
    console.error('loadUsersLocal error', e);
    return null;
  }
}

function saveUsersLocal(users) {
  try {
    localStorage.setItem(USERS_LOCAL_KEY, JSON.stringify(users));
    return true;
  } catch (e) {
    console.error('saveUsersLocal error', e);
    return false;
  }
}

async function saveBrands() {
  // Supabaseに保存（全端末で同期）
  return await storage.set('brands', State.brands);
}

// =========================================================
// ブランド専用：localStorageによるブラウザ保存
// （Supabaseのbrandsテーブル設定不要、各ブラウザで独立管理）
// =========================================================
const BRANDS_LOCAL_KEY = 'tanaoroshi_brands_v1';

function loadBrandsLocal() {
  try {
    const json = localStorage.getItem(BRANDS_LOCAL_KEY);
    if (!json) return null;
    const arr = JSON.parse(json);
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr;
  } catch (e) {
    console.error('loadBrandsLocal error', e);
    return null;
  }
}

function saveBrandsLocal(brands) {
  try {
    localStorage.setItem(BRANDS_LOCAL_KEY, JSON.stringify(brands));
    return true;
  } catch (e) {
    console.error('saveBrandsLocal error', e);
    return false;
  }
}

async function loadInventory(ym) {
  const [inv, ap, ac] = await Promise.all([
    storage.get('inventory_' + ym),
    storage.get('approvals_' + ym),
    storage.get('alert_comments_' + ym),
  ]);
  // 取得失敗（null）のときは既存データを消さない。空の月だけが {} を返す。
  if (inv !== null) State.inventory = inv || {};
  if (ap !== null) State.approvals = ap || {};
  if (ac !== null) State.alertComments = ac || {};
  State.month = ym;
}

async function saveInventory() {
  _lastDbError = '';
  const ok = await storage.set('inventory_' + State.month, State.inventory);
  if (ok === false) toast('保存に失敗しました：' + (_lastDbError || '通信エラー'), 'error');
  return ok;
}

// 編集した項目だけを1行ずつ保存（全件スナップショット上書きをやめ、端末間の数値の戻り/増減を解消）
let _dirtyEntries = {};
function markEntryDirty(storeId, itemId) {
  if (!_dirtyEntries[storeId]) _dirtyEntries[storeId] = new Set();
  _dirtyEntries[storeId].add(itemId);
}
async function flushDirtyEntries() {
  _lastDbError = '';
  let ok = true;
  for (const sid of Object.keys(_dirtyEntries)) {
    const ids = Array.from(_dirtyEntries[sid] || []);
    delete _dirtyEntries[sid];
    const inv = State.inventory[sid] || {};
    for (const itemId of ids) {
      const q = (inv.entries && inv.entries[itemId] != null) ? inv.entries[itemId] : 0;
      const note = (inv.notes && inv.notes[itemId]) || null;
      const r = await storage.saveOneEntry(sid, State.month, itemId, q, note);
      if (r === false) { ok = false; markEntryDirty(sid, itemId); } // 失敗分は再試行用に dirty へ戻す
    }
  }
  if (ok === false) toast('保存に失敗しました：' + (_lastDbError || '通信エラー'), 'error');
  return ok;
}
async function saveCurrentMeta(storeId) {
  _lastDbError = '';
  const inv = State.inventory[storeId] || {};
  const ok = await storage.saveOneMeta(storeId, State.month, inv);
  if (ok === false) toast('保存に失敗しました：' + (_lastDbError || '通信エラー'), 'error');
  return ok;
}
// 指定フィールドだけ保存（入力者/最終発注者/完了フラグを個別に。他人の入力を巻き込まない）
async function saveMetaField(storeId, fields) {
  _lastDbError = '';
  const ok = await storage.saveMetaFields(storeId, State.month, fields);
  if (ok === false) toast('保存に失敗しました：' + (_lastDbError || '通信エラー'), 'error');
  return ok;
}

async function saveApprovals() {
  _lastDbError = '';
  const ok = await storage.set('approvals_' + State.month, State.approvals);
  if (ok === false) toast('保存に失敗しました：' + (_lastDbError || '通信エラー'), 'error');
  return ok;
}

async function saveItems() {
  _lastDbError = '';
  const ok = await storage.set('master_items', State.items);
  if (ok === false) toast('保存に失敗しました：' + (_lastDbError || '通信エラー'), 'error');
  return ok;
}

async function saveStores() {
  await storage.set('stores', State.stores);
}

// =========================================================
// Computations
// =========================================================
function itemNo(it) {
  if (it && it.no !== undefined && it.no !== null && it.no !== '') return it.no;
  const m = String((it && it.id) || '').match(/(\d+)/);
  if (m) return parseInt(m[1], 10);
  return (it && it.id) || '';
}

function getDeadline() {
  return (State.deadlines && State.deadlines[State.month]) || null;
}
function isInputLocked() {
  const d = getDeadline();
  if (!d) return false;
  const t = new Date(d).getTime();
  if (isNaN(t)) return false;
  return Date.now() >= t;
}
function defaultApprovalDeadline(ym) {
  // 当月度の22日13:00（State.month の年月）
  return `${ym}-22T13:00`;
}
function getApprovalDeadline() {
  const v = State.approvalDeadlines && State.approvalDeadlines[State.month];
  if (v === 'none') return null; // 解除＝締切なし
  return v || defaultApprovalDeadline(State.month);
}
function isApprovalLocked() {
  const d = getApprovalDeadline();
  if (!d) return false;
  const t = new Date(d).getTime();
  if (isNaN(t)) return false;
  return Date.now() >= t;
}
function formatDeadline(d) {
  if (!d) return '';
  const dt = new Date(d);
  if (isNaN(dt.getTime())) return '';
  const p = (n) => String(n).padStart(2, '0');
  return `${dt.getFullYear()}年${dt.getMonth() + 1}月${dt.getDate()}日 ${p(dt.getHours())}:${p(dt.getMinutes())}`;
}

function getStoreItems(storeId) {
  const b = brandOf(storeId);
  return State.items[b] || [];
}

function getStoreEntries(storeId) {
  const inv = State.inventory[storeId];
  return inv?.entries || {};
}

// 棚卸金額の単価：進行中（当月度）は最新のマスタ単価、過去月度は保存時のスナップショット単価を使う。
// これにより月ごとに変動する食材原価でも、過去の棚卸金額が後からの単価変更でブレない。
function invUnitPrice(storeId, it) {
  if (!it) return 0;
  if (State.month === currentMonth()) return Number(it.price) || 0; // 当月度は常に最新マスタ単価
  const snap = State.inventory && State.inventory[storeId] && State.inventory[storeId].prices
    ? State.inventory[storeId].prices[it.id] : undefined;
  return (snap != null && !isNaN(snap)) ? Number(snap) : (Number(it.price) || 0);
}

function getStoreTotal(storeId) {
  const items = getStoreItems(storeId);
  const entries = getStoreEntries(storeId);
  let total = 0;
  for (const it of items) {
    const q = parseFloat(entries[it.id]);
    if (!isNaN(q) && q > 0) total += q * invUnitPrice(storeId, it);
  }
  return total;
}

function getStoreTotals(storeId) {
  // Returns { food, supplies, total }
  const items = getStoreItems(storeId);
  const entries = getStoreEntries(storeId);
  let food = 0, supplies = 0;
  for (const it of items) {
    const q = parseFloat(entries[it.id]);
    if (!isNaN(q) && q > 0) {
      const amt = q * invUnitPrice(storeId, it);
      if (it.kind === 'supplies') supplies += amt;
      else food += amt;
    }
  }
  return { food, supplies, total: food + supplies };
}

function getStoreNotes(storeId) {
  const inv = State.inventory[storeId];
  return inv?.notes || {};
}

function getStoreFilled(storeId) {
  const entries = getStoreEntries(storeId);
  return Object.values(entries).filter(v => parseFloat(v) > 0).length;
}

function getStoreStatus(storeId) {
  const inv = State.inventory[storeId];
  if (inv?.completed) return 'done';
  if (getStoreFilled(storeId) > 0) return 'pending';
  return 'empty';
}

function getItemThreshold(item) {
  if (item && item.alertThreshold != null && !isNaN(item.alertThreshold)) return Number(item.alertThreshold);
  return HIGH_VALUE_THRESHOLD;
}
function isHighValueAmount(amount, item) {
  return amount > getItemThreshold(item);
}

function getHighValueItems(storeId) {
  const items = getStoreItems(storeId);
  const entries = getStoreEntries(storeId);
  const list = [];
  for (const it of items) {
    const q = parseFloat(entries[it.id]);
    if (!isNaN(q) && q > 0) {
      const unitP = invUnitPrice(storeId, it);
      const amount = q * unitP;
      if (isHighValueAmount(amount, it)) {
        list.push({ ...it, qty: q, price: unitP, amount });
      }
    }
  }
  return list.sort((a, b) => b.amount - a.amount);
}

function getStoreStaff(storeId) {
  return State.users.filter(u => !u.archived && isStaffLike(u.role) && u.defaultStore === storeId);
}

// =========================================================
// Routing / render
// =========================================================
async function refreshData() {
  if (State.busy) return;
  State.busy = true;
  try {
    // 入力中の数量を先に保存してから最新を取得（更新ボタン＝保存＋再読込）
    try { clearTimeout(qtySaveTimer); } catch (e) {}
    try { clearTimeout(noteSaveTimer); } catch (e) {}
    if (State.view === 'inventory') { await flushDirtyEntries(); }
    State.items = await sbStorage.get('master_items') || State.items;
    State.stores = await sbStorage.get('stores') || State.stores;
    await loadInventory(State.month);
    try { await loadBulletins(); } catch (e) {}
    try {
      const s = await storage.get('app_settings');
      State.deadlines = (s && s.deadlines) || State.deadlines || {};
      State.approvalDeadlines = (s && s.approval_deadlines) || State.approvalDeadlines || {};
      State.soumuConfirmations = (s && s.soumu_confirmations) || State.soumuConfirmations || {};
    } catch (e) {}
    render();
    toast('最新の状態に更新しました', 'success');
  } catch (e) {
    console.error('refreshData', e);
    toast('更新に失敗しました', 'error');
  } finally { State.busy = false; }
}

async function saveDeadline() {
  const el = document.getElementById('deadline-input');
  if (!el) return;
  const val = el.value; // 'YYYY-MM-DDTHH:MM'
  if (!val) { toast('日付と時間を入力してください', 'error'); return; }
  State.deadlines = State.deadlines || {};
  State.deadlines[State.month] = val;
  const ok = await storage.set('app_settings', { deadlines: State.deadlines });
  if (ok === false) { toast('保存に失敗：' + (_lastDbError || 'app_settingsテーブルを確認してください'), 'error'); return; }
  toast('入力締切を設定しました', 'success');
  render();
}
async function clearDeadline() {
  if (!confirm('この月度の入力締切を解除しますか？')) return;
  State.deadlines = State.deadlines || {};
  delete State.deadlines[State.month];
  const ok = await storage.set('app_settings', { deadlines: State.deadlines });
  if (ok === false) { toast('保存に失敗：' + (_lastDbError || ''), 'error'); return; }
  toast('入力締切を解除しました', 'success');
  render();
}

async function saveApprovalDeadline() {
  const el = document.getElementById('approval-deadline-input');
  if (!el) return;
  const val = el.value;
  if (!val) { toast('日付と時間を入力してください', 'error'); return; }
  State.approvalDeadlines = State.approvalDeadlines || {};
  State.approvalDeadlines[State.month] = val;
  const ok = await storage.set('app_settings', { approval_deadlines: State.approvalDeadlines });
  if (ok === false) { toast('保存に失敗：' + (_lastDbError || 'app_settingsテーブルを確認してください'), 'error'); return; }
  toast('承認締切を設定しました', 'success');
  render();
}
async function clearApprovalDeadline() {
  if (!confirm('この月度の承認締切を既定（22日13:00）に戻しますか？')) return;
  State.approvalDeadlines = State.approvalDeadlines || {};
  delete State.approvalDeadlines[State.month];
  const ok = await storage.set('app_settings', { approval_deadlines: State.approvalDeadlines });
  if (ok === false) { toast('保存に失敗：' + (_lastDbError || ''), 'error'); return; }
  toast('承認締切を既定に戻しました', 'success');
  render();
}

async function releaseApprovalDeadline() {
  if (!confirm('この月度の承認締切を解除し、締切なし（受付無制限）にしますか？')) return;
  State.approvalDeadlines = State.approvalDeadlines || {};
  State.approvalDeadlines[State.month] = 'none';
  const ok = await storage.set('app_settings', { approval_deadlines: State.approvalDeadlines });
  if (ok === false) { toast('保存に失敗：' + (_lastDbError || ''), 'error'); return; }
  toast('承認締切を解除しました（締切なし）', 'success');
  render();
}

function setSaveStatus(state) {
  const el = document.getElementById('save-status');
  if (state === 'saving') { if (el) { el.textContent = '保存中…'; el.className = 'save-status saving'; } }
  else if (state === 'error') {
    _saveHealthy = false; _lastSaveErrMsg = _lastDbError || '';
    if (el) { el.textContent = '⚠ 保存失敗'; el.className = 'save-status error'; }
    refreshConnBanner();
  } else {
    if (!_saveHealthy) { _saveHealthy = true; _lastSaveErrMsg = ''; refreshConnBanner(); }
    if (el) { el.textContent = '✓ 保存しました'; el.className = 'save-status saved'; }
  }
}

// =========================================================
// 接続・保存ヘルスチェック
//   sb（Supabase接続）の有無と直近の保存結果を常設バナーで可視化し、
//   「入力したのに保存されない」状態をサイレントにしない。
// =========================================================
let _saveHealthy = true;
let _lastSaveErrMsg = '';
function connBannerHtml() {
  if (State.view === 'login') return '';
  if (!sb) {
    return '<div class="conn-banner offline">⚠ サーバーに接続できていません。入力しても保存されません（接続先URL/KEYや通信状況をご確認ください）。'
      + '<button class="conn-diag-btn" data-action="save-diag">接続診断</button></div>';
  }
  if (!_saveHealthy) {
    return '<div class="conn-banner warn">⚠ 直近の保存に失敗しました'
      + (_lastSaveErrMsg ? '（' + escapeHtml(_lastSaveErrMsg) + '）' : '')
      + '。通信状況やアクセス権（RLS）をご確認ください。'
      + '<button class="conn-diag-btn" data-action="save-diag">再診断</button></div>';
  }
  return '';
}
function refreshConnBanner() {
  const host = document.getElementById('conn-banner-host');
  if (host) host.innerHTML = connBannerHtml();
}
// 読み取り→書き込み→後始末 を app_config で試し、保存可否を実測する（非破壊）
async function runSaveDiagnostics() {
  const res = { sb: !!sb, canRead: false, canWrite: false, error: '' };
  if (!sb) { res.error = 'Supabaseクライアント未初期化（CDN未読込、またはURL/KEY未設定）'; return res; }
  try {
    const rd = await sb.from('app_config').select('key').limit(1);
    if (rd.error) { res.error = '読み取り失敗: ' + (rd.error.message || rd.error.code || JSON.stringify(rd.error)); return res; }
    res.canRead = true;
    const key = '__health_check';
    const wr = await sb.from('app_config').upsert([{ key, value: new Date().toISOString() }], { onConflict: 'key' });
    if (wr.error) { res.error = '書き込み失敗: ' + (wr.error.message || wr.error.code || JSON.stringify(wr.error)); return res; }
    res.canWrite = true;
    await sb.from('app_config').delete().eq('key', key); // テスト行を後始末
  } catch (e) { res.error = String((e && e.message) || e); }
  return res;
}
window.saveDiagnostics = async function () {
  toast('接続を診断中…');
  const r = await runSaveDiagnostics();
  if (r.canRead && r.canWrite) {
    _saveHealthy = true; _lastSaveErrMsg = '';
    toast('✓ 接続OK：読み取り・保存ともに正常です', 'success');
  } else {
    _saveHealthy = false; _lastSaveErrMsg = r.error;
    toast('⚠ 保存できません：' + (r.error || '不明なエラー'), 'error');
  }
  refreshConnBanner();
};

function deadlineBanner() {
  let out = '';
  const d = getDeadline();
  if (d) {
    const locked = isInputLocked();
    const ts = new Date(d).getTime();
    out += locked
      ? `<div class="deadline-banner locked">⏰ 入力締切（${escapeHtml(formatDeadline(d))}）を過ぎました。入力は締め切られています（管理者・業態責任者を除く）。</div>`
      : `<div class="deadline-banner countdown">⏰ 入力締切：${escapeHtml(formatDeadline(d))} まで　<span class="deadline-countdown" id="deadline-countdown" data-deadline-ts="${ts}">${escapeHtml(formatCountdown(ts - Date.now()))}</span>　<span class="deadline-note">指定日時で全店舗の入力が締め切られます（管理者・業態責任者を除く）</span></div>`;
  }
  out += approvalDeadlineBanner();
  return out;
}

function approvalDeadlineBanner() {
  const ad = getApprovalDeadline();
  if (!ad) return '';
  const ts = new Date(ad).getTime();
  if (isNaN(ts)) return '';
  if (Date.now() >= ts) {
    return `<div class="deadline-banner approval-locked">✍ 業態責任者 承認締切（${escapeHtml(formatDeadline(ad))}）を過ぎました。</div>`;
  }
  return `<div class="deadline-banner approval-countdown">✍ 業態責任者 承認締切：${escapeHtml(formatDeadline(ad))} まで　<span class="deadline-countdown" id="approval-deadline-countdown" data-deadline-ts="${ts}">${escapeHtml(formatCountdown(ts - Date.now()))}</span></div>`;
}

function formatCountdown(ms) {
  if (ms <= 0) return '締切に到達しました';
  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const p = (n) => String(n).padStart(2, '0');
  return (days > 0 ? `残り ${days}日 ` : '残り ') + `${p(h)}:${p(m)}:${p(s)}`;
}

let _deadlineTicker = null;
function startDeadlineTicker() {
  if (_deadlineTicker) return;
  _deadlineTicker = setInterval(() => {
    const editing = (typeof isUserActivelyEditing === 'function' && isUserActivelyEditing());
    let needRender = false;
    const el = document.getElementById('deadline-countdown');
    if (el) {
      const ts = parseInt(el.dataset.deadlineTs, 10);
      const remain = isNaN(ts) ? 1 : ts - Date.now();
      if (remain <= 0) needRender = true; else el.textContent = formatCountdown(remain);
    }
    const ela = document.getElementById('approval-deadline-countdown');
    if (ela) {
      const tsa = parseInt(ela.dataset.deadlineTs, 10);
      const remainA = isNaN(tsa) ? 1 : tsa - Date.now();
      if (remainA <= 0) needRender = true; else ela.textContent = formatCountdown(remainA);
    }
    if (needRender && !editing) render(); // 締切到達 → ロック反映のため再描画
  }, 1000);
}

function navigate(view, params = {}) {
  // 権限ガード(v9.9.0): super_admin は常に通過。未設定なら現行どおり。
  if (typeof canAccessPage === 'function' && State.user) {
    const pageMap = { dashboard: 'dashboard', inventory: 'inventory', transfers: 'transfers', admin: 'admin', foodloss: 'foodloss', breakage: 'breakage', coins: 'coins' };
    const pg = pageMap[view];
    if (pg && !canAccessPage(pg)) {
      toast('このページへのアクセス権がありません', 'error');
      view = 'dashboard';
      params = {};
    }
  }
  State.view = view;
  if (params.storeId !== undefined) State.storeId = params.storeId;
  if (params.brand !== undefined) State.brand = params.brand;
  if (params.activeCategory !== undefined) State.activeCategory = params.activeCategory;
  if (params.adminTab !== undefined) State.adminTab = params.adminTab;
  render();
  window.scrollTo(0, 0);
}

// ---------- Login background FX (v9.8.6) : auto-stops when login DOM is removed ----------
function initLoginFx() {
  // 背景プレクサス
  (function(){
    const c=document.getElementById('lx-net'); if(!c) return; const x=c.getContext('2d');
    let w,h,dpr,nodes=[];
    function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=c.width=innerWidth*dpr;h=c.height=innerHeight*dpr;
      c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';const num=Math.round((innerWidth*innerHeight)/16000);
      nodes=Array.from({length:Math.max(40,Math.min(110,num))},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.22*dpr,vy:(Math.random()-.5)*.22*dpr}));}
    function tick(){ if(!document.getElementById('lx-net')){window.removeEventListener('resize',size);return;}
      x.clearRect(0,0,w,h);const R=140*dpr;
      for(const p of nodes){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;}
      for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){const a=nodes[i],b=nodes[j];const dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);
        if(d<R){const o=(1-d/R)*.38;x.strokeStyle='rgba(120,180,255,'+o+')';x.lineWidth=.7*dpr;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();}}
      for(const p of nodes){x.beginPath();x.arc(p.x,p.y,1.6*dpr,0,7);x.fillStyle='rgba(180,220,255,.85)';x.fill();}
      requestAnimationFrame(tick);}
    addEventListener('resize',size);size();tick();
  })();
  // AI顔フェード
  (function(){
    const layer=document.getElementById('lx-faces'); if(!layer) return;
    const W=()=>innerWidth,H=()=>innerHeight;const faces=[];
    for(let i=0;i<2;i++){const img=document.createElement('img');img.className='lx-ai-face';img.src=LOGO_LOGIN_FACE_IMG;img.alt='';
      const hgt=Math.round(190+Math.random()*90);img.style.height=hgt+'px';layer.appendChild(img);faces.push({img,hgt});}
    function place(f){f.x=20+Math.random()*Math.max(20,(W()-f.hgt*0.7-60));f.y=30+Math.random()*Math.max(20,(H()-f.hgt-70));
      f.flip=Math.random()<.5?-1:1;f.img.style.left=f.x+'px';f.img.style.top=f.y+'px';f.img.style.transform='scaleX('+f.flip+')';}
    function cycle(f,delay){ if(!document.getElementById('lx-faces')) return; place(f);
      setTimeout(()=>{if(document.getElementById('lx-faces'))f.img.style.opacity=(0.26+Math.random()*0.16).toFixed(2);},delay);
      setTimeout(()=>{if(document.getElementById('lx-faces'))f.img.style.opacity=0;},delay+4600+Math.random()*2000);
      setTimeout(()=>{if(document.getElementById('lx-faces'))cycle(f,300);},delay+7600+Math.random()*3000);}
    faces.forEach((f,i)=>cycle(f,700+i*3200));
  })();
  // アイコン遊泳 + KOESA丸ロゴ
  (function(){
    const layer=document.getElementById('lx-icons'); if(!layer) return;
    const box='<rect x="3" y="8" width="18" height="13" rx="1.5"/><path d="M3 8l3-5h12l3 5"/><path d="M12 3v5"/>';
    const receipt='<path d="M6 2h12v20l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 22z"/><path d="M9 7h6M9 11h6M9 15h4"/>';
    const barcode='<path d="M4 5v14M7 5v14M9 5v10M12 5v14M15 5v10M18 5v14M20 5v10"/>';
    const chart='<path d="M3 3v18h18"/><path d="M7 14l3-4 3 3 4-6"/>';
    const coins='<ellipse cx="8" cy="6" rx="5" ry="2.4"/><path d="M3 6v5c0 1.3 2.2 2.4 5 2.4s5-1.1 5-2.4V6"/><ellipse cx="16" cy="14" rx="5" ry="2.4"/><path d="M11 14v5c0 1.3 2.2 2.4 5 2.4s5-1.1 5-2.4v-5"/>';
    const truck='<path d="M2 6h11v9H2z"/><path d="M13 9h4l4 4v2h-8z"/><circle cx="6.5" cy="17" r="1.8"/><circle cx="17.5" cy="17" r="1.8"/>';
    const tag='<path d="M3 3h8l9 9-8 8-9-9z"/><circle cx="7.5" cy="7.5" r="1.3"/>';
    const warehouse='<path d="M3 21V9l9-5 9 5v12"/><path d="M7 21v-7h10v7"/><path d="M7 14h10"/>';
    const clipboard='<rect x="5" y="4" width="14" height="17" rx="1.5"/><path d="M9 4V2.5h6V4"/><path d="M8 10h8M8 14h6"/>';
    const gear='<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>';
    const cloud='<path d="M6 18h11a4 4 0 0 0 .5-7.95A6 6 0 0 0 6 10a4 4 0 0 0 0 8z"/>';
    const lock='<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>';
    const scan='<path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2"/><path d="M4 12h16"/>';
    const bell='<path d="M6 9a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7z"/><path d="M10 20a2 2 0 0 0 4 0"/>';
    const set=[box,box,receipt,receipt,barcode,chart,coins,truck,tag,warehouse,clipboard,gear,cloud,lock,scan,bell];
    const W=()=>innerWidth,H=()=>innerHeight;
    const items=set.map(svg=>{const el=document.createElement('div');el.className='lx-chip';const s=Math.round(34+Math.random()*30);
      el.style.width=el.style.height=s+'px';el.innerHTML='<svg viewBox="0 0 24 24">'+svg+'</svg>';layer.appendChild(el);
      return{el,x:Math.random()*W(),y:Math.random()*H(),vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*360,vr:(Math.random()-.5)*.25,rot:0.04};});
    for(let i=0;i<2;i++){const img=document.createElement('img');img.className='lx-klogo';img.src=LOGO_LOGIN_KOESA_IMG;img.alt='';
      const s=Math.round(72+Math.random()*36);img.style.width=img.style.height=s+'px';layer.appendChild(img);
      items.push({el:img,x:Math.random()*W(),y:Math.random()*H(),vx:(Math.random()-.5)*.30,vy:(Math.random()-.5)*.30,r:Math.random()*360,vr:(Math.random()-.5)*.10,rot:0.06});}
    function step(){ if(!document.getElementById('lx-icons')) return; const w=W(),h=H();for(const it of items){it.x+=it.vx;it.y+=it.vy;it.r+=it.vr;
      if(it.x<-90)it.x=w+60;if(it.x>w+90)it.x=-60;if(it.y<-90)it.y=h+60;if(it.y>h+90)it.y=-60;
      it.el.style.transform='translate('+it.x+'px,'+it.y+'px) rotate('+it.r*it.rot+'deg)';}requestAnimationFrame(step);}
    step();
  })();
}

function render() {
  const root = document.getElementById('app');
  let html = '';
  switch (State.view) {
    case 'login':     html = renderLogin(); break;
    case 'dashboard': html = renderTopbar() + deadlineBanner() + '<main>' + renderDashboard() + '</main>'; break;
    case 'inventory': html = renderTopbar() + deadlineBanner() + '<main>' + renderInventory() + '</main>'; break;
    case 'admin':     html = renderTopbar() + deadlineBanner() + '<main>' + renderAdmin() + '</main>'; break;
    case 'transfers': html = renderTopbar() + '<main>' + renderTransfers() + '</main>'; break;
    case 'foodloss': html = renderTopbar() + '<main>' + renderFoodLoss() + '</main>'; break;
    case 'breakage': html = renderTopbar() + '<main>' + renderBreakage() + '</main>'; break;
    case 'coins': html = renderTopbar() + '<main>' + renderCoins() + '</main>'; break;
    default:          html = renderLogin();
  }
  root.innerHTML = html;
  // 接続バナー（ログイン画面以外・topbarの直下に表示）
  if (State.view !== 'login') {
    const header = root.querySelector('.topbar');
    const host = document.createElement('div');
    host.id = 'conn-banner-host';
    host.innerHTML = connBannerHtml();
    if (header && header.parentNode) header.parentNode.insertBefore(host, header.nextSibling);
    else root.insertBefore(host, root.firstChild);
  }
  attachHandlers();
  if (State.view === 'login') { try { initLoginFx(); } catch(e){} }
  // 入力者名フィールドの値を復元
  const enteredByEl = document.getElementById('entered-by-input');
  if (enteredByEl && State.enteredByName) {
    enteredByEl.value = State.enteredByName;
  }
  if (State.view === 'admin' && State.adminTab === 'console') { try { initConsole(); } catch(e){} }
}

// =========================================================
// Topbar
// =========================================================
function managerAllowedBrands() {
  const u = State.user;
  if (!u || u.role !== 'manager') return [];
  if (u.approveBrand === 'all') return (State.brands || []).map(b => b.id);
  return u.approveBrand ? [u.approveBrand] : [];
}
function canAccessAdmin() {
  return State.user?.role === 'admin' || (State.user?.role === 'manager' && managerAllowedBrands().length > 0);
}

// =========================================================
// アプリ内ベル通知（掲示板投稿・棚卸完了・業態責任者の認印）
// 既存データから最近の出来事を集約し、未読件数をベルに表示する
// =========================================================
function notifSeenKey(){ return 'notifSeen_' + (State.user?.id || 'anon'); }
function notifLastSeen(){ const v = Number(localStorage.getItem(notifSeenKey()) || 0); return isNaN(v) ? 0 : v; }
function notifMarkAllSeen(){ try { localStorage.setItem(notifSeenKey(), String(Date.now())); } catch(_){} }
// ---- ダッシュボード各メニューの「新着」既読管理（当月度の件数を開いた時点で既読にする） ----
function secSeenKey(section){ return 'secSeen_' + section + '_' + (State.user?.id || 'anon'); }
function secSeenCount(section, period){
  try{ const o = JSON.parse(localStorage.getItem(secSeenKey(section)) || 'null'); if(o && o.period === period) return Number(o.count) || 0; }catch(_){}
  return 0; // この月度をまだ開いていない＝全件が新着
}
function markSectionSeen(section){
  const period = currentSlipPeriod();
  const raw = (State._badgeRaw && State._badgeRaw[section]) || 0;
  try{ localStorage.setItem(secSeenKey(section), JSON.stringify({ period, count: raw })); }catch(_){}
  const idMap = { transfers:'badge-transfers', foodloss:'badge-foodloss', breakage:'badge-breakage' };
  setBadge(idMap[section], 0); // 開いた瞬間にバッジを消す
}
function buildNotifications(){
  const list = [];
  const u = State.user;
  // 掲示板の新規投稿（自分の宛先ブランド or 全体）
  const myBrands = (u && u.role === 'manager' && u.approveBrand && u.approveBrand !== 'all') ? [u.approveBrand, 'all'] : null;
  for (const b of (State.bulletins || [])) {
    if (myBrands && !myBrands.includes(b.brand)) continue;
    const t = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    if (!t) continue;
    const bl = b.brand === 'all' ? '全体' : brandLabel(b.brand);
    list.push({ t, icon: '📌', title: `掲示板：${bl}`, body: `${b.authorName || ''}「${(b.body||'').slice(0,28)}${(b.body||'').length>28?'…':''}」` });
  }
  // 棚卸の店舗完了・業態責任者の認印
  for (const s of (State.stores || [])) {
    const inv = State.inventory[s.id] || {};
    if (inv.completedAt) {
      const t = new Date(inv.completedAt).getTime();
      if (t) list.push({ t, icon: '📋', title: '棚卸 完了', body: `${slipStoreName(s.id)}${inv.inputBy ? `（${inv.inputBy}）` : ''}` });
    }
    if (inv.mgrConfirmedAt && inv.mgrConfirmedBy) {
      const t = new Date(inv.mgrConfirmedAt).getTime();
      if (t) list.push({ t, icon: '🖋', title: '業態責任者 認印', body: `${slipStoreName(s.id)}　承認：${inv.mgrConfirmedBy}` });
    }
  }
  list.sort((a, b) => b.t - a.t);
  return list.slice(0, 40);
}
function notifUnreadCount(){ const seen = notifLastSeen(); return buildNotifications().filter(n => n.t > seen).length; }
window.toggleNotifPanel = function(){
  let panel = document.getElementById('notif-panel');
  if (panel) { panel.remove(); return; }
  const items = buildNotifications();
  const seen = notifLastSeen();
  const fmt = (t) => { try { return new Date(t).toLocaleString('ja-JP', { month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit' }); } catch(e){ return ''; } };
  panel = document.createElement('div');
  panel.id = 'notif-panel';
  panel.className = 'notif-panel';
  panel.innerHTML = `
    <div class="notif-head">お知らせ<button class="notif-close" onclick="document.getElementById('notif-panel')?.remove()">✕</button></div>
    <div class="notif-list">
      ${items.length === 0 ? '<div class="notif-empty">新しいお知らせはありません</div>' :
        items.map(n => `<div class="notif-item${n.t > seen ? ' unread' : ''}">
          <span class="notif-ic">${n.icon}</span>
          <div class="notif-txt"><div class="notif-title">${escapeHtml(n.title)}</div><div class="notif-body">${escapeHtml(n.body)}</div><div class="notif-time">${fmt(n.t)}</div></div>
        </div>`).join('')}
    </div>`;
  document.body.appendChild(panel);
  notifMarkAllSeen();
  const badge = document.getElementById('notif-badge'); if (badge) badge.remove();
  // 外側クリックで閉じる
  setTimeout(() => {
    const onDoc = (e) => { if (!panel.contains(e.target) && !e.target.closest('[data-action="toggle-notif"]')) { panel.remove(); document.removeEventListener('click', onDoc); } };
    document.addEventListener('click', onDoc);
  }, 30);
};

function renderTopbar() {
  // brandClassはCSSで定義された色をブランドIDから取得
  const brandClass = State.brand && State.brand !== 'all' ? `brand-${State.brand}` : '';
  const _unread = (() => { try { return notifUnreadCount(); } catch(e){ return 0; } })();
  const userName = State.user ? State.user.name : '';
  const isAdmin = State.user?.role === 'admin';
  return `
  <header class="topbar ${brandClass}">
    <button class="icon-btn" data-action="home" title="ホーム">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></svg>
    </button>
    <img src="${getBranding().boardLogo || LOGO_COMPANY_IMG}" class="topbar-logo" alt="${escapeHtml(getBranding().companyName)}">
    <h1>${escapeHtml(getBranding().boardTitle || '棚卸管理')}</h1>
    <div class="spacer"></div>
    ${canAccessAdmin() ? `<button class="icon-btn" data-action="goto-admin" title="商品マスタ管理">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    </button>` : ''}
    ${State.user?.isSuperAdmin ? `<button class="icon-btn" data-action="goto-console" title="KOESAコンソール（super_admin専用）" style="color:#0e7490;font-size:18px;">⚙️</button>` : ''}
    ${State.user?.role === 'admin' ? `<button class="icon-btn" data-action="save-diag" title="接続・保存の診断">🔌</button>` : ''}
    <button class="icon-btn notif-btn" data-action="toggle-notif" title="お知らせ" style="position:relative;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      ${_unread > 0 ? `<span id="notif-badge" class="notif-badge">${_unread > 99 ? '99+' : _unread}</span>` : ''}
    </button>
    <button class="icon-btn" data-action="refresh-data" title="最新データに更新（ログアウトしません）">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
    </button>
    <span class="user-chip">${escapeHtml(userName)}${isAdmin ? ' (管理者)' : ''}</span>
    <button class="icon-btn" data-action="logout" title="ログアウト">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
    </button>
  </header>`;
}

// =========================================================
// Login
// =========================================================
// アプリのバージョン番号（バージョンアップのたびにここだけ更新すればログイン画面に反映されます）
const LOGO_KOESA_IMG = '/assets/logo-koesa.png';
const LOGO_WORDMARK_IMG = '/assets/logo-wordmark.png';
const APP_VERSION = '1.2.0';
function renderLogin() {
  return `
  <div class="lx-wrap">
    <canvas id="lx-net" class="lx-net"></canvas>
    <div id="lx-faces" class="lx-faces"></div>
    <div id="lx-icons" class="lx-icons"></div>
    <div class="lx-shell">
      <div class="lx-logo-box"><img src="${getBranding().logoUrl || LOGO_LOGIN_BOX_IMG}" alt="Fevascale Stock"></div>
      <div class="lx-platform" style="font-size:11px;letter-spacing:2px;opacity:.8;margin:2px 0 14px;">FEVASCALE SERIES PRODUCT</div>
      <div class="lx-product-logo"><img src="${getBranding().stockLogoUrl || LOGO_STOCK_WORDMARK_IMG}" alt="FEVASCALE STOCK"></div>
      <div class="lx-company">${escapeHtml(getBranding().companyName)}</div>
      <div class="lx-tagline">${escapeHtml(getBranding().loginTitle)}${getBranding().loginSubtitle ? `<br><span class="lx-lead" style="font-size:12px;opacity:.8;">${escapeHtml(getBranding().loginSubtitle)}</span>` : ''}</div>
      <div class="lx-divider">SIGN IN</div>
      <div class="lx-card">
        <label class="lx-field">ユーザーID</label>
        <input class="lx-input" id="login-user" autocomplete="username" placeholder="例: Stock">
        <label class="lx-field">パスワード</label>
        <div class="lx-pw-wrap">
          <input class="lx-input" id="login-password" type="password" autocomplete="current-password" placeholder="パスワード">
          <button type="button" class="lx-pw-toggle" data-action="toggle-pw" aria-label="パスワード表示切替">👁</button>
        </div>
        <button class="lx-btn" data-action="login">ログイン</button>
        <div class="lx-hint"><b>ログインできない場合</b><br>管理画面で登録されているIDとパスワードを使用してください。<br>IDがわからない場合は管理者にお問い合わせください。</div>
      </div>
      ${(() => {
        const _cl = getBranding().cityLogoUrl || LOGO_LOGIN_CITY_IMG;
        if (!_cl) return '<div class="lx-city"></div>';
        const _sec = Number(getBranding().citySpinSec) || 12;
        const _anim = getBranding().cityRotate ? `animation:lxSpinY ${_sec}s linear infinite;` : '';
        return `<div class="lx-city"><div class="lx-coin" style="${_anim}"><img class="lx-coin-face lx-coin-front" src="${_cl}" alt="KOESA"><img class="lx-coin-face lx-coin-back" src="${_cl}" alt=""></div></div>`;
      })()}
      <div class="lx-meta" style="margin-top:14px;"><b id="login-version">Ver. ${APP_VERSION}</b>　│　6.6.2026　developed by Shota Hamabata</div>
      <div class="lx-copy">© 2026 Produced By KOESA CO.,LTD. All rights reserved.</div>
    </div>
  </div>`;
}

// ---------- Logo images (embedded as base64) ----------
const LOGO_LOGIN_BOX_IMG = '/assets/logo-login-box.png';
const LOGO_LOGIN_CITY_IMG = ''; // 既定は未設定(非表示)。コンソールでアップロード
const LOGO_STOCK_WORDMARK_IMG = '/assets/logo-stock-wordmark.png';
const LOGO_LOGIN_KOESA_IMG = '/assets/logo-login-koesa.png';
const LOGO_LOGIN_FACE_IMG = '/assets/logo-login-face.png';
const LOGO_COMPANY_IMG = '/assets/logo-company.jpg';
const LOGO_HACHIBAN_IMG = '/assets/logo-hachiban.png';
const LOGO_KOMEDA_IMG = '/assets/logo-komeda.png';

const LOGO_PRODUCT_IMG = '/assets/logo-product.png';
// サイトアイコン（ファビコン / ホーム画面アイコン）をプロダクトロゴから設定
(function setFavicon(){
  try {
    const set = (rel) => {
      let l = document.querySelector("link[rel='" + rel + "']");
      if (!l) { l = document.createElement('link'); l.rel = rel; document.head.appendChild(l); }
      l.type = 'image/png';
      l.href = LOGO_PRODUCT_IMG;
    };
    set('icon');
    set('apple-touch-icon');
  } catch (e) { /* no-op */ }
})();


// =========================================================
// Dashboard
// =========================================================
// =========================================================
// Phase F: 店舗間 売買伝票
// =========================================================
function currentSlipPeriod() {
  const d = new Date();
  let y = d.getFullYear(), m = d.getMonth();
  if (d.getDate() >= 21) { m += 1; if (m > 11) { m = 0; y += 1; } } // 20日締め・21日〜翌月度
  return `${y}-${String(m + 1).padStart(2, '0')}`;
}
// currentSlipPeriod の1つ前の月度
function previousSlipPeriod() {
  const [y, m] = currentSlipPeriod().split('-').map(Number);
  let py = y, pm = m - 1; if (pm < 1) { pm = 12; py -= 1; }
  return `${py}-${String(pm).padStart(2, '0')}`;
}
// その月度で新規発行できるか：当月度は常にOK。締め直後（21〜22日）は直前の月度も発行可（翌月度22日まで）
function canIssueSlipForPeriod(period) {
  if (period === currentSlipPeriod()) return true;
  const day = new Date().getDate();
  if ((day === 21 || day === 22) && period === previousSlipPeriod()) return true;
  return false;
}
// 店舗名の表示（ブランド名を先頭に付けて区別しやすくする。既に名前に含まれていれば付けない）
// idでも店舗オブジェクトでも受け取れる
function storeDisp(x){
  const s = (typeof x === 'string') ? (State.stores || []).find(v => v.id === x) : x;
  if (!s) return (typeof x === 'string') ? x : '';
  const bl = brandLabel(s.brand);
  return (bl && s.name && !s.name.includes(bl)) ? `${bl} ${s.name}` : (s.name || '');
}
function slipStoreName(id) {
  const s = State.stores.find(x => x.id === id);
  if (!s) return id;
  const bl = brandLabel(s.brand);
  // 店舗名にブランド名が含まれていなければ先頭に付けて区別しやすくする
  if (bl && s.name && !s.name.includes(bl)) return `${bl} ${s.name}`;
  return s.name;
}
// スタッフ相当（店舗メンバー）：一般スタッフ＋店舗リーダー。店舗単位の入力権限を共有する
function isStaffLike(role) { return role === 'staff' || role === 'store_leader' || role === 'trainer'; }
function canCreateSlipFrom(storeId) {
  const u = State.user; if (!u) return false;
  if (u.role === 'admin') return true;
  if (u.role === 'manager' && (u.approveBrand === 'all' || u.approveBrand === storeBrandOf(storeId))) return true;
  if (isStaffLike(u.role) && u.defaultStore === storeId) return true;
  return false;
}
function canReceiveSlip(slip) {
  const u = State.user; if (!u) return false;
  if (u.role === 'admin') return true;
  if (u.role === 'manager' && (u.approveBrand === 'all' || u.approveBrand === storeBrandOf(slip.toStore))) return true;
  if (isStaffLike(u.role) && u.defaultStore === slip.toStore) return true;
  return false;
}
function canHqApprove() { const r = State.user?.role; return r === 'soumu' || r === 'admin'; }
function isSlipCreator(slip) {
  const u = State.user; if (!u) return false;
  return !!slip.createdBy && slip.createdBy === u.name;
}
function visibleSlips() {
  const r = State.user?.role;
  if (r === 'admin' || r === 'soumu') return State.transferSlips;
  return State.transferSlips.filter(s => canCreateSlipFrom(s.fromStore) || canReceiveSlip(s) || isSlipCreator(s));
}
function slipTotal(s) { return (s.lines || []).reduce((a, b) => a + (parseFloat(b.amount) || 0), 0); }
// 明細の数量表示（無ければ空）。単価があれば「×N（¥単価）」で内訳を示す。
function slipQtyLabel(l) {
  if (!l || l.qty == null || l.qty === '') return '';
  const q = '×' + l.qty;
  return (l.unitPrice != null && l.unitPrice !== '') ? q + `（${formatYen(l.unitPrice)}）` : q;
}

// =========================================================
// Fevascale Stock Bulletin Board（掲示板）
//   棚卸に向けて、業態責任者・店長がブランドごとに連絡事項を共有
//   （渡せる食材・注意事項など）。ダッシュボードのボタン群の下に表示。
// =========================================================
async function loadBulletins() {
  if (!sb) return;
  const { data, error } = await sb.from('bulletin_posts').select('*')
    .order('created_at', { ascending: false }).limit(100);
  if (!error && data) {
    State.bulletins = data.map(r => ({
      id: r.id, brand: r.brand || 'all', body: r.body || '',
      authorId: r.author_id || null, authorName: r.author_name || '',
      createdAt: r.created_at,
    }));
  }
}
window.bulletinSetBrand = function (b) { State.bulletinBrand = b; render(); };
window.bulletinPost = async function () {
  const ta = document.getElementById('bulletin-input');
  const body = (ta && ta.value || '').trim();
  if (!body) { toast('連絡事項を入力してください', 'error'); return; }
  if (body.length > 500) { toast('500文字以内で入力してください', 'error'); return; }
  const brand = State.bulletinBrand || 'all';
  const row = {
    id: 'bb' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    brand, body,
    author_id: State.user?.id || null,
    author_name: State.user?.name || '',
  };
  const { error } = await sb.from('bulletin_posts').upsert([row], { onConflict: 'id' });
  if (error) { toast('投稿に失敗：' + (error.message || ''), 'error'); return; }
  await loadBulletins();
  toast('掲示板に投稿しました', 'success');
  render();
};
window.bulletinDelete = async function (id) {
  const p = (State.bulletins || []).find(x => x.id === id);
  if (!p) return;
  const isAdmin = State.user?.role === 'admin';
  if (!isAdmin && p.authorId !== State.user?.id) { toast('自分の投稿のみ削除できます', 'error'); return; }
  if (!confirm('この投稿を削除しますか？')) return;
  const { error } = await sb.from('bulletin_posts').delete().eq('id', id);
  if (error) { toast('削除に失敗', 'error'); return; }
  await loadBulletins();
  render();
};
function bulletinBrandLabel(b) {
  if (b === 'all') return '全体';
  const br = (State.brands || []).find(x => x.id === b);
  return br ? br.name : b;
}
function renderBulletinBoard() {
  const posts = State.bulletins || [];
  const cur = State.bulletinBrand || 'all';
  const tabs = [{ id: 'all', name: '全体' }].concat(
    (State.brands || []).slice().sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999)));
  const shown = cur === 'all' ? posts : posts.filter(p => p.brand === cur || p.brand === 'all');
  const isAdmin = State.user?.role === 'admin';
  const fmtT = (t) => { try { return new Date(t).toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }); } catch (e) { return ''; } };
  const list = shown.length === 0
    ? '<div class="bb-empty">まだ投稿はありません。渡せる食材や注意事項を共有しましょう。</div>'
    : shown.map(p => `
      <div class="bb-post">
        <div class="bb-post-head">
          <span class="bb-chip ${p.brand === 'all' ? 'all' : ''}">${escapeHtml(bulletinBrandLabel(p.brand))}</span>
          <span class="bb-author">${escapeHtml(p.authorName)}</span>
          <span class="bb-time">${fmtT(p.createdAt)}</span>
          ${(isAdmin || p.authorId === State.user?.id) ? `<button class="bb-del" onclick="bulletinDelete('${escapeHtml(p.id)}')" title="削除">✕</button>` : ''}
        </div>
        <div class="bb-body">${escapeHtml(p.body)}</div>
      </div>`).join('');
  return `
  <fieldset class="dash-section bb-section"><legend>📌 Fevascale Stock Bulletin Board</legend>
    <div class="bb-note">棚卸に向けた連絡事項（渡せる食材・注意事項など）を業態ごとに共有できます。</div>
    <div class="bb-tabs">${tabs.map(t => `<button class="bb-tab ${cur === t.id ? 'active' : ''}" onclick="bulletinSetBrand('${escapeHtml(t.id)}')" type="button">${escapeHtml(t.name)}</button>`).join('')}</div>
    <div class="bb-form">
      <textarea id="bulletin-input" rows="2" maxlength="500" placeholder="例：キャベツ2玉 余っています。必要な店舗はご連絡ください／冷凍庫の在庫は20日までに確認をお願いします"></textarea>
      <button class="btn btn-primary btn-sm" onclick="bulletinPost()" type="button">投稿（${escapeHtml(bulletinBrandLabel(cur))}）</button>
    </div>
    <div class="bb-list">${list}</div>
  </fieldset>`;
}

async function loadTransfers(period) {
  // ダッシュボードで選択中の月度に連動（未指定時）。既定は今日基準の当月度。
  period = period || State.slipPeriod || State.month || currentSlipPeriod();
  State.slipPeriod = period;
  const slips = await storage.fetchTransferSlips(period);
  if (slips !== null) State.transferSlips = slips;
}

// 伝票取引所の月度を1つ前後へ（閲覧用。発行は当月度のみ）
window.slipChangePeriod = async function(delta){
  const cur = State.slipPeriod || currentSlipPeriod();
  await loadTransfers(shiftMonth(cur, delta));
  render();
};


// =========================================================
// 食材ロス記録（MVP：手入力＋音声テキスト化／AI振り分けは設定のみ・既定OFF）
//   締め期間は売買伝票と同じ currentSlipPeriod()（21日〜翌20日）を流用
// =========================================================
const FL_CATEGORIES = ['アルバイト','サポート','アシスト','社員','係長','トレーナー','副店長','店長','SV','エリアマネージャー'];

function flNewId(){ return 'fl' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

function flAllowedStores(){
  const all = State.stores || [];
  const u = State.user; if(!u) return [];
  if(u.role === 'admin' || u.role === 'soumu') return all;
  if(u.role === 'manager') return all.filter(s => u.approveBrand === 'all' || u.approveBrand === storeBrandOf(s.id));
  if(isStaffLike(u.role)){
    // 担当店舗が設定されていればその店のみ、未設定なら全店から選択可（選択肢が空にならないように）
    const own = all.filter(s => s.id === u.defaultStore);
    return own.length ? own : all;
  }
  return all;
}
function flCanAdminConfig(){ const r = State.user?.role; return r === 'admin' || r === 'soumu'; }
function flVisibleRows(){
  const allowed = new Set(flAllowedStores().map(s=>s.id));
  return (State.foodLoss||[]).filter(r => allowed.has(r.storeId));
}
function flStoreName(id){ return storeDisp(id); }
// 店舗別ランキング。棚卸実施の全店を対象に、記録がある店（>0円）は少ない順で優秀、
// 記録が0円の店は「ありえない＝管理不足」として別枠（zero）に分ける。
// rows は当該実績（食材ロス or 器物破損）の可視行。金額は amountExcl の合計。
function flStoreRanking(rows){
  const elig = flAllowedStores().filter(s=>{ try{ return getStoreTotals(s.id).total>0; }catch(_){ return false; } });
  const sum={}; (rows||[]).forEach(r=>{ if(r.storeId) sum[r.storeId]=(sum[r.storeId]||0)+(Number(r.amountExcl)||0); });
  const withVal = elig.map(s=>({ name:flStoreName(s.id), val:Number(sum[s.id]||0), id:s.id }));
  const recorded = withVal.filter(x=>x.val>0)
    .sort((a,b)=> a.val-b.val || String(a.id).localeCompare(String(b.id)))
    .map(x=>[x.name, x.val]);
  const zero = withVal.filter(x=>x.val<=0)
    .sort((a,b)=> String(a.name).localeCompare(String(b.name),'ja'))
    .map(x=>[x.name, 0]);
  return { recorded, zero };
}
// 店舗別ランキングのHTML。記録がある店は少ない順（同額同順位）、0円の店は減点警告を表示。
function flStoreRankTableHTML(rankObj, amtLabel){
  const rec = (rankObj && rankObj.recorded) || [];
  const zero = (rankObj && rankObj.zero) || [];
  const rk = rankTies(rec);
  const recRows = rec.map((e,i)=>'<tr><td>'+rk[i]+'</td><td>'+escapeHtml(String(e[0]))+'</td><td class="num">¥'+(Number(e[1])||0).toLocaleString('ja-JP')+'</td></tr>').join('');
  const zeroRows = zero.map(e=>'<tr style="background:#fef2f2;"><td style="color:#b91c1c;font-weight:700;">✕</td><td>'+escapeHtml(String(e[0]))+'<div style="font-size:11px;color:#b91c1c;font-weight:600;">0円はありえません。マネジメントができていません</div></td><td class="num" style="color:#dc2626;font-weight:700;">−10コイン</td></tr>').join('');
  const body = (rec.length||zero.length) ? (recRows+zeroRows) : '<tr><td colspan="3" style="color:#94a3b8;text-align:center;">対象の店舗がありません</td></tr>';
  const warn = zero.length ? '<div style="margin:6px 0 8px;padding:6px 10px;background:#fef2f2;border:1px solid #fecaca;border-radius:6px;color:#b91c1c;font-size:12px;font-weight:700;">⚠ 0円はありえません。マネジメントができていません（各店 −10コイン）</div>' : '';
  const note = '記録がある店＝少ない順で優秀／0円＝管理不足で減点（同額は同順位）';
  return '<h4 style="margin:12px 0 6px;font-size:13px;color:#334155;">■ 店舗別ランキング<span style="font-weight:400;color:#94a3b8;font-size:11px;margin-left:6px;">'+note+'</span></h4>'
    + warn
    + '<table class="fl-table"><thead><tr><th>順位</th><th>店舗</th><th class="num">'+amtLabel+'</th></tr></thead><tbody>'+body+'</tbody></table>';
}
// 同額は同順位（競技方式：同順位の次はスキップ 例 0,0,2000 → 1,1,3）。arr は [ラベル, 金額] のソート済み配列。
function rankTies(arr){
  const ranks=[];
  for(let i=0;i<arr.length;i++){
    ranks[i]=(i>0 && Number(arr[i-1][1])===Number(arr[i][1])) ? ranks[i-1] : (i+1);
  }
  return ranks;
}
// 店舗名にブランドを付けて重複を区別（例：【8番らーめん】鯖江店）。名前に既にブランド名があれば付け直さない
function storeLabelWithBrand(s){
  if(!s) return '';
  const bl = brandLabel(s.brand); let nm = s.name || '';
  if(bl && nm.startsWith(bl)) nm = nm.slice(bl.length).replace(/^[\s　]+/, '');
  return bl ? `【${bl}】${nm || s.name}` : (s.name || '');
}

// ---- Supabase 保存層（sb 直接） ----
async function flFetch(period){
  const { data, error } = await sb.from('food_loss').select('*').eq('period', period).order('created_at',{ascending:false});
  if(error){ console.error('food_loss fetch', error); _lastDbError = '食材ロス取得: ' + (error.message||JSON.stringify(error)); toast(_lastDbError,'error'); return null; }
  return (data||[]).map(r => ({
    id:r.id, period:r.period, storeId:r.store_id, brand:r.brand, category:r.category,
    staffName:r.staff_name, date:r.loss_date, time:r.loss_time, itemId:r.item_id, itemName:r.item_name,
    qty:Number(r.qty), unit:r.unit, reason:r.reason, amountExcl:Number(r.amount_excl),
    createdBy:r.created_by, createdAt:r.created_at }));
}
async function flSaveRow(rec){
  const row = { id:rec.id, period:rec.period, store_id:rec.storeId, brand:rec.brand||null,
    category:rec.category||null, staff_name:rec.staffName||null, loss_date:rec.date||null, loss_time:rec.time||null,
    item_id:rec.itemId||null, item_name:rec.itemName, qty:rec.qty||0, unit:rec.unit||null,
    reason:rec.reason||null, amount_excl:rec.amountExcl||0, created_by:rec.createdBy||null };
  const { error } = await sb.from('food_loss').upsert([row], { onConflict:'id' });
  if(error){ console.error('food_loss upsert', error); _lastDbError='食材ロス保存: '+(error.message||JSON.stringify(error)); toast(_lastDbError,'error'); return false; }
  return true;
}
async function flDeleteRow(id){
  const { error } = await sb.from('food_loss').delete().eq('id', id);
  if(error){ console.error('food_loss delete', error); _lastDbError='食材ロス削除: '+(error.message||JSON.stringify(error)); toast(_lastDbError,'error'); return false; }
  return true;
}
async function flLoadConfig(){
  const { data, error } = await sb.from('app_config').select('*').in('key', ['fl_ai_enabled','fl_ai_url','ai_support_enabled','ai_photo_enabled','ai_analysis_enabled','ai_edge_url','ai_api_key','ai_support_mail','ai_promo_scope','ai_promo_text']);
  if(error){ return; }
  for(const r of (data||[])){
    if(r.key==='fl_ai_enabled') State.aiConfig.flEnabled = (r.value === 'true');
    if(r.key==='fl_ai_url')     State.aiConfig.flUrl = r.value || '';
    if(r.key==='ai_support_enabled')  State.aiConfig.supportEnabled  = (r.value === 'true');
    if(r.key==='ai_photo_enabled')    State.aiConfig.photoEnabled    = (r.value === 'true');
    if(r.key==='ai_analysis_enabled') State.aiConfig.analysisEnabled = (r.value === 'true');
    if(r.key==='ai_edge_url')   State.aiConfig.edgeUrl   = r.value || '';
    if(r.key==='ai_api_key')    State.aiConfig.apiKey    = r.value || '';
    if(r.key==='ai_support_mail' && r.value) State.aiConfig.supportMail = r.value;
    if(r.key==='ai_promo_scope' && r.value) State.aiConfig.promoScope = r.value;
    if(r.key==='ai_promo_text') State.aiConfig.promoText = r.value || '';
  }
}
async function flSaveConfig(){
  const rows = [
    { key:'fl_ai_enabled', value: State.aiConfig.flEnabled ? 'true' : 'false' },
    { key:'fl_ai_url',     value: State.aiConfig.flUrl || '' },
  ];
  const { error } = await sb.from('app_config').upsert(rows, { onConflict:'key' });
  if(error){ _lastDbError='設定保存: '+(error.message||JSON.stringify(error)); toast(_lastDbError,'error'); return false; }
  return true;
}
async function loadFoodLoss(period){
  period = period || State.foodLossPeriod || currentSlipPeriod();
  State.foodLossPeriod = period;
  await flLoadConfig();
  // 入力者の既定店舗をドラフトに
  const allowed = flAllowedStores();
  if(!State.foodLossDraft.storeId && allowed.length){ State.foodLossDraft.storeId = (State.user?.defaultStore && allowed.find(s=>s.id===State.user.defaultStore)) ? State.user.defaultStore : allowed[0].id; }
  const list = await flFetch(period);
  if(list!==null) State.foodLoss = list;
}
// 月度の切り替え（伝票と同じ・締め直後は前月度も記録可）
window.flChangePeriod = async function(delta){
  const cur = State.foodLossPeriod || currentSlipPeriod();
  const [y,m] = cur.split('-').map(Number);
  let ny=y, nm=m+delta; while(nm<1){nm+=12;ny--;} while(nm>12){nm-=12;ny++;}
  const np = `${ny}-${String(nm).padStart(2,'0')}`;
  await loadFoodLoss(np); render();
};

// ---- 入力フォームのフィールド更新（自己完結グローバル関数） ----
function flItemsForStore(storeId){
  const brand = storeBrandOf(storeId);
  return (State.items[brand] || []);
}
window.flField = function(key, val){ State.foodLossDraft[key] = val; if(key==='storeId'){ State.foodLossDraft.itemId=''; State.foodLossDraft.itemName=''; renderFoodLossInline(); } };
window.flItemSelect = function(sel){
  const id = sel.value;
  const d = State.foodLossDraft; d.itemId = id;
  const it = flItemsForStore(d.storeId).find(x=>x.id===id);
  if(it){ d.itemName = it.name; d.unit = it.unit || '個'; d._price = Number(it.price)||0; flRecalcAmount(); }
  renderFoodLossInline();
};
window.flQtyInput = function(el){ State.foodLossDraft.qty = el.value; flRecalcAmount(); flRefreshAmountField(); };
function flRecalcAmount(){
  const d = State.foodLossDraft; const p = Number(d._price)||0; const q = parseFloat(d.qty)||0;
  if(p>0 && q>0 && !d._amountTouched){ d.amountExcl = Math.round(p*q); }
}
window.flAmountInput = function(el){ State.foodLossDraft.amountExcl = el.value; State.foodLossDraft._amountTouched = true; };
function flRefreshAmountField(){ const el=document.getElementById('fl-amount'); if(el && !State.foodLossDraft._amountTouched) el.value = State.foodLossDraft.amountExcl || ''; }

window.flClearDraft = function(){
  const keepStore = State.foodLossDraft.storeId;
  State.foodLossDraft = { storeId:keepStore, category:'', staffName:'', date:'', time:'', itemId:'', itemName:'', qty:'', unit:'', reason:'', amountExcl:'' };
  renderFoodLossInline();
};

window.flAdd = async function(){
  const d = State.foodLossDraft;
  const _fp = State.foodLossPeriod || currentSlipPeriod();
  if(!canIssueSlipForPeriod(_fp)){ toast('この月度は記録できません（当月度、または締め直後22日までの前月度のみ）','error'); return; }
  if(!d.storeId){ toast('店舗を選択してください','error'); return; }
  if(!d.category){ toast('区分を選択してください','error'); return; }
  if(!d.staffName || !d.staffName.trim()){ toast('氏名を入力してください','error'); return; }
  if(!d.itemName || !d.itemName.trim()){ toast('廃棄した商品を入力してください','error'); return; }
  const now = new Date();
  const date = d.date || `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const time = d.time || `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  const rec = {
    id: flNewId(), period: State.foodLossPeriod || currentSlipPeriod(), storeId: d.storeId,
    brand: storeBrandOf(d.storeId), category: d.category, staffName: d.staffName.trim(),
    date, time, itemId: d.itemId||null, itemName: d.itemName.trim(),
    qty: parseFloat(d.qty)||0, unit: d.unit||'', reason: (d.reason||'').trim(),
    amountExcl: Math.round(parseFloat(d.amountExcl)||0), createdBy: State.user?.name || '',
  };
  const ok = await flSaveRow(rec);
  if(!ok) return;
  State.foodLoss.unshift(rec);
  toast('記録しました','success');
  window.flClearDraft();
};

window.flDel = async function(id){
  if(!confirm('この記録を削除しますか？')) return;
  const ok = await flDeleteRow(id);
  if(!ok) return;
  State.foodLoss = State.foodLoss.filter(r=>r.id!==id);
  render();
};

// ---- 音声テキスト化（ブラウザ内蔵 Web Speech・無料／Android Chrome 推奨） ----
window.flVoice = function(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ toast('この端末は音声入力に未対応です（Android Chrome 推奨）','error'); return; }
  const btn = document.getElementById('fl-voice-btn');
  const rec = new SR(); rec.lang='ja-JP'; rec.interimResults=false; rec.maxAlternatives=1;
  if(btn) btn.classList.add('rec');
  toast('お話しください（例：フクロール 3個 床に落下）','info');
  rec.onresult = (e)=>{ const t = (e.results[0][0].transcript)||''; flParseVoice(t); };
  rec.onerror = ()=>{ toast('音声認識に失敗しました','error'); if(btn) btn.classList.remove('rec'); };
  rec.onend = ()=>{ if(btn) btn.classList.remove('rec'); };
  try { rec.start(); } catch(_){ toast('音声入力を開始できませんでした','error'); if(btn) btn.classList.remove('rec'); }
};

// 発話テキスト → 各欄へ簡易振り分け（無料・ルールベース。AI接続時は別途差し替え）
// 「商品名 → 数量 → 理由」の語順を前提に、数量・金額の位置で前後を分けて振り分ける
function parseVoiceToDraft(d, text, itemsForStore, unitPattern, recalc){
  const items = (itemsForStore || []).slice().sort((a,b)=>(b.name||'').length-(a.name||'').length);
  let matched = null;
  for(const it of items){ if(it.name && text.includes(it.name)){ matched = it; break; } }
  if(matched){ d.itemId=matched.id; d.itemName=matched.name; d.unit=matched.unit||'個'; d._price=Number(matched.price)||0; }
  const qtyRe = new RegExp('([0-9０-９]+(?:[\\.．][0-9０-９]+)?)\\s*('+unitPattern+')?');
  const amtRe = /([0-9０-９,，]+)\s*円/;
  // 金額（◯円）
  let amtIdx = -1, amtLen = 0;
  const am = text.match(amtRe);
  if(am){ d.amountExcl = parseInt(am[1].replace(/[^0-9]/g,''),10)||d.amountExcl; d._amountTouched=true; amtIdx = am.index; amtLen = am[0].length; }
  // 数量（金額の「◯円」やマスタ名の数字を誤検出しないよう伏せてから探す）
  let masked = text;
  if(amtIdx >= 0){ masked = text.slice(0, amtIdx) + ' '.repeat(amtLen) + text.slice(amtIdx + amtLen); }
  if(matched){ const mi = masked.indexOf(matched.name); if(mi >= 0){ masked = masked.slice(0, mi) + ' '.repeat(matched.name.length) + masked.slice(mi + matched.name.length); } }
  let qtyIdx = -1, qtyLen = 0;
  const q = masked.match(qtyRe);
  if(q && q[1]){ const zen='０１２３４５６７８９'; let n=q[1].replace(/[０-９]/g,c=>zen.indexOf(c)); d.qty=n; if(q[2]) d.unit=q[2]; qtyIdx = q.index; qtyLen = q[0].length; if(recalc) recalc(); }
  // 位置ベースで前後を分割：区切り＝数量と金額の最も手前
  const splitPts = [qtyIdx, amtIdx].filter(i => i >= 0);
  const splitAt = splitPts.length ? Math.min(...splitPts) : -1;
  // 商品名・理由からは数字と金額だけ除去（単位文字は「取り皿」「お皿」などを壊さないよう残す）
  const clean = s => (s || '').replace(amtRe,' ').replace(/[0-9０-９,，]/g,' ').replace(/\s+/g,' ').trim();
  if(splitAt >= 0){
    const head = clean(text.slice(0, splitAt));
    const qtyEnd = Math.max(qtyIdx>=0?qtyIdx+qtyLen:0, amtIdx>=0?amtIdx+amtLen:0);
    let tail = text.slice(qtyEnd);
    if(matched) tail = tail.replace(matched.name,' ');
    tail = clean(tail);
    if(!matched && head) d.itemName = head;
    if(tail) d.reason = (d.reason ? d.reason+' ' : '') + tail;
  } else {
    let r = text; if(matched) r = r.replace(matched.name,' ');
    r = clean(r);
    if(!matched && r) d.itemName = r;
    else if(r) d.reason = (d.reason ? d.reason+' ' : '') + r;
  }
  toast('「'+text+'」を取り込みました（内容をご確認ください）','success');
}

function flParseVoice(text){
  const d = State.foodLossDraft;
  parseVoiceToDraft(d, text, flItemsForStore(d.storeId),
    '個|本|枚|袋|箱|杯|皿|玉|尾|匹|パック|g|ｇ|kg|ｋｇ|ml|L|ℓ|リットル|ケース|束',
    flRecalcAmount);
  renderFoodLossInline();
}
// ---- AI設定（admin/soumu のみ） ----
window.flAiToggle = function(el){ State.aiConfig.flEnabled = !!el.checked; };
window.flAiUrl = function(el){ State.aiConfig.flUrl = el.value; };
window.flAiSave = async function(){ const ok = await flSaveConfig(); if(ok) toast('設定を保存しました','success'); };

// ---- 描画 ----
function flOptions(list, sel, valFn, labelFn){
  return list.map(x=>`<option value="${escapeHtml(valFn(x))}" ${valFn(x)===sel?'selected':''}>${escapeHtml(labelFn(x))}</option>`).join('');
}
function renderFoodLossFormInner(){
  const d = State.foodLossDraft;
  const stores = flAllowedStores();
  const items = flItemsForStore(d.storeId);
  const now = new Date();
  const dateVal = d.date || `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const timeVal = d.time || `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  return `
    <div class="fl-voice-row">
      <button id="fl-voice-btn" class="fl-voice-btn" onclick="flVoice()" type="button"><span class="dot"></span>🎤 音声で入力</button>
      <span class="fl-voice-hint">例「フクロール 3個 床に落下」→ 商品・数量・理由を自動で振り分け（Android Chrome 推奨）</span>
    </div>
    <div class="fl-grid">
      <div class="fl-field">
        <label>店舗</label>
        <select onchange="flField('storeId', this.value)">${flOptions(stores, d.storeId, s=>s.id, s=>storeLabelWithBrand(s))}</select>
      </div>
      <div class="fl-field">
        <label>区分</label>
        <select onchange="flField('category', this.value)">
          <option value="">選択してください</option>
          ${FL_CATEGORIES.map(c=>`<option value="${c}" ${c===d.category?'selected':''}>${c}</option>`).join('')}
        </select>
      </div>
      <div class="fl-field">
        <label>氏名</label>
        <input type="text" list="fl-staff-list" value="${escapeHtml(d.staffName||'')}" oninput="flField('staffName', this.value)" placeholder="担当者名">
        <datalist id="fl-staff-list">${[...new Set((State.foodLoss||[]).map(r=>r.staffName).filter(Boolean))].map(n=>`<option value="${escapeHtml(n)}">`).join('')}</datalist>
      </div>
      <div class="fl-field">
        <label>日付・時間（自動）</label>
        <div style="display:flex; gap:8px;">
          <input type="date" style="flex:1" value="${dateVal}" onchange="flField('date', this.value)">
          <input type="time" style="flex:1" value="${timeVal}" onchange="flField('time', this.value)">
        </div>
      </div>
      <div class="fl-field full">
        <label>廃棄した商品</label>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <select style="flex:1; min-width:180px" onchange="flItemSelect(this)">
            <option value="">— 品目マスタから選択 —</option>
            ${flOptions(items, d.itemId, it=>it.id, it=>`${it.name}（¥${Number(it.price)||0} / ${it.unit||'個'}）`)}
          </select>
          <input type="text" style="flex:1; min-width:180px" value="${escapeHtml(d.itemName||'')}" oninput="flField('itemName', this.value)" placeholder="または直接入力">
        </div>
        <span class="hint">マスタから選ぶと単価×数量で廃棄金額を自動計算します</span>
      </div>
      <div class="fl-field">
        <label>量</label>
        <div style="display:flex; gap:8px;">
          <input type="number" step="0.1" min="0" style="flex:2" value="${escapeHtml(d.qty||'')}" oninput="flQtyInput(this)" placeholder="数量">
          <input type="text" style="flex:1" value="${escapeHtml(d.unit||'')}" oninput="flField('unit', this.value)" placeholder="単位">
        </div>
      </div>
      <div class="fl-field">
        <label>廃棄金額（税抜）</label>
        <input id="fl-amount" type="number" min="0" value="${escapeHtml(String(d.amountExcl||''))}" oninput="flAmountInput(this)" placeholder="円（税抜）">
      </div>
      <div class="fl-field full">
        <label>理由</label>
        <textarea rows="2" oninput="flField('reason', this.value)" placeholder="廃棄の理由">${escapeHtml(d.reason||'')}</textarea>
      </div>
    </div>
    <div class="fl-actions">
      <button class="fl-btn-add" onclick="flAdd()" type="button">＋ 記録する</button>
      <button class="fl-btn-clear" onclick="flClearDraft()" type="button">クリア</button>
    </div>`;
}
// フォームだけ部分再描画（入力中の全再描画を避ける）
function renderFoodLossInline(){ const box = document.getElementById('fl-form-box'); if(box) box.innerHTML = renderFoodLossFormInner(); }

function renderFoodLossTable(){
  const rows = flVisibleRows();
  if(rows.length === 0) return `<div class="fl-empty">当月度の記録はありません。</div>`;
  const total = rows.reduce((a,b)=>a+(Number(b.amountExcl)||0),0);
  return `
    <table class="fl-table">
      <thead><tr>
        <th>日付</th><th>店舗</th><th>区分</th><th>氏名</th><th>商品</th><th class="num">量</th>
        <th class="num">廃棄額(税抜)</th><th>理由</th><th></th>
      </tr></thead>
      <tbody>
        ${rows.map(r=>`<tr>
          <td>${escapeHtml((r.date||'')+' '+(r.time||''))}</td>
          <td>${escapeHtml(flStoreName(r.storeId))}</td>
          <td>${escapeHtml(r.category||'')}</td>
          <td>${escapeHtml(r.staffName||'')}</td>
          <td>${escapeHtml(r.itemName||'')}</td>
          <td class="num">${(Number(r.qty)||0)} ${escapeHtml(r.unit||'')}</td>
          <td class="num">¥${(Number(r.amountExcl)||0).toLocaleString('ja-JP')}</td>
          <td>${escapeHtml(r.reason||'')}</td>
          <td><button class="fl-del" onclick="flDel('${r.id}')" type="button">削除</button></td>
        </tr>`).join('')}
      </tbody>
      <tfoot><tr>
        <td colspan="6" class="num fl-sum">当月度 廃棄合計（税抜）</td>
        <td class="num fl-sum">¥${total.toLocaleString('ja-JP')}</td>
        <td colspan="2"></td>
      </tr></tfoot>
    </table>`;
}

function renderFoodLossAiBox(){
  if(!flCanAdminConfig()) return '';
  const c = State.aiConfig;
  return `
  <div class="fl-card">
    <h3>⚙️ AI自動振り分け（任意・既定OFF）</h3>
    <div class="fl-ai-box">
      <div class="row">
        <label class="fl-switch"><input type="checkbox" ${c.flEnabled?'checked':''} onchange="flAiToggle(this)"><span class="sl"></span></label>
        <span>写真／音声まるごとを Claude で各欄へ自動振り分け（ONにすると有料・要 Edge Function）</span>
      </div>
      <div class="row">
        <span style="font-size:13px;color:#475569;white-space:nowrap;">接続先URL</span>
        <input type="text" value="${escapeHtml(c.flUrl||'')}" oninput="flAiUrl(this)" placeholder="Supabase Edge Function のURL（未設定でOK）">
      </div>
      <div class="row">
        <button class="fl-btn-clear" onclick="flAiSave()" type="button">設定を保存</button>
        <span style="font-size:12px;color:#94a3b8;">OFFのまま手入力＋音声テキスト化なら費用は発生しません。</span>
      </div>
    </div>
  </div>`;
}

function renderFoodLoss(){
  if(!getFeatureFlags().foodloss){ return `<div class="fl-wrap"><div class="fl-card">食材ロス管理は現在OFFです（KOESAコンソールで有効化）。<button class="btn btn-secondary btn-sm" data-action="home">戻る</button></div></div>`; }
  const period = State.foodLossPeriod || currentSlipPeriod();
  return `
  <div class="fl-wrap">
    <div class="p-header fl-page-head" style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <h1 style="margin:0;">🗑️ 食材ロス記録</h1>
      <span style="display:inline-flex;align-items:center;gap:8px;">
        <button class="btn btn-outline btn-sm" onclick="flChangePeriod(-1)" type="button" title="前の月度">‹</button>
        <span class="fl-period">${formatMonth(period)}（21日〜翌20日／20日締め）</span>
        <button class="btn btn-outline btn-sm" onclick="flChangePeriod(1)" type="button" title="次の月度">›</button>
      </span>
      ${period !== currentSlipPeriod() ? `<span style="font-size:12px;font-weight:700;color:#b45309;background:#fef3c7;border:1px solid #fcd34d;border-radius:8px;padding:3px 10px;">閲覧中：${formatMonth(period)}${canIssueSlipForPeriod(period) ? `（締め直後のため <u>${new Date().getMonth() + 1}月22日</u> まで記録可能）` : '（記録は当月度のみ）'}</span>` : (canIssueSlipForPeriod(previousSlipPeriod()) ? `<span style="font-size:12px;font-weight:700;color:#b45309;background:#fef3c7;border:1px solid #fcd34d;border-radius:8px;padding:3px 10px;">前月度（${formatMonth(previousSlipPeriod())}）も <u>${new Date().getMonth() + 1}月22日</u> まで記録できます（「‹」で前月度へ）</span>` : '')}
    </div>
    <div class="fl-card">
      <h3>Excel・印刷</h3>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button class="fl-btn-clear" onclick="flImport()" type="button">📥 Excelで一括取込</button>
        <button class="fl-btn-clear" onclick="flTemplate()" type="button">⬇ 取込テンプレDL</button>
        <button class="fl-btn-clear" onclick="flPrintRanking()" type="button">🖨 ロス実績を印刷</button>
      </div>
      <span class="hint" style="font-size:11px;color:#94a3b8;display:block;margin-top:6px;">完成品（マスタに無い商品）もそのまま取込可。全店Excel出力時はロスランキングも一緒に出力。</span>
    </div>
    <div class="fl-card">
      <h3>入力</h3>
      <div id="fl-form-box">${renderFoodLossFormInner()}</div>
    </div>
    <div class="fl-card">
      <h3>当月度の記録</h3>
      ${renderFoodLossTable()}
    </div>
    ${renderAiSupportPromo()}
    ${renderFoodLossRanking(false)}
    ${renderFoodLossAiBox()}
  </div>`;
}



// =========================================================
// 食材ロス: Excel一括取込 / ロス実績ランキング / デジタル押印
// =========================================================
function fmtStampDate(iso){ try{ const d=new Date(iso); return (d.getMonth()+1)+'/'+d.getDate(); }catch(_){ return ''; } }

// ---- Excel一括取込（完成品＝マスタ外もOK） ----
async function flBulkSave(recs){
  const rows = recs.map(rec=>({ id:rec.id, period:rec.period, store_id:rec.storeId, brand:rec.brand||null,
    category:rec.category||null, staff_name:rec.staffName||null, loss_date:rec.date||null, loss_time:rec.time||null,
    item_id:rec.itemId||null, item_name:rec.itemName, qty:rec.qty||0, unit:rec.unit||null,
    reason:rec.reason||null, amount_excl:rec.amountExcl||0, created_by:rec.createdBy||null }));
  const { error } = await sb.from('food_loss').upsert(rows,{ onConflict:'id' });
  if(error){ _lastDbError='一括取込: '+(error.message||JSON.stringify(error)); toast(_lastDbError,'error'); return false; }
  return true;
}
window.flImport = async function(){
  const file = await pickXlsxFile(); if(!file) return;
  let rows; try{ rows = await readXlsxAsRows(file); }catch(e){ toast('Excel読込に失敗しました','error'); return; }
  let hidx=-1;
  for(let i=0;i<Math.min(rows.length,30);i++){ const r=rows[i]||[]; if(r.some(c=>typeof c==='string' && ['商品','商品名','品名'].includes(c.trim()))){ hidx=i; break; } }
  if(hidx<0){ toast('ヘッダー行（「商品」列）が見つかりません','error'); return; }
  const hmap = buildHeaderMap(rows[hidx]);
  const byName={}; (State.stores||[]).forEach(s=>{ byName[s.name.trim()]=s; byName[s.id]=s; });
  const recs=[]; let skip=0;
  for(let i=hidx+1;i<rows.length;i++){
    const r=rows[i]||[]; if(r.every(c=>c===''||c==null)) continue;
    const itemName=String(pickCell(r,hmap,'商品','商品名','品名')||'').trim();
    if(!itemName){ skip++; continue; }
    const storeRaw=String(pickCell(r,hmap,'店舗','店舗名','店舗ID')||'').trim();
    const store=byName[storeRaw] || (State.stores||[]).find(s=>s.id===State.foodLossDraft.storeId);
    if(!store){ skip++; continue; }
    const brand=store.brand;
    const master=(State.items[brand]||[]).find(x=>x.name===itemName);
    const qty=parseFloat(String(pickCell(r,hmap,'量','数量')||'').replace(/[^0-9.]/g,''))||0;
    let amount=parseFloat(String(pickCell(r,hmap,'廃棄金額(税抜)','廃棄金額（税抜）','廃棄金額','金額')||'').replace(/[^0-9.]/g,''))||0;
    if(!amount && master && qty){ amount=Math.round((Number(master.price)||0)*qty); }
    recs.push({ id:flNewId(), period:State.foodLossPeriod||currentSlipPeriod(), storeId:store.id, brand,
      category:String(pickCell(r,hmap,'区分')||'').trim(), staffName:String(pickCell(r,hmap,'氏名','担当','担当者')||'').trim(),
      date:String(pickCell(r,hmap,'日付')||'').trim(), time:String(pickCell(r,hmap,'時間','時刻')||'').trim(),
      itemId:master?master.id:null, itemName, qty, unit:String(pickCell(r,hmap,'単位')||(master?master.unit:'')||'').trim(),
      reason:String(pickCell(r,hmap,'理由')||'').trim(), amountExcl:Math.round(amount), createdBy:State.user?.name||'' });
  }
  if(recs.length===0){ toast('取り込める行がありません','error'); return; }
  if(!confirm(recs.length+'件を取り込みます。よろしいですか？（スキップ '+skip+'件）')) return;
  if(!await flBulkSave(recs)) return;
  await loadFoodLoss(); render();
  toast(recs.length+'件を取り込みました','success');
};
window.flTemplate = function(){
  if(typeof XLSX==='undefined'){ toast('Excelライブラリ未読込','error'); return; }
  const aoa=[
    ['食材ロス取込テンプレート（この案内2行は削除可）'],
    ['※「商品」列は必須。マスタの商品名と一致すれば単価から廃棄金額を自動計算。完成品など自由入力も可。'],
    [],
    ['日付','時間','店舗','区分','氏名','商品','量','単位','廃棄金額(税抜)','理由'],
    ['2026-06-21','14:30','8番らーめん 国高店','アルバイト','山田 太郎','フクロール','3','個','','床に落下'],
  ];
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols']=[{wch:12},{wch:8},{wch:22},{wch:12},{wch:14},{wch:18},{wch:6},{wch:8},{wch:14},{wch:22}];
  const wb=XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb,ws,'食材ロス取込');
  XLSX.writeFile(wb,'食材ロス_取込テンプレート.xlsx');
};

// ---- ロス実績ランキング（押印は含めない） ----
function renderFoodLossRanking(forPrint){
  const rows = forPrint ? (State.foodLoss||[]) : flVisibleRows();
  if(!rows.length){ return forPrint ? '<p>当月度のデータがありません。</p>'
    : '<div class="fl-card"><h3>🏆 ロス実績ランキング</h3><div class="fl-empty">当月度のデータがありません。</div></div>'; }
  // 商品別・区分別は「どこで多く発生したか」の把握用に多い順（0円は除外）
  const sumBy=(key)=>{ const m={}; rows.forEach(r=>{ const k=(r[key]!=null&&r[key]!=='')?r[key]:'(未設定)'; m[k]=(m[k]||0)+(Number(r.amountExcl)||0); }); return Object.entries(m).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]); };
  const byItem=sumBy('itemName').slice(0,10);
  const byCat=sumBy('category');
  // 店舗別：記録がある店は少ない順で優秀、0円の店は管理不足として減点表示
  const byStore=flStoreRanking(rows);
  const tbl=(title,arr,col,note)=>{ const rk=rankTies(arr); return '<h4 style="margin:12px 0 6px;font-size:13px;color:#334155;">'+title+(note?'<span style="font-weight:400;color:#94a3b8;font-size:11px;margin-left:6px;">'+note+'</span>':'')+'</h4>'+
    '<table class="fl-table"><thead><tr><th>順位</th><th>'+col+'</th><th class="num">廃棄額(税抜)</th></tr></thead><tbody>'+
    (arr.length ? arr.map((e,i)=>'<tr><td>'+rk[i]+'</td><td>'+escapeHtml(String(e[0]))+'</td><td class="num">¥'+(Number(e[1])||0).toLocaleString('ja-JP')+'</td></tr>').join('') : '<tr><td colspan="3" style="color:#94a3b8;text-align:center;">対象の店舗がありません</td></tr>')+
    '</tbody></table>'; };
  const inner=flStoreRankTableHTML(byStore,'廃棄額(税抜)')+tbl('■ 商品別 TOP10',byItem,'商品','')+tbl('■ 区分別',byCat,'区分','');
  return forPrint ? inner : '<div class="fl-card"><h3>🏆 ロス実績ランキング（廃棄金額・税抜）</h3>'+inner+'</div>';
}
window.flPrintRanking = function(){
  const period = State.foodLossPeriod || currentSlipPeriod();
  const html='<html><head><meta charset="utf-8"><title>食材ロス実績</title>'+
    '<style>body{font-family:"BIZ UDPGothic","Hiragino Kaku Gothic ProN","Yu Gothic UI","Meiryo",sans-serif;padding:24px;color:#1e293b;}h2{margin:0 0 4px;}'+
    '.fl-table{width:100%;border-collapse:collapse;font-size:13px;margin-bottom:8px;}'+
    '.fl-table th,.fl-table td{border-bottom:1px solid #e5e7eb;padding:6px 8px;text-align:left;}'+
    '.fl-table td.num{text-align:right;}h4{margin:12px 0 6px;}</style></head><body>'+
    '<h2>食材ロス実績ランキング</h2><div style="color:#64748b;margin-bottom:10px;">'+formatMonth(period)+'（21日〜翌20日）</div>'+
    renderFoodLossRanking(true)+'</body></html>';
  const w=window.open('','_blank'); if(!w){ toast('ポップアップを許可してください','error'); return; }
  w.document.write(html); w.document.close(); w.focus(); setTimeout(()=>{ try{w.print();}catch(_){} },300);
};

// ---- デジタル押印 ----
async function loadSealStampsRaw(period){
  const out={ president:null, director:null };
  const { data, error } = await sb.from('seal_stamps').select('*').eq('period', period);
  if(!error){ for(const r of (data||[])){ if(r.role==='president') out.president=r; if(r.role==='director') out.director=r; } }
  return out;
}
async function loadSealAssign(){
  const { data, error } = await sb.from('app_config').select('*').in('key',['seal_pres_uid','seal_pres_name','seal_dir_uid','seal_dir_name']);
  if(!error){ for(const r of (data||[])){
    if(r.key==='seal_pres_uid')  State.sealAssign.presUid = r.value||'';
    if(r.key==='seal_pres_name') State.sealAssign.presName = r.value||'濱端';
    if(r.key==='seal_dir_uid')   State.sealAssign.dirUid  = r.value||'';
    if(r.key==='seal_dir_name')  State.sealAssign.dirName = r.value||'今川';
  }}
}
async function loadSealStamps(period){
  period = period || State.month;
  await loadSealAssign();
  State.sealStamps = await loadSealStampsRaw(period);
  State.sealLoadedFor = period;
}
function canStamp(role){
  const u=State.user; if(!u) return false;
  const a=State.sealAssign;
  if(role==='president'){ if(a.presUid) return u.id===a.presUid; return u.role==='super_admin'||u.role==='admin'; }
  if(role==='director'){ if(a.dirUid) return u.id===a.dirUid; return u.role==='director'||u.role==='soumu'||u.role==='admin'||u.role==='super_admin'; }
  return false;
}
window.sealPreview = function(role){
  const inp=document.getElementById('seal-name-'+role);
  const pv=document.getElementById('seal-preview-'+role);
  if(inp && pv) pv.innerHTML = sealHtml(inp.value.trim(), 72);
};
window.stampSeal = async function(role){
  if(!canStamp(role)){ toast('この枠を押印する権限がありません','error'); return; }
  const period=State.month;
  const assigned = role==='president' ? (State.sealAssign.presName||'濱端') : (State.sealAssign.dirName||'今川');
  const inp=document.getElementById('seal-name-'+role);
  const name = (inp && inp.value.trim()) ? inp.value.trim() : assigned;
  if(!name){ toast('氏名を入力してください','error'); return; }
  const rec={ id:period+'_'+role, period, role, name, stamped_by:State.user?.name||'', stamped_at:new Date().toISOString() };
  const { error } = await sb.from('seal_stamps').upsert([rec],{ onConflict:'id' });
  if(error){ toast('押印に失敗: '+(error.message||''),'error'); return; }
  State.sealStamps[role]=rec; toast('押印しました','success');
  const el=document.getElementById('seal-section'); if(el) el.outerHTML=renderSealSection();
};
window.unstampSeal = async function(role){
  const u=State.user;
  if(!canStamp(role) && u?.role!=='admin' && u?.role!=='super_admin'){ toast('権限がありません','error'); return; }
  if(!confirm('押印を取り消しますか？')) return;
  const { error } = await sb.from('seal_stamps').delete().eq('id', State.month+'_'+role);
  if(error){ toast('取消に失敗','error'); return; }
  State.sealStamps[role]=null;
  const el=document.getElementById('seal-section'); if(el) el.outerHTML=renderSealSection();
};
window.sealAssignField = function(k,v){ State.sealAssign[k]=v; };
window.sealAssignSave = async function(){
  const users=State.users||[];
  const pName=(users.find(u=>u.id===State.sealAssign.presUid)||{}).name||State.sealAssign.presName||'濱端';
  const dName=(users.find(u=>u.id===State.sealAssign.dirUid)||{}).name||State.sealAssign.dirName||'今川';
  State.sealAssign.presName=pName; State.sealAssign.dirName=dName;
  const rows=[
    {key:'seal_pres_uid',value:State.sealAssign.presUid||''},{key:'seal_pres_name',value:pName},
    {key:'seal_dir_uid',value:State.sealAssign.dirUid||''},{key:'seal_dir_name',value:dName},
  ];
  const { error } = await sb.from('app_config').upsert(rows,{ onConflict:'key' });
  toast(error?'保存に失敗':'割当を保存しました', error?'error':'success');
  const el=document.getElementById('seal-section'); if(el) el.outerHTML=renderSealSection();
};
function renderSealAssignMini(){
  const users=State.users||[];
  const opt=(sel)=>['<option value="">（役割で自動）</option>'].concat(users.map(u=>'<option value="'+u.id+'" '+(u.id===sel?'selected':'')+'>'+escapeHtml(u.name)+'（'+escapeHtml(u.role||'')+'）</option>')).join('');
  return '<div class="seal-assign"><span>押印者の割当（管理者のみ）：</span>'+
    '<label>社長 <select onchange="sealAssignField(\'presUid\',this.value)">'+opt(State.sealAssign.presUid)+'</select></label>'+
    '<label>常務 <select onchange="sealAssignField(\'dirUid\',this.value)">'+opt(State.sealAssign.dirUid)+'</select></label>'+
    '<button class="fl-btn-clear" onclick="sealAssignSave()" type="button">割当を保存</button></div>';
}
function renderSealSection(){
  if(State.sealLoadedFor !== State.month){
    setTimeout(async()=>{ await loadSealStamps(State.month); const el=document.getElementById('seal-section'); if(el) el.outerHTML=renderSealSection(); },0);
  }
  const s=State.sealStamps||{};
  const cell=(role)=>{
    const rec=s[role];
    const label=role==='president'?'社長':'常務';
    const name=role==='president'?(State.sealAssign.presName||'濱端'):(State.sealAssign.dirName||'今川');
    if(rec){
      return '<div class="seal-box stamped"><div class="seal-role">'+label+'</div>'+
        '<div class="seal-seal">'+sealHtml(rec.name||name, 72)+'</div>'+
        '<div class="seal-meta">'+escapeHtml(rec.name||name)+'　'+fmtStampDate(rec.stamped_at)+'</div>'+
        (canStamp(role)?'<button class="seal-undo" onclick="unstampSeal(\''+role+'\')">取消</button>':'')+'</div>';
    }
    if(canStamp(role)){
      return '<div class="seal-box empty"><div class="seal-role">'+label+'</div>'+
        '<div id="seal-preview-'+role+'" class="seal-seal">'+sealHtml(name, 72)+'</div>'+
        '<input id="seal-name-'+role+'" class="seal-name-input" type="text" value="'+escapeHtml(name)+'" placeholder="氏名を入力" oninput="sealPreview(\''+role+'\')">'+
        '<button class="seal-stamp-btn2" onclick="stampSeal(\''+role+'\')">この認印で押印</button></div>';
    }
    return '<div class="seal-box empty"><div class="seal-role">'+label+'</div>'+
      '<div class="seal-seal ghost">'+sealHtml(name, 72)+'</div>'+
      '<div class="seal-empty-note">'+escapeHtml(name)+'（未押印）</div></div>';
  };
  const isAdmin=(State.user?.role==='admin'||State.user?.role==='super_admin');
  const sealEligible = isAdmin || canStamp('president') || canStamp('director');
  const anyStamped = !!(s.president || s.director);
  if(!sealEligible && !anyStamped){ return '<div id="seal-section" class="seal-section" style="display:none"></div>'; }
  return '<div id="seal-section" class="seal-section">'+
    '<div class="section-title" style="margin-top:14px;">社長・常務 確認印</div>'+
    '<div class="seal-row">'+cell('president')+cell('director')+'</div>'+
    (isAdmin?renderSealAssignMini():'')+'</div>';
}


// =========================================================
// 器物破損管理（v9.11.0）：皿・備品の在庫/破損を月度で管理
//   締め期間は売買伝票/食材ロスと同じ currentSlipPeriod()（21日〜翌20日）
//   食材ロスのCSS(fl-*)/補助関数を再利用
// =========================================================
function kbNewId(){ return 'kb' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
function kbItemNewId(){ return 'kbi' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
function kbAllowedStores(){ return flAllowedStores(); }
function kbVisibleRows(){
  const allowed = new Set(kbAllowedStores().map(s=>s.id));
  return (State.breakage||[]).filter(r => allowed.has(r.storeId));
}
function kbCanAdminMaster(){ const r = State.user?.role; return r==='admin' || r==='soumu' || r==='manager'; }
function kbItemsForStore(storeId){ const brand = storeBrandOf(storeId); return (State.breakageItems[brand] || []); }

// ---- Supabase 保存層（記録） ----
async function kbFetch(period){
  const { data, error } = await sb.from('breakage').select('*').eq('period', period).order('created_at',{ascending:false});
  if(error){ console.error('breakage fetch', error); _lastDbError='器物破損取得: '+(error.message||JSON.stringify(error)); toast(_lastDbError,'error'); return null; }
  return (data||[]).map(r=>({ id:r.id, period:r.period, storeId:r.store_id, brand:r.brand, category:r.category,
    staffName:r.staff_name, date:r.loss_date, time:r.loss_time, itemId:r.item_id, itemName:r.item_name,
    qty:Number(r.qty), unit:r.unit, reason:r.reason, amountExcl:Number(r.amount_excl),
    createdBy:r.created_by, createdAt:r.created_at }));
}
async function kbSaveRow(rec){
  const row = { id:rec.id, period:rec.period, store_id:rec.storeId, brand:rec.brand||null,
    category:rec.category||null, staff_name:rec.staffName||null, loss_date:rec.date||null, loss_time:rec.time||null,
    item_id:rec.itemId||null, item_name:rec.itemName, qty:rec.qty||0, unit:rec.unit||null,
    reason:rec.reason||null, amount_excl:rec.amountExcl||0, created_by:rec.createdBy||null };
  const { error } = await sb.from('breakage').upsert([row], { onConflict:'id' });
  if(error){ console.error('breakage upsert', error); _lastDbError='器物破損保存: '+(error.message||JSON.stringify(error)); toast(_lastDbError,'error'); return false; }
  return true;
}
async function kbDeleteRow(id){
  const { error } = await sb.from('breakage').delete().eq('id', id);
  if(error){ console.error('breakage delete', error); _lastDbError='器物破損削除: '+(error.message||JSON.stringify(error)); toast(_lastDbError,'error'); return false; }
  return true;
}

// ---- Supabase 保存層（備品マスタ） ----
async function kbItemsFetch(){
  const { data, error } = await sb.from('breakage_items').select('*').order('name',{ascending:true});
  if(error){ console.error('breakage_items fetch', error); return; }
  const byBrand = {};
  for(const r of (data||[])){
    const b = r.brand || '_';
    (byBrand[b] = byBrand[b] || []).push({ id:r.id, brand:r.brand, name:r.name, unit:r.unit, price:Number(r.price)||0, stock:Number(r.stock)||0, supplier:r.supplier||'' });
  }
  State.breakageItems = byBrand;
}
async function kbItemsBulkSave(rows){
  const payload = rows.map(it=>({ id:it.id||kbItemNewId(), brand:it.brand||null, name:it.name, unit:it.unit||null,
    price:Number(it.price)||0, stock:Number(it.stock)||0, supplier:it.supplier||null }));
  const { error } = await sb.from('breakage_items').upsert(payload,{ onConflict:'id' });
  if(error){ _lastDbError='備品マスタ登録: '+(error.message||JSON.stringify(error)); toast(_lastDbError,'error'); return false; }
  return true;
}

async function loadBreakage(period){
  period = period || State.breakagePeriod || currentSlipPeriod();
  State.breakagePeriod = period;
  await kbItemsFetch();
  await flLoadConfig();
  const allowed = kbAllowedStores();
  if(!State.breakageDraft.storeId && allowed.length){
    State.breakageDraft.storeId = (State.user?.defaultStore && allowed.find(s=>s.id===State.user.defaultStore)) ? State.user.defaultStore : allowed[0].id;
  }
  const list = await kbFetch(period);
  if(list!==null) State.breakage = list;
}
window.kbChangePeriod = async function(delta){
  const cur = State.breakagePeriod || currentSlipPeriod();
  const [y,m] = cur.split('-').map(Number);
  let ny=y, nm=m+delta; while(nm<1){nm+=12;ny--;} while(nm>12){nm-=12;ny++;}
  const np = `${ny}-${String(nm).padStart(2,'0')}`;
  await loadBreakage(np); render();
};

// ---- 入力フォーム操作 ----
window.kbField = function(key, val){ State.breakageDraft[key]=val; if(key==='storeId'){ State.breakageDraft.itemId=''; State.breakageDraft.itemName=''; renderBreakageInline(); } };
window.kbItemSelect = function(sel){
  const id = sel.value; const d = State.breakageDraft; d.itemId = id;
  const it = kbItemsForStore(d.storeId).find(x=>x.id===id);
  if(it){ d.itemName=it.name; d.unit=it.unit||'個'; d._price=Number(it.price)||0; kbRecalc(); }
  renderBreakageInline();
};
window.kbQtyInput = function(el){ State.breakageDraft.qty=el.value; kbRecalc(); kbRefreshAmount(); };
function kbRecalc(){ const d=State.breakageDraft; const p=Number(d._price)||0; const q=parseFloat(d.qty)||0; if(p>0&&q>0&&!d._amountTouched){ d.amountExcl=Math.round(p*q); } }
window.kbAmountInput = function(el){ State.breakageDraft.amountExcl=el.value; State.breakageDraft._amountTouched=true; };
function kbRefreshAmount(){ const el=document.getElementById('kb-amount'); if(el && !State.breakageDraft._amountTouched) el.value = State.breakageDraft.amountExcl || ''; }
window.kbClearDraft = function(){
  const keep = State.breakageDraft.storeId;
  State.breakageDraft = { storeId:keep, category:'', staffName:'', date:'', time:'', itemId:'', itemName:'', qty:'', unit:'', reason:'', amountExcl:'' };
  renderBreakageInline();
};
window.kbAdd = async function(){
  const d = State.breakageDraft;
  const _kp = State.breakagePeriod || currentSlipPeriod();
  if(!canIssueSlipForPeriod(_kp)){ toast('この月度は記録できません（当月度、または締め直後22日までの前月度のみ）','error'); return; }
  if(!d.storeId){ toast('店舗を選択してください','error'); return; }
  if(!d.category){ toast('区分を選択してください','error'); return; }
  if(!d.staffName || !d.staffName.trim()){ toast('氏名を入力してください','error'); return; }
  if(!d.itemName || !d.itemName.trim()){ toast('破損した備品を入力してください','error'); return; }
  const now = new Date();
  const date = d.date || `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const time = d.time || `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  const rec = { id:kbNewId(), period:State.breakagePeriod||currentSlipPeriod(), storeId:d.storeId,
    brand:storeBrandOf(d.storeId), category:d.category, staffName:d.staffName.trim(),
    date, time, itemId:d.itemId||null, itemName:d.itemName.trim(),
    qty:parseFloat(d.qty)||0, unit:d.unit||'', reason:(d.reason||'').trim(),
    amountExcl:Math.round(parseFloat(d.amountExcl)||0), createdBy:State.user?.name||'' };
  if(!await kbSaveRow(rec)) return;
  State.breakage.unshift(rec);
  toast('記録しました','success');
  window.kbClearDraft();
};
window.kbDel = async function(id){
  if(!confirm('この記録を削除しますか？')) return;
  if(!await kbDeleteRow(id)) return;
  State.breakage = State.breakage.filter(r=>r.id!==id);
  render();
};

// ---- 描画 ----
// ---- 器物破損 音声テキスト化（ブラウザ内蔵 Web Speech・無料／Android Chrome 推奨） ----
window.kbVoice = function(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ toast('この端末は音声入力に未対応です（Android Chrome 推奨）','error'); return; }
  const btn = document.getElementById('kb-voice-btn');
  const rec = new SR(); rec.lang='ja-JP'; rec.interimResults=false; rec.maxAlternatives=1;
  if(btn) btn.classList.add('rec');
  toast('お話しください（例：取り皿 2枚 洗浄中に落下）','info');
  rec.onresult = (e)=>{ const t=(e.results[0][0].transcript)||''; kbParseVoice(t); };
  rec.onerror = ()=>{ toast('音声認識に失敗しました','error'); if(btn) btn.classList.remove('rec'); };
  rec.onend = ()=>{ if(btn) btn.classList.remove('rec'); };
  try{ rec.start(); }catch(_){ toast('音声入力を開始できませんでした','error'); if(btn) btn.classList.remove('rec'); }
};
function kbParseVoice(text){
  const d = State.breakageDraft;
  parseVoiceToDraft(d, text, kbItemsForStore(d.storeId),
    '個|本|枚|袋|箱|杯|皿|玉|脚|客|セット|パック|g|ｇ|kg|ml|L',
    kbRecalc);
  renderBreakageInline();
}

function kbStoreName(id){ return flStoreName(id); }
function renderBreakageFormInner(){
  const d = State.breakageDraft;
  const stores = kbAllowedStores();
  const items = kbItemsForStore(d.storeId);
  const now = new Date();
  const dateVal = d.date || `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const timeVal = d.time || `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  const opt = (list,sel,vf,lf)=>list.map(x=>`<option value="${escapeHtml(vf(x))}" ${vf(x)===sel?'selected':''}>${escapeHtml(lf(x))}</option>`).join('');
  return `
  <div class="fl-grid">
    <div class="fl-field"><label>店舗</label>
      <select onchange="kbField('storeId', this.value)">${opt(stores, d.storeId, s=>s.id, s=>storeLabelWithBrand(s))}</select></div>
    <div class="fl-field"><label>区分</label>
      <select onchange="kbField('category', this.value)"><option value="">選択…</option>${opt(FL_CATEGORIES.map(c=>({c})), d.category, x=>x.c, x=>x.c)}</select></div>
    <div class="fl-field"><label>氏名</label>
      <input type="text" value="${escapeHtml(d.staffName||'')}" oninput="kbField('staffName', this.value)" placeholder="記入者"></div>
    <div class="fl-field"><label>日付</label>
      <input type="date" value="${escapeHtml(dateVal)}" oninput="kbField('date', this.value)"></div>
    <div class="fl-field"><label>時間</label>
      <input type="time" value="${escapeHtml(timeVal)}" oninput="kbField('time', this.value)"></div>
    <div class="fl-field"><label>破損した備品（マスタ選択）</label>
      <select onchange="kbItemSelect(this)"><option value="">マスタから選択…（または下に自由入力）</option>${opt(items, d.itemId, x=>x.id, x=>x.name+(x.price?` / ¥${(Number(x.price)||0).toLocaleString('ja-JP')}`:''))}</select></div>
    <div class="fl-field"><label>備品名（自由入力可）</label>
      <input type="text" value="${escapeHtml(d.itemName||'')}" oninput="kbField('itemName', this.value)" placeholder="例：取り皿 大"></div>
    <div class="fl-field"><label>破損数・単位</label>
      <div style="display:flex;gap:8px;"><input type="number" inputmode="decimal" style="flex:1" value="${escapeHtml(d.qty||'')}" oninput="kbQtyInput(this)" placeholder="数量">
      <input type="text" style="width:70px" value="${escapeHtml(d.unit||'')}" oninput="kbField('unit', this.value)" placeholder="枚"></div></div>
    <div class="fl-field"><label>破棄金額（税抜・自動計算可）</label>
      <input id="kb-amount" type="number" inputmode="numeric" value="${escapeHtml(d.amountExcl||'')}" oninput="kbAmountInput(this)" placeholder="単価×数量で自動"></div>
    <div class="fl-field" style="grid-column:1/-1;"><label>理由</label>
      <input type="text" value="${escapeHtml(d.reason||'')}" oninput="kbField('reason', this.value)" placeholder="例：洗浄中に落下"></div>
  </div>
  <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap;">
    <button id="kb-voice-btn" class="fl-btn-clear" onclick="kbVoice()" type="button">🎤 音声で入力</button>
    <button class="fl-btn-add" onclick="kbAdd()" type="button">＋ 記録する</button>
    <button class="fl-btn-clear" onclick="kbClearDraft()" type="button">クリア</button>
  </div>
  <div style="font-size:11px;color:#94a3b8;margin-top:6px;line-height:1.5;">🎤は無料（Android Chrome推奨）。「取り皿 2枚 洗浄中に落下」のように話すと各欄へ振り分けます。写真・手書きのAI取込／AI分析はKOESAコンソールのスイッチで有効化します（要Edge Function）。</div>`;
}
function renderBreakageInline(){ const box=document.getElementById('kb-form-box'); if(box) box.innerHTML = renderBreakageFormInner(); }
function renderBreakageTable(){
  const rows = kbVisibleRows();
  if(rows.length===0) return `<div class="fl-empty">当月度の記録はありません。</div>`;
  const total = rows.reduce((a,b)=>a+(Number(b.amountExcl)||0),0);
  return `
    <table class="fl-table">
      <thead><tr><th>日付</th><th>店舗</th><th>区分</th><th>氏名</th><th>備品</th><th class="num">数</th><th class="num">破棄額(税抜)</th><th>理由</th><th></th></tr></thead>
      <tbody>
        ${rows.map(r=>`<tr>
          <td>${escapeHtml((r.date||'')+' '+(r.time||''))}</td>
          <td>${escapeHtml(kbStoreName(r.storeId))}</td>
          <td>${escapeHtml(r.category||'')}</td>
          <td>${escapeHtml(r.staffName||'')}</td>
          <td>${escapeHtml(r.itemName||'')}</td>
          <td class="num">${(Number(r.qty)||0)} ${escapeHtml(r.unit||'')}</td>
          <td class="num">¥${(Number(r.amountExcl)||0).toLocaleString('ja-JP')}</td>
          <td>${escapeHtml(r.reason||'')}</td>
          <td><button class="fl-del" onclick="kbDel('${r.id}')" type="button">削除</button></td>
        </tr>`).join('')}
      </tbody>
      <tfoot><tr><td colspan="6" class="num fl-sum">当月度 破棄合計（税抜）</td><td class="num fl-sum">¥${total.toLocaleString('ja-JP')}</td><td colspan="2"></td></tr></tfoot>
    </table>`;
}
function renderBreakageMasterCard(){
  if(!kbCanAdminMaster()) return '';
  const cnt = Object.values(State.breakageItems||{}).reduce((a,b)=>a+b.length,0);
  return `
  <div class="fl-card">
    <h3>🧰 備品・機器マスタ（${cnt}件）</h3>
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <button class="fl-btn-clear" onclick="kbMasterTemplate()" type="button">⬇ マスタ取込テンプレDL</button>
      <button class="fl-btn-clear" onclick="kbMasterExport()" type="button">⬇ 現在のマスタを一括DL</button>
      <button class="fl-btn-clear" onclick="kbMasterImport()" type="button">📥 マスタを一括登録</button>
    </div>
    <span class="hint" style="font-size:11px;color:#94a3b8;display:block;margin-top:6px;">列：業態 / 備品機器名 / 単位 / 単価(税抜) / 在庫数 / 取引先詳細。業態名 or 業態IDで自動振り分け。</span>
  </div>`;
}
function renderBreakage(){
  if(!getFeatureFlags().breakage){ return `<div class="fl-wrap"><div class="fl-card">器物破損管理は現在OFFです（KOESAコンソールで有効化）。<button class="btn btn-secondary btn-sm" data-action="home">戻る</button></div></div>`; }
  const period = State.breakagePeriod || currentSlipPeriod();
  return `
  <div class="fl-wrap">
    <div class="fl-card" style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <h1 style="margin:0;font-size:20px;color:#1e293b;">🍽️ 器物破損管理</h1>
      <span style="display:inline-flex;align-items:center;gap:8px;">
        <button class="btn btn-outline btn-sm" onclick="kbChangePeriod(-1)" type="button" title="前の月度">‹</button>
        <span class="fl-period kb-period">${formatMonth(period)}（21日〜翌20日／20日締め）</span>
        <button class="btn btn-outline btn-sm" onclick="kbChangePeriod(1)" type="button" title="次の月度">›</button>
      </span>
      ${period !== currentSlipPeriod() ? `<span style="font-size:12px;font-weight:700;color:#b45309;background:#fef3c7;border:1px solid #fcd34d;border-radius:8px;padding:3px 10px;">閲覧中：${formatMonth(period)}${canIssueSlipForPeriod(period) ? `（締め直後のため <u>${new Date().getMonth() + 1}月22日</u> まで記録可能）` : '（記録は当月度のみ）'}</span>` : (canIssueSlipForPeriod(previousSlipPeriod()) ? `<span style="font-size:12px;font-weight:700;color:#b45309;background:#fef3c7;border:1px solid #fcd34d;border-radius:8px;padding:3px 10px;">前月度（${formatMonth(previousSlipPeriod())}）も <u>${new Date().getMonth() + 1}月22日</u> まで記録できます（「‹」で前月度へ）</span>` : '')}
    </div>
    <div class="fl-card">
      <h3>Excel・印刷</h3>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button class="fl-btn-clear" onclick="kbImport()" type="button">📥 記録をExcel一括取込</button>
        <button class="fl-btn-clear" onclick="kbTemplate()" type="button">⬇ 記録取込テンプレDL</button>
        <button class="fl-btn-clear" onclick="kbPrintRanking()" type="button">🖨 破損実績を印刷</button>
      </div>
    </div>
    ${renderBreakageMasterCard()}
    <div class="fl-card">
      <h3>入力</h3>
      <div id="kb-form-box">${renderBreakageFormInner()}</div>
    </div>
    <div class="fl-card">
      <h3>当月度の記録</h3>
      ${renderBreakageTable()}
    </div>
    ${renderAiSupportPromo()}
    ${renderBreakageRanking(false)}
  </div>`;
}

// ---- ランキング ----
function renderBreakageRanking(forPrint){
  const rows = forPrint ? (State.breakage||[]) : kbVisibleRows();
  if(!rows.length){ return forPrint ? '<p>当月度のデータがありません。</p>'
    : '<div class="fl-card"><h3>🏆 破損実績ランキング</h3><div class="fl-empty">当月度のデータがありません。</div></div>'; }
  // 備品別・区分別は「どこで多く発生したか」の把握用に多い順（0円は除外）
  const sumBy=(key)=>{ const m={}; rows.forEach(r=>{ const k=(r[key]!=null&&r[key]!=='')?r[key]:'(未設定)'; m[k]=(m[k]||0)+(Number(r.amountExcl)||0); }); return Object.entries(m).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]); };
  const byItem=sumBy('itemName').slice(0,10);
  const byCat=sumBy('category');
  // 店舗別：記録がある店は少ない順で優秀、0円の店は管理不足として減点表示
  const byStore=flStoreRanking(rows);
  const tbl=(title,arr,col,note)=>{ const rk=rankTies(arr); return '<h4 style="margin:12px 0 6px;font-size:13px;color:#334155;">'+title+(note?'<span style="font-weight:400;color:#94a3b8;font-size:11px;margin-left:6px;">'+note+'</span>':'')+'</h4>'+
    '<table class="fl-table"><thead><tr><th>順位</th><th>'+col+'</th><th class="num">破棄額(税抜)</th></tr></thead><tbody>'+
    (arr.length ? arr.map((e,i)=>'<tr><td>'+rk[i]+'</td><td>'+escapeHtml(String(e[0]))+'</td><td class="num">¥'+(Number(e[1])||0).toLocaleString('ja-JP')+'</td></tr>').join('') : '<tr><td colspan="3" style="color:#94a3b8;text-align:center;">対象の店舗がありません</td></tr>')+
    '</tbody></table>'; };
  const inner=flStoreRankTableHTML(byStore,'破棄額(税抜)')+tbl('■ 備品別 TOP10',byItem,'備品','')+tbl('■ 区分別',byCat,'区分','');
  return forPrint ? inner : '<div class="fl-card"><h3>🏆 破損実績ランキング（破棄金額・税抜）</h3>'+inner+'</div>';
}
window.kbPrintRanking = function(){
  const period = State.breakagePeriod || currentSlipPeriod();
  const html='<html><head><meta charset="utf-8"><title>器物破損実績</title>'+
    '<style>body{font-family:"BIZ UDPGothic","Hiragino Kaku Gothic ProN","Yu Gothic UI","Meiryo",sans-serif;padding:24px;color:#1e293b;}h2{margin:0 0 4px;}'+
    '.fl-table{width:100%;border-collapse:collapse;font-size:13px;margin-bottom:8px;}'+
    '.fl-table th,.fl-table td{border-bottom:1px solid #e5e7eb;padding:6px 8px;text-align:left;}'+
    '.fl-table td.num{text-align:right;}h4{margin:12px 0 6px;}</style></head><body>'+
    '<h2>器物破損実績ランキング</h2><div style="color:#64748b;margin-bottom:10px;">'+formatMonth(period)+'（21日〜翌20日）</div>'+
    renderBreakageRanking(true)+'</body></html>';
  const w=window.open('','_blank'); if(!w){ toast('ポップアップを許可してください','error'); return; }
  w.document.write(html); w.document.close(); w.focus(); setTimeout(()=>{ try{w.print();}catch(_){} },300);
};

// ---- 記録Excel一括取込 ----
window.kbImport = async function(){
  const file = await pickXlsxFile(); if(!file) return;
  let rows; try{ rows = await readXlsxAsRows(file); }catch(e){ toast('Excel読込に失敗しました','error'); return; }
  let hidx=-1;
  for(let i=0;i<Math.min(rows.length,30);i++){ const r=rows[i]||[]; if(r.some(c=>typeof c==='string' && ['備品','備品名','商品','品名'].includes(c.trim()))){ hidx=i; break; } }
  if(hidx<0){ toast('ヘッダー行（「備品」列）が見つかりません','error'); return; }
  const hmap = buildHeaderMap(rows[hidx]);
  const byName={}; (State.stores||[]).forEach(s=>{ byName[s.name.trim()]=s; byName[s.id]=s; });
  const recs=[]; let skip=0;
  for(let i=hidx+1;i<rows.length;i++){
    const r=rows[i]||[]; if(r.every(c=>c===''||c==null)) continue;
    const itemName=String(pickCell(r,hmap,'備品','備品名','商品','品名')||'').trim();
    if(!itemName){ skip++; continue; }
    const storeRaw=String(pickCell(r,hmap,'店舗','店舗名','店舗ID')||'').trim();
    const store=byName[storeRaw] || (State.stores||[]).find(s=>s.id===State.breakageDraft.storeId);
    if(!store){ skip++; continue; }
    const brand=store.brand;
    const master=(State.breakageItems[brand]||[]).find(x=>x.name===itemName);
    const qty=parseFloat(String(pickCell(r,hmap,'数','数量','破損数')||'').replace(/[^0-9.]/g,''))||0;
    let amount=parseFloat(String(pickCell(r,hmap,'破棄金額(税抜)','破棄金額（税抜）','破棄金額','金額')||'').replace(/[^0-9.]/g,''))||0;
    if(!amount && master && qty){ amount=Math.round((Number(master.price)||0)*qty); }
    recs.push({ id:kbNewId(), period:State.breakagePeriod||currentSlipPeriod(), storeId:store.id, brand,
      category:String(pickCell(r,hmap,'区分')||'').trim(), staffName:String(pickCell(r,hmap,'氏名','担当','担当者')||'').trim(),
      date:String(pickCell(r,hmap,'日付')||'').trim(), time:String(pickCell(r,hmap,'時間','時刻')||'').trim(),
      itemId:master?master.id:null, itemName, qty, unit:String(pickCell(r,hmap,'単位')||(master?master.unit:'')||'').trim(),
      reason:String(pickCell(r,hmap,'理由')||'').trim(), amountExcl:Math.round(amount), createdBy:State.user?.name||'' });
  }
  if(recs.length===0){ toast('取り込める行がありません','error'); return; }
  if(!confirm(recs.length+'件を取り込みます。よろしいですか？（スキップ '+skip+'件）')) return;
  const { error } = await sb.from('breakage').upsert(recs.map(rec=>({ id:rec.id, period:rec.period, store_id:rec.storeId, brand:rec.brand||null,
    category:rec.category||null, staff_name:rec.staffName||null, loss_date:rec.date||null, loss_time:rec.time||null,
    item_id:rec.itemId||null, item_name:rec.itemName, qty:rec.qty||0, unit:rec.unit||null, reason:rec.reason||null,
    amount_excl:rec.amountExcl||0, created_by:rec.createdBy||null })),{ onConflict:'id' });
  if(error){ _lastDbError='一括取込: '+(error.message||JSON.stringify(error)); toast(_lastDbError,'error'); return; }
  await loadBreakage(); render();
  toast(recs.length+'件を取り込みました','success');
};
window.kbTemplate = function(){
  if(typeof XLSX==='undefined'){ toast('Excelライブラリ未読込','error'); return; }
  const aoa=[
    ['器物破損 記録取込テンプレート（この案内2行は削除可）'],
    ['※「備品」列は必須。マスタと一致すれば単価から破棄金額を自動計算。'],
    [],
    ['日付','時間','店舗','区分','氏名','備品','数','単位','破棄金額(税抜)','理由'],
    ['2026-06-21','14:30','8番らーめん 国高店','アルバイト','山田 太郎','取り皿 大','2','枚','','洗浄中に落下'],
  ];
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols']=[{wch:12},{wch:8},{wch:22},{wch:12},{wch:14},{wch:18},{wch:6},{wch:8},{wch:14},{wch:22}];
  const wb=XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb,ws,'器物破損取込');
  XLSX.writeFile(wb,'器物破損_記録取込テンプレート.xlsx');
};

// ---- 備品マスタ：テンプレ／一括DL／一括登録 ----
function kbBrandResolve(raw){
  raw = String(raw||'').trim();
  const b = (State.brands||[]).find(x=> x.id===raw || x.name===raw || x.name.trim()===raw);
  return b ? b.id : (raw || null);
}
function kbBrandLabel(id){ const b=(State.brands||[]).find(x=>x.id===id); return b?b.name:(id||''); }
window.kbMasterTemplate = function(){
  if(typeof XLSX==='undefined'){ toast('Excelライブラリ未読込','error'); return; }
  const aoa=[
    ['備品・機器マスタ 取込テンプレート（この案内2行は削除可）'],
    ['※「備品機器名」列は必須。業態は業態名 or 業態ID。'],
    [],
    ['業態','備品機器名','単位','単価(税抜)','在庫数','取引先詳細'],
    ['8番らーめん','取り皿 大','枚','350','120','〇〇陶器（TEL 000-000-0000）'],
  ];
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols']=[{wch:16},{wch:20},{wch:8},{wch:12},{wch:8},{wch:28}];
  const wb=XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb,ws,'備品マスタ取込');
  XLSX.writeFile(wb,'備品機器マスタ_取込テンプレート.xlsx');
};
window.kbMasterExport = function(){
  if(typeof XLSX==='undefined'){ toast('Excelライブラリ未読込','error'); return; }
  const aoa=[['業態','備品機器名','単位','単価(税抜)','在庫数','取引先詳細','ID']];
  Object.entries(State.breakageItems||{}).forEach(([brand,list])=>{
    list.forEach(it=>aoa.push([kbBrandLabel(brand), it.name, it.unit||'', Number(it.price)||0, Number(it.stock)||0, it.supplier||'', it.id]));
  });
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols']=[{wch:16},{wch:20},{wch:8},{wch:12},{wch:8},{wch:28},{wch:16}];
  const wb=XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb,ws,'備品マスタ');
  XLSX.writeFile(wb,'備品機器マスタ_'+(new Date().toISOString().slice(0,10))+'.xlsx');
};
window.kbMasterImport = async function(){
  const file = await pickXlsxFile(); if(!file) return;
  let rows; try{ rows = await readXlsxAsRows(file); }catch(e){ toast('Excel読込に失敗しました','error'); return; }
  let hidx=-1;
  for(let i=0;i<Math.min(rows.length,30);i++){ const r=rows[i]||[]; if(r.some(c=>typeof c==='string' && ['備品機器名','備品名','名称','商品'].includes(c.trim()))){ hidx=i; break; } }
  if(hidx<0){ toast('ヘッダー行（「備品機器名」列）が見つかりません','error'); return; }
  const hmap = buildHeaderMap(rows[hidx]);
  const out=[]; let skip=0;
  for(let i=hidx+1;i<rows.length;i++){
    const r=rows[i]||[]; if(r.every(c=>c===''||c==null)) continue;
    const name=String(pickCell(r,hmap,'備品機器名','備品名','名称','商品')||'').trim();
    if(!name){ skip++; continue; }
    out.push({ id:String(pickCell(r,hmap,'ID','id')||'').trim()||kbItemNewId(),
      brand:kbBrandResolve(pickCell(r,hmap,'業態','ブランド','brand')),
      name, unit:String(pickCell(r,hmap,'単位')||'').trim(),
      price:parseFloat(String(pickCell(r,hmap,'単価(税抜)','単価（税抜）','単価','金額')||'').replace(/[^0-9.]/g,''))||0,
      stock:parseFloat(String(pickCell(r,hmap,'在庫数','在庫','数量')||'').replace(/[^0-9.]/g,''))||0,
      supplier:String(pickCell(r,hmap,'取引先詳細','取引先','仕入先')||'').trim() });
  }
  if(out.length===0){ toast('取り込める行がありません','error'); return; }
  if(!confirm(out.length+'件のマスタを登録します。よろしいですか？（スキップ '+skip+'件）')) return;
  if(!await kbItemsBulkSave(out)) return;
  await kbItemsFetch(); render();
  toast(out.length+'件のマスタを登録しました','success');
};

// ---- ダッシュボード新着バッジ ----
function setBadge(id,n){ const el=document.getElementById(id); if(!el) return; if(n>0){ el.textContent=(n>99?'99+':n); el.style.display='inline-flex'; } else { el.style.display='none'; } }
async function refreshBadges(){
  const period = currentSlipPeriod();
  const cnt = async (tbl,col,val)=>{ try{ const { count } = await sb.from(tbl).select('id',{count:'exact',head:true}).eq(col,val); return count||0; }catch(_){ return 0; } };
  const [t,f,k] = await Promise.all([ cnt('transfer_slips','month',period), cnt('food_loss','period',period), cnt('breakage','period',period) ]);
  State._badgeRaw = { transfers:t, foodloss:f, breakage:k }; // 実件数（既読判定の基準）
  // 表示は「未読（新着）＝実件数 − 既読件数」。開いた月度の件数を既読として差し引く。
  const disp = (section, raw) => Math.max(0, raw - secSeenCount(section, period));
  const dt = disp('transfers', t), df = disp('foodloss', f), dk = disp('breakage', k);
  State.badgeCounts = { transfers:dt, foodloss:df, breakage:dk };
  setBadge('badge-transfers',dt); setBadge('badge-foodloss',df); setBadge('badge-breakage',dk);
}

// =========================================================
// FevaCOIN（v9.12.0）：店舗ごとにコイン付与・月間/年間表彰・年間ランキング
//   付与＝①食材ロス少ない順 ②器物破損少ない順 ③棚卸金額(少ない順) の各1/2/3位
//   コンソールの coin フラグONで表示。集計対象は棚卸実施済み(合計>0)の店舗のみ
// =========================================================
function coinStoreName(id){ return storeDisp(id); }
// FevaCOIN のリアルコイン画像（未配置でも onerror で 🪙 に自動フォールバック）
const FEVACOIN_IMG = '/assets/fevacoin.png';
function coinIcon(px){
  px = px || 18;
  return `<img src="${FEVACOIN_IMG}" alt="FevaCOIN" class="fevacoin-ic" style="width:${px}px;height:${px}px;" onerror="this.outerHTML='🪙'">`;
}
function coinYear(){ return String(new Date().getFullYear()); }

async function coinLoadConfig(){
  try{
    const { data } = await sb.from('app_config').select('*').in('key',['coin_inv','coin_loss','coin_breakage']);
    const parse=(v,def)=>{ const a=String(v||'').split(',').map(n=>parseInt(n.trim(),10)).filter(n=>!isNaN(n)); return a.length?a:def; };
    for(const r of (data||[])){
      if(r.key==='coin_inv')      State.coinConfig.inv      = parse(r.value, State.coinConfig.inv);
      if(r.key==='coin_loss')     State.coinConfig.loss     = parse(r.value, State.coinConfig.loss);
      if(r.key==='coin_breakage') State.coinConfig.breakage = parse(r.value, State.coinConfig.breakage);
    }
  }catch(_){}
}
async function coinFetchAwards(year){
  try{
    const { data, error } = await sb.from('coin_awards').select('*').like('month', year+'-%');
    if(error){ return; }
    State.coinAwards = (data||[]).map(r=>({ id:r.id, month:r.month, storeId:r.store_id, brand:r.brand, category:r.category, rank:r.rank, coins:Number(r.coins)||0, awardedBy:r.awarded_by }));
  }catch(_){}
}
async function loadCoins(){
  const month = State.month;
  await coinLoadConfig();
  // 当月度の食材ロス・器物破損を集計用に取得
  try{ const {data:fl}=await sb.from('food_loss').select('store_id,amount_excl').eq('period',month);
       State.coinLoss=(fl||[]).map(r=>({storeId:r.store_id, amountExcl:Number(r.amount_excl)||0})); }catch(_){ State.coinLoss=[]; }
  try{ const {data:kb}=await sb.from('breakage').select('store_id,amount_excl').eq('period',month);
       State.coinBreakage=(kb||[]).map(r=>({storeId:r.store_id, amountExcl:Number(r.amount_excl)||0})); }catch(_){ State.coinBreakage=[]; }
  await coinFetchAwards(coinYear());
  State._coinLoadedFor = month;
}
function coinAutoLoad(){ if(State._coinLoadedFor !== State.month){ State._coinLoadedFor = State.month; loadCoins().then(()=>render()); } }

// 当月のライブ集計（確定前のプレビュー）
const COIN_ZERO_PENALTY = -10; // 0円（管理不足）ペナルティ：食材ロス・器物破損それぞれで減点
function coinComputeMonth(month){
  const elig = (State.stores||[]).filter(s=>{ try{ return getStoreTotals(s.id).total>0; }catch(_){ return false; } });
  const lossSum=(id)=> (State.coinLoss||[]).filter(r=>r.storeId===id).reduce((a,b)=>a+(Number(b.amountExcl)||0),0);
  const brkSum =(id)=> (State.coinBreakage||[]).filter(r=>r.storeId===id).reduce((a,b)=>a+(Number(b.amountExcl)||0),0);
  const rankAsc=(pool, valFn)=> pool.map(s=>({storeId:s.id, brand:s.brand, val:valFn(s.id)})).sort((a,b)=>a.val-b.val);
  const cat=(key, pool, valFn)=>{ const pts=State.coinConfig[key]||[0,0,0]; return rankAsc(pool, valFn).slice(0,3).map((x,i)=>({...x, category:key, rank:i+1, coins:pts[i]||0})); };
  // 0円ペナルティ：棚卸実施だが記録が0円＝マネジメント不足として減点
  const pen=(key, pool)=> pool.map(s=>({storeId:s.id, brand:s.brand, category:key, rank:0, coins:COIN_ZERO_PENALTY, penalty:true, val:0}));
  // 棚卸金額：棚卸実施店（合計>0）が対象
  const inv=cat('inv', elig, id=>{ try{ return getStoreTotals(id).total; }catch(_){ return 0; } });
  // 食材ロス・器物破損：記録がある店（>0円）を少ない順で表彰。0円の店は減点。
  const lossWin=cat('loss', elig.filter(s=>lossSum(s.id)>0), lossSum);
  const brkWin =cat('breakage', elig.filter(s=>brkSum(s.id)>0), brkSum);
  const lossPen=pen('loss', elig.filter(s=>lossSum(s.id)===0));
  const brkPen =pen('breakage', elig.filter(s=>brkSum(s.id)===0));
  const loss=[...lossWin, ...lossPen];
  const breakage=[...brkWin, ...brkPen];
  return { month, inv, loss, breakage, all:[...inv, ...loss, ...breakage] };
}
function coinMonthTotals(comp){ const m={}; comp.all.forEach(a=>{ m[a.storeId]=(m[a.storeId]||0)+a.coins; }); return m; }
function coinMedalByStore(comp){
  const best={};
  comp.all.forEach(a=>{ if(a.rank>=1 && a.rank<=3){ const e=a.rank===1?'🥇':a.rank===2?'🥈':'🥉'; if(best[a.storeId]===undefined || a.rank<best[a.storeId]._r){ best[a.storeId]={e, _r:a.rank}; } } });
  const out={}; Object.entries(best).forEach(([k,v])=>out[k]=v.e); return out;
}
function coinYearTotals(){ const m={}; (State.coinAwards||[]).forEach(a=>{ m[a.storeId]=(m[a.storeId]||0)+(Number(a.coins)||0); }); return m; }

// 店舗カード用バッジ（当月ライブ）
function coinStoreBadge(storeId){
  if(!getFeatureFlags().coin) return '';
  const comp = coinComputeMonth(State.month);
  const medal = coinMedalByStore(comp)[storeId];
  const mt = coinMonthTotals(comp)[storeId]||0;
  if(!medal && !mt) return '';
  return ` <span class="coin-badge">${medal||coinIcon(14)} ${mt}</span>`;
}

function coinEntryButton(){
  return `<button class="coin-entry-btn" data-action="goto-coins" title="FevaCOINを開く">
    <span class="ic">${coinIcon(52)}</span>
    <span class="lbl">優秀店舗の表彰・年間ランキング<br><b>FevaCOIN</b></span>
    <span class="chev">›</span>
  </button>`;
}

window.coinConfirmMonth = async function(){
  const role=State.user?.role; if(!(role==='admin'||role==='soumu')){ toast('権限がありません','error'); return; }
  const comp = coinComputeMonth(State.month);
  if(comp.all.length===0){ toast('対象データがありません（棚卸実施済みの店舗が必要）','error'); return; }
  if(!confirm(formatMonth(State.month)+' のコインを確定します。よろしいですか？')) return;
  const rows = comp.all.map(a=>({ id:`${comp.month}_${a.storeId}_${a.category}`, month:comp.month, store_id:a.storeId, brand:a.brand||null, category:a.category, rank:a.rank, coins:a.coins, awarded_by:State.user?.name||'' }));
  try{
    await sb.from('coin_awards').delete().eq('month', comp.month);
    const { error } = await sb.from('coin_awards').upsert(rows,{ onConflict:'id' });
    if(error){ toast('確定に失敗: '+(error.message||''),'error'); return; }
  }catch(e){ toast('確定に失敗しました','error'); return; }
  await coinFetchAwards(coinYear());
  render(); toast('今月のコインを確定しました','success');
};
window.coinCfgField = function(key,idx,val){ const a=State.coinConfig[key].slice(); a[idx]=parseInt(val,10)||0; State.coinConfig[key]=a; };
window.coinSaveConfig = async function(){
  const role=State.user?.role; if(!(role==='admin'||role==='soumu')){ toast('権限がありません','error'); return; }
  const rows=[ {key:'coin_inv',value:State.coinConfig.inv.join(',')}, {key:'coin_loss',value:State.coinConfig.loss.join(',')}, {key:'coin_breakage',value:State.coinConfig.breakage.join(',')} ];
  const { error } = await sb.from('app_config').upsert(rows,{ onConflict:'key' });
  toast(error?'保存に失敗':'コイン設定を保存しました', error?'error':'success');
};

window.coinExportExcel = function(){
  if (typeof XLSX === 'undefined') { toast('Excelライブラリ未読込', 'error'); return; }
  const comp = coinComputeMonth(State.month);
  const monthTop = Object.entries(coinMonthTotals(comp)).sort((a,b)=>b[1]-a[1]);
  const yearTop  = Object.entries(coinYearTotals()).sort((a,b)=>b[1]-a[1]);
  const wb = XLSX.utils.book_new();
  const titleStyle = { font:{ bold:true, sz:14 } };
  const headStyle  = { font:{ bold:true, color:{rgb:'FFFFFF'} }, fill:{ fgColor:{rgb:'D97706'} }, alignment:{ horizontal:'center' } };
  const fills = [ {fill:{fgColor:{rgb:'FEF3C7'}}}, {fill:{fgColor:{rgb:'EEF2F7'}}}, {fill:{fgColor:{rgb:'FFEDD5'}}} ];
  const buildSheet = (name, rows, colName) => {
    const aoa = [[name], ['順位', colName, 'コイン'], ...rows.map((r,i)=>[r.penalty?'減点(0円)':((i+1)+'位'), r.name, r.coins])];
    const ws = XLSX.utils.aoa_to_sheet(aoa);
    ws['!cols'] = [{wch:10},{wch:24},{wch:10}];
    if (ws['A1']) ws['A1'].s = titleStyle;
    ['A2','B2','C2'].forEach(c => { if (ws[c]) ws[c].s = headStyle; });
    rows.forEach((r,i) => { if (i < 3 && !r.penalty) ['A','B','C'].forEach(col => { const cell = ws[col+(i+3)]; if (cell) cell.s = fills[i]; }); });
    XLSX.utils.book_append_sheet(wb, ws, name);
  };
  buildSheet('年間ランキング', yearTop.map(([id,c])=>({name:coinStoreName(id),coins:c})), '店舗');
  buildSheet('今月総合(暫定)', monthTop.map(([id,c])=>({name:coinStoreName(id),coins:c})), '店舗');
  buildSheet('食材ロス少', comp.loss.map(a=>({name:coinStoreName(a.storeId),coins:a.coins,penalty:!!a.penalty})), '店舗');
  buildSheet('器物破損少', comp.breakage.map(a=>({name:coinStoreName(a.storeId),coins:a.coins,penalty:!!a.penalty})), '店舗');
  buildSheet('棚卸金額少', comp.inv.map(a=>({name:coinStoreName(a.storeId),coins:a.coins})), '店舗');
  XLSX.writeFile(wb, 'FevaCOIN_' + State.month + '_ランキング.xlsx');
};
window.coinPrintRanking = function(){
  const comp = coinComputeMonth(State.month);
  const monthTop = Object.entries(coinMonthTotals(comp)).sort((a,b)=>b[1]-a[1]);
  const yearTop  = Object.entries(coinYearTotals()).sort((a,b)=>b[1]-a[1]);
  const medalOf = (i) => i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1)+'位';
  const rkTable = (title, rows, colName) => {
    const body = rows.length ? rows.map((r,i)=> r.penalty
        ? `<tr style="background:#fef2f2;"><td class="pos" style="color:#b91c1c;">減点</td><td>${escapeHtml(r.name)}（0円・管理不足）</td><td class="num" style="color:#dc2626;font-weight:700;">${r.coins}</td></tr>`
        : `<tr class="${i<3?'rk'+(i+1):''}"><td class="pos">${medalOf(i)}</td><td>${escapeHtml(r.name)}</td><td class="num">${coinIcon(14)} ${r.coins}</td></tr>`).join('')
      : '<tr><td colspan="3" style="color:#94a3b8;">対象データがありません</td></tr>';
    return `<h3>${title}</h3><table class="rk"><thead><tr><th>順位</th><th>${colName}</th><th class="num">コイン</th></tr></thead><tbody>${body}</tbody></table>`;
  };
  const catRows = (arr) => arr.map(a=>({name:coinStoreName(a.storeId),coins:a.coins,penalty:!!a.penalty}));
  const html = '<html><head><meta charset="utf-8"><title>FevaCOIN ランキング</title>'+
    '<style>body{font-family:"BIZ UDPGothic","Hiragino Kaku Gothic ProN","Yu Gothic UI","Meiryo",sans-serif;padding:24px;color:#1e293b;}'+
    'h2{margin:0 0 4px;}h3{margin:18px 0 6px;font-size:15px;}'+
    'table.rk{width:100%;border-collapse:collapse;font-size:13px;margin-bottom:8px;}'+
    'table.rk th,table.rk td{border-bottom:1px solid #e5e7eb;padding:6px 8px;text-align:left;}'+
    'table.rk td.num,table.rk th.num{text-align:right;}table.rk td.pos{font-weight:800;white-space:nowrap;}'+
    'table.rk tr.rk1{background:#fef3c7;}table.rk tr.rk2{background:#eef2f7;}table.rk tr.rk3{background:#ffedd5;}</style></head><body>'+
    '<h2>'+coinIcon(22)+' FevaCOIN ランキング</h2><div style="color:#64748b;margin-bottom:6px;">'+formatMonth(State.month)+'</div>'+
    rkTable('🏆 年間ランキング（'+coinYear()+'・確定分）', yearTop.map(([id,c])=>({name:coinStoreName(id),coins:c})), '店舗')+
    rkTable('今月の総合（暫定）', monthTop.map(([id,c])=>({name:coinStoreName(id),coins:c})), '店舗')+
    rkTable('🥗 食材ロスが少ない', catRows(comp.loss), '店舗')+
    rkTable('🍽️ 器物破損が少ない', catRows(comp.breakage), '店舗')+
    rkTable('📦 棚卸金額（少ない順）', catRows(comp.inv), '店舗')+
    '</body></html>';
  const w = window.open('', '_blank'); if (!w) { toast('ポップアップを許可してください', 'error'); return; }
  w.document.write(html); w.document.close(); w.focus(); setTimeout(()=>{ try{ w.print(); }catch(_){} }, 300);
};
function coinCatTable(title, arr){
  const rows = arr.length ? arr.map(a=> a.penalty
      ? `<tr style="background:#fef2f2;"><td style="color:#b91c1c;font-weight:700;">✕</td><td>${escapeHtml(coinStoreName(a.storeId))}<div style="font-size:11px;color:#b91c1c;font-weight:600;">0円はありえません。マネジメントができていません</div></td><td class="num" style="color:#dc2626;font-weight:700;">${a.coins}</td></tr>`
      : `<tr><td>${a.rank}</td><td>${escapeHtml(coinStoreName(a.storeId))}</td><td class="num">${coinIcon(14)} ${a.coins}</td></tr>`).join('')
    : '<tr><td colspan="3" style="color:#94a3b8;">対象店舗がありません</td></tr>';
  return `<div class="coin-cat"><h4>${title}</h4><table class="fl-table"><thead><tr><th>順位</th><th>店舗</th><th class="num">コイン</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
function renderCoins(){
  if(!getFeatureFlags().coin){ return `<div class="fl-wrap"><div class="fl-card">FevaCOINは現在OFFです（KOESAコンソールで有効化）。<button class="btn btn-secondary btn-sm" data-action="home">戻る</button></div></div>`; }
  if(State._coinLoadedFor !== State.month){ setTimeout(()=>{ coinAutoLoad(); },0); }
  const comp = coinComputeMonth(State.month);
  const mt = coinMonthTotals(comp);
  const monthTop = Object.entries(mt).sort((a,b)=>b[1]-a[1]);
  const yt = coinYearTotals();
  const yearTop = Object.entries(yt).sort((a,b)=>b[1]-a[1]);
  const role=State.user?.role; const isAdmin=(role==='admin'||role==='soumu');
  const medal=(i)=> i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1)+'位';

  const monthAward = monthTop.length ? `<div class="coin-trophy"><div class="ct-ic">🏆</div><div><div class="ct-lbl">今月の総合トップ</div><div class="ct-name">${escapeHtml(coinStoreName(monthTop[0][0]))}</div><div class="ct-sub">${coinIcon(14)} ${monthTop[0][1]} コイン（${formatMonth(State.month)}・確定前の暫定）</div></div></div>` : '';
  const yearAward = yearTop.length ? `<div class="coin-trophy gold"><div class="ct-ic">👑</div><div><div class="ct-lbl">年間トップ（${coinYear()}・確定分）</div><div class="ct-name">${escapeHtml(coinStoreName(yearTop[0][0]))}</div><div class="ct-sub">${coinIcon(14)} ${yearTop[0][1]} コイン</div></div></div>` : '';

  const yearRows = yearTop.length ? yearTop.map(([id,c],i)=>`<tr class="${i<3?('rk'+(i+1)):''}"><td class="coin-rk-pos">${medal(i)}</td><td>${escapeHtml(coinStoreName(id))}</td><td class="num">${coinIcon(14)} ${c}</td></tr>`).join('')
    : '<tr><td colspan="3" style="color:#94a3b8;">まだ確定したコインがありません</td></tr>';

  const cfg = isAdmin ? `
    <div class="fl-card">
      <h3>⚙️ コイン設定（1位/2位/3位ポイント）</h3>
      ${['inv','loss','breakage'].map(k=>{ const lbl={inv:'棚卸金額(少ない順)',loss:'食材ロス(少ない順)',breakage:'器物破損(少ない順)'}[k]; const a=State.coinConfig[k];
        return `<div style="display:flex;align-items:center;gap:8px;margin:6px 0;flex-wrap:wrap;"><div style="min-width:150px;font-weight:600;">${lbl}</div>
          ${[0,1,2].map(i=>`<input type="number" style="width:64px" value="${a[i]}" oninput="coinCfgField('${k}',${i},this.value)"> <span style="color:#94a3b8;font-size:12px;">${i+1}位</span>`).join(' ')}</div>`; }).join('')}
      <div style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap;">
        <button class="btn btn-secondary btn-sm" data-action="coin-save-config">設定を保存</button>
        <button class="btn btn-primary btn-sm" data-action="coin-confirm">${coinIcon(16)} 今月のコインを確定する</button>
      </div>
      <div style="font-size:11px;color:#94a3b8;margin-top:6px;line-height:1.6;">確定すると年間ランキング・年間表彰に反映されます。再確定で上書きされます。集計対象は棚卸実施済み（合計>0）の店舗のみ。<br>※ 食材ロス・器物破損が<b>0円（記録なし）</b>の店舗は「管理不足」として各部門 <b>−10コイン</b>減点されます（両部門0円なら月−20）。</div>
    </div>` : '';

  return `
  <div class="fl-wrap">
    <div class="fl-card" style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <h1 style="margin:0;font-size:20px;color:#1e293b;display:flex;align-items:center;gap:8px;">${coinIcon(34)} FevaCOIN</h1>
      <span class="fl-period coin-period">${formatMonth(State.month)}</span>
      <div class="coin-tools">
        <button class="btn btn-secondary btn-sm" onclick="coinExportExcel()" type="button" title="ランキングをExcelで出力">📊 Excel</button>
        <button class="btn btn-secondary btn-sm" onclick="coinPrintRanking()" type="button" title="ランキングをPDF（印刷）で出力">🖨 PDF</button>
      </div>
    </div>

    <div class="coin-trophy-row">${monthAward}${yearAward}</div>

    <div class="fl-card">
      <h3>今月の獲得コイン（暫定・${formatMonth(State.month)}）</h3>
      <div class="coin-cats">
        ${coinCatTable('🥗 食材ロスが少ない', comp.loss)}
        ${coinCatTable('🍽️ 器物破損が少ない', comp.breakage)}
        ${coinCatTable('📦 棚卸金額(少ない順)', comp.inv)}
      </div>
    </div>

    <div class="fl-card">
      <h3>🏆 年間ランキング（${coinYear()}・確定分）</h3>
      <table class="fl-table coin-rk-table"><thead><tr><th>順位</th><th>店舗</th><th class="num">コイン</th></tr></thead><tbody>${yearRows}</tbody></table>
    </div>

    ${cfg}
  </div>`;
}

function renderTransfers() {
  const period = State.slipPeriod || currentSlipPeriod();
  const slips = visibleSlips();
  const u = State.user;
  const canCreate = u && (u.role === 'admin' || u.role === 'manager' || isStaffLike(u.role) || u.role === 'soumu');
  const statusLabel = (st) => st === 'approved' ? '<span class="badge done">本社承認済</span>'
    : st === 'received' ? '<span class="badge pending">受取済（本社承認待）</span>'
    : st === 'sent' ? '<span class="badge empty">受取待ち</span>' : '<span class="badge empty">下書き</span>';
  const rows = slips.length === 0 ? `<div class="empty-cat">当月度の伝票はありません。</div>` : slips.map(s => {
    const total = slipTotal(s);
    const canRecv = s.status === 'sent' && canReceiveSlip(s);
    const canApp = s.status === 'received' && canHqApprove();
    const isMgrUp = ['manager', 'admin', 'super_admin'].includes(State.user?.role);
    const canDel = isMgrUp || (s.status === 'sent' && (canCreateSlipFrom(s.fromStore) || isSlipCreator(s)));
    return `<div class="slip-card">
      <div class="slip-card-head">
        <span class="slip-route">${escapeHtml(slipStoreName(s.fromStore))} <span class="arr">→</span> ${escapeHtml(slipStoreName(s.toStore))}</span>
        ${statusLabel(s.status)}
        <span class="slip-dt">${escapeHtml(s.date || '')} ${escapeHtml(s.time || '')}</span>
      </div>
      <table class="slip-lines"><tbody>${(s.lines || []).map(l => `<tr><td>${escapeHtml(l.name)}</td><td class="num qty">${escapeHtml(slipQtyLabel(l))}</td><td class="num">${formatYen(l.amount)}</td></tr>`).join('')}<tr class="tot"><td>合計</td><td></td><td class="num">${formatYen(total)}</td></tr></tbody></table>
      <div class="slip-sig-line">販売: ${escapeHtml(s.sellerName || '—')}${s.sellerSig ? ' ㊞' : ''}　購入: ${escapeHtml(s.buyerName || '—')}${s.buyerSig ? ' ㊞' : ''}${s.hqBy ? `　本社: ${escapeHtml(s.hqBy)}` : ''}</div>
      ${s.buyerReason ? `<div class="slip-reason">購入理由: ${escapeHtml(s.buyerReason)}</div>` : ''}
      <div class="slip-actions">
        ${canRecv ? `<button class="btn btn-primary btn-sm" data-action="receive-slip" data-slip-id="${s.id}">受取・署名</button>` : ''}
        ${canApp ? `<button class="btn btn-primary btn-sm" data-action="approve-slip" data-slip-id="${s.id}">本社承認</button>` : ''}
        ${canDel ? `<button class="btn btn-danger btn-sm" data-action="delete-slip" data-slip-id="${s.id}">削除</button>` : ''}
      </div>
    </div>`;
  }).join('');
  return `
  <button class="btn btn-secondary btn-sm" data-action="home" style="margin-bottom:12px;">‹ ダッシュボードに戻る</button>
  <div class="slip-page-head">
    <div class="co">株式会社アモーレながすぎ</div>
    <h2>店舗間 売買伝票取引所</h2>
    <div class="period" style="display:flex;align-items:center;justify-content:center;gap:10px;">
      <button class="btn btn-outline btn-sm" onclick="slipChangePeriod(-1)" type="button" title="前の月度">‹</button>
      <span>${formatMonth(period)}（20日締め・21日〜翌月度）</span>
      <button class="btn btn-outline btn-sm" onclick="slipChangePeriod(1)" type="button" title="次の月度">›</button>
    </div>
    ${period !== currentSlipPeriod() ? `<div style="margin-top:6px;font-size:12px;font-weight:700;color:#b45309;background:#fef3c7;border:1px solid #fcd34d;border-radius:8px;display:inline-block;padding:3px 10px;">閲覧中：${formatMonth(period)}の伝票${canIssueSlipForPeriod(period) ? `（締め直後のため <u>${new Date().getMonth() + 1}月22日</u> まで発行可能）` : '（新規発行は当月度のみ）'}</div>` : ''}
    ${period === currentSlipPeriod() && canIssueSlipForPeriod(previousSlipPeriod()) ? `<div style="margin-top:6px;font-size:12px;font-weight:700;color:#b45309;background:#fef3c7;border:1px solid #fcd34d;border-radius:8px;display:inline-block;padding:3px 10px;">前月度（${formatMonth(previousSlipPeriod())}）の伝票も <u>${new Date().getMonth() + 1}月22日</u> まで発行できます（「‹」で前月度へ）</div>` : ''}
  </div>
  <div class="row" style="gap:8px;margin-bottom:12px;flex-wrap:wrap;align-items:center;">
    ${canCreate && canIssueSlipForPeriod(period) ? `<button class="btn btn-primary" data-action="new-slip">＋ 新規伝票を作成</button>` : ''}
    <div style="flex:1"></div>
    ${slips.length > 0 ? `<button class="btn btn-secondary btn-sm" data-action="print-slips">🖨 伝票を印刷</button>` : ''}
  </div>
  ${rows}
  `;
}

function slipItemOptionsHTML(brand){
  const items = (State.items[brand] || []).filter(it => !it.archived);
  let html = '<option value="">― 手入力 ―</option>';
  const cats = [...new Set(items.map(i => i.category || 'その他'))];
  cats.forEach(cat => {
    html += `<optgroup label="${escapeHtml(cat)}">`;
    items.filter(i => (i.category || 'その他') === cat).forEach(it => {
      html += `<option value="${escapeHtml(it.id)}" data-name="${escapeHtml(it.name)}" data-price="${Number(it.price) || 0}" data-unit="${escapeHtml(it.unit || '')}">${escapeHtml(it.name)}（${formatYen(Number(it.price) || 0)}/${escapeHtml(it.unit || '')}）</option>`;
    });
    html += '</optgroup>';
  });
  return html;
}
// 数量×単価 → 金額 を再計算（マスター選択時のみ。手入力は金額を直接入力）
window.slipRecalc = function(i){
  const qtyEl = document.getElementById('slip-line-qty-' + i);
  const amtEl = document.getElementById('slip-line-amt-' + i);
  if (!qtyEl || !amtEl) return;
  const unit = Number(amtEl.dataset.unitPrice || 0);
  if (unit > 0) { // マスター選択モード：自動計算
    const q = parseFloat(qtyEl.value);
    amtEl.value = q > 0 ? Math.round(unit * q * 100) / 100 : '';
  }
};
window.slipPickItem = function(sel, i){
  const nameEl = document.getElementById('slip-line-name-' + i);
  const qtyEl  = document.getElementById('slip-line-qty-' + i);
  const amtEl  = document.getElementById('slip-line-amt-' + i);
  if (sel.value) {
    // マスターから選択：商品名ロック・単価保持・数量×単価で金額を自動計算（金額は読み取り専用）
    const opt = sel.options[sel.selectedIndex];
    const p = Number(opt.getAttribute('data-price')) || 0;
    const unitLabel = opt.getAttribute('data-unit') || '';
    if (nameEl) { nameEl.value = opt.getAttribute('data-name') || ''; nameEl.readOnly = true; nameEl.classList.add('locked'); }
    if (qtyEl)  { if (!parseFloat(qtyEl.value)) qtyEl.value = 1; qtyEl.placeholder = unitLabel ? ('数量(' + unitLabel + ')') : '数量'; }
    if (amtEl)  { amtEl.dataset.unitPrice = String(p); amtEl.readOnly = true; amtEl.classList.add('locked'); }
    slipRecalc(i);
  } else {
    // 手入力：商品名・金額を直接入力
    if (nameEl) { nameEl.readOnly = false; nameEl.classList.remove('locked'); nameEl.value = ''; nameEl.focus(); }
    if (qtyEl)  { qtyEl.placeholder = '数量'; }
    if (amtEl)  { amtEl.dataset.unitPrice = ''; amtEl.readOnly = false; amtEl.classList.remove('locked'); amtEl.value = ''; }
  }
};
window.slipReloadItems = function(){
  const fromSel = document.getElementById('slip-from');
  const brand = fromSel ? storeBrandOf(fromSel.value) : null;
  const opts = slipItemOptionsHTML(brand);
  for (let i = 0; i < 5; i++) {
    const sel = document.getElementById('slip-line-pick-' + i);
    if (sel) { sel.innerHTML = opts; sel.value = ''; }
    const nameEl = document.getElementById('slip-line-name-' + i);
    if (nameEl) { nameEl.readOnly = false; nameEl.classList.remove('locked'); nameEl.value = ''; }
    const qtyEl = document.getElementById('slip-line-qty-' + i);
    if (qtyEl) { qtyEl.value = ''; qtyEl.placeholder = '数量'; }
    const amtEl = document.getElementById('slip-line-amt-' + i);
    if (amtEl) { amtEl.dataset.unitPrice = ''; amtEl.readOnly = false; amtEl.classList.remove('locked'); amtEl.value = ''; }
  }
};
// 伝票の下書き自動保存（端末ローカルに保存。誤って閉じても再開できる）
function slipDraftKey(){ return 'slipDraft_' + (State.user?.id || 'anon'); }
function slipSaveDraft(){
  try {
    const g = id => (document.getElementById(id) || {}).value;
    const lines = [];
    for (let i = 0; i < 5; i++) {
      const pick = document.getElementById('slip-line-pick-' + i);
      lines.push({
        pick: pick ? pick.value : '',
        name: g('slip-line-name-' + i) || '',
        qty: g('slip-line-qty-' + i) || '',
        amt: g('slip-line-amt-' + i) || '',
      });
    }
    const draft = { from: g('slip-from'), to: g('slip-to'), date: g('slip-date'), time: g('slip-time'),
      sellerName: g('slip-seller-name'), lines, savedAt: Date.now() };
    // 中身が空なら保存しない
    const hasContent = lines.some(l => l.name || l.qty || l.amt || (l.pick && l.pick !== ''));
    if (hasContent) localStorage.setItem(slipDraftKey(), JSON.stringify(draft));
  } catch(_){}
}
function slipLoadDraft(){ try { const s = localStorage.getItem(slipDraftKey()); return s ? JSON.parse(s) : null; } catch(_){ return null; } }
function slipClearDraft(){ try { localStorage.removeItem(slipDraftKey()); } catch(_){} }

function openCreateSlipModal() {
  const u = State.user;
  const _draft = slipLoadDraft();
  let fromStores;
  if (u.role === 'admin' || u.role === 'soumu') fromStores = State.stores;
  else if (u.role === 'manager') fromStores = State.stores.filter(s => u.approveBrand === 'all' || s.brand === u.approveBrand);
  else {
    // スタッフ: 担当店舗があればそれを既定に、未設定なら全店から選択可
    fromStores = State.stores.filter(s => s.id === u.defaultStore);
    if (fromStores.length === 0) fromStores = State.stores;
  }
  if (fromStores.length === 0) { toast('発行できる店舗がありません', 'error'); return; }
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const initBrand = storeBrandOf(fromStores[0].id);
  const itemOpts = slipItemOptionsHTML(initBrand);
  const lineRows = Array.from({ length: 5 }, (_, i) => `
    <div class="slip-line-row">
      <select class="select slip-line-pick" id="slip-line-pick-${i}" onchange="slipPickItem(this,${i})">${itemOpts}</select>
      <input class="input" id="slip-line-name-${i}" placeholder="商品名 ${i + 1}（手入力）">
      <input class="input num" id="slip-line-qty-${i}" type="number" min="0" step="0.01" placeholder="数量" oninput="slipRecalc(${i})">
      <input class="input num" id="slip-line-amt-${i}" type="number" min="0" placeholder="金額">
    </div>`).join('');
  // 店舗名の重複対策：常に先頭に【ブランド名】を付ける（名前にブランド名が既にある場合は取り除いてから付け直す）
  const slipStoreOptLabel = (s) => {
    const bl = brandLabel(s.brand);
    let nm = s.name || '';
    if (bl && nm.startsWith(bl)) nm = nm.slice(bl.length).replace(/^[\s　]+/, '');
    return `【${bl}】${nm || s.name}`;
  };
  const brandSort = (a, b) => {
    const oa = (State.brands.find(x => x.id === a.brand)?.sortOrder ?? 999);
    const ob = (State.brands.find(x => x.id === b.brand)?.sortOrder ?? 999);
    return oa - ob || (a.name || '').localeCompare(b.name || '', 'ja');
  };
  const fromOpts = fromStores.slice().sort(brandSort).map(s => `<option value="${s.id}">${escapeHtml(slipStoreOptLabel(s))}</option>`).join('');
  const toOpts = State.stores.slice().sort(brandSort).map(s => `<option value="${s.id}">${escapeHtml(slipStoreOptLabel(s))}</option>`).join('');
  const draftName = (_draft && _draft.sellerName != null) ? _draft.sellerName : (u.name || '');
  openModal({
    title: '売買伝票を作成（販売側）',
    confirmLabel: '発行する',
    dismissible: false,
    onCancel: async () => {
      slipSaveDraft();
      if (!confirm('入力内容を下書きとして保存して閉じますか？\n（「キャンセル」を押すと編集に戻ります）')) return false;
      toast('下書きを保存しました。次回開いたときに続きから入力できます', 'info');
      return true;
    },
    body: `
      <div class="stack">
        ${_draft ? `<div class="slip-draft-note" style="background:#eff6ff;border:1px solid #93c5fd;border-radius:8px;padding:8px 10px;font-size:12px;color:#1d4ed8;display:flex;justify-content:space-between;align-items:center;gap:8px;">📝 前回の下書きを復元しました<button type="button" class="btn btn-secondary btn-sm" onclick="slipClearDraft();document.querySelectorAll('.modal-backdrop').forEach(e=>e._closeModal&&e._closeModal());openCreateSlipModal();">下書きを破棄</button></div>` : ''}
        <div class="row">
          <div class="grow"><label class="field">日付</label><input class="input" id="slip-date" type="date" value="${(_draft && _draft.date) || dateStr}"></div>
          <div class="grow"><label class="field">時間</label><input class="input" id="slip-time" type="time" value="${(_draft && _draft.time) || timeStr}"></div>
        </div>
        <div><label class="field">販売店舗（自店）</label><select class="select" id="slip-from" onchange="slipReloadItems()">${fromOpts}</select></div>
        <div><label class="field">購入店舗</label><select class="select" id="slip-to">${toOpts}</select></div>
        <label class="field">明細（最大5件／商品リストから選択 または 手入力）</label>
        ${lineRows}
        <div><label class="field">対応者氏名</label><input class="input" id="slip-seller-name" value="${escapeHtml(draftName)}"></div>
        <label class="field">認印（対応者氏名から自動生成）</label>
        <div class="sign-seal-wrap" style="display:flex;align-items:center;gap:12px;padding:8px 0;">
          <div id="slip-seller-seal" class="sign-seal">${sealHtml(u.name || '', 72)}</div>
          <span class="muted small">手書き不要。氏名を入れると朱印を自動作成します。</span>
        </div>
      </div>`,
    onConfirm: async () => {
      const from = document.getElementById('slip-from').value;
      const to = document.getElementById('slip-to').value;
      if (from === to) { toast('販売店舗と購入店舗が同じです', 'error'); return false; }
      const lines = [];
      for (let i = 0; i < 5; i++) {
        const nm = document.getElementById('slip-line-name-' + i).value.trim();
        const amtEl = document.getElementById('slip-line-amt-' + i);
        const qty = parseFloat(document.getElementById('slip-line-qty-' + i).value);
        const amt = parseFloat(amtEl.value);
        const unit = Number(amtEl.dataset.unitPrice || 0);
        if (nm) lines.push({
          name: nm,
          qty: isNaN(qty) ? null : qty,
          unitPrice: unit > 0 ? unit : null,
          amount: isNaN(amt) ? 0 : amt,
        });
      }
      if (lines.length === 0) { toast('明細を1件以上入力してください', 'error'); return false; }
      const sellerName = document.getElementById('slip-seller-name').value.trim();
      if (!sellerName) { toast('対応者氏名を入力してください', 'error'); return false; }
      const slip = {
        id: 'slip_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
        month: (canIssueSlipForPeriod(State.slipPeriod) ? State.slipPeriod : currentSlipPeriod()), fromStore: from, toStore: to,
        date: document.getElementById('slip-date').value, time: document.getElementById('slip-time').value,
        lines, sellerName, sellerSig: 'seal', sellerAt: new Date().toISOString(),
        status: 'sent', createdBy: u.name || ''
      };
      const ok = await storage.saveTransferSlip(slip);
      if (ok === false) { toast('保存に失敗：' + (_lastDbError || ''), 'error'); return false; }
      slipClearDraft();
      await loadTransfers(); toast('伝票を発行しました', 'success'); render(); return true;
    }
  });
  setTimeout(() => {
    const nm = document.getElementById('slip-seller-name');
    const sl = document.getElementById('slip-seller-seal');
    if (nm && sl) nm.addEventListener('input', () => { sl.innerHTML = sealHtml(nm.value.trim(), 72); });
    // 下書きの復元：店舗・明細をプリフィル
    if (_draft) {
      const setV = (id, v) => { const el = document.getElementById(id); if (el && v != null && v !== '') el.value = v; };
      setV('slip-from', _draft.from); setV('slip-to', _draft.to);
      if (_draft.from) slipReloadItems();
      (_draft.lines || []).forEach((l, i) => {
        const pick = document.getElementById('slip-line-pick-' + i);
        if (pick && l.pick) { pick.value = l.pick; slipPickItem(pick, i); }
        setV('slip-line-name-' + i, l.name);
        setV('slip-line-qty-' + i, l.qty);
        setV('slip-line-amt-' + i, l.amt);
      });
    }
    // 入力のたびに下書き自動保存
    const modal = document.querySelector('.modal-backdrop .modal');
    if (modal) modal.addEventListener('input', () => slipSaveDraft());
  }, 30);
}

function openReceiveSlipModal(id) {
  const s = State.transferSlips.find(x => x.id === id);
  if (!s) return;
  if (!canReceiveSlip(s)) { toast('権限がありません', 'error'); return; }
  const u = State.user;
  openModal({
    title: '受取・署名（購入側）',
    confirmLabel: '受取を確定する',
    body: `<div class="stack">
      <div class="muted small">${escapeHtml(slipStoreName(s.fromStore))} → ${escapeHtml(slipStoreName(s.toStore))}　合計 ${formatYen(slipTotal(s))}</div>
      <table class="slip-lines"><tbody>${(s.lines || []).map(l => `<tr><td>${escapeHtml(l.name)}</td><td class="num qty">${escapeHtml(slipQtyLabel(l))}</td><td class="num">${formatYen(l.amount)}</td></tr>`).join('')}</tbody></table>
      <div><label class="field">受取対応者氏名</label><input class="input" id="slip-buyer-name" value="${escapeHtml(u.name || '')}"></div>
      <div><label class="field">購入理由（任意・50文字以内）</label><input class="input" id="slip-buyer-reason" maxlength="50" placeholder="例: 在庫切れのため融通してもらった" value="${escapeHtml(s.buyerReason || '')}"></div>
      <label class="field">認印（受取対応者氏名から自動生成）</label>
      <div class="sign-seal-wrap" style="display:flex;align-items:center;gap:12px;padding:8px 0;">
        <div id="slip-buyer-seal" class="sign-seal">${sealHtml(u.name || '', 72)}</div>
        <span class="muted small">手書き不要。氏名を入れると朱印を自動作成します。</span>
      </div>
    </div>`,
    onConfirm: async () => {
      const name = document.getElementById('slip-buyer-name').value.trim();
      if (!name) { toast('受取対応者氏名を入力してください', 'error'); return false; }
      const reason = (document.getElementById('slip-buyer-reason')?.value || '').trim().slice(0, 50);
      s.buyerName = name; s.buyerSig = 'seal'; s.buyerAt = new Date().toISOString(); s.buyerReason = reason; s.status = 'received';
      const ok = await storage.saveTransferSlip(s);
      if (ok === false) { toast('保存に失敗：' + (_lastDbError || ''), 'error'); return false; }
      await loadTransfers(); toast('受取・署名しました', 'success'); render(); return true;
    }
  });
  setTimeout(() => { const nm = document.getElementById('slip-buyer-name'); const sl = document.getElementById('slip-buyer-seal'); if (nm && sl) nm.addEventListener('input', () => { sl.innerHTML = sealHtml(nm.value.trim(), 72); }); }, 30);
}

async function hqApproveSlip(id) {
  if (!canHqApprove()) { toast('権限がありません', 'error'); return; }
  const s = State.transferSlips.find(x => x.id === id); if (!s) return;
  if (!confirm('この伝票を本社承認しますか？')) return;
  s.hqBy = (State.user && State.user.name) || ''; s.hqAt = new Date().toISOString(); s.status = 'approved';
  const ok = await storage.saveTransferSlip(s);
  if (ok === false) { toast('保存に失敗：' + (_lastDbError || ''), 'error'); return; }
  await loadTransfers(); toast('本社承認しました', 'success'); render();
}

async function deleteSlip(id) {
  const s = State.transferSlips.find(x => x.id === id); if (!s) return;
  const isMgrUp = ['manager', 'admin', 'super_admin'].includes(State.user?.role);
  // 業態責任者以上はどの状態の伝票も削除可。それ以外は発行店舗が「受取待ち」の間のみ
  if (!isMgrUp) {
    if (!canCreateSlipFrom(s.fromStore) && !isSlipCreator(s)) { toast('権限がありません', 'error'); return; }
    if (s.status !== 'sent') { toast('受取・承認済の伝票の削除は業態責任者以上のみ可能です', 'error'); return; }
  }
  const warn = s.status !== 'sent' ? '\n※ 受取・承認済の伝票です。削除すると集計からも除外されます。' : '';
  if (!confirm(`この伝票を削除しますか？\n${slipStoreName(s.fromStore)} → ${slipStoreName(s.toStore)}（${formatYen(slipTotal(s))}）${warn}`)) return;
  const ok = await storage.deleteTransferSlip(id);
  if (ok === false) { toast('削除に失敗：' + (_lastDbError || ''), 'error'); return; }
  await loadTransfers(); toast('削除しました', 'success'); render();
}

function slipPrintBox(s) {
  const total = slipTotal(s);
  const lineRows = (s.lines || []).map(l => `<tr><td>${escapeHtml(l.name)}</td><td class="num qty">${escapeHtml(slipQtyLabel(l))}</td><td class="num">${formatYen(l.amount)}</td></tr>`).join('');
  return `<div class="slip-print-box">
    <div class="slip-print-head"><div class="co">株式会社アモーレながすぎ</div><div class="ttl">店舗間 売買伝票</div><div class="meta">${formatMonth(s.month)}　${escapeHtml(s.date || '')} ${escapeHtml(s.time || '')}</div></div>
    <div class="slip-print-route">${escapeHtml(slipStoreName(s.fromStore))} → ${escapeHtml(slipStoreName(s.toStore))}</div>
    <table class="slip-print-table"><tbody>${lineRows}<tr class="tot"><td colspan="2">合計</td><td class="num">${formatYen(total)}</td></tr></tbody></table>
    ${s.buyerReason ? `<div class="slip-print-reason">購入理由: ${escapeHtml(s.buyerReason)}</div>` : ''}
    <div class="slip-print-sigs">
      <div class="sig"><div class="lbl">販売 ${escapeHtml(s.sellerName || '')}</div>${s.sellerName ? sealHtml(s.sellerName, 64) : '<div class="noimg"></div>'}</div>
      <div class="sig"><div class="lbl">購入 ${escapeHtml(s.buyerName || '')}</div>${s.buyerName ? sealHtml(s.buyerName, 64) : '<div class="noimg"></div>'}</div>
    </div>
    <div class="slip-print-hq">${s.hqBy ? `本社承認: ${escapeHtml(s.hqBy)}　${s.hqAt ? new Date(s.hqAt).toLocaleDateString('ja-JP') : ''}` : '本社未承認'}</div>
  </div>`;
}
function buildSlipsPrintHTML() {
  const slips = visibleSlips();
  if (slips.length === 0) return `<div class="p-header"><h1>店舗間 売買伝票</h1></div><div style="padding:12pt;">当月度の伝票はありません。</div>`;
  // 明細の多い伝票でも見切れないよう、固定6分割ではなく内容に合わせて自動レイアウト。
  // 明細が多い伝票（6行超）は横1列（幅いっぱい）で大きく、少ない伝票は2列で省スペースに。
  return `<div class="slips-print-flow">${slips.map(s => {
    const many = (s.lines || []).length > 6;
    return `<div class="slip-print-cell${many ? ' wide' : ''}">${slipPrintBox(s)}</div>`;
  }).join('')}</div>`;
}
function printSlips() {
  const area = document.getElementById('print-area');
  area.innerHTML = buildSlipsPrintHTML();
  setTimeout(() => { window.print(); setTimeout(() => { area.innerHTML = ''; }, 500); }, 50);
}

function renderDashboard() {
  const brand = State.brand;
  const stores = State.stores.filter(s => brand === 'all' || s.brand === brand);

  const sortedBrands = (State.brands || []).slice().sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
  const brandStats = sortedBrands.map(brandObj => {
    const bStores = State.stores.filter(s => s.brand === brandObj.id);
    let food = 0, sup = 0;
    for (const s of bStores) { const t = getStoreTotals(s.id); food += t.food; sup += t.supplies; }
    const done = bStores.filter(s => getStoreStatus(s.id) === 'done').length;
    return { brand: brandObj, stores: bStores, food, sup, done };
  });

  setTimeout(()=>{ try{ refreshBadges(); }catch(_){ } }, 0);
  if(getFeatureFlags().coin){ setTimeout(()=>{ try{ coinAutoLoad(); }catch(_){ } }, 0); }

  return `
  <div class="month-strip">
    <button data-action="month-prev" aria-label="前月">‹</button>
    <div class="month-label">${formatMonth(State.month)}</div>
    <button data-action="month-next" aria-label="次月">›</button>
  </div>

  <div class="entry-stack">
    <button class="slip-exchange-btn" data-action="goto-transfers" title="店舗間 売買伝票取引所を開く">
      <img src="/assets/inline-1.png" alt="">
      <span class="lbl">アモーレながすぎ店舗間<br><b>売買伝票取引所</b></span>
      <span class="entry-badge" id="badge-transfers" style="display:none"></span>
      <span class="chev">›</span>
    </button>
${getFeatureFlags().foodloss ? `    <button class="floss-entry-btn" data-action="goto-foodloss" title="食材ロス管理を開く">
      <span class="ic">🗑️</span>
      <span class="lbl">毎月の廃棄を記録<br><b>食材ロス管理</b></span>
      <span class="entry-badge" id="badge-foodloss" style="display:none"></span>
      <span class="chev">›</span>
    </button>` : ''}
${getFeatureFlags().breakage ? `    <button class="kbreak-entry-btn" data-action="goto-breakage" title="器物破損管理を開く">
      <span class="ic">🍽️</span>
      <span class="lbl">皿・備品の在庫/破損を記録<br><b>器物破損管理</b></span>
      <span class="entry-badge" id="badge-breakage" style="display:none"></span>
      <span class="chev">›</span>
    </button>` : ''}
    ${getFeatureFlags().coin ? coinEntryButton() : ''}
  </div>

  ${renderBulletinBoard()}

  <fieldset class="dash-section"><legend>📊 棚卸進捗状況</legend>
    ${renderSoumuConfirmSection()}
    ${renderApprovalSummary()}
    <div class="totals-grid">
      ${brandStats.map(st => `
      <div class="stat-card accent-${st.brand.id}">
        <div class="label">${escapeHtml(st.brand.name)} 合計</div>
        <div class="value num">${formatYen(st.food + st.sup)}</div>
        <div class="sub-amounts">
          <span>食材 <b>${formatYen(st.food)}</b></span>
          <span>備品 <b>${formatYen(st.sup)}</b></span>
        </div>
      </div>
      `).join('')}
      <div class="stat-card">
        <div class="label">完了状況</div>
        <div class="value" style="font-size:14px;">
          ${brandStats.map(st => `<div>${escapeHtml(st.brand.name)} ${st.done}/${st.stores.length}</div>`).join('')}
        </div>
      </div>
    </div>
  </fieldset>

  <fieldset class="dash-section"><legend>🏢 業態選択</legend>
    <div class="brand-pick">
      <button class="brand-pick-btn ${brand === 'all' ? 'active' : ''}" data-action="filter-brand" data-brand="all">すべて</button>
      ${sortedBrands.map(b => `<button class="brand-pick-btn ${brand === b.id ? 'active' : ''}" data-action="filter-brand" data-brand="${escapeHtml(b.id)}">${escapeHtml(b.name)}</button>`).join('')}
    </div>
    <div style="margin-top:12px;text-align:right;">
      <button class="btn btn-secondary btn-sm" data-action="export-all-xlsx" data-brand="${brand}">
        📥 ${brand === 'all' ? '全店' : brandLabel(brand)}Excel出力
      </button>
    </div>
  </fieldset>

  ${renderStoresList(stores)}

  <fieldset class="dash-section"><legend>🏆 ランキング・印刷</legend>
    ${renderRankings()}
    ${renderAiSupportPromo()}
  </fieldset>

  <fieldset class="dash-section"><legend>⚠️ アラート状況・改善コメント</legend>
    ${renderAlertSection(stores)}
  </fieldset>

  <fieldset class="dash-section"><legend>✅ 業態責任者 確認・承認状況</legend>
    ${renderApprovalSection()}
  </fieldset>
  `;
}

function getSoumuConfirmation() {
  return (State.soumuConfirmations && State.soumuConfirmations[State.month]) || null;
}
function isSoumuConfirmed() { return !!getSoumuConfirmation(); }

function renderSoumuConfirmSection() {
  const conf = getSoumuConfirmation();
  const role = State.user?.role;
  const canConfirm = role === 'soumu' || role === 'admin';
  if (conf) {
    return `<div class="soumu-confirmed-banner">
      <div class="big-check">✓</div>
      <div class="sc-text">
        <div class="title">本社確認完了</div>
        <div class="sub">${formatMonth(State.month)}　確認者: ${escapeHtml(conf.by || '')}　${conf.at ? new Date(conf.at).toLocaleString('ja-JP') : ''}</div>
      </div>
      ${canConfirm ? `<button class="btn btn-secondary btn-sm" data-action="revoke-soumu">取り消す</button>` : ''}
    </div>`;
  }
  if (!canConfirm) return '';
  const block = soumuBlockReason();
  if (block) {
    return `<div class="soumu-block">
      本社確認に進めません。<strong>${escapeHtml(storeDisp(block.store))}</strong> の業態責任者 <strong>${escapeHtml(block.managerName)}</strong> さんの承認作業を先に実施してください。
    </div>`;
  }
  return `<div class="soumu-confirm-ready">
    <div>✓ 全店の確認・署名が完了しました。本社総務部の最終確認を行ってください。</div>
    <button class="btn btn-primary" data-action="confirm-soumu">本社確認完了</button>
  </div>`;
}

async function confirmSoumu() {
  const role = State.user?.role;
  if (role !== 'soumu' && role !== 'admin') { toast('権限がありません', 'error'); return; }
  const block = soumuBlockReason();
  if (block) {
    toast(`${storeDisp(block.store)}の業態責任者 ${block.managerName}さんの承認作業を先に実施してください`, 'error');
    return;
  }
  if (!confirm(`${formatMonth(State.month)} の本社確認を完了しますか？`)) return;
  State.soumuConfirmations = State.soumuConfirmations || {};
  State.soumuConfirmations[State.month] = { by: (State.user && State.user.name) || '', at: new Date().toISOString() };
  const ok = await storage.set('app_settings', { soumu_confirmations: State.soumuConfirmations });
  if (ok === false) { toast('保存に失敗：' + (_lastDbError || 'app_settingsを確認してください'), 'error'); return; }
  toast('本社確認を完了しました', 'success');
  render();
}
async function revokeSoumu() {
  const role = State.user?.role;
  if (role !== 'soumu' && role !== 'admin') { toast('権限がありません', 'error'); return; }
  if (!confirm('本社確認完了を取り消しますか？')) return;
  State.soumuConfirmations = State.soumuConfirmations || {};
  delete State.soumuConfirmations[State.month];
  const ok = await storage.set('app_settings', { soumu_confirmations: State.soumuConfirmations });
  if (ok === false) { toast('保存に失敗：' + (_lastDbError || ''), 'error'); return; }
  toast('本社確認を取り消しました', 'success');
  render();
}

function renderApprovalSummary() {
  const cards = [];
  for (const brand of allBrands()) {
    const stores = State.stores.filter(s => s.brand === brand);
    if (stores.length === 0) continue;
    const signed = stores.filter(s => isStoreSigned(s.id)).length;
    const label = brandLabel(brand);
    const cls = signed === stores.length ? 'approved' : (signed > 0 ? 'pending' : 'notready');
    const value = signed === stores.length ? '全店 確認・署名完了' : `承認進捗 ${signed}/${stores.length}店`;
    cards.push(`<div class="approval-summary-card ${cls}">
      <div class="badge-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
      <div class="info"><div class="label">${label}</div><div class="value">${value}</div></div>
    </div>`);
  }
  return `<div class="approval-summary">${cards.join('')}</div>`;
}

function renderApprovalSection() {
  const block = soumuBlockReason();
  const rows = State.stores.map(s => {
    const signed = isStoreSigned(s.id);
    const checked = isStoreChecked(s.id);
    const st = signed ? `<span class="badge done">署名済</span>`
      : (checked ? `<span class="badge pending">確認のみ</span>` : `<span class="badge empty">未確認</span>`);
    const inv = State.inventory[s.id] || {};
    return `<div class="approve-status-row">
      <span class="brand-tag ${s.brand}">${brandLabel(s.brand)}</span>
      <span class="name">${escapeHtml(storeDisp(s))}</span>
      ${st}
      <span class="by">${signed ? escapeHtml(inv.mgrConfirmedBy || '') : ''}</span>
    </div>`;
  }).join('');
  const banner = block
    ? `<div class="soumu-block">本社確認に進めません。<strong>${escapeHtml(storeDisp(block.store))}</strong> の業態責任者 <strong>${escapeHtml(block.managerName)}</strong> さんの承認作業を先に実施してください。</div>`
    : `<div class="soumu-ready">✓ 全店の確認・署名が完了しました。本社総務部の最終確認に進めます。</div>`;
  return `
    <div class="approval-section">
      <div class="section-title" style="font-size:20px;font-weight:800;color:#1e293b;">業態責任者 承認状況
        <span style="display:block;font-size:14px;font-weight:800;color:#dc2626;margin-top:4px;line-height:1.5;">24日〜役員押印となります。期日までに責任者確認を完了させてください。</span>
      </div>
      ${banner}
      <div class="approve-status-list">${rows}</div>
    </div>`;
}

async function submitApproval(brand) {
  const nameEl = document.getElementById(`approver-name-${brand}`);
  if (!nameEl || !nameEl.value.trim()) {
    toast('承認者氏名を入力してください', 'error');
    return;
  }
  // 入力中（未完了）の店舗が1つでもあれば承認させない（多端末同時利用での取りこぼし防止）
  const brandStores = State.stores.filter(s => s.brand === brand);
  const notDone = brandStores.filter(s => getStoreStatus(s.id) !== 'done');
  if (notDone.length > 0) {
    toast(`未完了の店舗があります（${notDone.map(s => storeDisp(s)).join('、')}）。全店完了後に承認できます`, 'error');
    render();
    return;
  }
  // 認印方式: 画像/base64は保存しない（承認者氏名から朱印を表示）
  const signature = null;
  if (!confirm(`${brandLabel(brand)}の棚卸を承認しますか？\n承認者: ${nameEl.value.trim()}`)) return;
  State.approvals[brand] = {
    by: nameEl.value.trim(),
    at: new Date().toISOString(),
    signature: signature,
  };
  await saveApprovals();
  toast(`${brandLabel(brand)}を承認しました`, 'success');
  render();
}

async function revokeApproval(brand) {
  if (!confirm(`${brandLabel(brand)}の承認を取り消しますか？`)) return;
  delete State.approvals[brand];
  await saveApprovals();
  toast('承認を取り消しました', 'success');
  render();
}

// =========================================================
// Phase A: アラート状況（可視化 / ランキング / コメント / 印刷）
// =========================================================
function storeBrandOf(storeId) {
  const s = State.stores.find(x => x.id === storeId);
  return s ? s.brand : null;
}
function canEditStoreComment(storeId) {
  const u = State.user; if (!u) return false;
  if (u.role === 'admin') return true;
  if (u.role === 'manager' && (u.approveBrand === 'all' || u.approveBrand === storeBrandOf(storeId))) return true;
  if (isStaffLike(u.role) && u.defaultStore === storeId) return true;
  return false;
}
// 自店の店長・リーダー（役職に「店長」「リーダー」「係長」「副店長」「SV」を含むスタッフ）
function isStoreLeader(storeId) {
  const u = State.user; if (!u) return false;
  if (!isStaffLike(u.role) || u.defaultStore !== storeId) return false;
  if (u.role === 'store_leader' || u.role === 'trainer') return true; // 店舗リーダー・トレーナーは役職に関わらずOK
  const pos = u.position || '';
  return ['店長', 'リーダー', '係長', '副店長', 'SV'].some(k => pos.includes(k));
}
function canEditManagerComment(storeId) {
  const u = State.user; if (!u) return false;
  if (u.role === 'admin') return true;
  if (u.role === 'manager' && (u.approveBrand === 'all' || u.approveBrand === storeBrandOf(storeId))) return true;
  // 自店の店長・リーダーも改善策（改善報告）を入力できる
  if (isStoreLeader(storeId)) return true;
  return false;
}
function getStoreAlertData(storeId) {
  const list = getHighValueItems(storeId);
  const totalAmount = list.reduce((s, it) => s + it.amount, 0);
  return { count: list.length, totalAmount, items: list };
}
function buildAlertRanking(stores) {
  return stores
    .map(s => ({ store: s, ...getStoreAlertData(s.id) }))
    .filter(r => r.count > 0)
    .sort((a, b) => (b.count - a.count) || (b.totalAmount - a.totalAmount));
}

function renderAlertSection(stores) {
  const ranking = buildAlertRanking(stores);

  const rankingHtml = ranking.length === 0
    ? `<div class="ranking-empty">当月のアラートはありません 🎉</div>`
    : ranking.map((r, i) => {
        const rank = i + 1;
        let badge = '';
        if (rank === 1) badge = 'alert-rank-1';
        else if (rank === 2) badge = 'alert-rank-2';
        else if (rank === 3) badge = 'alert-rank-3';
        return `
        <div class="alert-rank-row">
          <span class="alert-rank-badge ${badge}">${rank}</span>
          <span class="name">${escapeHtml(storeDisp(r.store))}</span>
          <span class="alert-count">${r.count}件</span>
          <span class="amount num">${formatYen(r.totalAmount)}</span>
        </div>`;
      }).join('');

  const detailHtml = ranking.length === 0 ? '' : ranking.map(r => {
    const c = State.alertComments[r.store.id] || {};
    const canStore = canEditStoreComment(r.store.id);
    const canMgr = canEditManagerComment(r.store.id);
    const storeByVal = c.storeBy || '';
    const mgrByVal = c.managerBy || '';
    const itemsRows = r.items.map(it => `
      <tr>
        <td>${escapeHtml(it.name)}</td>
        <td class="num">${it.qty.toLocaleString('ja-JP')}</td>
        <td class="num">${formatYen(it.price)}</td>
        <td class="num strong">${formatYen(it.amount)}</td>
        <td class="num muted">${getItemThreshold(it).toLocaleString()}超</td>
      </tr>`).join('');
    return `
    <div class="alert-store-card">
      <div class="alert-store-head">
        <span class="brand-tag ${escapeHtml(r.store.brand)}">${brandLabel(r.store.brand)}</span>
        <strong>${escapeHtml(storeDisp(r.store))}</strong>
        <span class="alert-store-meta">${r.count}件 ／ ${formatYen(r.totalAmount)}</span>
      </div>
      <table class="alert-items-table">
        <thead><tr><th>商品名</th><th class="num">数量</th><th class="num">単価</th><th class="num">金額</th><th class="num">設定</th></tr></thead>
        <tbody>${itemsRows}</tbody>
      </table>
      <div class="alert-comment-block">
        <label class="alert-comment-label">店舗コメント</label>
        <textarea class="input alert-comment" data-alert-store="${r.store.id}" data-alert-field="storeComment" rows="2" placeholder="気付いた点・原因など" ${canStore ? '' : 'disabled'}>${escapeHtml(c.storeComment || '')}</textarea>
        <input class="input alert-comment-name" data-alert-store="${r.store.id}" data-alert-field="storeBy" placeholder="店舗担当者氏名入力" value="${escapeHtml(storeByVal)}" ${canStore ? '' : 'disabled'}>
      </div>
      <div class="alert-comment-block mgr">
        <label class="alert-comment-label">改善策（業態責任者・店長・リーダー）</label>
        <textarea class="input alert-comment" data-alert-store="${r.store.id}" data-alert-field="managerComment" rows="2" placeholder="改善に向けた指示・対応策" ${canMgr ? '' : 'disabled'}>${escapeHtml(c.managerComment || '')}</textarea>
        <input class="input alert-comment-name" data-alert-store="${r.store.id}" data-alert-field="managerBy" placeholder="責任者・店長・リーダー氏名入力" value="${escapeHtml(mgrByVal)}" ${canMgr ? '' : 'disabled'}>
      </div>
    </div>`;
  }).join('');

  return `
  <div class="alert-section">
    <div class="section-title" style="font-size:20px;font-weight:800;color:#dc2626;">
      🚨 アラート状況（${formatMonth(State.month)}）
      <span class="count" style="font-size:14px;font-weight:800;color:#dc2626;">設定金額を超えた品目と店舗別件数</span>
      ${ranking.length > 0 ? `<button class="btn btn-secondary btn-sm" data-action="print-alerts" style="margin-left:auto;">🖨 印刷</button>` : ''}
    </div>
    <div style="font-size:15px;font-weight:800;color:#dc2626;line-height:1.6;margin:2px 0 10px;">該当店舗と業態責任者は、改善に向けたミーティングを開き、早々に対策等の入力を完了させてください。</div>
    <div class="alert-ranking-card">
      <h3>店舗別アラート件数ランキング（多い順）</h3>
      ${rankingHtml}
    </div>
    ${detailHtml ? `<div class="alert-detail-grid">${detailHtml}</div>` : ''}
  </div>
  `;
}

function buildAlertPrintHTML() {
  const stores = State.stores.filter(s => State.brand === 'all' || s.brand === State.brand);
  const ranking = buildAlertRanking(stores);
  const scope = State.brand === 'all' ? '全店' : brandLabel(State.brand);
  let html = `
    <div class="p-header">
      <div style="font-size:9pt;color:#666;">株式会社アモーレながすぎ</div>
      <h1>アラート状況（${scope}）</h1>
      <div class="p-meta"><div><strong>${formatMonth(State.month)}</strong></div></div>
    </div>`;
  if (ranking.length === 0) {
    html += `<div style="padding:12pt;">当月のアラートはありません。</div>`;
    html += `<div class="p-footnote"><div>印刷日時: ${new Date().toLocaleString('ja-JP')}</div><div>株式会社アモーレながすぎ 棚卸管理</div></div>`;
    return html;
  }
  html += `<table class="p-alert-rank"><thead><tr><th>順位</th><th>店舗</th><th class="num">件数</th><th class="num">アラート金額</th></tr></thead><tbody>`;
  ranking.forEach((r, i) => {
    html += `<tr><td>${i + 1}</td><td>${escapeHtml(storeDisp(r.store))}</td><td class="num">${r.count}</td><td class="num">${formatYen(r.totalAmount)}</td></tr>`;
  });
  html += `</tbody></table>`;
  for (const r of ranking) {
    const c = State.alertComments[r.store.id] || {};
    html += `<div class="p-alert-store"><div class="p-alert-store-head">${escapeHtml(storeDisp(r.store))}　（${r.count}件 / ${formatYen(r.totalAmount)}）</div>`;
    html += `<table class="p-table"><thead><tr><th>商品名</th><th class="num">数量</th><th class="num">単価</th><th class="num">金額</th><th class="num">設定</th></tr></thead><tbody>`;
    for (const it of r.items) {
      html += `<tr><td>${escapeHtml(it.name)}</td><td class="num">${it.qty.toLocaleString('ja-JP')}</td><td class="num">${formatYen(it.price)}</td><td class="num">${formatYen(it.amount)}</td><td class="num">${getItemThreshold(it).toLocaleString()}超</td></tr>`;
    }
    html += `</tbody></table>`;
    html += `<div class="p-alert-comments"><div><strong>店舗コメント:</strong> ${escapeHtml(c.storeComment || '—')}${c.storeBy ? `　（${escapeHtml(c.storeBy)}）` : ''}</div>`;
    html += `<div><strong>改善策（責任者）:</strong> ${escapeHtml(c.managerComment || '—')}${c.managerBy ? `　（${escapeHtml(c.managerBy)}）` : ''}</div></div></div>`;
  }
  html += `<div class="p-footnote"><div>印刷日時: ${new Date().toLocaleString('ja-JP')}</div><div>株式会社アモーレながすぎ 棚卸管理</div></div>`;
  return html;
}

function printAlerts() {
  const area = document.getElementById('print-area');
  area.innerHTML = buildAlertPrintHTML();
  setTimeout(() => { window.print(); setTimeout(() => { area.innerHTML = ''; }, 500); }, 50);
}

async function handleAlertCommentEdit(e) {
  const el = e.target;
  const storeId = el.dataset.alertStore;
  const field = el.dataset.alertField;
  if (!State.alertComments[storeId]) State.alertComments[storeId] = { storeComment:'', storeBy:'', managerComment:'', managerBy:'' };
  if ((field === 'managerComment' || field === 'managerBy') && !canEditManagerComment(storeId)) return;
  if ((field === 'storeComment' || field === 'storeBy') && !canEditStoreComment(storeId)) return;
  State.alertComments[storeId][field] = el.value;
  markLocalWrite();
  _pendingSave = true;
  clearTimeout(el._acTimer);
  el._acTimer = setTimeout(async () => {
    try {
      const ok = await storage.saveAlertComment(storeId, State.month, State.alertComments[storeId]);
      if (ok === false) { toast('保存に失敗：' + (_lastDbError || '通信エラー'), 'error'); return; }
      toast('保存しました', 'success');
    } finally { _pendingSave = false; markLocalWrite(); }
  }, 500);
}

function renderRankings() {
  // Ranking by FOOD total ascending (low to high)
  function topStores(filter) {
    return State.stores.filter(filter)
      .map(s => {
        const t = getStoreTotals(s.id);
        return { ...s, foodTotal: t.food, total: t.total };
      })
      .filter(s => s.foodTotal > 0)
      .sort((a, b) => a.foodTotal - b.foodTotal);
  }

  const sortedBrands = (State.brands || []).slice().sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
  const all = topStores(() => true);

  function renderList(list) {
    if (list.length === 0) {
      return `<div class="ranking-empty">入力データがありません</div>`;
    }
    return list.map((s, i) => {
      const rank = i + 1;
      let badgeClass = '';
      if (rank === 1) badgeClass = 'gold';
      else if (rank === 2) badgeClass = 'silver';
      else if (rank === 3) badgeClass = 'bronze';
      return `
      <div class="ranking-row">
        <span class="rank-badge ${badgeClass}">${rank}</span>
        <span class="name">${escapeHtml(storeDisp(s))}</span>
        <span class="amount num">${formatYen(s.foodTotal)}</span>
      </div>`;
    }).join('');
  }

  // ブランドカード数 + 全店カード1つ
  const brandCards = sortedBrands.map(b => {
    const list = topStores(s => s.brand === b.id);
    return `
      <div class="ranking-card">
        <h3><span class="brand-tag ${escapeHtml(b.id)}">${escapeHtml(b.name)}</span></h3>
        ${renderList(list)}
      </div>`;
  }).join('');

  const cardCount = sortedBrands.length + 1; // ブランド数 + 全店
  const gridClass = cardCount >= 4 ? 'ranking-grid-4' : (cardCount === 3 ? 'ranking-grid-3' : 'ranking-grid-2');

  return `
  <div class="ranking-section">
    <div class="section-title" style="font-size:20px;font-weight:800;color:#1d4ed8;">
      食材棚卸金額ランキング（少ない順）
      <span class="count" style="font-size:14px;font-weight:800;color:#1e293b;">食材のみで集計（備品は含まず）</span>
      <button class="btn btn-secondary btn-sm" onclick="printInventoryRanking()" type="button" style="margin-left:auto;">🖨 ランキングを印刷</button>
    </div>
    <div class="ranking-grid ${gridClass}">
      ${brandCards}
      <div class="ranking-card">
        <h3>全店</h3>
        ${renderList(all)}
      </div>
    </div>
  </div>
  `;
}

window.printInventoryRanking = function(){
  function rows(filter){
    return State.stores.filter(filter)
      .map(s=>{ const t=getStoreTotals(s.id); return { name:storeDisp(s), food:t.food }; })
      .filter(s=>s.food>0).sort((a,b)=>a.food-b.food);
  }
  function table(title,list){
    if(!list.length) return '<h4>'+escapeHtml(title)+'</h4><div style="color:#94a3b8;margin:0 0 10px;">入力データがありません</div>';
    let r='<h4>'+escapeHtml(title)+'</h4><table class="rk-table"><thead><tr><th>順位</th><th>店舗</th><th class="num">食材棚卸金額（税抜）</th></tr></thead><tbody>';
    list.forEach((s,i)=>{ r+='<tr><td>'+(i+1)+'</td><td>'+escapeHtml(s.name)+'</td><td class="num">'+formatYen(s.food)+'</td></tr>'; });
    return r+'</tbody></table>';
  }
  const sortedBrands=(State.brands||[]).slice().sort((a,b)=>(a.sortOrder??999)-(b.sortOrder??999));
  let inner=''; sortedBrands.forEach(b=>{ inner+=table(b.name, rows(s=>s.brand===b.id)); });
  inner+=table('全店', rows(()=>true));
  const html='<html><head><meta charset="utf-8"><title>食材棚卸金額ランキング</title>'+
    '<style>body{font-family:"BIZ UDPGothic","Hiragino Kaku Gothic ProN","Yu Gothic UI","Meiryo",sans-serif;padding:24px;color:#1e293b;}'+
    'h2{margin:0 0 4px;}h4{margin:14px 0 6px;}'+
    '.rk-table{width:100%;border-collapse:collapse;font-size:13px;margin-bottom:8px;}'+
    '.rk-table th,.rk-table td{border-bottom:1px solid #e5e7eb;padding:6px 8px;text-align:left;}'+
    '.rk-table td.num,.rk-table th.num{text-align:right;}</style></head><body>'+
    '<h2>食材棚卸金額ランキング（少ない順）</h2><div style="color:#64748b;margin-bottom:10px;">'+formatMonth(State.month)+'　食材のみで集計（備品は含まず）</div>'+
    inner+'</body></html>';
  const w=window.open('','_blank'); if(!w){ toast('ポップアップを許可してください','error'); return; }
  w.document.write(html); w.document.close(); w.focus(); setTimeout(()=>{ try{w.print();}catch(_){} },300);
};

// =========================================================
// Phase C-2: 店舗ごと確認・認印（氏名から自動生成）
// =========================================================
function storeConfirmEligibility(storeId) {
  const inv = State.inventory[storeId] || {};
  const missing = [];
  if (!inv.completed) missing.push('棚卸入力が未完了です');
  if (getHighValueItems(storeId).length > 0) {
    const c = State.alertComments[storeId] || {};
    if (!((c.storeComment || '').trim())) missing.push('店舗コメント未入力（アラートあり）');
    if (!((c.managerComment || '').trim())) missing.push('改善策（責任者）未入力（アラートあり）');
  }
  return { ok: missing.length === 0, missing };
}
function isStoreChecked(storeId) { const inv = State.inventory[storeId] || {}; return !!inv.mgrConfirmed; }
function isStoreSigned(storeId) { const inv = State.inventory[storeId] || {}; return !!inv.mgrConfirmedBy; }
function canManageStore(storeId) {
  const u = State.user; if (!u) return false;
  if (u.role === 'admin') return true;
  if (u.role === 'manager' && (u.approveBrand === 'all' || u.approveBrand === storeBrandOf(storeId))) return true;
  return false;
}
// 総務ブロック判定（Phase E で使用）: 未署名の店舗があればその店と担当責任者を返す
function soumuBlockReason() {
  for (const s of State.stores) {
    if (!isStoreSigned(s.id)) {
      const mgr = (State.users || []).find(u => !u.archived && u.role === 'manager' && (u.approveBrand === 'all' || u.approveBrand === s.brand));
      return { store: s, managerName: mgr ? mgr.name : '業態責任者' };
    }
  }
  return null;
}

async function toggleStoreConfirm(storeId, checked) {
  const inv = State.inventory[storeId] || (State.inventory[storeId] = {});
  if (checked) {
    const el = storeConfirmEligibility(storeId);
    if (!el.ok) { toast('確認できません：' + el.missing.join(' / '), 'error'); render(); return; }
  }
  inv.mgrConfirmed = checked;
  let payload;
  if (checked) {
    payload = { confirmed: true };
  } else {
    inv.mgrSignature = null; inv.mgrConfirmedBy = null; inv.mgrConfirmedAt = null;
    payload = { confirmed: false, by: null, at: null, signature: null };
  }
  markLocalWrite(); _pendingSave = true;
  try {
    const ok = await storage.saveStoreConfirmation(storeId, State.month, payload);
    if (ok === false) { toast('保存に失敗：' + (_lastDbError || ''), 'error'); inv.mgrConfirmed = !checked; }
    else toast(checked ? '確認しました' : '確認を取り消しました', 'success');
  } finally { _pendingSave = false; markLocalWrite(); render(); }
}

async function submitStoreSignature(storeId) {
  if (!canManageStore(storeId)) { toast('権限がありません', 'error'); return; }
  const inv = State.inventory[storeId] || {};
  if (!inv.mgrConfirmed) { toast('先に棚卸表で「確認しました」にチェックしてください', 'error'); return; }
  const by = (State.user && State.user.name) || '';
  if (!by) { toast('ユーザー名が取得できません', 'error'); return; }
  if (!confirm('認印で承認します。\n承認者: ' + by + '\nよろしいですか？')) return;
  const at = new Date().toISOString();
  inv.mgrSignature = null; inv.mgrConfirmedBy = by; inv.mgrConfirmedAt = at;
  markLocalWrite(); _pendingSave = true;
  try {
    const ok = await storage.saveStoreConfirmation(storeId, State.month, { confirmed: true, by, at, signature: null });
    if (ok === false) { toast('保存に失敗：' + (_lastDbError || ''), 'error'); inv.mgrConfirmedBy = null; }
    else toast('認印で承認しました', 'success');
  } finally { _pendingSave = false; markLocalWrite(); render(); }
}


function renderStoreConfirmBlock(store) {
  const inv = State.inventory[store.id] || {};
  const canMng = canManageStore(store.id);
  const elig = storeConfirmEligibility(store.id);
  const checked = !!inv.mgrConfirmed;
  const signed = !!inv.mgrConfirmedBy;
  if (!canMng && !checked && !signed) return '';
  let inner;
  if (!canMng) {
    inner = signed
      ? `<div class="confirm-done">✓ 業態責任者 確認・認印済（${escapeHtml(inv.mgrConfirmedBy || '')}）</div>`
      : (checked ? `<div class="confirm-pending">業態責任者が確認済（認印待ち）</div>` : '');
  } else if (signed) {
    inner = `<div class="confirm-done">✓ 確認・認印済：${escapeHtml(inv.mgrConfirmedBy || '')}　${inv.mgrConfirmedAt ? new Date(inv.mgrConfirmedAt).toLocaleString('ja-JP') : ''}</div>
      <div class="confirm-sig">${sealHtml(inv.mgrConfirmedBy, 52)}</div>
      <label class="checkbox-row" style="margin-top:8px;"><input type="checkbox" data-store-confirm="${store.id}" checked> 確認しました（外すと認印も取消）</label>`;
  } else {
    const eligHtml = elig.ok ? '' : `<div class="confirm-missing">未充足のため確認できません：<br>${elig.missing.map(m => `・${escapeHtml(m)}`).join('<br>')}</div>`;
    inner = `${eligHtml}
      <label class="checkbox-row"><input type="checkbox" data-store-confirm="${store.id}" ${checked ? 'checked' : ''} ${elig.ok ? '' : 'disabled'}> 確認しました</label>
      ${checked ? `<div class="confirm-next">→ ダッシュボードの店舗枠で「認印で承認」を押してください。</div>` : ''}`;
  }
  return `<div class="store-confirm-block">
    <div class="store-confirm-title">業態責任者 確認</div>
    ${inner}
  </div>`;
}

function renderStoreCardSign(s) {
  const inv = State.inventory[s.id] || {};
  const signed = !!inv.mgrConfirmedBy;
  const checked = !!inv.mgrConfirmed;
  const canMng = canManageStore(s.id);
  if (signed) {
    return `<div class="card-sign signed">${sealHtml(inv.mgrConfirmedBy, 56)}<div class="card-sign-by">✓ ${escapeHtml(inv.mgrConfirmedBy || '')}</div></div>`;
  }
  if (checked && canMng) {
    return `<div class="card-sign pad" onclick="event.stopPropagation()">
      <div class="card-sign-tools">
        <button class="btn btn-primary btn-sm" data-action="sign-store" data-store-id="${s.id}">認印で承認</button>
      </div>
    </div>`;
  }
  if (checked && !canMng) {
    return `<div class="card-sign waiting">認印待ち</div>`;
  }
  return '';
}

function renderStoresList(stores) {
  if (stores.length === 0) {
    return `<div class="card" style="text-align:center;color:#78716c;">表示する店舗がありません</div>`;
  }
  // Group by brand visually - 全ブランドを並び順で取得
  let html = '';
  const groups = [];
  const sortedBrands = (State.brands || []).slice().sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
  for (const brandObj of sortedBrands) {
    const bs = stores.filter(s => s.brand === brandObj.id);
    if (bs.length === 0) continue;
    groups.push({ brand: brandObj.id, stores: bs });
  }
  // フォールバック: State.brandsが無い場合に備える
  if (groups.length === 0 && sortedBrands.length === 0) {
    for (const b of ['hachiban', 'komeda', 'hyonchan']) {
      const bs = stores.filter(s => s.brand === b);
      if (bs.length === 0) continue;
      groups.push({ brand: b, stores: bs });
    }
  }

  for (const g of groups) {
    const brandLbl = brandLabel(g.brand);
    const tagClass = g.brand;
    html += `<div class="section-title">
      <span class="brand-tag ${tagClass}">${brandLbl}</span>
      <span class="count">${g.stores.length}店舗</span>
    </div>`;
    for (const s of g.stores) {
      const status = getStoreStatus(s.id);
      const total = getStoreTotals(s.id);
      const filled = getStoreFilled(s.id);
      const totalItems = getStoreItems(s.id).length;
      const inv = State.inventory[s.id];
      const completedAt = inv?.completedAt ? new Date(inv.completedAt).toLocaleDateString('ja-JP', {month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'}) : '';

      const badge = status === 'done'
        ? `<span class="badge done">完了</span>`
        : status === 'pending'
          ? `<span class="badge pending">入力中</span>`
          : `<span class="badge empty">未入力</span>`;

      html += `
      <div class="store-row" data-action="open-store" data-store-id="${s.id}">
        <div>
          <div class="name">${escapeHtml(storeDisp(s))}${coinStoreBadge(s.id)}</div>
          <div class="meta">
            ${badge}
            <span>${filled}/${totalItems}品目</span>
            ${completedAt ? `<span>· ${completedAt} 完了</span>` : ''}
          </div>
        </div>
        ${renderStoreCardSign(s)}
        <div style="text-align:right;">
          <div class="amount ${total.total === 0 ? 'zero' : ''}">${formatYen(total.total)}</div>
          ${total.total > 0 ? `<div style="font-size:10px;color:#78716c;">食材 ${formatYen(total.food)} / 備品 ${formatYen(total.supplies)}</div>` : ''}
        </div>
      </div>`;
    }
  }
  return html;
}

// =========================================================
// Inventory entry
// =========================================================
function renderInventory() {
  const store = State.stores.find(s => s.id === State.storeId);
  if (!store) {
    return `<div class="card">店舗が見つかりません。<button class="btn btn-secondary btn-sm" data-action="home">戻る</button></div>`;
  }
  const items = getStoreItems(store.id);
  const entries = getStoreEntries(store.id);
  const inv = State.inventory[store.id] || {};
  const role = State.user.role;
  const storeConfirmed = isStoreChecked(store.id);
  const isAdminUser = role === 'admin';
  const isBrandManager = role === 'manager' &&
    (State.user.approveBrand === 'all' || State.user.approveBrand === store.brand);
  const lockedByDeadline = isInputLocked();
  // 承認後・締切後は「管理者」と「該当業態責任者」のみ編集可。通常時はスタッフ＋管理者が編集可。
  let canEdit;
  if (storeConfirmed || lockedByDeadline) {
    canEdit = isAdminUser || isBrandManager;
  } else {
    canEdit = (isStaffLike(role) || isAdminUser);
  }
  const readOnly = !canEdit;
  const completed = !!inv.completed || readOnly;
  const inputBy = inv.inputBy || '';
  const orderBy = inv.orderBy || '';

  // categories
  const cats = [];
  const seenCats = new Set();
  for (const it of items) {
    if (!seenCats.has(it.category)) { cats.push(it.category); seenCats.add(it.category); }
  }
  const activeCat = State.activeCategory || cats[0];

  // counts per category
  const catCounts = {};
  for (const c of cats) {
    const itc = items.filter(i => i.category === c);
    const filled = itc.filter(i => parseFloat(entries[i.id]) > 0).length;
    catCounts[c] = { total: itc.length, filled };
  }

  // filtered items
  const q = (State.searchQuery || '').trim().toLowerCase();
  let shownItems = items.filter(it => it.category === activeCat);
  if (q) {
    shownItems = items.filter(it => it.name.toLowerCase().includes(q));
  }

  const total = getStoreTotal(store.id);
  const totals = getStoreTotals(store.id);
  const notes = getStoreNotes(store.id);
  const filledAll = Object.values(entries).filter(v => parseFloat(v) > 0).length;
  const pct = items.length ? Math.round((filledAll / items.length) * 100) : 0;

  // High-value items
  const highValueItems = getHighValueItems(store.id);

  // Staff options for person dropdowns
  // Include: (a) staff at this store, (b) all staff/manager at same brand, (c) admin
  const sameStoreStaff = State.users.filter(u => !u.archived && isStaffLike(u.role) && u.defaultStore === store.id);
  const sameBrandStaff = State.users.filter(u =>
    !u.archived &&
    (isStaffLike(u.role) || u.role === 'manager') &&
    u.defaultStore !== store.id && // not duplicating
    (u.defaultStore ? brandOf(u.defaultStore) === store.brand : (u.approveBrand === 'all' || u.approveBrand === store.brand))
  );

  const personOptions = (selected) => {
    let html = '<option value="">— 選択してください —</option>';
    if (sameStoreStaff.length > 0) {
      html += '<optgroup label="この店舗のスタッフ">';
      for (const u of sameStoreStaff) {
        const display = u.position ? `${u.name}（${u.position}）` : u.name;
        html += `<option value="${escapeHtml(u.name)}" ${selected === u.name ? 'selected' : ''}>${escapeHtml(display)}</option>`;
      }
      html += '</optgroup>';
    }
    if (sameBrandStaff.length > 0) {
      html += `<optgroup label="${brandLabel(store.brand)} 他店舗">`;
      for (const u of sameBrandStaff) {
        const storeShort = u.defaultStore ? (State.stores.find(s => s.id === u.defaultStore)?.name || '').replace(/^.*? /, '') : '';
        const display = u.position ? `${u.name}（${u.position}/${storeShort}）` : `${u.name}（${storeShort}）`;
        html += `<option value="${escapeHtml(u.name)}" ${selected === u.name ? 'selected' : ''}>${escapeHtml(display)}</option>`;
      }
      html += '</optgroup>';
    }
    // Include current value if it doesn't match anyone (e.g., manually typed before)
    const allKnown = new Set([...sameStoreStaff, ...sameBrandStaff].map(u => u.name));
    if (selected && !allKnown.has(selected)) {
      html += `<option value="${escapeHtml(selected)}" selected>${escapeHtml(selected)}</option>`;
    }
    html += `<option value="__OTHER__">その他（手入力）</option>`;
    return html;
  };

  // For showing "free typed" vs "from list" status
  const allKnownNames = new Set([...sameStoreStaff, ...sameBrandStaff].map(u => u.name));
  const isInputFreeTyped = inputBy && !allKnownNames.has(inputBy);
  const isOrderFreeTyped = orderBy && !allKnownNames.has(orderBy);

  return `
  <div class="row" style="gap:8px;margin-bottom:12px;flex-wrap:wrap;">
    <button class="btn btn-secondary btn-sm" data-action="home">‹ ダッシュボードに戻る</button>
    <div style="flex:1"></div>
    <button class="btn btn-secondary btn-sm" data-action="download-inv-template" data-store-id="${store.id}" title="この店舗用の入力テンプレートをダウンロード">
      📋 入力テンプレ
    </button>
    <button class="btn btn-secondary btn-sm" data-action="import-inv-xlsx" data-store-id="${store.id}" title="Excelで入力した数量を取込み" ${completed ? 'disabled' : ''}>
      📤 Excel取込み
    </button>
    <button class="btn btn-secondary btn-sm" data-action="refresh-data" title="入力を保存して最新の状態に更新">
      🔄 更新
    </button>
    <button class="btn btn-secondary btn-sm" data-action="print-store" data-store-id="${store.id}">
      🖨 印刷
    </button>
    <button class="btn btn-secondary btn-sm" data-action="export-store-xlsx" data-store-id="${store.id}">
      📥 Excel出力
    </button>
  </div>

  <div class="inv-header">
    <div class="row between">
      <div>
        <span class="brand-tag ${store.brand}">${brandLabel(store.brand)}</span>
        <div class="store-name" style="margin-top:6px;">${escapeHtml(storeDisp(store))}</div>
        <div class="muted small">${formatMonth(State.month)} 棚卸</div>
      </div>
      <div class="text-right">
        ${inv.completed
          ? `<span class="badge done">完了済</span>`
          : filledAll > 0 ? `<span class="badge pending">入力中</span>` : `<span class="badge empty">未入力</span>`}
      </div>
    </div>
    <div class="row" style="font-size:12px;color:#57534e;">
      <span>進捗: ${filledAll}/${items.length} 品目 (${pct}%)</span>
    </div>
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
  </div>

  <div class="person-fields">
    <div class="row">
      <div>
        <label class="field">入力者 <span style="color:#dc2626;">*</span></label>
        <input class="input" id="person-input-other" placeholder="氏名を手入力" value="${escapeHtml(inputBy)}" ${completed ? 'disabled' : ''}>
      </div>
      <div>
        <label class="field">最終発注者 <span style="color:#dc2626;">*</span></label>
        <input class="input" id="person-order-other" placeholder="氏名を手入力（複数の場合は全員）" value="${escapeHtml(orderBy)}" ${completed ? 'disabled' : ''}>
      </div>
    </div>
    <div class="help-line">入力者は、FEVASCALE STOCKに入力した方の氏名を手入力してください。最終発注者は、棚卸日到着分の発注をされた方、全員の氏名を手入力してください。</div>
  </div>

  ${inv.completed && canEdit ? `
    <div class="info-banner">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <div>この棚卸は<strong>完了済</strong>です。修正する場合は「修正モード」を押してください。</div>
    </div>
  ` : ''}

  ${!canEdit && (storeConfirmed || lockedByDeadline) ? `
    <div class="info-banner locked">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      <div>${storeConfirmed ? 'この店舗は<strong>確認済</strong>のため' : '<strong>入力締切</strong>を過ぎたため'}、修正は<strong>管理者・業態責任者</strong>のみ可能です。</div>
    </div>
  ` : ''}

  ${highValueItems.length > 0 ? `
    <div class="high-value-banner">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div>
        <strong>${highValueItems.length}件の高額品目があります（設定金額超）</strong><br>
        ${highValueItems.slice(0, 3).map(it => `${escapeHtml(it.name)}: ${formatYen(it.amount)}`).join(' / ')}${highValueItems.length > 3 ? ` ほか${highValueItems.length - 3}件` : ''}
        <br><span style="font-size:11px;">数量に誤りがないかご確認ください。</span>
      </div>
    </div>
  ` : ''}

  <div class="cat-tabs">
    ${cats.map(c => `
      <button class="cat-tab ${c === activeCat && !q ? 'active' : ''}" data-action="set-cat" data-cat="${escapeHtml(c)}">
        ${escapeHtml(c)}<span class="cnt">${catCounts[c].filled}/${catCounts[c].total}</span>
      </button>
    `).join('')}
  </div>

  <div class="item-search">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <input id="item-search-input" placeholder="品名で検索…" value="${escapeHtml(State.searchQuery || '')}">
    ${State.searchQuery ? `<button data-action="clear-search" class="btn btn-sm btn-secondary">×</button>` : ''}
  </div>

  <div class="item-list">
    ${shownItems.length === 0
      ? `<div class="empty-cat">該当する品目がありません</div>`
      : shownItems.map(it => {
          const rawV = entries[it.id];
          const v = (rawV === undefined || rawV === null || parseFloat(rawV) === 0) ? '' : rawV; // 0(クリア済)は空表示
          const unitP = invUnitPrice(store.id, it);
          const amount = v ? parseFloat(v) * unitP : 0;
          const hasVal = v !== '' && parseFloat(v) > 0;
          const isHigh = hasVal && isHighValueAmount(amount, it);
          const noteText = notes[it.id] || '';
          const hasNote = !!noteText.trim();
          return `
          <div class="item-row ${it.seasonal ? 'seasonal' : ''} ${isHigh ? 'high-value' : ''}" data-item-row="${it.id}">
            <div class="info-wrap">
              <div class="info">
                <div class="name">${escapeHtml(it.name)}${it.seasonal ? ` <span class="season-pill">季節</span>` : ''}${isHigh ? ` <span class="alert-icon">⚠ ${getItemThreshold(it).toLocaleString()}円超</span>` : ''}</div>
                <div class="meta">
                  <span class="unit-pill">${escapeHtml(it.unit || '個')}</span>
                  <span>単価 ${formatYen(unitP)}</span>
                </div>
              </div>
              ${it.supplier ? `<div class="supplier-line">仕入先: ${escapeHtml(it.supplier)}</div>` : ''}
              <button class="note-toggle ${hasNote ? 'has-note' : ''}" data-action="toggle-note" data-item-id="${it.id}">
                ${hasNote ? '📝 備考あり' : '＋ 備考'}
              </button>
              <div class="note-area ${hasNote ? 'open' : ''}" data-note-area="${it.id}">
                <textarea
                  data-note-id="${it.id}"
                  placeholder="数量に関するメモなど（任意）"
                  ${completed ? 'disabled' : ''}>${escapeHtml(noteText)}</textarea>
              </div>
            </div>
            <div class="qty-cell">
              <div class="qty-stepper">
                <button type="button" class="qty-step" data-action="qty-step" data-item-id="${it.id}" data-step="-1" aria-label="1減らす" ${completed ? 'disabled' : ''}>
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><polygon points="6,9 18,9 12,16" fill="currentColor"/></svg>
                </button>
                <input
                  type="number"
                  inputmode="decimal"
                  step="0.1"
                  min="0"
                  class="qty ${hasVal ? 'has-value' : ''}"
                  data-item-id="${it.id}"
                  value="${v}"
                  placeholder="0"
                  ${completed ? 'disabled' : ''}>
                <button type="button" class="qty-step" data-action="qty-step" data-item-id="${it.id}" data-step="1" aria-label="1増やす" ${completed ? 'disabled' : ''}>
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><polygon points="6,15 18,15 12,8" fill="currentColor"/></svg>
                </button>
              </div>
              <div class="amount-mini">${hasVal ? formatYen(amount) : ''}</div>
            </div>
          </div>`;
        }).join('')}
  </div>

  <div class="save-bar">
    <div>
      <div class="total-label">この店舗の合計</div>
      <div class="total-value num">${formatYen(totals.total)}</div>
      <div class="totals-split">
        <span>食材 <b>${formatYen(totals.food)}</b></span>
        <span>備品 <b>${formatYen(totals.supplies)}</b></span>
      </div>
      <div id="save-status" class="save-status"></div>
    </div>
    <div style="display:flex;gap:8px;">
      <button class="btn btn-secondary" data-action="refresh-data" title="入力を保存して更新">🔄 更新</button>
      ${!canEdit ? ''
        : inv.completed
          ? `<button class="btn btn-secondary" data-action="reopen">修正モード</button>`
          : `<button class="btn btn-secondary" data-action="save-draft">下書き保存</button>
             <button class="btn btn-primary" data-action="complete">完了</button>`}
    </div>
  </div>
  ${renderStoreConfirmBlock(store)}
  `;
}

// =========================================================
// Admin
// =========================================================

function renderAdminBrand(brand) {
  // brand がブランドIDでない（stores/users/brands）場合は弾く
  if (!brand || brand === 'stores' || brand === 'users' || brand === 'brands') return renderAdminItems(brand);
  // 仕入先一覧は商品登録の中で管理するため、ここでは商品一覧のみ表示
  return renderAdminItems(brand);
}

function renderAdminBrands() {
  const brands = State.brands || [];
  return `
  <div class="info-banner" style="margin-bottom:12px;">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
    <div>
      ブランド（業態）の追加・編集ができます。設定は<strong>Supabaseに保存</strong>され、全端末で同期されます。<br>
      <strong>注意:</strong> ブランドIDは商品マスタ・店舗・棚卸データと紐づいています。<strong>既存ブランドのIDは変更しないでください</strong>（変更すると過去データが参照できなくなります）。
    </div>
  </div>

  <div class="row between" style="margin-bottom:12px;flex-wrap:wrap;gap:8px;">
    <div><strong>${brands.length}</strong>ブランド登録中</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;">
      <button class="btn btn-primary btn-sm" data-action="add-brand">＋ ブランドを追加</button>
    </div>
  </div>

  <div class="admin-table">
    <div class="header" style="grid-template-columns: 100px 1fr 80px 80px 160px;">
      <div>ID</div>
      <div>ブランド名</div>
      <div>店舗ID接頭</div>
      <div class="text-right">並び順</div>
      <div></div>
    </div>
    ${brands.length === 0
      ? `<div class="empty-cat">ブランドが登録されていません。「＋ ブランドを追加」から登録してください。</div>`
      : brands.slice().sort((a,b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999)).map(b => {
          const storeCount = (State.stores || []).filter(s => s.brand === b.id).length;
          const itemCount = ((State.items || {})[b.id] || []).length;
          return `
        <div class="admin-row" style="grid-template-columns: 100px 1fr 80px 80px 160px;">
          <div style="font-family:monospace;font-size:13px;color:#6b7280;padding:8px 4px;">${escapeHtml(b.id)}</div>
          <div style="padding:4px;">
            <div style="font-weight:600;">${escapeHtml(b.name)}</div>
            <div style="font-size:11px;color:#9ca3af;margin-top:2px;">店舗 ${storeCount}件 / 商品 ${itemCount}件</div>
          </div>
          <div style="font-family:monospace;padding:8px 4px;">${escapeHtml(b.idPrefix || '')}</div>
          <div class="text-right" style="padding:8px 4px;">${b.sortOrder ?? '-'}</div>
          <div class="actions" style="display:flex;gap:4px;justify-content:flex-end;">
            <button class="btn btn-secondary btn-sm" data-action="edit-brand" data-brand-id="${escapeHtml(b.id)}">✏️ 編集</button>
            <button class="btn btn-danger btn-sm" data-action="delete-brand" data-brand-id="${escapeHtml(b.id)}" ${storeCount > 0 || itemCount > 0 ? 'disabled title="このブランドにはまだ店舗・商品が紐づいています"' : ''}>削除</button>
          </div>
        </div>
      `;}).join('')}
  </div>

  <div class="help" style="margin-top:10px;">
    <strong>運用のコツ:</strong><br>
    • 新しいブランドを追加したら、店舗管理タブから店舗を追加してください。店舗IDの先頭文字は「店舗ID接頭」と一致させると分かりやすいです。<br>
    • 既存ブランドの<strong>名前は自由に変更可能</strong>です（例: 「ヒョンチャン」→「ヒョンプル」）。<br>
    • 削除は店舗・商品が0件のブランドのみ可能です。
  </div>
  `;
}

function renderBrandSuppliers(brand) {
  const suppliers = (State.suppliersByBrand && State.suppliersByBrand[brand]) || [];
  // 商品マスタからも仕入先名を集計（未登録の仕入先がないかチェック用）
  const usedInItems = new Set();
  for (const it of (State.items[brand] || [])) {
    const sup = (it.supplier || '').trim();
    if (sup) usedInItems.add(sup);
  }
  // 仕入先マスタに登録されていないが商品で使われている名前
  const knownNames = new Set(suppliers.map(s => s.name));
  const orphanNames = [...usedInItems].filter(n => !knownNames.has(n)).sort((a, b) => a.localeCompare(b, 'ja'));
  
  const filter = (State.adminFilter || '').toLowerCase();
  const filtered = filter 
    ? suppliers.filter(s => s.name.toLowerCase().includes(filter) || (s.contact || '').toLowerCase().includes(filter) || (s.memo || '').toLowerCase().includes(filter))
    : suppliers;

  // 取扱品数を計算
  const itemCounts = {};
  for (const it of (State.items[brand] || [])) {
    const sup = (it.supplier || '').trim();
    if (sup) itemCounts[sup] = (itemCounts[sup] || 0) + 1;
  }
  
  return `
  <div class="info-banner" style="margin-bottom:12px;">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
    <div>
      <strong>${brandLabel(brand)}</strong>の仕入先一覧です。本部マークが付いた仕入先は業態の本部仕入先として扱われます。
    </div>
  </div>

  <div class="row between" style="margin-bottom:12px;flex-wrap:wrap;gap:8px;">
    <div><strong>${suppliers.length}</strong>件の仕入先${filter ? `（絞り込み: ${filtered.length}件）` : ''}</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;">
      <input class="input" id="admin-filter-input" placeholder="名前・連絡先で絞り込み..." value="${escapeHtml(State.adminFilter || '')}" style="width:200px;">
      <button class="btn btn-secondary btn-sm" data-action="download-brand-suppliers-csv" data-brand="${brand}">📋 テンプレDL</button>
      <button class="btn btn-secondary btn-sm" data-action="import-brand-suppliers-csv" data-brand="${brand}">📤 CSV取込</button>
      <button class="btn btn-primary btn-sm" data-action="add-brand-supplier" data-brand="${brand}">＋ 仕入先を追加</button>
    </div>
  </div>

  ${orphanNames.length > 0 ? `
  <div style="background:#fef9c3;border:1px solid #fcd34d;border-radius:8px;padding:10px 12px;margin-bottom:12px;">
    <strong style="color:#a16207;">⚠ 商品で使われているが、仕入先マスタに未登録: ${orphanNames.length}件</strong><br>
    <span style="font-size:12px;color:#92400e;">${orphanNames.slice(0, 10).map(n => escapeHtml(n)).join('、')}${orphanNames.length > 10 ? `...他${orphanNames.length - 10}件` : ''}</span><br>
    <button class="btn btn-secondary btn-sm" data-action="register-orphan-suppliers" data-brand="${brand}" style="margin-top:6px;">🔄 これらを仕入先マスタに自動登録</button>
  </div>
  ` : ''}

  ${filtered.length === 0 ? `
    <div class="empty-cat">${filter ? '該当する仕入先がありません' : 'まだ仕入先が登録されていません。「＋ 仕入先を追加」から登録してください。'}</div>
  ` : `
  <div class="admin-table">
    <div class="header" style="grid-template-columns: 40px 200px 70px 1fr 90px;">
      <div>本部</div>
      <div>仕入先名</div>
      <div class="text-right">取扱品数</div>
      <div>連絡先・備考</div>
      <div></div>
    </div>
    ${filtered.map(s => {
      const count = itemCounts[s.name] || 0;
      return `
        <div class="admin-row" style="grid-template-columns: 40px 200px 70px 1fr 90px;">
          <div style="text-align:center;">
            <input type="checkbox" data-edit-brand-supplier="${escapeHtml(s.name)}" data-brand="${brand}" data-field="isHeadquarters" ${s.isHeadquarters ? 'checked' : ''} title="本部仕入先として扱う">
          </div>
          <div>
            <input class="input" data-edit-brand-supplier="${escapeHtml(s.name)}" data-brand="${brand}" data-field="name" value="${escapeHtml(s.name)}" title="名前を変更（商品マスタにも反映）">
            ${s.isHeadquarters ? '<div style="font-size:10px;color:#a16207;margin-top:2px;">★ 本部仕入先</div>' : ''}
          </div>
          <div class="text-right num"><strong>${count}</strong></div>
          <div style="display:flex;flex-direction:column;gap:4px;">
            <input class="input" data-edit-brand-supplier="${escapeHtml(s.name)}" data-brand="${brand}" data-field="contact" value="${escapeHtml(s.contact || '')}" placeholder="電話番号 / 担当者など">
            <input class="input" data-edit-brand-supplier="${escapeHtml(s.name)}" data-brand="${brand}" data-field="memo" value="${escapeHtml(s.memo || '')}" placeholder="備考 / 発注条件など">
          </div>
          <div class="actions">
            <button class="btn btn-secondary btn-sm" data-action="show-brand-supplier-items" data-brand="${brand}" data-supplier="${escapeHtml(s.name)}" title="この仕入先の商品を見る">📋</button>
            <button class="btn btn-secondary btn-sm" data-action="delete-brand-supplier" data-brand="${brand}" data-supplier="${escapeHtml(s.name)}" title="削除" style="color:#b91c1c;">🗑</button>
          </div>
        </div>
      `;
    }).join('')}
  </div>
  `}

  <div class="help" style="margin-top:10px;">
    <strong>使い方:</strong>
    <ul style="margin:4px 0 0 18px;font-size:12px;">
      <li>仕入先名を変更すると、その業態の全商品の「仕入先」欄に反映されます</li>
      <li>「本部」チェックを入れると、業態の本部仕入先として扱われます</li>
      <li>連絡先・備考は自動保存されます</li>
    </ul>
  </div>
  `;
}


// =========================================================
// コンソール(v9.9.0) : super_admin 専用
// =========================================================
const CONSOLE_PAGES = [
  { id: 'dashboard', name: 'ダッシュボード' },
  { id: 'inventory', name: '棚卸入力' },
  { id: 'transfers', name: '売買伝票' },
  { id: 'admin',     name: 'マスタ管理' },
];
const CONSOLE_ROLES = [
  { id: 'admin',   name: '管理者' },
  { id: 'manager', name: '業態責任者' },
  { id: 'soumu',   name: '総務' },
  { id: 'staff',   name: 'スタッフ' },
];
const DEFAULT_FEATURE_FLAGS = { coin: false, foodloss: false, breakage: false };
const DEFAULT_BRANDING = {
  companyName: '株式会社アモーレながすぎ',
  loginTitle: 'ネットワーク空間の棚卸＆食材ロス・器物破損管理＆店舗間売買伝票取引所',
  loginSubtitle: '',
  logoUrl: '',
  stockLogoUrl: '',
  cityLogoUrl: '',
  cityRotate: false,
  citySpinSec: 12,
  boardTitle: '棚卸管理',
  boardLogo: ''
};
// 表示用の既定権限(現行動作に合わせる)。あくまでマトリクス初期表示の種。
const DEFAULT_ROLE_PERMS_SEED = {
  dashboard: { admin: true,  manager: true,  soumu: true,  staff: true  },
  inventory: { admin: true,  manager: true,  soumu: false, staff: true  },
  transfers: { admin: true,  manager: true,  soumu: true,  staff: true  },
  admin:     { admin: true,  manager: true,  soumu: false, staff: false },
};

function getBranding()    { return Object.assign({}, DEFAULT_BRANDING, State.branding || {}); }
function getFeatureFlags(){ return Object.assign({}, DEFAULT_FEATURE_FLAGS, State.featureFlags || {}); }
function isFeatureOn(k)   { return !!getFeatureFlags()[k]; }

// 権限判定: super_admin は常に全許可。未保存(null)なら全許可=現行動作。
// ダッシュボードは安全弁として常に許可(締め出し防止)。
function canAccessPage(pageId) {
  const u = State.user;
  if (!u) return false;
  if (u.isSuperAdmin) return true;
  if (pageId === 'dashboard') return true;
  const perms = State.rolePermissions;
  if (!perms) return true;                 // 未設定 → 全許可
  const p = perms[pageId];
  if (!p || !(u.role in p)) return true;    // 未定義 → 許可
  return !!p[u.role];
}

async function persistSettings(partial) {
  // app_settings は key 単位の部分 upsert。渡したキーのみ更新。
  const ok = await storage.set('app_settings', partial);
  if (!ok) toast('設定の保存に失敗しました（' + (_lastDbError || '通信エラー') + '）', 'error');
  return ok;
}

// =========================================================
// Fevascale AI Support（KOESAコンソール設定 / テナント向け案内）
// =========================================================
async function koesaAiSave(){
  const a = State.aiConfig;
  const rows = [
    {key:'ai_support_enabled',  value:a.supportEnabled?'true':'false'},
    {key:'ai_photo_enabled',    value:a.photoEnabled?'true':'false'},
    {key:'ai_analysis_enabled', value:a.analysisEnabled?'true':'false'},
    {key:'ai_edge_url',         value:a.edgeUrl||''},
    {key:'ai_api_key',          value:a.apiKey||''},
    {key:'ai_support_mail',     value:a.supportMail||''},
    {key:'ai_promo_scope',      value:a.promoScope||'manager'},
    {key:'ai_promo_text',       value:a.promoText||''},
  ];
  const { error } = await sb.from('app_config').upsert(rows,{ onConflict:'key' });
  if(error){ _lastDbError='AI設定保存: '+(error.message||JSON.stringify(error)); toast(_lastDbError,'error'); return false; }
  return true;
}
window.koesaAiToggle = async function(key){ State.aiConfig[key] = !State.aiConfig[key]; render(); await koesaAiSave(); };
window.koesaAiField  = function(key,val){ State.aiConfig[key] = val; };
window.koesaAiSaveBtn = async function(){ if(await koesaAiSave()) toast('AI設定を保存しました','success'); };

function renderConsoleAi(){
  if(!State._aiCfgLoaded){ State._aiCfgLoaded = true; setTimeout(async()=>{ await flLoadConfig(); render(); },0); }
  const a = State.aiConfig;
  const sw=(on,key,name,desc)=>`
    <div class="row" style="justify-content:space-between;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #eee;flex-wrap:wrap;">
      <div style="flex:1;min-width:200px;">
        <div style="font-weight:600;">${escapeHtml(name)}</div>
        <div class="muted small">${escapeHtml(desc)}</div>
      </div>
      <button class="btn btn-sm ${on?'btn-primary':'btn-secondary'}" data-action="koesa-ai-toggle" data-aikey="${key}">${on?'ON':'OFF'}</button>
    </div>`;
  return `
  <div class="muted small" style="margin-bottom:8px;line-height:1.6;">「Fevascale AI Support」の有効化とAPI設定。マスターがOFFの間は、テナント側に<strong>案内とプランアップ申請ボタンのみ</strong>表示されます。</div>
  ${sw(a.supportEnabled,'supportEnabled','AI Support（マスター）','このスイッチがONのテナントのみAI機能が有効。OFFなら案内のみ表示。')}
  ${sw(a.photoEnabled,'photoEnabled','写真・手書きのAI読取','割れた食器の写真や手書きメモを記録へ自動変換（要Edge Function）。')}
  ${sw(a.analysisEnabled,'analysisEnabled','ランキングのAI分析・アドバイス','棚卸/ロス/破損ランキングにAI分析コメントを付与（要Edge Function）。')}
  <div style="margin-top:14px;display:flex;flex-direction:column;gap:10px;">
    <label class="muted small">テナント向け案内カードの表示対象<br>
      <select class="input" style="width:100%;" onchange="koesaAiField('promoScope',this.value)">
        <option value="manager" ${(a.promoScope||'manager')==='manager'?'selected':''}>業態責任者（manager）以上のみ</option>
        <option value="all" ${a.promoScope==='all'?'selected':''}>全アカウント</option>
        <option value="off" ${a.promoScope==='off'?'selected':''}>非表示</option>
      </select></label>
    <label class="muted small">案内カードの本文（テナント向け）<br>
      <textarea class="input" style="width:100%;min-height:84px;line-height:1.6;" oninput="koesaAiField('promoText',this.value)" placeholder="写真（割れた食器）…ご相談ください。">${escapeHtml(a.promoText||'')}</textarea></label>
    <div class="muted small" style="margin-top:-4px;">空欄なら既定の案内文が表示されます（&lt;b&gt;で強調可）。</div>
    <label class="muted small">Edge Function URL<br>
      <input class="input" style="width:100%;" value="${escapeHtml(a.edgeUrl||'')}" oninput="koesaAiField('edgeUrl',this.value)" placeholder="https://xxxx.functions.supabase.co/ai-support"></label>
    <label class="muted small">Claude APIキー（サーバ中継用）<br>
      <input class="input" style="width:100%;" type="password" value="${escapeHtml(a.apiKey||'')}" oninput="koesaAiField('apiKey',this.value)" placeholder="sk-ant-..."></label>
    <label class="muted small">サポート窓口メール（プランアップ申請先）<br>
      <input class="input" style="width:100%;" value="${escapeHtml(a.supportMail||'')}" oninput="koesaAiField('supportMail',this.value)" placeholder="support-labo@fevascale.jp"></label>
    <div><button class="btn btn-primary btn-sm" data-action="koesa-ai-save">保存</button></div>
    <div class="muted small" style="line-height:1.6;">※ APIキーはEdge Function側の利用を想定。本番はEdge Functionの環境変数（Secrets）推奨。ここは中継URL・窓口の管理が主目的です。</div>
  </div>`;
}

// テナント向け：AI Support 案内（プラン未契約時のみ表示）
function renderAiSupportPromo(){
  if(State.aiConfig && State.aiConfig.supportEnabled) return '';
  const _scope = (State.aiConfig && State.aiConfig.promoScope) || 'manager';
  if(_scope === 'off') return '';
  if(_scope === 'manager'){
    const _role = State.user && State.user.role; // ※super_adminはrole='admin'にマップ済
    if(!['manager','director','admin','soumu','president'].includes(_role)) return '';
  }
  const mail = (State.aiConfig && State.aiConfig.supportMail) || 'support-labo@fevascale.jp';
  const subj = encodeURIComponent('Fevascale AI Support プランアップ申請');
  const body = encodeURIComponent('Fevascale AI Support の利用を申し込みます。\n\n会社/店舗名：\nご担当者：\nご連絡先：\n\n（写真・手書きのAI読取／各ランキングのAI分析・アドバイスの利用を希望）');
  const href = 'mailto:'+mail+'?subject='+subj+'&body='+body;
  return `
  <div class="ai-promo">
    <div class="ai-promo-figure">
      <img class="ai-promo-otha" src="${OTHA_AVATAR_IMG}" alt="OTHA オーサ">
      <span class="ai-promo-name">OTHA<small>オーサ</small></span>
    </div>
    <div class="ai-promo-main">
      <div class="ai-promo-head"><b>✨ Fevascale AI Support</b><span class="ai-promo-tag">OTHA・別途プラン</span></div>
      <div class="ai-promo-body">${aiPromoText()}</div>
    </div>
    <div class="ai-promo-actions">
      <a class="ai-promo-btn up" href="${href}">⤴ プラン内容確認・申請</a>
      <a class="ai-promo-btn mail" href="${href}">📧 お問い合わせ</a>
    </div>
  </div>`;
}
// OTHA（オーサ）AIエージェント アイコン（円形透過表示用）
const OTHA_AVATAR_IMG = '/assets/otha-avatar.jpg';
// 案内本文（コンソール編集可・空なら既定文）
function aiPromoText(){
  return (State.aiConfig && State.aiConfig.promoText) ||
    '写真（割れた食器）・手書きのAI読取と、各ランキングのAI分析・アドバイスをまとめてご利用いただけます。別途プランとなりますので <b>Fevascale Support Labo</b> へご相談ください。';
}

function renderConsole() {
  if (!State.user?.isSuperAdmin) {
    return `<div class="card">このコンソールは super_admin 専用です。<button class="btn btn-secondary btn-sm" data-action="home">戻る</button></div>`;
  }
  const sub = State.consoleTab || 'features';
  const tabBtn = (id, label) =>
    `<button class="admin-tab ${sub === id ? 'active' : ''}" data-action="set-console-tab" data-ctab="${id}">${label}</button>`;
  let body = '';
  if (sub === 'features')      body = renderConsoleFeatures();
  else if (sub === 'perms')    body = renderConsolePerms();
  else if (sub === 'branding') body = renderConsoleBranding();
  else if (sub === 'preview')  body = renderConsolePreview();
  else if (sub === 'ai')       body = renderConsoleAi();
  return `
  <div class="card" style="border-top:3px solid #0e7490;">
    <h3 style="font-size:16px;margin:0 0 4px;">⚙️ コンソール（super_admin 専用）</h3>
    <div class="muted small" style="margin-bottom:10px;">機能のオン/オフ・権限・ブランディングを管理します。設定は全端末・全店舗に反映されます。</div>
    <div class="admin-tabs" style="margin-bottom:14px;">
      ${tabBtn('features', '① 機能 ON/OFF')}
      ${tabBtn('perms', '② 権限設定')}
      ${tabBtn('branding', '③ ブランディング')}
      ${tabBtn('preview', '④ ログインプレビュー')}
      ${tabBtn('ai', '⑤ AI Support')}
    </div>
    ${body}
  </div>`;
}

function renderConsoleFeatures() {
  const flags = getFeatureFlags();
  const FEATURES = [
    { key: 'coin', name: 'FevaCOIN（コイン/表彰制度）', desc: '棚卸ランキングに応じてコインを付与する仕組み。OFFの間は一切表示されません。' },
    { key: 'foodloss', name: '食材ロス管理', desc: '毎月の廃棄記録モジュール。OFFの間はダッシュボードのボタンと画面が一切表示されません。' },
    { key: 'breakage', name: '器物破損管理', desc: '皿・備品の在庫/破損記録モジュール。OFFの間はダッシュボードのボタンと画面が一切表示されません。' },
  ];
  const rows = FEATURES.map(f => {
    const on = !!flags[f.key];
    return `
    <div class="row" style="justify-content:space-between;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #eee;flex-wrap:wrap;">
      <div style="flex:1;min-width:200px;">
        <div style="font-weight:600;">${escapeHtml(f.name)}</div>
        <div class="muted small">${escapeHtml(f.desc)}</div>
      </div>
      <button class="btn btn-sm ${on ? 'btn-primary' : 'btn-secondary'}" data-action="console-toggle-feature" data-flag="${f.key}">
        ${on ? 'ON' : 'OFF'}
      </button>
    </div>`;
  }).join('');
  return `<div class="muted small" style="margin-bottom:8px;">今後の簡シリーズ機能もここに追加されます。</div>${rows}`;
}

function renderConsolePerms() {
  const saved = State.rolePermissions;
  const seed = saved || DEFAULT_ROLE_PERMS_SEED;
  const head = `<th style="text-align:left;padding:6px 8px;">ページ</th>` +
    CONSOLE_ROLES.map(r => `<th style="padding:6px 8px;">${escapeHtml(r.name)}</th>`).join('') +
    `<th style="padding:6px 8px;color:#0e7490;">super_admin</th>`;
  const body = CONSOLE_PAGES.map(p => {
    const cells = CONSOLE_ROLES.map(r => {
      const checked = !!(seed[p.id] && seed[p.id][r.id]);
      // ダッシュボードは締め出し防止のため常時ON・編集不可
      const locked = (p.id === 'dashboard');
      return `<td style="text-align:center;padding:6px 8px;">
        <input type="checkbox" class="perm-chk" data-page="${p.id}" data-role="${r.id}" ${checked || locked ? 'checked' : ''} ${locked ? 'disabled' : ''}>
      </td>`;
    }).join('');
    return `<tr>
      <td style="padding:6px 8px;font-weight:600;">${escapeHtml(p.name)}</td>
      ${cells}
      <td style="text-align:center;padding:6px 8px;"><input type="checkbox" checked disabled title="super_admin は常に全権限"></td>
    </tr>`;
  }).join('');
  const status = saved
    ? '<span style="color:#16a34a;">現在この権限設定が有効です。</span>'
    : '<span class="muted">未保存です。保存するまでは全ロール現行どおり全許可で動作します。</span>';
  return `
  <div class="muted small" style="margin-bottom:8px;">チェック＝そのページへのアクセスを許可。${status}<br>
  ・ダッシュボードは締め出し防止のため常に許可。<br>
  ・super_admin はこの設定に関係なく常に全権限を保持します。</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead><tr style="border-bottom:2px solid #ddd;">${head}</tr></thead>
      <tbody>${body}</tbody>
    </table>
  </div>
  <div style="margin-top:14px;">
    <button class="btn btn-primary btn-sm" data-action="console-save-perms">権限を保存</button>
    ${saved ? '<button class="btn btn-secondary btn-sm" data-action="console-reset-perms" style="margin-left:8px;">既定に戻す（全許可）</button>' : ''}
  </div>`;
}

function renderConsoleBranding() {
  const b = getBranding();
  const logo = (State._brandingLogoDraft !== undefined) ? State._brandingLogoDraft : (b.logoUrl || '');
  const stockLogo = (State._brandingStockLogoDraft !== undefined) ? State._brandingStockLogoDraft : (b.stockLogoUrl || '');
  const cityLogo = (State._brandingCityLogoDraft !== undefined) ? State._brandingCityLogoDraft : (b.cityLogoUrl || '');
  const boardLogo = (State._brandBoardLogoDraft !== undefined) ? State._brandBoardLogoDraft : (b.boardLogo || '');
  return `
  <div class="muted small" style="margin-bottom:12px;">ログイン画面（会社名・タイトル・ロゴ）と、ログイン後ボード（管理名・ロゴ）を編集できます。最上部の「Fevascale Series Product」表記は固定です。</div>
  <label class="lx-field" style="display:block;font-weight:600;margin-bottom:4px;">会社名（テナント名）</label>
  <input class="input" id="brand-company" value="${escapeHtml(b.companyName)}" style="width:100%;margin-bottom:12px;">
  <label class="lx-field" style="display:block;font-weight:600;margin-bottom:4px;">ログインタイトル（キャッチコピー）</label>
  <input class="input" id="brand-title" value="${escapeHtml(b.loginTitle)}" style="width:100%;margin-bottom:12px;">
  <label class="lx-field" style="display:block;font-weight:600;margin-bottom:4px;">サブタイトル（任意）</label>
  <input class="input" id="brand-subtitle" value="${escapeHtml(b.loginSubtitle || '')}" style="width:100%;margin-bottom:12px;">
  <label class="lx-field" style="display:block;font-weight:600;margin-bottom:4px;">ロゴ画像（任意・差し替え）</label>
  <div class="row" style="gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:12px;">
    <input type="file" id="brand-logo-file" accept="image/png,image/jpeg,image/svg+xml">
    ${logo ? `<img src="${logo}" alt="logo" style="height:48px;border:1px solid #eee;border-radius:6px;padding:4px;background:#fff;">
      <button class="btn btn-secondary btn-sm" data-action="console-clear-logo">ロゴを既定に戻す</button>` : '<span class="muted small">未設定（既定ロゴを使用）</span>'}
  </div>
  <label class="lx-field" style="display:block;font-weight:600;margin-bottom:4px;">STOCKロゴ（ログイン中央・任意）</label>
  <div class="row" style="gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:12px;">
    <input type="file" id="brand-stock-logo-file" accept="image/png,image/svg+xml">
    ${stockLogo ? `<img src="${stockLogo}" alt="stock logo" style="height:40px;border:1px solid #eee;border-radius:6px;padding:4px;background:#0b2545;">
      <button class="btn btn-secondary btn-sm" data-action="console-clear-stock-logo">既定に戻す</button>` : '<span class="muted small">未設定（既定ロゴを使用）</span>'}
  </div>
  <label class="lx-field" style="display:block;font-weight:600;margin-bottom:4px;">Cityロゴ（ログイン下部・任意）</label>
  <div class="row" style="gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:12px;">
    <input type="file" id="brand-city-logo-file" accept="image/png,image/svg+xml">
    ${cityLogo ? `<img src="${cityLogo}" alt="city logo" style="height:40px;border:1px solid #eee;border-radius:6px;padding:4px;background:#fff;">
      <button class="btn btn-secondary btn-sm" data-action="console-clear-city-logo">既定に戻す</button>` : '<span class="muted small">未設定（既定ロゴを使用）</span>'}
  </div>
  <label class="lx-field" style="display:block;font-weight:600;margin-bottom:4px;">City（回転ロゴ）の動き</label>
  <div class="row" style="gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:12px;">
    <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
      <input type="checkbox" id="brand-city-rotate" ${b.cityRotate ? 'checked' : ''}> 回転する
    </label>
    <label style="display:flex;align-items:center;gap:6px;">速度（秒/周）
      <input class="input" id="brand-city-spin-sec" type="number" min="2" max="120" value="${Number(b.citySpinSec) || 12}" style="width:84px;">
    </label>
    <span class="muted small">未チェックで静止。初期はロゴ未設定＝非表示。</span>
  </div>
  <div style="height:1px;background:#e7e5e4;margin:6px 0 14px;"></div>
  <div class="muted small" style="margin-bottom:8px;font-weight:700;">ログイン後ボード（ホーム上部）</div>
  <label class="lx-field" style="display:block;font-weight:600;margin-bottom:4px;">管理名（タイトル）</label>
  <input class="input" id="brand-board-title" value="${escapeHtml(b.boardTitle || '棚卸管理')}" style="width:100%;margin-bottom:12px;">
  <label class="lx-field" style="display:block;font-weight:600;margin-bottom:4px;">ボードロゴ（任意・差し替え）</label>
  <div class="row" style="gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:12px;">
    <input type="file" id="brand-board-logo-file" accept="image/png,image/jpeg,image/svg+xml">
    ${boardLogo ? `<img src="${boardLogo}" alt="board logo" style="height:40px;border:1px solid #eee;border-radius:6px;padding:4px;background:#fff;">
      <button class="btn btn-secondary btn-sm" data-action="console-clear-board-logo">既定に戻す</button>` : '<span class="muted small">未設定（既定ロゴを使用）</span>'}
  </div>
  <div class="muted small" style="margin-bottom:12px;background:#f1f5f9;padding:8px 10px;border-radius:6px;">
    🔒 固定表記：<strong>Fevascale Series Product</strong>（プラットフォーム名・編集不可）
  </div>
  <button class="btn btn-primary btn-sm" data-action="console-save-branding">ブランディングを保存</button>`;
}

function renderConsolePreview() {
  const b = getBranding();
  const logo = (State._brandingLogoDraft !== undefined) ? State._brandingLogoDraft : (b.logoUrl || '');
  const logoImg = logo ? logo : (typeof LOGO_LOGIN_BOX_IMG !== 'undefined' ? LOGO_LOGIN_BOX_IMG : '');
  return `
  <div class="muted small" style="margin-bottom:10px;">現在の設定でのログイン画面（上段＝プラットフォーム固定 ／ 下段＝テナント）プレビュー：</div>
  <div style="max-width:360px;margin:0 auto;background:linear-gradient(160deg,#0b2545,#0e7490);border-radius:14px;padding:24px 20px;text-align:center;color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.2);">
    <div style="font-size:11px;letter-spacing:2px;opacity:.85;margin-bottom:10px;">FEVASCALE SERIES PRODUCT</div>
    ${logoImg ? `<img src="${logoImg}" alt="logo" style="max-height:60px;max-width:80%;margin-bottom:12px;">` : ''}
    <div style="font-size:17px;font-weight:700;margin-bottom:6px;">${escapeHtml(b.companyName)}</div>
    <div style="font-size:12px;opacity:.9;margin-bottom:4px;">${escapeHtml(b.loginTitle)}</div>
    ${b.loginSubtitle ? `<div style="font-size:11px;opacity:.75;">${escapeHtml(b.loginSubtitle)}</div>` : ''}
    <div style="margin-top:16px;border-top:1px solid rgba(255,255,255,.2);padding-top:12px;font-size:11px;opacity:.7;">SIGN IN</div>
  </div>`;
}

// コンソールのファイル入力バインド(render後に呼ぶ)
function initConsole() {
  const boardFileEl = document.getElementById('brand-board-logo-file');
  if (boardFileEl) {
    boardFileEl.addEventListener('change', (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      if (f.size > 1024 * 1024) { toast('画像は1MB以下にしてください', 'error'); return; }
      const reader = new FileReader();
      reader.onload = () => { State._brandBoardLogoDraft = reader.result; render(); };
      reader.readAsDataURL(f);
    });
  }
  const fileEl = document.getElementById('brand-logo-file');
  if (fileEl) {
    fileEl.addEventListener('change', (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      if (f.size > 1024 * 1024) { toast('画像は1MB以下にしてください', 'error'); return; }
      const reader = new FileReader();
      reader.onload = () => { State._brandingLogoDraft = reader.result; render(); };
      reader.readAsDataURL(f);
    });
  }
  const stockFileEl = document.getElementById('brand-stock-logo-file');
  if (stockFileEl) {
    stockFileEl.addEventListener('change', (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      if (f.size > 1024 * 1024) { toast('画像は1MB以下にしてください', 'error'); return; }
      const reader = new FileReader();
      reader.onload = () => { State._brandingStockLogoDraft = reader.result; render(); };
      reader.readAsDataURL(f);
    });
  }
  const cityFileEl = document.getElementById('brand-city-logo-file');
  if (cityFileEl) {
    cityFileEl.addEventListener('change', (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      if (f.size > 1024 * 1024) { toast('画像は1MB以下にしてください', 'error'); return; }
      const reader = new FileReader();
      reader.onload = () => { State._brandingCityLogoDraft = reader.result; render(); };
      reader.readAsDataURL(f);
    });
  }
}

function renderAdmin() {
  const role = State.user?.role;
  const isAdm = role === 'admin';
  const isMgr = role === 'manager';
  if (!isAdm && !isMgr) {
    return `<div class="card">権限が必要です。<button class="btn btn-secondary btn-sm" data-action="home">戻る</button></div>`;
  }
  const allowedBrands = isAdm ? (State.brands || []).map(b => b.id) : managerAllowedBrands();
  if (!isAdm && allowedBrands.length === 0) {
    return `<div class="card">担当業態が設定されていません。管理者にお問い合わせください。<button class="btn btn-secondary btn-sm" data-action="home">戻る</button></div>`;
  }
  let tab = State.adminTab;
  // 業態責任者は許可ブランドのみ。許可外（店舗/ユーザー/ブランド/他業態）なら自分のブランドへ
  if (!isAdm && !allowedBrands.includes(tab)) tab = allowedBrands[0];

  return `
  <button class="btn btn-secondary btn-sm" data-action="home" style="margin-bottom:12px;">‹ ダッシュボードに戻る</button>

  <h2 style="font-size:20px;margin-bottom:12px;">商品マスタ管理${isMgr ? '（業態責任者）' : ''}</h2>

  <div class="admin-tabs">
    ${(State.brands || []).filter(b => isAdm || allowedBrands.includes(b.id)).map(b => `
      <button class="admin-tab ${tab === b.id ? 'active' : ''}" data-action="set-admin-tab" data-tab="${escapeHtml(b.id)}">${escapeHtml(b.name)}</button>
    `).join('')}
    ${isAdm ? `
    <button class="admin-tab ${tab === 'stores' ? 'active' : ''}" data-action="set-admin-tab" data-tab="stores">店舗</button>
    <button class="admin-tab ${tab === 'users' ? 'active' : ''}" data-action="set-admin-tab" data-tab="users">ユーザー</button>
    <button class="admin-tab ${tab === 'brands' ? 'active' : ''}" data-action="set-admin-tab" data-tab="brands">🏷️ ブランド</button>
    ` : ''}
    ${State.user?.isSuperAdmin ? `
    <button class="admin-tab ${tab === 'console' ? 'active' : ''}" data-action="set-admin-tab" data-tab="console" style="border-color:#0e7490;color:#0e7490;">⚙️ コンソール</button>
    ` : ''}
  </div>

  ${isAdm && tab !== 'console' ? renderDeadlineSettings() : ''}

  ${tab === 'console' ? renderConsole()
    : tab === 'stores' ? renderAdminStores()
    : tab === 'users' ? renderAdminUsers()
    : tab === 'brands' ? renderAdminBrands()
    : renderAdminBrand(tab)}
  `;
}

function renderDeadlineSettings() {
  const d = getDeadline();
  const locked = isInputLocked();
  return `
  <div class="card deadline-card">
    <h3 style="font-size:16px;margin:0 0 8px;">⏰ 入力締切の設定（${formatMonth(State.month)}）</h3>
    <div class="muted small" style="margin-bottom:10px;">指定した日時になると、全店舗で棚卸の入力ができなくなります（管理者・業態責任者を除く）。締切はすべての端末・全ページに表示されます。</div>
    <div class="row" style="gap:8px;flex-wrap:wrap;align-items:center;">
      <input type="datetime-local" class="input" id="deadline-input" value="${escapeHtml(d || '')}" style="max-width:240px;">
      <button class="btn btn-primary btn-sm" data-action="save-deadline">締切を設定</button>
      ${d ? `<button class="btn btn-secondary btn-sm" data-action="clear-deadline">締切を解除</button>` : ''}
    </div>
    ${d ? `<div class="${locked ? 'deadline-status locked' : 'deadline-status'}" style="margin-top:10px;">
      現在の締切：<strong>${formatDeadline(d)}</strong> ${locked ? '（締切済み）' : '（受付中）'}
    </div>` : '<div class="muted small" style="margin-top:10px;">現在この月度の締切は設定されていません。</div>'}
  </div>
  ${renderApprovalDeadlineSettings()}`;
}

function renderApprovalDeadlineSettings() {
  const stored = State.approvalDeadlines && State.approvalDeadlines[State.month];
  const isReleased = (stored === 'none');
  const isCustom = !!stored && !isReleased;
  const ad = getApprovalDeadline();
  const locked = isApprovalLocked();
  return `
  <div class="card deadline-card" style="border-top-color:#c2410c;margin-top:16px;">
    <h3 style="font-size:16px;margin:0 0 8px;">✍ 業態責任者 承認締切の設定（${formatMonth(State.month)}）</h3>
    <div class="muted small" style="margin-bottom:10px;">業態責任者が各店の確認・承認を完了すべき期限です。既定は<strong>22日13:00</strong>。設定・延長・解除は管理者のみ可能です。</div>
    <div class="row" style="gap:8px;flex-wrap:wrap;align-items:center;">
      <input type="datetime-local" class="input" id="approval-deadline-input" value="${escapeHtml((!isReleased && ad) ? ad : '')}" style="max-width:240px;">
      <button class="btn btn-primary btn-sm" data-action="save-approval-deadline">承認締切を設定</button>
      ${isCustom ? `<button class="btn btn-secondary btn-sm" data-action="clear-approval-deadline">既定に戻す</button>` : ''}
      ${isReleased ? `<button class="btn btn-secondary btn-sm" data-action="clear-approval-deadline">既定に戻す</button>` : `<button class="btn btn-danger btn-sm" data-action="release-approval-deadline">締切を解除（なし）</button>`}
    </div>
    <div class="${locked ? 'deadline-status locked' : 'deadline-status'}" style="margin-top:10px;">
      ${isReleased ? '現在の承認締切：<strong>なし（解除中）</strong> ／ 受付無制限' : `現在の承認締切：<strong>${formatDeadline(ad)}</strong> ${isCustom ? '（手動設定）' : '（既定）'} ${locked ? '／ 締切済み' : '／ 受付中'}`}
    </div>
  </div>`;
}

function renderAdminItems(brand) {
  const items = State.items[brand] || [];
  const cats = [...new Set(items.map(i => i.category))];

  const q = (State.adminFilter || '').toLowerCase();
  const catf = State.adminFilterCat || '';
  let shown = items.slice();
  if (catf) shown = shown.filter(i => i.category === catf);
  if (q) shown = shown.filter(i => i.name.toLowerCase().includes(q) || i.category.toLowerCase().includes(q));

  const seasonalCount = items.filter(i => i.seasonal).length;

  return `
  <div class="row between" style="margin-bottom:12px;flex-wrap:wrap;gap:8px;">
    <div style="color:#fff;font-weight:700;">
      <strong style="color:#fff;">${items.length}</strong> 品目登録中
      ${seasonalCount > 0 ? `<span class="badge" style="background:#fef3c7;color:#a16207;margin-left:8px;">季節 ${seasonalCount}</span>` : ''}
    </div>
    <div class="row" style="gap:6px;flex-wrap:wrap;">
      <button class="btn btn-secondary btn-sm" data-action="download-items-template" data-brand="${brand}" title="商品マスター取込み用のExcelテンプレートをダウンロード">📋 テンプレートDL</button>
      <button class="btn btn-secondary btn-sm" data-action="import-items-xlsx" data-brand="${brand}" title="Excelファイルから商品をまとめて登録">📤 Excel取込み</button>
      <button class="btn btn-primary btn-sm" data-action="add-item" data-brand="${brand}">＋ 商品を追加</button>
      <button class="btn btn-outline btn-sm" data-action="delete-all-items" data-brand="${brand}" title="この業態の商品マスターを全件削除（やり直し用）" style="color:#b91c1c;border-color:#fca5a5;">🗑 全削除</button>
    </div>
  </div>

  <div class="admin-filters">
    <input class="input" id="admin-filter-input" placeholder="品名で検索…" value="${escapeHtml(State.adminFilter || '')}">
    <select class="select" id="admin-filter-cat">
      <option value="">全カテゴリー</option>
      ${cats.map(c => `<option value="${escapeHtml(c)}" ${c === catf ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
    </select>
  </div>

  <div class="admin-table">
    <div class="header" style="grid-template-columns: 80px 1fr 120px 60px 90px 100px 70px 60px 140px;">
      <div>カテゴリー</div>
      <div>品名</div>
      <div>仕入先</div>
      <div>単位</div>
      <div class="text-right">単価 (円)</div>
      <div class="text-right">アラート金額</div>
      <div class="text-right">種別</div>
      <div class="text-right">季節</div>
      <div></div>
    </div>
    ${shown.length === 0
      ? `<div class="empty-cat">該当商品がありません</div>`
      : shown.map(it => {
          const supNote = (State.supplierNotes && it.supplier && State.supplierNotes[it.supplier]) || null;
          const hasSupInfo = supNote && (supNote.person || supNote.contact || supNote.memo);
          return `
        <div class="admin-row ${it.seasonal ? 'is-seasonal' : ''}" style="grid-template-columns: 80px 1fr 120px 60px 90px 100px 70px 60px 140px;">
          <div>
            <input class="input" data-edit-id="${it.id}" data-field="category" value="${escapeHtml(it.category)}">
          </div>
          <div>
            <input class="input" data-edit-id="${it.id}" data-field="name" value="${escapeHtml(it.name)}">
          </div>
          <div>
            <input class="input" data-edit-id="${it.id}" data-field="supplier" value="${escapeHtml(it.supplier || '')}" placeholder="仕入先名" title="${hasSupInfo ? `担当: ${supNote.person || '—'} / 連絡先: ${supNote.contact || '—'}\\n備考: ${supNote.memo || '—'}` : '編集ボタンから担当・連絡先を登録できます'}">
          </div>
          <div>
            <input class="input" data-edit-id="${it.id}" data-field="unit" value="${escapeHtml(it.unit || '')}">
          </div>
          <div>
            <input class="input num text-right" type="number" step="0.01" data-edit-id="${it.id}" data-field="price" value="${it.price}">
          </div>
          <div>
            <input class="input num text-right" type="number" step="1" min="0" data-edit-id="${it.id}" data-field="alertThreshold" value="${it.alertThreshold == null ? '' : it.alertThreshold}" placeholder="${HIGH_VALUE_THRESHOLD}" title="この商品のアラート金額（空欄=既定 ¥${HIGH_VALUE_THRESHOLD.toLocaleString()}）">
          </div>
          <div>
            <select class="select" data-edit-id="${it.id}" data-field="kind">
              <option value="food"     ${it.kind === 'food'     ? 'selected' : ''}>食材</option>
              <option value="supplies" ${it.kind === 'supplies' ? 'selected' : ''}>備品</option>
            </select>
          </div>
          <div>
            <label class="checkbox-row" style="justify-content:flex-end;">
              <input type="checkbox" data-edit-id="${it.id}" data-field="seasonal" ${it.seasonal ? 'checked' : ''}>
            </label>
          </div>
          <div class="actions" style="display:flex;gap:4px;justify-content:flex-end;">
            <button class="btn btn-secondary btn-sm" data-action="edit-item" data-brand="${brand}" data-item-id="${it.id}" title="仕入先の担当者・連絡先・備考も含めて編集">✏️ 編集</button>
            <button class="btn btn-danger btn-sm" data-action="delete-item" data-brand="${brand}" data-item-id="${it.id}">削除</button>
          </div>
        </div>
      `;}).join('')}
  </div>

  <div class="help" style="margin-top:10px;">
    各セル（カテゴリー・品名・仕入先・単位・単価など）はクリックして直接編集できます（自動保存）。<br>
    仕入先の担当者・連絡先・備考を登録する場合は「✏️ 編集」ボタンから入力してください。
  </div>
  `;
}

function renderAdminSuppliers() {
  // Aggregate all suppliers from all brand items
  const supplierMap = {}; // supplier name -> { count, brands: Set, items: [{brand, name}], note }
  for (const brand of allBrands()) {
    for (const it of (State.items[brand] || [])) {
      const sup = (it.supplier || '').trim();
      if (!sup) continue;
      if (!supplierMap[sup]) supplierMap[sup] = { count: 0, brands: new Set(), items: [] };
      supplierMap[sup].count++;
      supplierMap[sup].brands.add(brand);
      supplierMap[sup].items.push({ brand, name: it.name });
    }
  }

  // Load supplier notes
  const supplierNotes = State.supplierNotes || {};
  const filter = (State.adminFilter || '').toLowerCase();

  const suppliers = Object.keys(supplierMap).sort((a, b) => a.localeCompare(b, 'ja'));
  const filtered = filter
    ? suppliers.filter(s => s.toLowerCase().includes(filter))
    : suppliers;

  return `
  <div class="info-banner" style="margin-bottom:12px;">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
    <div>
      仕入先一覧は商品マスタの「仕入先」欄から自動収集しています。<br>
      ここでは仕入先ごとの<strong>連絡先・備考</strong>を入力できます。商品行の仕入先名は<strong>8番らーめん / コメダ / ヒョンチャン</strong>タブの「仕入先」列で編集できます。
    </div>
  </div>

  <div class="row between" style="margin-bottom:12px;">
    <div><strong>${suppliers.length}</strong> 仕入先（${filter ? `絞り込み: ${filtered.length}件` : '全件表示中'}）</div>
    <div style="display:flex;gap:8px;">
      <input class="input" id="admin-filter-input" placeholder="仕入先名で絞り込み..." value="${escapeHtml(State.adminFilter || '')}" style="width:240px;">
      <button class="btn btn-secondary btn-sm" data-action="download-suppliers-template" title="仕入先一覧をCSVで取得（一括編集用）">📋 テンプレDL</button>
      <button class="btn btn-secondary btn-sm" data-action="import-suppliers-csv" title="CSVから仕入先メモを一括登録">📤 CSV取込み</button>
      <button class="btn btn-primary btn-sm" data-action="add-supplier">＋ 仕入先を追加</button>
    </div>
  </div>

  ${filtered.length === 0 ? `
    <div class="empty-cat">${filter ? '該当する仕入先がありません' : '仕入先がまだ登録されていません。商品マスタで仕入先を入力するか、上のボタンから追加してください。'}</div>
  ` : `
  <div class="admin-table">
    <div class="header" style="grid-template-columns: 180px 100px 70px 1fr 90px;">
      <div>仕入先名</div>
      <div>業態</div>
      <div class="text-right">取扱品数</div>
      <div>連絡先・備考</div>
      <div></div>
    </div>
    ${filtered.map(sup => {
      const info = supplierMap[sup];
      const brands = [...info.brands].map(b => `<span class="brand-tag ${b}" style="font-size:10px;padding:1px 6px;">${brandLabel(b).replace('珈琲店','').replace('らーめん','').replace('プルコギ','')}</span>`).join(' ');
      const note = supplierNotes[sup] || { contact: '', memo: '' };
      return `
        <div class="admin-row" style="grid-template-columns: 180px 100px 70px 1fr 90px;">
          <div>
            <input class="input" data-edit-supplier="${escapeHtml(sup)}" data-field="name" value="${escapeHtml(sup)}" title="クリックで名前を変更（その仕入先の全商品に反映）">
          </div>
          <div style="font-size:11px;">${brands}</div>
          <div class="text-right num"><strong>${info.count}</strong></div>
          <div style="display:flex;flex-direction:column;gap:4px;">
            <input class="input" data-edit-supplier-note="${escapeHtml(sup)}" data-field="contact" value="${escapeHtml(note.contact || '')}" placeholder="電話番号 / 担当者など">
            <input class="input" data-edit-supplier-note="${escapeHtml(sup)}" data-field="memo" value="${escapeHtml(note.memo || '')}" placeholder="備考 / 発注条件など">
          </div>
          <div class="actions">
            <button class="btn btn-secondary btn-sm" data-action="show-supplier-items" data-supplier="${escapeHtml(sup)}" title="この仕入先の商品を見る">📋 商品</button>
            <button class="btn btn-secondary btn-sm" data-action="delete-supplier" data-supplier="${escapeHtml(sup)}" title="この仕入先を削除（商品の仕入先欄を空に）" style="color:#b91c1c;">🗑 削除</button>
          </div>
        </div>
      `;
    }).join('')}
  </div>
  `}

  <div class="help" style="margin-top:10px;">
    <strong>使い方:</strong> 仕入先名を変更すると、その仕入先名で登録されている全商品に反映されます。連絡先・備考は自動保存されます。
  </div>
  `;
}

// =========================================================
// ユーザー一覧：Excel 出力 / テンプレDL / 一括取込
//   取込は「同じID＝上書き・無いID＝追加」の非破壊マージ。
// =========================================================
const USER_ROLE_LABEL = { super_admin:'スーパー管理者', admin:'管理者', manager:'業態責任者', store_leader:'店舗リーダー', trainer:'トレーナー', staff:'スタッフ', soumu:'総務', director:'役員' };
function userRoleToLabel(v){ return USER_ROLE_LABEL[v] || v || 'スタッフ'; }
function userLabelToRole(s){
  const t = String(s||'').trim();
  const hit = Object.keys(USER_ROLE_LABEL).find(k => USER_ROLE_LABEL[k] === t);
  if (hit) return hit;
  if (['super_admin','admin','manager','store_leader','trainer','staff','soumu','director'].includes(t)) return t;
  return 'staff';
}
function userStoreToName(id){ const s=(State.stores||[]).find(x=>x.id===id); return s?s.name:''; }
function userBrandToLabel(v){ if(v==='all') return '全業態'; if(!v) return ''; const b=(State.brands||[]).find(x=>x.id===v); return b?b.name:v; }

window.userExport = function(){
  if(typeof XLSX==='undefined'){ toast('Excelライブラリ未読込','error'); return; }
  const aoa=[['ID','氏名/店舗名','区分','パスワード','権限','所属店舗','承認業態','状態']];
  (State.users||[]).forEach(u=>{
    aoa.push([ u.id||'', u.name||'', u.position||'', u.password||'',
      userRoleToLabel(u.role), userStoreToName(u.defaultStore), userBrandToLabel(u.approveBrand), u.archived?'停止中':'有効' ]);
  });
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols']=[{wch:12},{wch:18},{wch:12},{wch:12},{wch:14},{wch:22},{wch:14},{wch:8}];
  const wb=XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb,ws,'ユーザー一覧');
  XLSX.writeFile(wb,'ユーザー一覧_'+(new Date().toISOString().slice(0,10))+'.xlsx');
};

window.userTemplate = function(){
  if(typeof XLSX==='undefined'){ toast('Excelライブラリ未読込','error'); return; }
  const aoa=[
    ['ユーザー取込テンプレート（この案内1行は削除可。権限=管理者/業態責任者/スタッフ/総務/役員）'],
    ['ID','氏名/店舗名','区分','パスワード','権限','所属店舗','承認業態'],
    ['h-sabae','8番らーめん さばえ店','店舗','pass','スタッフ','8番らーめん さばえ店',''],
    ['p-owada','ヒョンチャン 大和田店','店舗','pass','スタッフ','ヒョンチャン 大和田店',''],
    ['mgr-h','8番統括','業態責任者','pass','業態責任者','','8番らーめん'],
    ['exec1','役員 ○○','役員','pass','役員','','全業態'],
  ];
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols']=[{wch:12},{wch:18},{wch:12},{wch:12},{wch:14},{wch:22},{wch:14}];
  const wb=XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb,ws,'ユーザー取込');
  XLSX.writeFile(wb,'ユーザー_取込テンプレート.xlsx');
};

window.userImport = async function(){
  const file = await pickXlsxFile(); if(!file) return;
  let rows; try{ rows = await readXlsxAsRows(file); }catch(e){ toast('Excel読込に失敗しました','error'); return; }
  let hidx=-1;
  for(let i=0;i<Math.min(rows.length,30);i++){ const r=rows[i]||[]; if(r.some(c=> ['ID','id'].includes(String(c).trim()))){ hidx=i; break; } }
  if(hidx<0){ toast('ヘッダー行（「ID」列）が見つかりません','error'); return; }
  const hmap = buildHeaderMap(rows[hidx]);
  const storeByName={}; (State.stores||[]).forEach(s=>{ storeByName[s.name.trim()]=s.id; storeByName[s.id]=s.id; });
  const brandByName={'全業態':'all','all':'all'}; (State.brands||[]).forEach(b=>{ brandByName[b.name.trim()]=b.id; brandByName[b.id]=b.id; });
  const incoming=[]; let skip=0;
  for(let i=hidx+1;i<rows.length;i++){
    const r=rows[i]||[]; if(r.every(c=>c===''||c==null)) continue;
    const id=String(pickCell(r,hmap,'ID','id')||'').trim();
    if(!id){ skip++; continue; }
    const storeRaw=String(pickCell(r,hmap,'所属店舗','店舗','店舗名','店舗ID')||'').trim();
    const brandRaw=String(pickCell(r,hmap,'承認業態','業態')||'').trim();
    const pw=String(pickCell(r,hmap,'パスワード')||'').trim();
    incoming.push({
      id,
      name:String(pickCell(r,hmap,'氏名/店舗名','氏名','店舗名','名前')||'').trim(),
      position:String(pickCell(r,hmap,'区分')||'').trim(),
      password: pw, // 空＝既存のパスワードを変更しない（新規のみ後で既定値を補完）
      role:userLabelToRole(pickCell(r,hmap,'権限','role')),
      defaultStore: storeRaw ? (storeByName[storeRaw]||null) : null,
      approveBrand: brandRaw ? (brandByName[brandRaw]||null) : null
    });
  }
  if(incoming.length===0){ toast('取り込める行がありません','error'); return; }
  if(!confirm(incoming.length+'件を取り込みます。\n・同じID＝上書き／無いID＝追加\n・パスワード欄が空の行は既存パスワードを変更しません\n・表に無い既存ユーザーは削除しません\nよろしいですか？（スキップ '+skip+'件）')) return;
  const map={}; (State.users||[]).forEach(u=>{ map[u.id]=u; });
  incoming.forEach(u=>{ if(!map[u.id] && !u.password) u.password='pass'; map[u.id]=Object.assign({}, map[u.id]||{}, u); });
  State.users = Object.values(map);
  const ok = await saveUsers();
  if(!ok){ toast('保存に失敗しました'+(typeof _lastDbError!=='undefined'&&_lastDbError?('：'+_lastDbError):''),'error'); return; }
  render();
  toast(incoming.length+'件を取り込みました','success');
};

function renderAdminUsers() {
  const stores = State.stores;
  const filter = (State.adminFilter || '').toLowerCase();
  const filterStore = State.adminFilterCat || '';
  let list = State.users;
  if (filter) {
    list = list.filter(u =>
      (u.name || '').toLowerCase().includes(filter) ||
      (u.id || '').toLowerCase().includes(filter) ||
      (u.position || '').toLowerCase().includes(filter));
  }
  if (filterStore) {
    if (filterStore === '__admin__') list = list.filter(u => !isStaffLike(u.role));
    else list = list.filter(u => u.defaultStore === filterStore);
  }

  return `
  <div class="info-banner" style="margin-bottom:12px;">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
    <div>
      ここで登録したユーザーがログイン・棚卸入力できます。<br>
      <strong>権限:</strong> 管理者(全権限) / 業態責任者(承認可) / スタッフ(自店舗のみ) / 総務(閲覧のみ)<br>
      <strong>初期パスワード:</strong> 全スタッフ「pass」。各自で変更してください。
    </div>
  </div>
  <div class="row between" style="margin-bottom:12px;gap:8px;flex-wrap:wrap;">
    <div><strong>${State.users.length}</strong>名 ${filter || filterStore ? `（表示: ${list.length}名）` : ''}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <select class="select" id="admin-filter-cat" style="width:200px;">
        <option value="">全員表示</option>
        <option value="__admin__" ${filterStore === '__admin__' ? 'selected' : ''}>管理職のみ</option>
        ${stores.map(s => `<option value="${escapeHtml(s.id)}" ${filterStore === s.id ? 'selected' : ''}>${escapeHtml(storeDisp(s))}</option>`).join('')}
      </select>
      <input class="input" id="admin-filter-input" placeholder="氏名/店舗名/IDで絞り込み..." value="${escapeHtml(State.adminFilter || '')}" style="width:200px;">
      <button class="btn btn-primary btn-sm" data-action="add-user">＋ ユーザーを追加</button>
      <button class="btn btn-outline btn-sm" onclick="userExport()" type="button">📤 Excel出力</button>
      <button class="btn btn-outline btn-sm" onclick="userImport()" type="button">📥 Excel取込</button>
      <button class="btn btn-outline btn-sm" onclick="userTemplate()" type="button">⬇ テンプレDL</button>
    </div>
  </div>
  <div class="admin-table">
    <div class="header" style="grid-template-columns: 80px 130px 100px 110px 110px 1fr 110px 150px;">
      <div>ID</div>
      <div>氏名/店舗名</div>
      <div>区分</div>
      <div>パスワード</div>
      <div>権限</div>
      <div>所属店舗</div>
      <div>承認業態</div>
      <div></div>
    </div>
    ${list.map(u => `
      <div class="admin-row${u.archived ? ' suspended' : ''}" style="grid-template-columns: 80px 130px 100px 110px 110px 1fr 110px 150px;">
        <div><input class="input" data-edit-user-id="${escapeHtml(u.id)}" data-field="id" value="${escapeHtml(u.id)}" ${u.id === 'admin' ? 'readonly' : ''}></div>
        <div style="display:flex;align-items:center;gap:4px;">${u.archived ? '<span class="user-suspended-badge">停止中</span>' : ''}<input class="input" data-edit-user-id="${escapeHtml(u.id)}" data-field="name" value="${escapeHtml(u.name)}"></div>
        <div><input class="input" data-edit-user-id="${escapeHtml(u.id)}" data-field="position" value="${escapeHtml(u.position || '')}" placeholder="社員/店長など"></div>
        <div><input class="input" data-edit-user-id="${escapeHtml(u.id)}" data-field="password" value="${escapeHtml(u.password || '')}" type="text" placeholder="変更時のみ入力"></div>
        <div>
          <select class="select" data-edit-user-id="${escapeHtml(u.id)}" data-field="role">
            <option value="super_admin" ${u.role === 'super_admin' ? 'selected' : ''}>スーパー管理者</option>
            <option value="admin"   ${u.role === 'admin'   ? 'selected' : ''}>管理者</option>
            <option value="manager" ${u.role === 'manager' ? 'selected' : ''}>業態責任者</option>
            <option value="store_leader" ${u.role === 'store_leader' ? 'selected' : ''}>店舗リーダー</option>
            <option value="trainer" ${u.role === 'trainer' ? 'selected' : ''}>トレーナー</option>
            <option value="staff"   ${u.role === 'staff'   ? 'selected' : ''}>スタッフ</option>
            <option value="soumu"   ${u.role === 'soumu'   ? 'selected' : ''}>総務</option>
            <option value="director" ${u.role === 'director' ? 'selected' : ''}>役員（確認押印）</option>
          </select>
        </div>
        <div>
          <select class="select" data-edit-user-id="${escapeHtml(u.id)}" data-field="defaultStore">
            <option value="">（指定なし）</option>
            ${stores.map(s => `<option value="${escapeHtml(s.id)}" ${u.defaultStore === s.id ? 'selected' : ''}>${escapeHtml(storeDisp(s))}</option>`).join('')}
          </select>
        </div>
        <div>
          <select class="select" data-edit-user-id="${escapeHtml(u.id)}" data-field="approveBrand">
            <option value="">（なし）</option>
            <option value="all" ${u.approveBrand === 'all' ? 'selected' : ''}>🌐 全業態</option>
            ${(State.brands || []).slice().sort((a,b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999))
              .map(b => `<option value="${escapeHtml(b.id)}" ${u.approveBrand === b.id ? 'selected' : ''}>${escapeHtml(b.name)}</option>`).join('')}
          </select>
        </div>
        <div class="actions" style="display:flex;gap:4px;flex-wrap:wrap;">
          ${u.id === 'admin' ? '<span class="small muted">—</span>' :
            (u.archived
              ? `<button class="btn btn-outline btn-sm" data-action="resume-user" data-user-id="${escapeHtml(u.id)}">再開</button>`
                + `<button class="btn btn-danger btn-sm" data-action="delete-user" data-user-id="${escapeHtml(u.id)}">削除</button>`
              : `<button class="btn btn-outline btn-sm" data-action="suspend-user" data-user-id="${escapeHtml(u.id)}">停止</button>`
                + `<button class="btn btn-danger btn-sm" data-action="delete-user" data-user-id="${escapeHtml(u.id)}">削除</button>`)}
        </div>
      </div>
    `).join('')}
  </div>
  `;
}

function renderAdminStores() {
  return `
  <div class="row between" style="margin-bottom:12px;">
    <div><strong>${State.stores.length}</strong> 店舗登録中</div>
    <button class="btn btn-primary btn-sm" data-action="add-store">＋ 店舗を追加</button>
  </div>
  <div class="admin-table">
    <div class="header" style="grid-template-columns: 130px 1fr 100px;">
      <div>ブランド</div>
      <div>店舗名</div>
      <div></div>
    </div>
    ${State.stores.map(s => {
      const brandOptions = (State.brands || []).slice().sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999))
        .map(b => `<option value="${escapeHtml(b.id)}" ${s.brand === b.id ? 'selected' : ''}>${escapeHtml(b.name)}</option>`).join('');
      return `
      <div class="admin-row" style="grid-template-columns: 130px 1fr 100px;">
        <div>
          <select class="select" data-edit-store-id="${s.id}" data-field="brand">
            ${brandOptions}
          </select>
        </div>
        <div><input class="input" data-edit-store-id="${s.id}" data-field="name" value="${escapeHtml(s.name)}"></div>
        <div class="actions"><button class="btn btn-danger btn-sm" data-action="delete-store" data-store-id="${s.id}">削除</button></div>
      </div>
    `;}).join('')}
  </div>
  `;
}

// =========================================================
// Handlers
// =========================================================
function attachHandlers() {
  // Action buttons (data-action)
  document.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', handleAction);
  });
  // Quantity inputs
  document.querySelectorAll('input.qty[data-item-id]').forEach(el => {
    el.addEventListener('input', handleQtyInput);
    el.addEventListener('blur', handleQtyBlur);
  });
  // Note textareas
  document.querySelectorAll('textarea[data-note-id]').forEach(el => {
    el.addEventListener('input', handleNoteInput);
  });
  // Supplier name edits (renames across all items)
  document.querySelectorAll('[data-edit-supplier]').forEach(el => {
    el.addEventListener('change', handleSupplierRename);
  });
  // Supplier note edits (contact/memo)
  document.querySelectorAll('[data-edit-supplier-note]').forEach(el => {
    el.addEventListener('input', handleSupplierNoteEdit);
  });

  // 業態別仕入先の編集ハンドラ
  document.querySelectorAll('[data-edit-brand-supplier]').forEach(el => {
    const handler = async () => {
      const brand = el.dataset.brand;
      const oldName = el.dataset.editBrandSupplier;
      const field = el.dataset.field;
      const newVal = el.type === 'checkbox' ? el.checked : el.value.trim();
      if (!State.suppliersByBrand[brand]) State.suppliersByBrand[brand] = [];
      const existing = State.suppliersByBrand[brand].find(s => s.name === oldName);
      if (!existing) return;
      
      if (field === 'name') {
        const newName = newVal;
        if (!newName) { el.value = oldName; return; }
        if (newName === oldName) return;
        // 重複チェック
        if (State.suppliersByBrand[brand].some(s => s.name === newName && s !== existing)) {
          toast('同じ名前の仕入先が既に存在します', 'error');
          el.value = oldName;
          return;
        }
        // Supabaseで旧名で削除 → 新名で挿入
        await sbStorage.deleteSupplier(brand, oldName);
        existing.name = newName;
        await sbStorage.upsertSupplier(brand, existing);
        // 商品マスタの supplier も更新
        let updated = 0;
        for (const it of (State.items[brand] || [])) {
          if ((it.supplier || '').trim() === oldName) {
            it.supplier = newName;
            updated++;
          }
        }
        if (updated > 0) await saveItems();
        toast(`「${oldName}」を「${newName}」に変更しました（商品${updated}件も更新）`, 'success');
        render();
      } else {
        existing[field] = newVal;
        await sbStorage.upsertSupplier(brand, existing);
        toast('保存しました', 'success');
      }
    };
    if (el.type === 'checkbox') {
      el.addEventListener('change', handler);
    } else {
      el.addEventListener('change', handler);
    }
  });

  // Admin item edits
  document.querySelectorAll('[data-edit-id]').forEach(el => {
    el.addEventListener('change', handleItemEdit);
  });
  // Alert comments (dashboard)
  document.querySelectorAll('[data-alert-store]').forEach(el => {
    el.addEventListener('input', handleAlertCommentEdit);
  });
  // Store manager confirmation checkbox
  document.querySelectorAll('[data-store-confirm]').forEach(el => {
    el.addEventListener('change', (e) => toggleStoreConfirm(e.target.dataset.storeConfirm, e.target.checked));
  });
  // Admin store edits
  document.querySelectorAll('[data-edit-store-id]').forEach(el => {
    el.addEventListener('change', handleStoreEdit);
  });
  // Admin user edits
  document.querySelectorAll('[data-edit-user-id]').forEach(el => {
    el.addEventListener('change', handleUserEdit);
  });
  // Person dropdowns (input/order)
  const pi = document.getElementById('person-input');
  const pio = document.getElementById('person-input-other');
  if (pi) {
    pi.addEventListener('change', () => handlePersonChange('input'));
  }
  if (pio) {
    pio.addEventListener('input', () => handlePersonInputOther('input'));
  }
  const po = document.getElementById('person-order');
  const poo = document.getElementById('person-order-other');
  if (po) {
    po.addEventListener('change', () => handlePersonChange('order'));
  }
  if (poo) {
    poo.addEventListener('input', () => handlePersonInputOther('order'));
  }
  // Search input
  const si = document.getElementById('item-search-input');
  if (si) {
    si.addEventListener('input', (e) => {
      State.searchQuery = e.target.value;
      // Only re-render if needed (lazy: just update visible list)
      debounceRender();
    });
  }
  // Admin filter
  const af = document.getElementById('admin-filter-input');
  if (af) {
    af.addEventListener('input', (e) => {
      State.adminFilter = e.target.value;
      debounceRender();
    });
  }
  const afc = document.getElementById('admin-filter-cat');
  if (afc) {
    afc.addEventListener('change', (e) => {
      State.adminFilterCat = e.target.value;
      render();
    });
  }
  // Login enter key
  const lp = document.getElementById('login-password');
  if (lp) {
    lp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doLogin();
    });
  }
  const lu = document.getElementById('login-user');
  if (lu) {
    lu.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const lpEl = document.getElementById('login-password');
        if (lpEl) lpEl.focus();
      }
    });
  }
}

function handlePersonChange(kind) {
  // kind: 'input' or 'order'
  const sel = document.getElementById(`person-${kind}`);
  const other = document.getElementById(`person-${kind}-other`);
  const inv = State.inventory[State.storeId] || (State.inventory[State.storeId] = { entries: {} });
  const fieldName = kind === 'input' ? 'inputBy' : 'orderBy';
  if (sel.value === '__OTHER__') {
    other.style.display = 'block';
    other.focus();
    inv[fieldName] = other.value;
  } else {
    other.style.display = 'none';
    other.value = '';
    inv[fieldName] = sel.value;
  }
  // FIX(9.8.4): 全件スナップショット保存(saveInventory)を廃止し、担当者フィールドのみ単行upsert。
  // 担当者プルダウン選択時に他端末が入力中の数量を巻き込んで巻き戻す「入力しても消える」を解消。
  markLocalWrite(); _pendingSave = true;
  const fields = (kind === 'input') ? { input_by: inv.inputBy || null } : { order_by: inv.orderBy || null };
  saveMetaField(State.storeId, fields).finally(() => { _pendingSave = false; markLocalWrite(); });
}

let personSaveTimer;
function handlePersonInputOther(kind) {
  const other = document.getElementById(`person-${kind}-other`);
  const inv = State.inventory[State.storeId] || (State.inventory[State.storeId] = { entries: {} });
  const fieldName = kind === 'input' ? 'inputBy' : 'orderBy';
  inv[fieldName] = other.value;
  markLocalWrite(); _pendingSave = true;
  clearTimeout(personSaveTimer);
  personSaveTimer = setTimeout(async () => {
    const fields = (kind === 'input') ? { input_by: inv.inputBy || null } : { order_by: inv.orderBy || null };
    try { await saveMetaField(State.storeId, fields); }
    finally { _pendingSave = false; markLocalWrite(); }
  }, 600);
}

function toggleNote(itemId) {
  const area = document.querySelector(`[data-note-area="${itemId}"]`);
  if (!area) return;
  area.classList.toggle('open');
  if (area.classList.contains('open')) {
    const ta = area.querySelector('textarea');
    if (ta) ta.focus();
  }
}

let noteSaveTimer;
function handleNoteInput(e) {
  const el = e.target;
  const itemId = el.dataset.noteId;
  const text = el.value;
  const inv = State.inventory[State.storeId] || (State.inventory[State.storeId] = { entries: {} });
  inv.notes = inv.notes || {};
  if (text.trim()) {
    inv.notes[itemId] = text;
  } else {
    delete inv.notes[itemId];
  }
  // Update toggle button label
  const toggle = document.querySelector(`[data-action="toggle-note"][data-item-id="${itemId}"]`);
  if (toggle) {
    const has = !!text.trim();
    if (has) {
      toggle.classList.add('has-note');
      toggle.textContent = '📝 備考あり';
    } else {
      toggle.classList.remove('has-note');
      toggle.textContent = '＋ 備考';
    }
  }
  markLocalWrite(); _pendingSave = true;
  markEntryDirty(State.storeId, itemId);
  setSaveStatus('saving');
  clearTimeout(noteSaveTimer);
  noteSaveTimer = setTimeout(async () => {
    try { const ok = await flushDirtyEntries(); setSaveStatus(ok === false ? 'error' : 'saved'); }
    finally { _pendingSave = false; markLocalWrite(); }
  }, 600);
}

let debounceTimer;
function debounceRender() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    // Save focus
    const active = document.activeElement;
    const key = active?.id || active?.dataset?.itemId;
    const val = active?.value;
    const selStart = active?.selectionStart;
    render();
    if (key) {
      const el = document.getElementById(key) ||
                 document.querySelector(`[data-item-id="${key}"]`);
      if (el) {
        el.focus();
        try { el.setSelectionRange(selStart ?? val?.length, selStart ?? val?.length); } catch (e) {}
      }
    }
  }, 220);
}

async function consoleToggleFeature(key) {
  const flags = getFeatureFlags();
  flags[key] = !flags[key];
  State.featureFlags = flags;
  render();
  await persistSettings({ feature_flags: flags });
  toast((flags[key] ? 'ON' : 'OFF') + ' に切り替えました', 'success');
}

async function consoleSavePerms() {
  const perms = {};
  for (const p of CONSOLE_PAGES) perms[p.id] = {};
  document.querySelectorAll('.perm-chk').forEach(chk => {
    const pg = chk.dataset.page, role = chk.dataset.role;
    if (!perms[pg]) perms[pg] = {};
    perms[pg][role] = chk.checked;
  });
  // ダッシュボードは常時全許可で固定
  perms.dashboard = { admin: true, manager: true, soumu: true, staff: true };
  State.rolePermissions = perms;
  render();
  const ok = await persistSettings({ role_permissions: perms });
  if (ok) toast('権限を保存しました', 'success');
}

async function consoleResetPerms() {
  if (!confirm('権限設定を解除し、全ロール全許可（現行動作）に戻します。よろしいですか？')) return;
  State.rolePermissions = null;
  render();
  // 空オブジェクトを保存して解除扱い
  const ok = await persistSettings({ role_permissions: null });
  if (ok) toast('権限設定を解除しました', 'success');
}

async function consoleSaveBranding() {
  const company = (document.getElementById('brand-company')?.value || '').trim();
  const title   = (document.getElementById('brand-title')?.value || '').trim();
  const subtitle= (document.getElementById('brand-subtitle')?.value || '').trim();
  if (!company) { toast('会社名を入力してください', 'error'); return; }
  const cur = getBranding();
  const branding = {
    companyName: company,
    loginTitle: title || DEFAULT_BRANDING.loginTitle,
    loginSubtitle: subtitle,
    logoUrl: (State._brandingLogoDraft !== undefined) ? State._brandingLogoDraft : (cur.logoUrl || ''),
    stockLogoUrl: (State._brandingStockLogoDraft !== undefined) ? State._brandingStockLogoDraft : (cur.stockLogoUrl || ''),
    cityLogoUrl: (State._brandingCityLogoDraft !== undefined) ? State._brandingCityLogoDraft : (cur.cityLogoUrl || ''),
    cityRotate: !!(document.getElementById('brand-city-rotate')?.checked),
    citySpinSec: (() => { const v = Number(document.getElementById('brand-city-spin-sec')?.value); return (v >= 2 && v <= 120) ? v : 12; })(),
    boardTitle: ((document.getElementById('brand-board-title')?.value || '').trim()) || DEFAULT_BRANDING.boardTitle,
    boardLogo: (State._brandBoardLogoDraft !== undefined) ? State._brandBoardLogoDraft : (cur.boardLogo || '')
  };
  State.branding = branding;
  State._brandingLogoDraft = undefined;
  State._brandingStockLogoDraft = undefined;
  State._brandingCityLogoDraft = undefined;
  State._brandBoardLogoDraft = undefined;
  render();
  const ok = await persistSettings({ branding: branding });
  if (ok) toast('ブランディングを保存しました', 'success');
}

async function handleAction(e) {
  const el = e.currentTarget;
  const action = el.dataset.action;
  e.stopPropagation();
  switch (action) {
    case 'qty-step': handleQtyStep(el); break;
    case 'login': await doLogin(); break;
    case 'toggle-pw': {
      const pw = document.getElementById('login-password');
      if (pw) { const hidden = pw.type === 'password'; pw.type = hidden ? 'text' : 'password'; el.textContent = hidden ? '🙈' : '👁'; }
      break;
    }
    case 'logout': doLogout(); break;
    case 'save-diag': await saveDiagnostics(); break;
    case 'toggle-notif': toggleNotifPanel(); break;
    case 'refresh-data': await refreshData(); break;
    case 'save-deadline': await saveDeadline(); break;
    case 'clear-deadline': await clearDeadline(); break;
    case 'save-approval-deadline': await saveApprovalDeadline(); break;
    case 'clear-approval-deadline': await clearApprovalDeadline(); break;
    case 'release-approval-deadline': await releaseApprovalDeadline(); break;
    case 'confirm-soumu': await confirmSoumu(); break;
    case 'revoke-soumu': await revokeSoumu(); break;
    case 'goto-transfers': markSectionSeen('transfers'); await loadTransfers(State.month || currentSlipPeriod()); navigate('transfers'); break;
    case 'goto-foodloss': if(!getFeatureFlags().foodloss){ toast('食材ロス管理は現在OFFです（KOESAコンソールで有効化）','error'); break; } markSectionSeen('foodloss'); await loadFoodLoss(); navigate('foodloss'); break;
    case 'goto-breakage': if(!getFeatureFlags().breakage){ toast('器物破損管理は現在OFFです（KOESAコンソールで有効化）','error'); break; } markSectionSeen('breakage'); await loadBreakage(); navigate('breakage'); break;
    case 'goto-coins': await loadCoins(); navigate('coins'); break;
    case 'coin-confirm': await coinConfirmMonth(); break;
    case 'coin-save-config': await coinSaveConfig(); break;
    case 'new-slip': openCreateSlipModal(); break;
    case 'receive-slip': openReceiveSlipModal(el.dataset.slipId); break;
    case 'approve-slip': await hqApproveSlip(el.dataset.slipId); break;
    case 'delete-slip': await deleteSlip(el.dataset.slipId); break;
    case 'print-slips': printSlips(); break;
    case 'home': navigate('dashboard'); break;
    case 'goto-admin': {
      let t = 'hachiban';
      if (State.user?.role === 'manager') { const ab = managerAllowedBrands(); t = ab[0] || 'hachiban'; }
      navigate('admin', { adminTab: t });
      break;
    }
    case 'goto-console': {
      if (!State.user?.isSuperAdmin) { toast('権限がありません', 'error'); break; }
      navigate('admin', { adminTab: 'console' });
      break;
    }
    case 'filter-brand': navigate('dashboard', { brand: el.dataset.brand }); break;
    case 'month-prev': await changeMonth(-1); break;
    case 'month-next': await changeMonth(1); break;
    case 'open-store': openStore(el.dataset.storeId); break;
    case 'set-cat': State.activeCategory = el.dataset.cat; State.searchQuery = ''; render(); break;
    case 'clear-search': State.searchQuery = ''; render(); break;
    case 'save-draft': await saveDraft(); break;
    case 'complete': await completeInventory(); break;
    case 'reopen': await reopenInventory(); break;
    case 'set-admin-tab': {
      const t = el.dataset.tab;
      if (t === 'console' && !State.user?.isSuperAdmin) { toast('権限がありません', 'error'); break; }
      if (State.user?.role === 'manager' && !managerAllowedBrands().includes(t)) { toast('権限がありません', 'error'); break; }
      navigate('admin', { adminTab: t });
      break;
    }
    case 'set-console-tab': State.consoleTab = el.dataset.ctab; render(); break;
    case 'console-toggle-feature': await consoleToggleFeature(el.dataset.flag); break;
    case 'koesa-ai-toggle': await koesaAiToggle(el.dataset.aikey); break;
    case 'koesa-ai-save': await koesaAiSaveBtn(); break;
    case 'console-save-perms': await consoleSavePerms(); break;
    case 'console-reset-perms': await consoleResetPerms(); break;
    case 'console-save-branding': await consoleSaveBranding(); break;
    case 'console-clear-logo': State._brandingLogoDraft = ''; render(); break;
    case 'console-clear-stock-logo': State._brandingStockLogoDraft = ''; render(); break;
    case 'console-clear-city-logo': State._brandingCityLogoDraft = ''; render(); break;
    case 'console-clear-board-logo': State._brandBoardLogoDraft = ''; render(); break;
    case 'add-item': addItemDialog(el.dataset.brand); break;
    case 'edit-item': openItemDialog(el.dataset.brand, el.dataset.itemId); break;
    case 'delete-item': await deleteItem(el.dataset.brand, el.dataset.itemId); break;
    case 'add-brand': openBrandDialog(null); break;
    case 'edit-brand': openBrandDialog(el.dataset.brandId); break;
    case 'delete-brand': await deleteBrandConfirm(el.dataset.brandId); break;
    case 'add-store': addStoreDialog(); break;
    case 'delete-store': await deleteStore(el.dataset.storeId); break;
    case 'add-user': addUserDialog(); break;
    case 'delete-user': await deleteUser(el.dataset.userId); break;
    case 'suspend-user': await suspendUser(el.dataset.userId); break;
    case 'resume-user': await resumeUser(el.dataset.userId); break;
    case 'add-supplier': addSupplierDialog(); break;
    case 'delete-supplier': await deleteSupplier(el.dataset.supplier); break;
    case 'download-suppliers-template': await exportSuppliersCSV(); break;
    case 'import-suppliers-csv': importSuppliersCSV(); break;
    case 'set-admin-subtab': {
      State.adminSubTab = el.dataset.subtab;
      State.adminFilter = '';
      render();
      break;
    }
    case 'add-brand-supplier': {
      await addBrandSupplierDialog(el.dataset.brand);
      break;
    }
    case 'delete-brand-supplier': {
      await deleteBrandSupplier(el.dataset.brand, el.dataset.supplier);
      break;
    }
    case 'show-brand-supplier-items': {
      showBrandSupplierItems(el.dataset.brand, el.dataset.supplier);
      break;
    }
    case 'register-orphan-suppliers': {
      await registerOrphanSuppliers(el.dataset.brand);
      break;
    }
    case 'download-brand-suppliers-csv': {
      await exportBrandSuppliersCSV(el.dataset.brand);
      break;
    }
    case 'import-brand-suppliers-csv': {
      importBrandSuppliersCSV(el.dataset.brand);
      break;
    }

    case 'show-supplier-items': showSupplierItems(el.dataset.supplier); break;
    case 'toggle-note': toggleNote(el.dataset.itemId); break;
    case 'open-approval': navigate('approval', { brand: el.dataset.brand }); break;
    case 'approve-confirm': await submitApproval(el.dataset.brand); break;
    case 'approval-revoke': await revokeApproval(el.dataset.brand); break;
    case 'print-store': printStore(el.dataset.storeId); break;
    case 'print-alerts': printAlerts(); break;
    case 'sign-store': await submitStoreSignature(el.dataset.storeId); break;
    case 'export-store-xlsx': await exportStoreXlsx(el.dataset.storeId); break;
    case 'export-all-xlsx': await exportAllStoresXlsx(el.dataset.brand); break;
    case 'download-items-template': await exportItemsTemplateXlsx(el.dataset.brand); break;
    case 'import-items-xlsx': importItemsFromXlsx(el.dataset.brand); break;
    case 'delete-all-items': deleteAllItems(el.dataset.brand); break;
    case 'download-inv-template': await exportInventoryTemplateXlsx(el.dataset.storeId); break;
    case 'import-inv-xlsx': importInventoryFromXlsx(el.dataset.storeId); break;
  }
}

async function doLogin() {
  const idEl = document.getElementById('login-user');
  const pwEl = document.getElementById('login-password');
  const id = (idEl?.value || '').trim();
  const pw = pwEl?.value || '';
  if (!id || !pw) {
    toast('IDとパスワードを入力してください', 'error');
    return;
  }
  const btn = document.querySelector('[data-action="login"]');
  try {
    if (btn) { btn.disabled = true; btn.textContent = 'ログイン中...'; }

    // サーバーで ID + パスワードを照合（app_users をハッシュ検証。平文は自動移行）
    const res = await sb.auth.signInWithPassword({ email: id, password: pw });
    const acct = res && res.data && res.data.user;
    if (!acct || (res && res.error)) {
      toast((res && res.error && res.error.message) || 'IDまたはパスワードが違います', 'error');
      if (btn) { btn.disabled = false; btn.textContent = 'ログイン'; }
      return;
    }

    const defaultStore = acct.default_store != null ? acct.default_store : acct.defaultStore;
    const approveBrand = acct.approve_brand != null ? acct.approve_brand : acct.approveBrand;
    State.user = {
      id: acct.id,
      name: acct.name,
      role: acct.role === 'super_admin' ? 'admin' : acct.role,
      isSuperAdmin: acct.role === 'super_admin',
      position: acct.position || '',
      defaultStore: defaultStore,
      approveBrand: approveBrand
    };

    // 残りのデータをロード
    await loadAll();

    if (defaultStore) {
      State.currentStore = defaultStore;
      State.brand = brandOf(defaultStore);
    }
    startRealtimeSync();
    navigate('dashboard');
    toast(`${acct.name}さん、ようこそ`, 'success');
  } catch (err) {
    console.error('login error', err);
    toast('ログインに失敗しました', 'error');
    if (btn) { btn.disabled = false; btn.textContent = 'ログイン'; }
  }
}

async function doLogout() {
  stopRealtimeSync();
  State.user = null;
  State.storeId = null;
  State.currentStore = null;
  navigate('login');
}

async function doForgotPassword() {
  const emailEl = document.getElementById('login-email');
  const email = (emailEl?.value || '').trim();
  if (!email) {
    toast('メールアドレスを入力してから「パスワードをお忘れですか？」を押してください', 'error');
    return;
  }
  try {
    await sbAuth.sendPasswordReset(email);
    toast('パスワードリセットメールを送信しました。受信箱を確認してください', 'success');
  } catch (err) {
    console.error(err);
    toast('メール送信に失敗しました: ' + (err.message || ''), 'error');
  }
}

async function doUpdatePassword() {
  const p1 = document.getElementById('new-password')?.value || '';
  const p2 = document.getElementById('new-password2')?.value || '';
  if (p1.length < 8) {
    toast('パスワードは8文字以上にしてください', 'error');
    return;
  }
  if (p1 !== p2) {
    toast('確認用パスワードが一致しません', 'error');
    return;
  }
  try {
    await sbAuth.updatePassword(p1);
    toast('パスワードを変更しました。ログイン画面に戻ります', 'success');
    window.location.hash = '';
    setTimeout(() => location.reload(), 1500);
  } catch (err) {
    console.error(err);
    toast('パスワード変更に失敗しました: ' + (err.message || ''), 'error');
  }
}


async function changeMonth(delta) {
  State.month = shiftMonth(State.month, delta);
  await loadInventory(State.month);
  render();
}

function openStore(storeId) {
  const role = State.user.role;
  // admin and soumu can view any store
  // manager can view stores in their approveBrand
  // staff can only access their defaultStore
  if (isStaffLike(role)) {
    if (State.user.defaultStore && State.user.defaultStore !== storeId) {
      toast('この店舗へのアクセス権がありません', 'error');
      return;
    }
  } else if (role === 'manager') {
    const store = State.stores.find(s => s.id === storeId);
    if (!store || store.brand !== State.user.approveBrand) {
      toast('この業態へのアクセス権がありません', 'error');
      return;
    }
  }
  State.activeCategory = null;
  State.searchQuery = '';
  navigate('inventory', { storeId });
}

let qtySaveTimer;
function handleQtyInput(e) {
  const el = e.target;
  markLocalWrite();      // 入力／▲▼の瞬間から抑制を効かせ、保存待ち中の値消えを防ぐ
  _pendingSave = true;   // 保存が確定するまでリアルタイム再読込を止める
  const itemId = el.dataset.itemId;
  const val = el.value;
  const storeId = State.storeId;
  const inv = State.inventory[storeId] || (State.inventory[storeId] = { entries: {} });
  inv.entries = inv.entries || {};
  const numVal = parseFloat(val);
  if (val === '' || isNaN(numVal) || numVal === 0) {
    // 空・0・無効値は「クリア」扱い。キーごと削除せず 0 として残す。
    // （削除すると保存対象から外れ、サーバの旧値が realtime/再読込で復活するため）
    inv.entries[itemId] = 0;
  } else {
    inv.entries[itemId] = numVal;
  }
  // Update amount inline
  const item = getStoreItems(storeId).find(i => i.id === itemId);
  const amountEl = (el.closest('.qty-cell') || el.parentElement).querySelector('.amount-mini');
  if (item && amountEl) {
    if (val && numVal > 0) {
      amountEl.textContent = formatYen(numVal * invUnitPrice(storeId, item));
      el.classList.add('has-value');
    } else {
      amountEl.textContent = '';
      el.classList.remove('has-value');
    }
  }
  // Update store total
  const totalEl = document.querySelector('.save-bar .total-value');
  if (totalEl) totalEl.textContent = formatYen(getStoreTotal(storeId));

  // Debounced save（編集した項目だけを保存）
  markEntryDirty(storeId, itemId);
  setSaveStatus('saving');
  clearTimeout(qtySaveTimer);
  qtySaveTimer = setTimeout(async () => {
    try { const ok = await flushDirtyEntries(); setSaveStatus(ok === false ? 'error' : 'saved'); }
    finally { _pendingSave = false; markLocalWrite(); }
  }, 600);
}

function handleQtyBlur(e) {
  // フォーカスを外したら保留分を即保存（デバウンス待ちの取りこぼし防止）
  clearTimeout(qtySaveTimer);
  flushDirtyEntries().finally(() => { _pendingSave = false; markLocalWrite(); });
}

// ▼▲ステッパー：数量を増減し、既存の入力処理（金額・合計・保存）を再利用
function handleQtyStep(btn) {
  if (btn.disabled) return;
  const itemId = btn.dataset.itemId;
  const step = parseFloat(btn.dataset.step) || 0;
  const input = document.querySelector(`input.qty[data-item-id="${itemId}"]`);
  if (!input || input.disabled) return;
  let cur = parseFloat(input.value);
  if (isNaN(cur)) cur = 0;
  let next = cur + step;
  if (next < 0) next = 0;
  next = Math.round(next * 100) / 100; // 小数誤差の除去
  if (next === cur && step < 0) return; // すでに0など、減らしても変化なし→無駄な保存を防ぐ
  input.value = next === 0 ? '' : String(next); // 0は空表示（プレースホルダ0）にしてクリア扱いに
  handleQtyInput({ target: input }); // entries更新・金額/合計表示・自動保存をまとめて実行
}

async function saveDraft() {
  await flushDirtyEntries();
  toast('下書きを保存しました', 'success');
}

async function completeInventory() {
  if (isInputLocked() && State.user.role !== 'admin') {
    toast('入力締切を過ぎています。管理者にお問い合わせください', 'error');
    return;
  }
  const inv = State.inventory[State.storeId] || (State.inventory[State.storeId] = { entries: {} });
  if (!inv.inputBy || !inv.inputBy.trim() || !inv.orderBy || !inv.orderBy.trim()) {
    toast('担当者氏名を入力してください。', 'error');
    const _need = (!inv.inputBy || !inv.inputBy.trim())
      ? document.getElementById('person-input-other')
      : document.getElementById('person-order-other');
    if (_need) _need.focus();
    return;
  }
  inv.completed = true;
  inv.completedAt = new Date().toISOString();
  inv.completedBy = State.user.name;
  _pendingSave = true; markLocalWrite();
  let ok;
  try {
    await flushDirtyEntries();
    ok = await saveMetaField(State.storeId, {
      completed: true,
      completed_at: inv.completedAt,
      completed_by_name: inv.completedByName || (typeof State !== 'undefined' && State.enteredByName) || null,
      input_by: inv.inputBy || null,
      order_by: inv.orderBy || null
    });
  }
  finally { _pendingSave = false; markLocalWrite(); }
  if (ok === false) {
    inv.completed = false; inv.completedAt = null;   // 保存できなかったので完了扱いにしない
    render();
    return;
  }
  toast('棚卸を完了しました', 'success');
  navigate('dashboard');
}

async function reopenInventory() {
  const inv = State.inventory[State.storeId];
  if (!inv) return;
  if (!confirm('修正モードに戻しますか？')) return;
  inv.completed = false;
  inv.completedAt = null;
  _pendingSave = true; markLocalWrite();
  let ok;
  try { ok = await saveMetaField(State.storeId, { completed: false, completed_at: null }); }
  finally { _pendingSave = false; markLocalWrite(); }
  if (ok === false) { inv.completed = true; render(); return; }
  toast('修正モードに変更しました', 'success');
  render();
}

// Admin: edit item
let editSaveTimer;
async function handleItemEdit(e) {
  const el = e.target;
  const id = el.dataset.editId;
  const field = el.dataset.field;
  const brand = State.adminTab;
  const items = State.items[brand];
  const item = items.find(i => i.id === id);
  if (!item) return;
  markLocalWrite();
  _pendingSave = true;
  if (field === 'price') {
    const v = parseFloat(el.value);
    item.price = isNaN(v) ? 0 : v;
  } else if (field === 'seasonal') {
    item.seasonal = el.checked;
  } else if (field === 'alertThreshold') {
    const t = el.value.trim();
    const n = parseInt(t.replace(/[^0-9]/g, ''), 10);
    item.alertThreshold = (t === '' || isNaN(n)) ? null : n;
  } else {
    item[field] = el.value;
  }
  clearTimeout(editSaveTimer);
  editSaveTimer = setTimeout(async () => {
    try {
      const ok = await storage.updateItem(brand, item);   // その1件だけ更新（全件上書きしない）
      if (ok === false) { toast('保存に失敗：' + (_lastDbError || '通信エラー'), 'error'); return; }
      toast('保存しました', 'success');
      // If category changed, we may want to re-render for filter accuracy
      if (field === 'category' || field === 'seasonal') render();
    } finally { _pendingSave = false; markLocalWrite(); }
  }, 400);
}

async function handleStoreEdit(e) {
  const el = e.target;
  const id = el.dataset.editStoreId;
  const field = el.dataset.field;
  const s = State.stores.find(x => x.id === id);
  if (!s) return;
  s[field] = el.value;
  await saveStores();
  toast('店舗情報を更新しました', 'success');
}

async function handleUserEdit(e) {
  const el = e.target;
  const id = el.dataset.editUserId;
  const field = el.dataset.field;
  const u = State.users.find(x => x.id === id);
  if (!u) return;
  if (field === 'id') {
    const newId = el.value.trim();
    if (!newId) { toast('IDを入力してください', 'error'); el.value = u.id; return; }
    if (State.users.some(x => x.id === newId && x !== u)) {
      toast('そのIDは既に使われています', 'error'); el.value = u.id; return;
    }
    u.id = newId;
  } else if (field === 'defaultStore') {
    u.defaultStore = el.value || null;
  } else if (field === 'approveBrand') {
    u.approveBrand = el.value || null;
  } else {
    u[field] = el.value;
  }
  await saveUsers();
  toast('ユーザー情報を更新しました', 'success');
}

function addUserDialog() {
  const stores = State.stores;
  openModal({
    title: 'ユーザーを追加',
    body: `
      <div class="stack">
        <div>
          <label class="field">ユーザーID（半角英数）</label>
          <input class="input" id="u-id" placeholder="例: u031">
        </div>
        <div>
          <label class="field">氏名または店舗名</label>
          <input class="input" id="u-name" placeholder="例: 山田 太郎 / 8番らーめん 福井店">
          <div class="help" style="margin-top:4px;font-size:11px;">個人名でも店舗名でも登録できます（棚卸入力者の表示などに使われます）</div>
        </div>
        <div>
          <label class="field">区分（役職）</label>
          <input class="input" id="u-position" placeholder="例: 社員 / 店長 / 副店長 / 係長">
        </div>
        <div>
          <label class="field">パスワード</label>
          <input class="input" id="u-pass" type="text" value="pass" placeholder="例: pass1234">
        </div>
        <div>
          <label class="field">権限</label>
          <select class="select" id="u-role">
            <option value="staff"   selected>スタッフ（自店舗のみ）</option>
            <option value="manager">業態責任者（承認可）</option>
            <option value="admin">管理者（全権限）</option>
            <option value="soumu">総務（閲覧のみ）</option>
          </select>
        </div>
        <div>
          <label class="field">承認業態（業態責任者のみ）</label>
          <select class="select" id="u-approve">
            <option value="">（なし）</option>
            <option value="all">🌐 全業態（すべて承認可能）</option>
            ${(State.brands || []).slice().sort((a,b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999))
              .map(b => `<option value="${escapeHtml(b.id)}">${escapeHtml(b.name)}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="field">所属店舗（スタッフのみ）</label>
          <select class="select" id="u-store">
            <option value="">（指定なし）</option>
            ${stores.map(s => `<option value="${escapeHtml(s.id)}">${escapeHtml(storeDisp(s))}</option>`).join('')}
          </select>
        </div>
      </div>
    `,
    onConfirm: async () => {
      const id   = document.getElementById('u-id').value.trim();
      const name = document.getElementById('u-name').value.trim();
      const position = document.getElementById('u-position').value.trim();
      const pass = document.getElementById('u-pass').value;
      const role = document.getElementById('u-role').value;
      const approveBrand = document.getElementById('u-approve').value || null;
      const store= document.getElementById('u-store').value || null;
      if (!id) { toast('IDを入力してください', 'error'); return false; }
      if (!/^[a-zA-Z0-9_.-]+$/.test(id)) { toast('IDは半角英数字で入力してください', 'error'); return false; }
      if (!name) { toast('氏名または店舗名を入力してください', 'error'); return false; }
      if (!pass) { toast('パスワードを入力してください', 'error'); return false; }
      if (State.users.some(u => u.id === id)) {
        toast('そのIDは既に使われています', 'error'); return false;
      }
      State.users.push({ id, name, position, password: pass, role, approveBrand, defaultStore: store });
      await saveUsers();
      toast('ユーザーを追加しました', 'success');
      render();
      return true;
    }
  });
}

async function deleteUser(userId) {
  if (userId === 'admin') { toast('admin は削除できません', 'error'); return; }
  if (userId === State.user.id) { toast('ログイン中のユーザーは削除できません', 'error'); return; }
  if (!confirm('このユーザーを削除しますか？\n（一覧から消えます。停止（非表示）にしたい場合は「停止」を使ってください）')) return;
  State.users = State.users.filter(u => u.id !== userId);
  // アーカイブフラグを立てて非表示化（ログイン不可になる）
  if (storage.deleteAppUser) {
    try { await storage.deleteAppUser(userId); } catch (e) { console.error('deleteAppUser', e); }
  }
  toast('ユーザーを削除しました', 'success');
  render();
}

// 停止（非表示）：ログイン不可・各種一覧に出さない。後から「再開」できる。
async function suspendUser(userId) {
  if (userId === 'admin') { toast('admin は停止できません', 'error'); return; }
  if (userId === State.user.id) { toast('ログイン中のユーザーは停止できません', 'error'); return; }
  const u = State.users.find(x => x.id === userId); if (!u) return;
  if (!confirm(`${u.name || userId} を停止（非表示）にしますか？\nログインできなくなります。後から再開できます。`)) return;
  u.archived = true;
  const ok = await saveUsers();
  toast(ok === false ? '保存に失敗しました' : '停止しました（再開できます）', ok === false ? 'error' : 'success');
  render();
}

async function resumeUser(userId) {
  const u = State.users.find(x => x.id === userId); if (!u) return;
  u.archived = false;
  const ok = await saveUsers();
  toast(ok === false ? '保存に失敗しました' : '再開しました', ok === false ? 'error' : 'success');
  render();
}

// ===== Supplier management =====
async function handleSupplierRename(e) {
  const el = e.target;
  const oldName = el.dataset.editSupplier;
  const newName = el.value.trim();
  if (!newName || newName === oldName) { el.value = oldName; return; }
  if (!confirm(`仕入先「${oldName}」を「${newName}」に変更しますか？\nこの仕入先で登録されている全ての商品に反映されます。`)) {
    el.value = oldName;
    return;
  }
  // Update all items
  let count = 0;
  for (const brand of allBrands()) {
    for (const it of (State.items[brand] || [])) {
      if ((it.supplier || '') === oldName) { it.supplier = newName; count++; }
    }
  }
  // Move supplier notes
  if (State.supplierNotes[oldName]) {
    State.supplierNotes[newName] = State.supplierNotes[oldName];
    delete State.supplierNotes[oldName];
    await saveSupplierNotes();
  }
  await saveItems();
  toast(`${count}件の商品で仕入先名を更新しました`, 'success');
  render();
}

let supplierNoteSaveTimer;
function handleSupplierNoteEdit(e) {
  const el = e.target;
  const sup = el.dataset.editSupplierNote;
  const field = el.dataset.field;
  if (!State.supplierNotes[sup]) State.supplierNotes[sup] = { contact: '', memo: '' };
  State.supplierNotes[sup][field] = el.value;
  clearTimeout(supplierNoteSaveTimer);
  supplierNoteSaveTimer = setTimeout(async () => {
    await saveSupplierNotes();
  }, 500);
}

function addSupplierDialog() {
  openModal({
    title: '仕入先を追加',
    body: `
      <div class="stack">
        <div>
          <label class="field">仕入先名</label>
          <input class="input" id="s-name" placeholder="例: 株式会社○○商事">
        </div>
        <div>
          <label class="field">連絡先（任意）</label>
          <input class="input" id="s-contact" placeholder="例: 0776-XX-XXXX / 担当: 田中">
        </div>
        <div>
          <label class="field">備考（任意）</label>
          <input class="input" id="s-memo" placeholder="例: 火曜定休、発注は前日まで">
        </div>
        <div class="help" style="font-size:11px;color:#78716c;">
          ※ 仕入先名は商品マスタの「仕入先」列にこの名前を入力することで紐付きます。<br>
          連絡先・備考だけを先に登録しておくことも可能です。
        </div>
      </div>
    `,
    onConfirm: async () => {
      const name = document.getElementById('s-name').value.trim();
      const contact = document.getElementById('s-contact').value.trim();
      const memo = document.getElementById('s-memo').value.trim();
      if (!name) { toast('仕入先名を入力してください', 'error'); return false; }
      if (!State.supplierNotes[name]) State.supplierNotes[name] = {};
      State.supplierNotes[name].contact = contact;
      State.supplierNotes[name].memo = memo;
      await saveSupplierNotes();
      toast('仕入先を追加しました', 'success');
      render();
      return true;
    }
  });
}

function showSupplierItems(supplier) {
  // Gather items
  const list = [];
  for (const brand of allBrands()) {
    for (const it of (State.items[brand] || [])) {
      if ((it.supplier || '') === supplier) {
        list.push({ brand, ...it });
      }
    }
  }
  const body = list.length === 0
    ? '<div class="empty-cat">この仕入先で登録されている商品はありません</div>'
    : `<div style="max-height:50vh;overflow-y:auto;">
        <table style="width:100%;font-size:12px;border-collapse:collapse;">
          <thead style="background:#f5f5f4;position:sticky;top:0;">
            <tr>
              <th style="text-align:left;padding:6px 8px;">業態</th>
              <th style="text-align:left;padding:6px 8px;">カテゴリー</th>
              <th style="text-align:left;padding:6px 8px;">品名</th>
              <th style="text-align:right;padding:6px 8px;">単価</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(it => `
              <tr style="border-bottom:1px solid #f5f5f4;">
                <td style="padding:6px 8px;"><span class="brand-tag ${it.brand}" style="font-size:10px;padding:1px 5px;">${brandLabel(it.brand).substring(0,4)}</span></td>
                <td style="padding:6px 8px;">${escapeHtml(it.category)}</td>
                <td style="padding:6px 8px;">${escapeHtml(it.name)}</td>
                <td style="padding:6px 8px;text-align:right;" class="num">${formatYen(it.price)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>`;
  openModal({
    title: `${supplier} の取扱商品（${list.length}件）`,
    body,
    confirmLabel: '閉じる',
    onConfirm: async () => true,
  });
}

function addItemDialog(brand) {
  return openItemDialog(brand, null);
}

// 商品の追加・編集ダイアログ（itemId が null なら新規追加、指定があれば編集）
function openItemDialog(brand, itemId) {
  const existingCats = [...new Set(State.items[brand].map(i => i.category))];
  const existingSuppliers = [...new Set(State.items[brand].map(i => i.supplier).filter(Boolean))];
  const isEdit = !!itemId;
  const item = isEdit ? State.items[brand].find(i => i.id === itemId) : null;
  if (isEdit && !item) { toast('商品が見つかりません', 'error'); return; }

  // 既存の仕入先情報を取得（編集モードか、品物に仕入先がある場合）
  const initialSupplier = item ? (item.supplier || '') : '';
  const initialSupNotes = (State.supplierNotes && initialSupplier && State.supplierNotes[initialSupplier])
    ? State.supplierNotes[initialSupplier]
    : { person: '', contact: '', memo: '' };

  const brandLabelStr = (function(){ const b = (State.brands || []).find(x => x.id === brand); return b ? b.name : brand; })();

  openModal({
    title: isEdit ? `${brandLabelStr} 商品を編集` : `${brandLabelStr} 商品を追加`,
    body: `
      <div class="stack">
        <div>
          <label class="field">カテゴリー</label>
          <input class="input" id="m-cat" list="cat-list" placeholder="例: 冷蔵 / 季節限定 など" value="${escapeHtml(item?.category || '')}">
          <datalist id="cat-list">
            ${existingCats.map(c => `<option value="${escapeHtml(c)}">`).join('')}
          </datalist>
        </div>
        <div>
          <label class="field">品名</label>
          <input class="input" id="m-name" placeholder="例: 期間限定スパイス" value="${escapeHtml(item?.name || '')}">
        </div>
        <div>
          <label class="field">仕入先（任意）</label>
          <input class="input" id="m-supplier" list="sup-list" placeholder="例: 本部 / ○○商事" value="${escapeHtml(item?.supplier || '')}">
          <datalist id="sup-list">
            ${existingSuppliers.map(s => `<option value="${escapeHtml(s)}">`).join('')}
          </datalist>
        </div>
        <div class="row">
          <div class="grow">
            <label class="field">単位</label>
            <input class="input" id="m-unit" placeholder="例: 個 / 袋 / kg" value="${escapeHtml(item?.unit || '')}">
          </div>
          <div class="grow">
            <label class="field">単価 (円)</label>
            <input class="input num" id="m-price" type="number" step="0.01" min="0" value="${item?.price ?? 0}">
          </div>
        </div>
        <div>
          <label class="field">アラート金額 (円)</label>
          <input class="input num" id="m-alert" type="number" step="1" min="0" placeholder="${HIGH_VALUE_THRESHOLD}" value="${item?.alertThreshold ?? ''}">
          <div style="font-size:11px;color:#6b7280;margin-top:4px;">空欄なら既定 ¥${HIGH_VALUE_THRESHOLD.toLocaleString()} を使用します。</div>
        </div>
        <div>
          <label class="field">種別</label>
          <select class="select" id="m-kind">
            <option value="food" ${(!item || item.kind === 'food') ? 'selected' : ''}>食材（ランキング集計対象）</option>
            <option value="supplies" ${item?.kind === 'supplies' ? 'selected' : ''}>備品（ランキング対象外）</option>
          </select>
        </div>
        <label class="checkbox-row">
          <input type="checkbox" id="m-seasonal" ${(item?.seasonal ?? !isEdit) ? 'checked' : ''}>
          <span>季節・限定商品としてマークする</span>
        </label>

        <div style="border-top:1px dashed #d1d5db;padding-top:12px;margin-top:4px;">
          <div style="font-size:12px;color:#6b7280;margin-bottom:8px;">
            💡 <strong>仕入先情報（任意）</strong>：仕入先名を入力した場合のみ保存されます。同じ仕入先を使う全商品で共有されます。
          </div>
          <div>
            <label class="field">担当者（任意）</label>
            <input class="input" id="m-sup-person" placeholder="例: 山田 太郎" value="${escapeHtml(initialSupNotes.person || '')}">
          </div>
          <div style="margin-top:8px;">
            <label class="field">連絡先（任意）</label>
            <input class="input" id="m-sup-contact" placeholder="例: 0776-XX-XXXX / abc@example.com" value="${escapeHtml(initialSupNotes.contact || '')}">
          </div>
          <div style="margin-top:8px;">
            <label class="field">備考（任意）</label>
            <textarea class="input" id="m-sup-memo" rows="2" placeholder="例: 納品は火・木のみ">${escapeHtml(initialSupNotes.memo || '')}</textarea>
          </div>
        </div>
      </div>
    `,
    confirmLabel: isEdit ? '保存' : '追加',
    onConfirm: async () => {
      const cat   = document.getElementById('m-cat').value.trim() || '季節限定';
      const name  = document.getElementById('m-name').value.trim();
      const supplier = document.getElementById('m-supplier').value.trim();
      const unit  = document.getElementById('m-unit').value.trim() || '個';
      const price = parseFloat(document.getElementById('m-price').value) || 0;
      const alertRaw = document.getElementById('m-alert').value.trim();
      const alertThreshold = alertRaw === '' ? null : (parseInt(alertRaw.replace(/[^0-9]/g, ''), 10) || null);
      const kind  = document.getElementById('m-kind').value;
      const seasonal = document.getElementById('m-seasonal').checked;
      const supPerson  = document.getElementById('m-sup-person').value.trim();
      const supContact = document.getElementById('m-sup-contact').value.trim();
      const supMemo    = document.getElementById('m-sup-memo').value.trim();
      if (!name) { toast('品名を入力してください', 'error'); return false; }

      if (isEdit) {
        // 編集モード：既存の商品を更新（その1件だけDBへ。全件上書きしないので他者の変更を消さない）
        Object.assign(item, { category: cat, name, supplier, unit, price, kind, seasonal, alertThreshold });
        const okU = await storage.updateItem(brand, item);
        if (okU === false) { toast('保存に失敗：' + (_lastDbError || '通信エラー'), 'error'); return false; }
      } else {
        // 追加モード：最新のマスタを取り直してから採番し、DBへ直接INSERT。
        // ID衝突（他の人が同時に同じ番号で追加）時は番号を繰り上げて自動リトライ＝取りこぼし防止。
        const fresh = await sbStorage.get('master_items');
        if (fresh && typeof fresh === 'object') State.items = fresh; // 最新へ同期
        const brandObj = (State.brands || []).find(b => b.id === brand);
        const prefix = (brandObj && brandObj.idPrefix) ? brandObj.idPrefix : brand.charAt(0);
        if (!State.items[brand]) State.items[brand] = [];
        let n = State.items[brand].length + 1;
        const exists = (cand) => State.items[brand].some(i => i.id === cand);
        let saved = false, newItem = null;
        for (let tries = 0; tries < 50 && !saved; tries++) {
          while (exists(`${prefix}${String(n).padStart(4, '0')}`)) n++;
          const id = `${prefix}${String(n).padStart(4, '0')}`;
          newItem = { id, category: cat, name, supplier, unit, price, kind, seasonal, alertThreshold };
          const res = await storage.insertItem(brand, newItem);
          if (res.ok) { saved = true; break; }
          if (res.conflict) { n++; continue; }       // 他者が同番号で先に追加 → 次の番号で再挑戦
          toast('追加に失敗：' + (_lastDbError || '通信エラー'), 'error');
          return false;
        }
        if (!saved) { toast('IDの採番に失敗しました。もう一度お試しください', 'error'); return false; }
        State.items[brand].push(newItem);
      }

      // 仕入先情報を保存
      if (supplier) {
        if (!State.supplierNotes) State.supplierNotes = {};
        const existing = State.supplierNotes[supplier] || {};
        // 入力された項目を優先、空欄は既存値を維持
        State.supplierNotes[supplier] = {
          person: supPerson !== '' ? supPerson : (existing.person || ''),
          contact: supContact !== '' ? supContact : (existing.contact || ''),
          memo: supMemo !== '' ? supMemo : (existing.memo || '')
        };
        await saveSupplierNotes();
      }
      toast(isEdit ? '商品を更新しました' : '商品を追加しました', 'success');
      render();
      return true;
    }
  });
}

async function deleteItem(brand, itemId) {
  if (!confirm('この商品を削除しますか？')) return;
  const ok = await storage.archiveItem(itemId);   // DB上で1件だけ削除（再表示・巻き戻りを防止）
  if (ok === false) { toast('削除に失敗：' + (_lastDbError || '通信エラー'), 'error'); return; }
  State.items[brand] = State.items[brand].filter(i => i.id !== itemId);
  toast('削除しました', 'success');
  render();
}

// ブランドの追加・編集ダイアログ（brandId が null なら新規追加、指定があれば編集）
function openBrandDialog(brandId) {
  const isEdit = !!brandId;
  const brand = isEdit ? (State.brands || []).find(b => b.id === brandId) : null;
  if (isEdit && !brand) { toast('ブランドが見つかりません', 'error'); return; }

  const usedPrefixes = new Set((State.brands || []).filter(b => b.id !== brandId).map(b => b.idPrefix));
  const nextSortOrder = isEdit ? brand.sortOrder : ((State.brands || []).reduce((m, b) => Math.max(m, b.sortOrder || 0), 0) + 10);

  openModal({
    title: isEdit ? 'ブランドを編集' : 'ブランドを追加',
    body: `
      <div class="stack">
        ${isEdit ? `
          <div style="background:#fef3c7;border:1px solid #fbbf24;border-radius:8px;padding:10px 12px;font-size:13px;">
            ⚠️ <strong>ブランドID（${escapeHtml(brand.id)}）は変更できません</strong>。<br>
            既存の商品マスタ・店舗・棚卸データがこのIDを参照しているため、変更すると不整合が起きます。
          </div>
        ` : `
          <div style="background:#eff6ff;border:1px solid #93c5fd;border-radius:8px;padding:10px 12px;font-size:13px;">
            💡 新しいブランド（業態）を追加します。<br>
            <strong>ブランドID</strong>は半角英数の短い識別子（例: ramen, cafe, yakiniku）。
          </div>
        `}
        <div>
          <label class="field">ブランドID</label>
          <input class="input" id="b-id" placeholder="例: yakiniku" value="${escapeHtml(brand?.id || '')}" ${isEdit ? 'disabled style="background:#f3f4f6;color:#6b7280;"' : ''}>
        </div>
        <div>
          <label class="field">ブランド名（表示名）</label>
          <input class="input" id="b-name" placeholder="例: ヒョンプル" value="${escapeHtml(brand?.name || '')}">
        </div>
        <div class="row">
          <div class="grow">
            <label class="field">店舗ID接頭文字</label>
            <input class="input" id="b-prefix" placeholder="例: y" maxlength="3" value="${escapeHtml(brand?.idPrefix || '')}">
            <div class="help" style="margin-top:4px;font-size:11px;">店舗IDの最初の文字（例: y-fukui のような形式）</div>
          </div>
          <div class="grow">
            <label class="field">並び順</label>
            <input class="input num" id="b-sort" type="number" min="0" step="10" value="${nextSortOrder}">
            <div class="help" style="margin-top:4px;font-size:11px;">数値が小さいほど左に表示</div>
          </div>
        </div>
      </div>
    `,
    confirmLabel: isEdit ? '保存' : '追加',
    onConfirm: async () => {
      const id = document.getElementById('b-id').value.trim().toLowerCase();
      const name = document.getElementById('b-name').value.trim();
      const prefix = document.getElementById('b-prefix').value.trim().toLowerCase();
      const sortOrder = parseInt(document.getElementById('b-sort').value, 10) || 0;

      if (!name) { toast('ブランド名を入力してください', 'error'); return false; }
      if (!prefix) { toast('店舗ID接頭文字を入力してください', 'error'); return false; }

      if (isEdit) {
        // 編集：ID以外を更新
        brand.name = name;
        brand.idPrefix = prefix;
        brand.sortOrder = sortOrder;
      } else {
        // 新規：ID重複・接頭文字重複チェック
        if (!id) { toast('ブランドIDを入力してください', 'error'); return false; }
        if (!/^[a-z0-9_]+$/.test(id)) { toast('ブランドIDは半角英数とアンダースコアのみ使用できます', 'error'); return false; }
        if ((State.brands || []).some(b => b.id === id)) { toast('このブランドIDは既に使われています', 'error'); return false; }
        if (usedPrefixes.has(prefix)) { toast(`店舗ID接頭文字「${prefix}」は既に他のブランドで使われています`, 'error'); return false; }

        State.brands = State.brands || [];
        State.brands.push({ id, name, idPrefix: prefix, sortOrder });

        // 商品マスタにも空配列を初期化
        State.items = State.items || {};
        if (!State.items[id]) State.items[id] = [];
      }

      const ok = await saveBrands();
      if (!ok) {
        toast('Supabaseへの保存に失敗しました。brandsテーブルの設定をご確認ください', 'error');
        return false;
      }
      toast(isEdit ? 'ブランドを更新しました' : 'ブランドを追加しました', 'success');
      render();
      return true;
    }
  });
}

async function deleteBrandConfirm(brandId) {
  const brand = (State.brands || []).find(b => b.id === brandId);
  if (!brand) { toast('ブランドが見つかりません', 'error'); return; }

  // 念のため再チェック
  const storeCount = (State.stores || []).filter(s => s.brand === brandId).length;
  const itemCount = ((State.items || {})[brandId] || []).length;
  if (storeCount > 0 || itemCount > 0) {
    toast(`このブランドにはまだ店舗${storeCount}件・商品${itemCount}件が紐づいています`, 'error');
    return;
  }

  if (!confirm(`ブランド「${brand.name}」を削除しますか？\n（店舗・商品が紐づいていないことを確認済み）`)) return;

  // State.brands から除外
  State.brands = (State.brands || []).filter(b => b.id !== brandId);
  // Supabase側でアーカイブフラグ
  if (storage.deleteBrand) {
    try { await storage.deleteBrand(brandId); } catch (e) { console.error('deleteBrand', e); }
  }
  // 残りのブランドリストをupsert保存
  await saveBrands();
  // タブが削除したブランドだった場合は最初のブランドに切り替え
  if (State.adminTab === brandId) {
    State.adminTab = (State.brands[0] && State.brands[0].id) || 'stores';
  }
  toast('ブランドを削除しました', 'success');
  render();
}

function addStoreDialog() {
  const brands = (State.brands || []).slice().sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
  if (brands.length === 0) {
    toast('先にブランドを登録してください', 'error');
    State.adminTab = 'brands';
    render();
    return;
  }
  openModal({
    title: '店舗を追加',
    body: `
      <div class="stack">
        <div>
          <label class="field">ブランド</label>
          <select class="select" id="s-brand">
            ${brands.map(b => `<option value="${escapeHtml(b.id)}">${escapeHtml(b.name)}</option>`).join('')}
            <option value="__add_new__" style="font-weight:bold;color:#2563eb;">＋ 新しいブランドを追加…</option>
          </select>
        </div>
        <div>
          <label class="field">店舗名</label>
          <input class="input" id="s-name" placeholder="例: ○○店">
        </div>
      </div>
    `,
    onConfirm: async () => {
      const brand = document.getElementById('s-brand').value;
      // 「新しいブランドを追加」が選ばれた場合はブランド追加ダイアログに切替
      if (brand === '__add_new__') {
        openBrandDialog(null);
        return true; // 一旦この店舗ダイアログは閉じる
      }
      const name  = document.getElementById('s-name').value.trim();
      if (!name) { toast('店舗名を入力してください', 'error'); return false; }
      const brandObj = (State.brands || []).find(b => b.id === brand);
      const prefix = (brandObj && brandObj.idPrefix) ? `${brandObj.idPrefix}-` : `${brand.charAt(0)}-`;
      let suffix = State.stores.length + 1;
      while (State.stores.some(s => s.id === `${prefix}custom${suffix}`)) suffix++;
      const id = `${prefix}custom${suffix}`;
      State.stores.push({ id, brand, name });
      await saveStores();
      toast('店舗を追加しました', 'success');
      render();
      return true;
    }
  });
}

async function deleteStore(storeId) {
  if (!confirm('この店舗を削除しますか？棚卸データも消えます。')) return;
  State.stores = State.stores.filter(s => s.id !== storeId);
  delete State.inventory[storeId];
  await saveStores();
  await saveInventory();
  toast('店舗を削除しました', 'success');
  render();
}

// =========================================================
// Print & Excel export
// =========================================================
function buildStoreSnapshot(storeId) {
  const store = State.stores.find(s => s.id === storeId);
  const items = getStoreItems(storeId);
  const entries = getStoreEntries(storeId);
  const inv = State.inventory[storeId] || {};
  // Preserve insertion order of categories
  const cats = [];
  const byCat = {};
  for (const it of items) {
    if (!byCat[it.category]) { byCat[it.category] = []; cats.push(it.category); }
    byCat[it.category].push(it);
  }
  return { store, items, entries, inv, cats, byCat };
}

function buildPrintHTML(storeId) {
  const { store, inv, cats, byCat, entries } = buildStoreSnapshot(storeId);
  const totals = getStoreTotals(storeId);
  const notes = getStoreNotes(storeId);
  const completedLine = inv.completed
    ? `完了日時: ${new Date(inv.completedAt).toLocaleString('ja-JP')}`
    : `※ 下書き状態 (未完了)`;
  const inputBy = inv.inputBy || '（未入力）';
  const orderBy = inv.orderBy || '（未入力）';
  const highCount = getHighValueItems(storeId).length;
  const mgrSig = inv.mgrConfirmedBy ? { by: inv.mgrConfirmedBy, at: inv.mgrConfirmedAt } : null;

  let html = `
    <div class="p-header">
      <div style="font-size:9pt;color:#666;">株式会社アモーレながすぎ</div>
      <span class="p-brand-pill ${store.brand}">${brandLabel(store.brand)}</span>
      <h1>${escapeHtml(storeDisp(store))}　棚卸表</h1>
      <div class="p-meta">
        <div><strong>${formatMonth(State.month)}</strong></div>
        <div>${completedLine}</div>
        <div>入力者: <strong>${escapeHtml(inputBy)}</strong></div>
        <div>最終発注者: <strong>${escapeHtml(orderBy)}</strong></div>
      </div>
      ${highCount > 0 ? `<div style="margin-top:4pt;color:#b91c1c;font-size:9pt;font-weight:600;">⚠ 高額品目 ${highCount}件（設定金額超は赤字表示）</div>` : ''}
    </div>
  `;

  for (const cat of cats) {
    let subtotal = 0;
    let rowsHtml = '';
    for (const it of byCat[cat]) {
      const q = parseFloat(entries[it.id]) || 0;
      const unitP = invUnitPrice(storeId, it);
      const amt = q * unitP;
      subtotal += amt;
      const isHigh = isHighValueAmount(amt, it);
      const note = notes[it.id];
      rowsHtml += `<tr class="${isHigh ? 'p-high-value' : ''}">
        <td class="col-no">${itemNo(it)}</td>
        <td class="col-name">${escapeHtml(it.name)}${isHigh ? ' ⚠' : ''}${note ? `<div style="font-size:7.5pt;color:#666;">📝 ${escapeHtml(note)}</div>` : ''}</td>
        <td style="font-size:8pt;">${escapeHtml(it.supplier || '')}</td>
        <td class="col-unit">${escapeHtml(it.unit || '')}</td>
        <td class="col-num">${(unitP || 0).toLocaleString('ja-JP', {maximumFractionDigits: 2})}</td>
        <td class="col-num">${q ? q.toLocaleString('ja-JP') : ''}</td>
        <td class="col-num">${amt ? Math.round(amt).toLocaleString('ja-JP') : ''}</td>
      </tr>`;
    }
    html += `
      <div class="p-cat-section">
        <div class="p-cat-title">${escapeHtml(cat)}</div>
        <table class="p-table">
          <thead><tr>
            <th style="width:6%;">No</th>
            <th style="width:32%;">品名</th>
            <th style="width:14%;">仕入先</th>
            <th style="width:7%;">単位</th>
            <th style="width:12%;">単価</th>
            <th style="width:12%;">数量</th>
            <th style="width:17%;">金額</th>
          </tr></thead>
          <tbody>${rowsHtml}</tbody>
          <tfoot><tr class="p-subtotal">
            <td colspan="6" style="text-align:right;">小計</td>
            <td class="col-num">${Math.round(subtotal).toLocaleString('ja-JP')}</td>
          </tr></tfoot>
        </table>
      </div>
    `;
  }

  html += `
    <div class="p-grand">
      <div>
        <div class="label">総合計</div>
        <div style="font-size:9pt;color:#444;margin-top:2pt;">食材 ¥${Math.round(totals.food).toLocaleString()} ／ 備品 ¥${Math.round(totals.supplies).toLocaleString()}</div>
      </div>
      <div class="value">${formatYen(totals.total)}</div>
    </div>
    ${mgrSig ? `
    <div style="margin-top:14pt;padding:10pt;border:1pt solid #16a34a;background:#f0fdf4;border-radius:4pt;">
      <div style="font-weight:700;font-size:11pt;color:#15803d;">✓ ${brandLabel(store.brand)} 業態責任者 確認・認印済</div>
      <div style="font-size:9pt;margin-top:3pt;">確認者: <strong>${escapeHtml(mgrSig.by || '')}</strong>　確認日時: ${mgrSig.at ? new Date(mgrSig.at).toLocaleString('ja-JP') : ''}</div>
      <div style="margin-top:6pt;">${sealHtml(mgrSig.by, 56)}</div>
    </div>
    ` : ''}
    <div class="p-footnote">
      <div>印刷日時: ${new Date().toLocaleString('ja-JP')}</div>
      <div>株式会社アモーレながすぎ 棚卸管理</div>
    </div>
  `;
  return html;
}

function printStore(storeId) {
  const html = buildPrintHTML(storeId);
  const area = document.getElementById('print-area');
  area.innerHTML = html;
  // Allow layout to settle before printing
  setTimeout(() => {
    window.print();
    // Clear after print to keep DOM tidy
    setTimeout(() => { area.innerHTML = ''; }, 500);
  }, 50);
}

// ---------- Excel ----------
function buildSheetRows(storeId) {
  const { store, inv, cats, byCat, entries } = buildStoreSnapshot(storeId);
  const totals = getStoreTotals(storeId);
  const notes = getStoreNotes(storeId);
  const sInvX = State.inventory[storeId] || {};
  const mgrSigX = sInvX.mgrConfirmedBy ? { by: sInvX.mgrConfirmedBy, at: sInvX.mgrConfirmedAt } : null;
  const rows = [];
  rows.push(['株式会社アモーレながすぎ 棚卸表']);
  rows.push(['店舗名', storeDisp(store)]);
  rows.push(['ブランド', brandLabel(store.brand)]);
  rows.push(['月度', formatMonth(State.month)]);
  rows.push(['入力者', inv.inputBy || '（未入力）']);
  rows.push(['最終発注者', inv.orderBy || '（未入力）']);
  if (inv.completed) {
    rows.push(['完了日時', new Date(inv.completedAt).toLocaleString('ja-JP')]);
  } else {
    rows.push(['ステータス', '下書き(未完了)']);
  }
  if (mgrSigX) {
    rows.push(['業態責任者承認', `✓ 確認・認印済 / ${mgrSigX.by || ''} / ${mgrSigX.at ? new Date(mgrSigX.at).toLocaleString('ja-JP') : ''}`]);
  } else {
    rows.push(['業態責任者承認', '未承認']);
  }
  rows.push([]);
  rows.push(['カテゴリー', 'No', '品名', '仕入先', '単位', '単価', '数量', '金額', '備考', 'アラート']);

  for (const cat of cats) {
    let sub = 0;
    for (const it of byCat[cat]) {
      const q = parseFloat(entries[it.id]) || 0;
      const unitP = invUnitPrice(storeId, it);
      const amt = q * unitP;
      sub += amt;
      const alert = isHighValueAmount(amt, it) ? '⚠ ¥' + getItemThreshold(it).toLocaleString() + '超' : '';
      const note = notes[it.id] || '';
      rows.push([cat, itemNo(it), it.name, it.supplier || '', it.unit || '', unitP || 0, q || '', amt || '', note, alert]);
    }
    rows.push(['', '', '', '', '', '', '小計', Math.round(sub), '', '']);
  }
  rows.push([]);
  rows.push(['', '', '', '', '', '', '食材合計', Math.round(totals.food), '', '']);
  rows.push(['', '', '', '', '', '', '備品合計', Math.round(totals.supplies), '', '']);
  rows.push(['', '', '', '', '', '', '総合計',   Math.round(totals.total), '', '']);
  return rows;
}

function sheetColumnWidths() {
  return [{wch:14},{wch:6},{wch:30},{wch:14},{wch:6},{wch:10},{wch:8},{wch:12},{wch:20},{wch:16}];
}

// ---- Excelスタイリング（罫線・BIZ UDPゴシック・装飾） -----------------
const XL_FONT = 'BIZ UDPGothic';
const XL_HEADER_FILL = '1F3A5F';   // 濃紺（ヘッダー）
const XL_TOTAL_FILL  = 'EAF0F7';   // 薄い青グレー（合計）
const XL_SECTION_FILL = 'D9E2EC';  // セクション見出し
const XL_BORDER_COLOR = 'B7C2D0';
function _xlBorder() {
  const s = { style: 'thin', color: { rgb: XL_BORDER_COLOR } };
  return { top: s, bottom: s, left: s, right: s };
}
function styleWorksheet(ws) {
  try {
    if (!ws || !ws['!ref']) return;
    const range = XLSX.utils.decode_range(ws['!ref']);
    const headerKeys = new Set(['カテゴリー', 'ブランド', '順位']);
    const totalKeys  = new Set(['小計', '食材合計', '備品合計', '総合計']);

    // 表領域（ヘッダー行〜空行まで）を判定
    const inTable = [];
    let active = false;
    const cellVal = (r, c) => {
      const cell = ws[XLSX.utils.encode_cell({ r, c })];
      return cell && cell.v != null ? cell.v : '';
    };
    const rowEmpty = (r) => {
      for (let c = range.s.c; c <= range.e.c; c++) {
        if (cellVal(r, c) !== '') return false;
      }
      return true;
    };
    for (let r = range.s.r; r <= range.e.r; r++) {
      const v0 = String(cellVal(r, 0));
      const empty = rowEmpty(r);
      if (headerKeys.has(v0)) active = true;
      if (empty) active = false;
      inTable[r] = active && !empty;
    }

    for (let r = range.s.r; r <= range.e.r; r++) {
      const v0 = String(cellVal(r, 0));
      const v6 = String(cellVal(r, 6));
      const isTitle   = r === 0 && (v0.indexOf('棚卸表') >= 0 || v0.indexOf('棚卸サマリー') >= 0);
      const isHeader  = headerKeys.has(v0);
      const isTotal   = totalKeys.has(v6);
      const isSection = v0.indexOf('【') === 0 || v0.indexOf('■') === 0;
      const forceCells = inTable[r] || isTotal || isTitle;

      for (let c = range.s.c; c <= range.e.c; c++) {
        const addr = XLSX.utils.encode_cell({ r, c });
        let cell = ws[addr];
        if (!cell) {
          if (!forceCells) continue;
          cell = ws[addr] = { t: 's', v: '' };
        }
        const s = { font: { name: XL_FONT, sz: 11 } };

        if (isTitle) {
          s.font = { name: XL_FONT, sz: 16, bold: true, color: { rgb: 'FFFFFF' } };
          s.fill = { patternType: 'solid', fgColor: { rgb: XL_HEADER_FILL } };
          s.alignment = { vertical: 'center', horizontal: 'left' };
        } else if (isHeader) {
          s.font = { name: XL_FONT, sz: 11, bold: true, color: { rgb: 'FFFFFF' } };
          s.fill = { patternType: 'solid', fgColor: { rgb: XL_HEADER_FILL } };
          s.alignment = { horizontal: 'center', vertical: 'center', wrapText: true };
          s.border = _xlBorder();
        } else if (isSection) {
          s.font = { name: XL_FONT, sz: 12, bold: true, color: { rgb: '1F3A5F' } };
          s.fill = { patternType: 'solid', fgColor: { rgb: XL_SECTION_FILL } };
        } else if (isTotal) {
          s.font = { name: XL_FONT, sz: 11, bold: true };
          s.fill = { patternType: 'solid', fgColor: { rgb: XL_TOTAL_FILL } };
          s.border = _xlBorder();
        } else if (inTable[r]) {
          s.border = _xlBorder();
        }

        if (cell.t === 'n') {
          s.alignment = Object.assign({ horizontal: 'right', vertical: 'center' }, s.alignment || {});
        }
        cell.s = s;
      }
    }

    // タイトル行を全列結合
    if (range.e.c >= 1) {
      const c0 = ws[XLSX.utils.encode_cell({ r: 0, c: 0 })];
      if (c0 && (String(c0.v).indexOf('棚卸表') >= 0 || String(c0.v).indexOf('棚卸サマリー') >= 0)) {
        ws['!merges'] = ws['!merges'] || [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: range.e.c } });
      }
    }
    const rows = ws['!rows'] || [];
    rows[0] = { hpt: 26 };
    ws['!rows'] = rows;
  } catch (e) {
    console.error('styleWorksheet error', e);
  }
}

async function exportStoreXlsx(storeId) {
  const store = State.stores.find(s => s.id === storeId);
  if (typeof XLSX === 'undefined') {
    toast('Excelライブラリが読み込めません(オフライン?)。CSVで出力します', 'error');
    exportStoreCsv(storeId);
    return;
  }
  const rows = buildSheetRows(storeId);
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = sheetColumnWidths();
  styleWorksheet(ws);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, '棚卸');
  XLSX.writeFile(wb, `棚卸_${storeDisp(store)}_${State.month}.xlsx`);
  toast(`${storeDisp(store)} をExcel出力しました`, 'success');
}

function _redBorderSide(){ return { style:'thin', color:{ rgb:'C00000' } }; }
function applyStampStyle(ws){
  try{
    if(!ws || !ws['!ref']) return;
    const range = XLSX.utils.decode_range(ws['!ref']);
    const b={ top:_redBorderSide(), bottom:_redBorderSide(), left:_redBorderSide(), right:_redBorderSide() };
    for(let r=range.s.r;r<=range.e.r;r++){
      for(let c=range.s.c;c<=range.e.c;c++){
        const addr=XLSX.utils.encode_cell({r,c}); const cell=ws[addr];
        if(!cell || cell.v==null) continue;
        const v=String(cell.v);
        if(v.indexOf('\u329e')>=0){ cell.s=Object.assign({}, cell.s, { font:{ name:XL_FONT, sz:12, bold:true, color:{rgb:'C00000'} }, alignment:{ horizontal:'center', vertical:'center' }, border:b }); }
        else if(v==='社長'||v==='常務'){ cell.s=Object.assign({}, cell.s, { font:{ name:XL_FONT, sz:11, bold:true, color:{rgb:'C00000'} }, alignment:{ horizontal:'center', vertical:'center' }, border:b }); }
        else if(v==='（未押印）'){ cell.s=Object.assign({}, cell.s, { font:{ name:XL_FONT, sz:11, color:{rgb:'94A3B8'} }, alignment:{ horizontal:'center' }, border:b }); }
      }
    }
  }catch(_){}
}

async function exportAllStoresXlsx(brandFilter) {
  if (typeof XLSX === 'undefined') {
    toast('Excelライブラリが読み込めません(オフライン?)', 'error');
    return;
  }
  const stores = State.stores.filter(s => !brandFilter || brandFilter === 'all' || s.brand === brandFilter);
  if (stores.length === 0) { toast('対象店舗がありません', 'error'); return; }

  let _flRows = []; try { _flRows = (await flFetch(currentSlipPeriod())) || []; } catch(_){}

  const wb = XLSX.utils.book_new();

  // Summary sheet
  const sum = [];
  sum.push([`株式会社アモーレながすぎ 全店棚卸サマリー  ${formatMonth(State.month)}`]);
  sum.push([]);
  // Approval status
  sum.push(['【業態責任者 承認状況】']);
  // 全ブランドを動的に出力（並び順はブランド設定に従う）
  const _apBrands = (State.brands || []).slice().sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
  for (const bb of _apBrands) {
    const a = State.approvals[bb.id];
    if (a) {
      sum.push([bb.name, '✓ 承認済', `承認者: ${a.by}`, `承認日時: ${new Date(a.at).toLocaleString('ja-JP')}`]);
    } else {
      sum.push([bb.name, '未承認', '', '']);
    }
  }
  sum.push([]);
  sum.push(['ブランド', '店舗名', '状態', '入力者', '最終発注者', '入力品目数', '高額品目数', '食材(円)', '備品(円)', '合計(円)']);
  let gFood = 0, gSup = 0;
  for (const s of stores) {
    const t = getStoreTotals(s.id);
    const filled = getStoreFilled(s.id);
    const highCount = getHighValueItems(s.id).length;
    const status = getStoreStatus(s.id);
    const statusLabel = status === 'done' ? '完了' : status === 'pending' ? '入力中' : '未入力';
    const inv = State.inventory[s.id] || {};
    sum.push([brandLabel(s.brand), s.name, statusLabel, inv.inputBy || '', inv.orderBy || '', filled, highCount, Math.round(t.food), Math.round(t.supplies), Math.round(t.total)]);
    gFood += t.food; gSup += t.supplies;
  }
  sum.push([]);
  sum.push(['', '', '', '', '', '', '総合計', Math.round(gFood), Math.round(gSup), Math.round(gFood + gSup)]);

  // Ranking section (food-only)
  sum.push([]);
  sum.push(['【食材棚卸金額ランキング（少ない順・食材のみ集計）】']);

  const addRanking = (title, filter) => {
    const list = State.stores.filter(filter)
      .map(s => ({ name: storeDisp(s), food: getStoreTotals(s.id).food }))
      .filter(s => s.food > 0)
      .sort((a, b) => a.food - b.food);
    sum.push([]);
    sum.push([title]);
    if (list.length === 0) {
      sum.push(['（入力データなし）']);
    } else {
      sum.push(['順位', '店舗名', '食材合計(円)']);
      list.forEach((s, i) => sum.push([i + 1, s.name, Math.round(s.food)]));
    }
  };
  // 全ブランドのランキングを動的に出力
  const sortedBrandsForRanking = (State.brands || []).slice().sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
  for (const b of sortedBrandsForRanking) {
    addRanking(`■ ${b.name}`, s => s.brand === b.id);
  }
  addRanking('■ 全店', () => true);

  // ----- 食材ロス実績ランキング（押印なし） -----
  sum.push([]); sum.push([]);
  sum.push(['【食材ロス実績ランキング（廃棄金額・税抜）】']);
  {
    const byStore={}, byItem={}, byCat={};
    for(const r of _flRows){ const a=Number(r.amountExcl)||0;
      const sn=(State.stores.find(x=>x.id===r.storeId)||{}).name||r.storeId;
      byStore[sn]=(byStore[sn]||0)+a; byItem[r.itemName]=(byItem[r.itemName]||0)+a;
      byCat[(r.category||'(未設定)')]=(byCat[(r.category||'(未設定)')]||0)+a; }
    const pushRank=(title,obj,top)=>{ sum.push([]); sum.push([title]);
      const arr=Object.entries(obj).sort((a,b)=>b[1]-a[1]);
      if(!arr.length){ sum.push(['（データなし）']); return; }
      sum.push(['順位','名称','廃棄額(円)']);
      (top?arr.slice(0,top):arr).forEach((e,i)=>sum.push([i+1,e[0],Math.round(e[1])])); };
    pushRank('■ 店舗別', byStore);
    pushRank('■ 商品別 TOP10', byItem, 10);
    pushRank('■ 区分別', byCat);
    const flTotal=_flRows.reduce((a,b)=>a+(Number(b.amountExcl)||0),0);
    sum.push([]); sum.push(['','食材ロス合計(税抜)', Math.round(flTotal)]);
  }

  const sumWs = XLSX.utils.aoa_to_sheet(sum);
  sumWs['!cols'] = [{wch:16},{wch:28},{wch:10},{wch:14},{wch:14},{wch:12},{wch:12},{wch:14},{wch:14},{wch:14}];
  styleWorksheet(sumWs);
  applyStampStyle(sumWs);
  XLSX.utils.book_append_sheet(wb, sumWs, 'サマリー');

  // Per-store sheets
  const used = new Set(['サマリー']);
  for (const s of stores) {
    const rows = buildSheetRows(s.id);
    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = sheetColumnWidths();
    styleWorksheet(ws);
    let name = s.name.replace(/[\/\\?*:\[\]]/g, '_').slice(0, 31);
    let unique = name; let i = 2;
    while (used.has(unique)) { unique = name.slice(0, 27) + '(' + i + ')'; i++; }
    used.add(unique);
    XLSX.utils.book_append_sheet(wb, ws, unique);
  }
  const label = (!brandFilter || brandFilter === 'all') ? '全店' : brandLabel(brandFilter);
  XLSX.writeFile(wb, `棚卸_${label}_${State.month}.xlsx`);
  toast(`${stores.length}店舗をExcel出力しました`, 'success');
}

// =========================================================
// Excel TEMPLATE DOWNLOAD / IMPORT  (商品マスター・棚卸表)
// =========================================================

// ---- 共通ユーティリティ ------------------------------------
function pickXlsxFile() {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv';
    input.style.display = 'none';
    input.onchange = () => {
      const f = input.files && input.files[0];
      resolve(f || null);
      setTimeout(() => input.remove(), 100);
    };
    document.body.appendChild(input);
    input.click();
  });
}

async function readXlsxAsRows(file) {
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: 'array' });
  const sheetName = wb.SheetNames[0];
  const ws = wb.Sheets[sheetName];
  // header:1 returns array of arrays. defval keeps empty cells as ''.
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '', raw: false });
  return rows;
}

// 表の中から「ヘッダー行」を探す。最初に "品名" を含む行をヘッダーとみなす。
function findHeaderRowIndex(rows, requiredKeyword = '品名') {
  for (let i = 0; i < Math.min(rows.length, 30); i++) {
    const row = rows[i] || [];
    for (const c of row) {
      if (typeof c === 'string' && c.trim() === requiredKeyword) return i;
    }
  }
  return -1;
}

// ヘッダー名 → 列インデックス のマップを作る
function buildHeaderMap(headerRow) {
  const map = {};
  headerRow.forEach((h, idx) => {
    if (typeof h === 'string') {
      const key = h.trim();
      if (key) map[key] = idx;
    }
  });
  return map;
}

function pickCell(row, headerMap, ...keys) {
  for (const k of keys) {
    if (headerMap[k] !== undefined) {
      const v = row[headerMap[k]];
      if (v !== undefined && v !== null && v !== '') return v;
    }
  }
  return '';
}

// ---- 商品マスター: テンプレート出力 ------------------------
async function exportItemsTemplateXlsx(brand) {
  if (typeof XLSX === 'undefined') { toast('Excelライブラリが読み込めません', 'error'); return; }
  const items = State.items[brand] || [];
  const brandName = brandLabel(brand);
  const supplierNotes = State.supplierNotes || {};

  // 案内シート
  const guide = [];
  guide.push([`${brandName} 商品マスター 取込みテンプレート`]);
  guide.push([]);
  guide.push(['■ 使い方']);
  guide.push(['1. 「商品リスト」シートを開いてください。']);
  guide.push(['2. 既存の商品はそのまま表示されています（カテゴリー＋品名が一致すれば「更新」、なければ「新規追加」になります）。']);
  guide.push(['3. 新しい商品は、空いている行に直接入力してください。行はいくつ追加してもOKです。']);
  guide.push(['4. 入力後、このファイルを保存し、棚卸管理アプリの「Excel取込み」ボタンから読み込んでください。']);
  guide.push([]);
  guide.push(['■ 各列の入力ルール']);
  guide.push(['カテゴリー', '例: 冷蔵 / 冷凍 / 常温 / 野菜 / 備品 / 豆類 / 乳製品 など（必須）']);
  guide.push(['品名', '商品の正式名（必須）']);
  guide.push(['仕入先', '例: 本部 / 尾家 / コメダ本部 など（任意）']);
  guide.push(['単位', '例: 個 / 袋 / kg / Ｐ / 本 など（必須）']);
  guide.push(['単価(円)', '1単位あたりの金額（数値、必須）']);
  guide.push(['種別', '「食材」または「備品」を入力（省略時はカテゴリーから自動判定）']);
  guide.push(['季節商品', '季節・限定商品の場合「○」を入力（任意）']);
  guide.push(['アラート金額(円)', 'この商品の高額アラート基準額（数値・任意／空欄は全社既定を適用）']);
  guide.push(['担当者', '仕入先の担当者氏名（任意）']);
  guide.push(['連絡先', '仕入先の電話番号・メールなど（任意）']);
  guide.push(['備考', '仕入先に関するメモ（任意）']);
  guide.push([]);
  guide.push(['※ ID列は自動採番のため、空欄のままで問題ありません。']);
  guide.push(['※ 同じカテゴリーで同じ品名がある場合は「更新」、ない場合は「新規追加」になります。']);
  guide.push(['※ 担当者・連絡先・備考は「仕入先名」をキーに保存されます。同じ仕入先を使う全商品で共有されます。']);
  guide.push(['※ 同じ仕入先に対して複数行で違う情報が入っている場合、最後の行の値が反映されます。']);

  const guideWs = XLSX.utils.aoa_to_sheet(guide);
  guideWs['!cols'] = [{wch:20},{wch:60}];

  // 商品リストシート
  const rows = [];
  rows.push(['ID', 'カテゴリー', '品名', '仕入先', '単位', '単価(円)', '種別', '季節商品', '担当者', '連絡先', '備考', 'アラート金額(円)']);
  for (const it of items) {
    const sup = (it.supplier || '').trim();
    const note = (sup && supplierNotes[sup]) || { person: '', contact: '', memo: '' };
    rows.push([
      it.id || '',
      it.category || '',
      it.name || '',
      it.supplier || '',
      it.unit || '',
      it.price || 0,
      it.kind === 'supplies' ? '備品' : '食材',
      it.seasonal ? '○' : '',
      note.person || '',
      note.contact || '',
      note.memo || '',
      it.alertThreshold == null ? '' : it.alertThreshold
    ]);
  }
  // 既存品目0件のときはサンプル行を追加
  if (items.length === 0) {
    if (brand === 'komeda') {
      rows.push(['', '豆類', '（例）ブレンドコーヒー豆', 'コメダ本部', 'kg', 2800, '食材', '', '田中 一郎', '0776-XX-XXXX', '納品は月・木', 5000]);
      rows.push(['', '乳製品', '（例）牛乳1L', '北陸乳業', '本', 280, '食材', '', '佐藤 花子', '076-YY-YYYY', '', '']);
    } else if (brand === 'hyonchan') {
      rows.push(['', '冷蔵', '（例）プルコギだれ', '', '本', 800, '食材', '', '', '', '', '']);
      rows.push(['', '備品', '（例）使い捨て手袋', '', '箱', 500, '備品', '', '', '', '', '']);
    } else {
      rows.push(['', '冷蔵', '（例）新商品タレ', '', 'Ｐ', 500, '食材', '', '', '', '', '']);
    }
  }
  // 入力用空行を10行追加
  for (let i = 0; i < 10; i++) rows.push(['', '', '', '', '', '', '', '', '', '', '', '']);

  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{wch:8},{wch:14},{wch:32},{wch:14},{wch:8},{wch:10},{wch:8},{wch:10},{wch:14},{wch:22},{wch:30},{wch:14}];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, guideWs, '使い方');
  XLSX.utils.book_append_sheet(wb, ws, '商品リスト');

  const today = new Date();
  const ymd = `${today.getFullYear()}${String(today.getMonth()+1).padStart(2,'0')}${String(today.getDate()).padStart(2,'0')}`;
  XLSX.writeFile(wb, `商品マスター_${brandName}_テンプレート_${ymd}.xlsx`);
  toast(`${brandName} のテンプレートをダウンロードしました`, 'success');
}

// ---- 商品マスター: Excel取込み ------------------------------
async function importItemsFromXlsx(brand) {
  if (typeof XLSX === 'undefined') { toast('Excelライブラリが読み込めません', 'error'); return; }
  const file = await pickXlsxFile();
  if (!file) return;

  let rows;
  try {
    rows = await readXlsxAsRows(file);
  } catch (e) {
    toast('Excelファイルの読み込みに失敗しました', 'error');
    return;
  }

  const headerIdx = findHeaderRowIndex(rows, '品名');
  if (headerIdx < 0) {
    toast('「品名」列が見つかりません。テンプレートをご利用ください', 'error');
    return;
  }
  const headerMap = buildHeaderMap(rows[headerIdx]);

  const existing = State.items[brand] || [];
  const newItems = [];   // 新規追加候補
  const updates = [];    // 更新候補 ({existing, patch})
  const errors = [];     // 行番号と理由

  for (let i = headerIdx + 1; i < rows.length; i++) {
    const row = rows[i] || [];
    // 空行スキップ
    if (row.every(c => c === '' || c === null || c === undefined)) continue;

    const name = String(pickCell(row, headerMap, '品名', '商品名') || '').trim();
    if (!name) continue; // 品名なし→無視
    const category = String(pickCell(row, headerMap, 'カテゴリー', 'カテゴリ', '分類') || '').trim();
    if (!category) { errors.push(`${i + 1}行目: ${name} のカテゴリーが空欄`); continue; }

    const supplier = String(pickCell(row, headerMap, '仕入先', '取引先') || '').trim();
    const unit = String(pickCell(row, headerMap, '単位') || '個').trim() || '個';
    const priceRaw = pickCell(row, headerMap, '単価(円)', '単価', '価格');
    const price = parseFloat(String(priceRaw).replace(/,/g, '')) || 0;

    let kindRaw = String(pickCell(row, headerMap, '種別', '区分') || '').trim();
    let kind;
    if (kindRaw === '食材' || kindRaw === 'food') kind = 'food';
    else if (kindRaw === '備品' || kindRaw === 'supplies') kind = 'supplies';
    else kind = inferKind(category);

    const seasonalRaw = String(pickCell(row, headerMap, '季節商品', '季節') || '').trim();
    const seasonal = ['○', '◯', 'o', 'O', '〇', '1', 'true', 'TRUE', '✓', '✔'].includes(seasonalRaw);

    // アラート金額（列があるときのみ反映。空欄=既定にリセット）
    const hasAlertCol = headerMap['アラート金額(円)'] !== undefined || headerMap['アラート金額'] !== undefined || headerMap['アラート'] !== undefined;
    let alertThreshold = null;
    if (hasAlertCol) {
      const alertRaw = pickCell(row, headerMap, 'アラート金額(円)', 'アラート金額', 'アラート');
      const av = String(alertRaw == null ? '' : alertRaw).replace(/[^0-9]/g, '');
      alertThreshold = av === '' ? null : (parseInt(av, 10) || null);
    }

    // 仕入先の追加情報（任意）
    const supPerson  = String(pickCell(row, headerMap, '担当者', '担当') || '').trim();
    const supContact = String(pickCell(row, headerMap, '連絡先', '電話', 'TEL') || '').trim();
    const supMemo    = String(pickCell(row, headerMap, '備考', 'メモ', 'コメント') || '').trim();

    const idCell = String(pickCell(row, headerMap, 'ID', 'id') || '').trim();

    // 既存判定: ID完全一致 > (カテゴリー + 品名) 一致
    let match = null;
    if (idCell) match = existing.find(it => it.id === idCell);
    if (!match) match = existing.find(it => it.category === category && it.name === name);

    if (match) {
      const patch = { category, name, supplier, unit, price, kind, seasonal };
      if (hasAlertCol) patch.alertThreshold = alertThreshold;
      updates.push({ existing: match, patch, supInfo: { person: supPerson, contact: supContact, memo: supMemo } });
    } else {
      newItems.push({ category, name, supplier, unit, price, kind, seasonal, alertThreshold, _supInfo: { person: supPerson, contact: supContact, memo: supMemo } });
    }
  }

  if (newItems.length === 0 && updates.length === 0) {
    toast('取込み対象の行がありませんでした', 'error');
    return;
  }

  // 確認ダイアログ
  const errLines = errors.slice(0, 5).map(e => `<li>${escapeHtml(e)}</li>`).join('');
  const previewNew = newItems.slice(0, 5).map(it => `<li>${escapeHtml(it.category)} / ${escapeHtml(it.name)} (${formatYen(it.price)})</li>`).join('');
  const previewUpd = updates.slice(0, 5).map(u => `<li>${escapeHtml(u.patch.category)} / ${escapeHtml(u.patch.name)}</li>`).join('');

  openModal({
    title: `${brandLabel(brand)} 商品マスター取込み確認`,
    body: `
      <div class="stack">
        <div>取込み対象を確認してください：</div>
        <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px 12px;">
          <strong style="color:#15803d;">＋ 新規追加: ${newItems.length}件</strong>
          ${newItems.length > 0 ? `<ul style="margin:6px 0 0 18px;font-size:12px;color:#166534;">${previewNew}${newItems.length > 5 ? `<li>... 他${newItems.length - 5}件</li>` : ''}</ul>` : ''}
        </div>
        <div style="background:#eff6ff;border:1px solid #93c5fd;border-radius:8px;padding:10px 12px;">
          <strong style="color:#1d4ed8;">↻ 更新: ${updates.length}件</strong>
          ${updates.length > 0 ? `<ul style="margin:6px 0 0 18px;font-size:12px;color:#1e40af;">${previewUpd}${updates.length > 5 ? `<li>... 他${updates.length - 5}件</li>` : ''}</ul>` : ''}
        </div>
        ${errors.length > 0 ? `
        <div style="background:#fef2f2;border:1px solid #fca5a5;border-radius:8px;padding:10px 12px;">
          <strong style="color:#b91c1c;">⚠ スキップ: ${errors.length}件</strong>
          <ul style="margin:6px 0 0 18px;font-size:12px;color:#991b1b;">${errLines}${errors.length > 5 ? `<li>... 他${errors.length - 5}件</li>` : ''}</ul>
        </div>` : ''}
        <div class="help">この操作は元に戻せません。よろしいですか？</div>
      </div>`,
    confirmLabel: '取込みを実行',
    onConfirm: async () => {
      if (window._masterImportBusy) return false; // 二重実行防止
      window._masterImportBusy = true;
      let importFailed = false;
      try {
      const total = updates.length + newItems.length;
      showBusy(`取込み準備中…（全${total}件）`);
      // 最新マスタへ同期してから採番・書き込み（他端末の追加と衝突しないように）
      const freshImp = await sbStorage.get('master_items');
      if (freshImp && typeof freshImp === 'object') State.items = freshImp;
      if (!State.items[brand]) State.items[brand] = [];
      let done = 0;
      const toRow = (it) => ({
        id: it.id, brand, category: it.category, no: it.no || null,
        name: it.name, supplier: it.supplier || null, unit: it.unit || '個',
        price: it.price || 0, kind: it.kind || 'food', seasonal: !!it.seasonal,
        alert_threshold: (it.alertThreshold == null ? null : it.alertThreshold),
        archived: false
      });
      // 更新：50件ずつまとめて一括保存（従来の1件ずつ→大幅高速化）
      const updTargets = [];
      for (const u of updates) {
        const target = (State.items[brand] || []).find(i => i.id === u.existing.id) || u.existing;
        Object.assign(target, u.patch);
        updTargets.push(target);
      }
      for (let i = 0; i < updTargets.length && !importFailed; i += 50) {
        const chunk = updTargets.slice(i, i + 50).map(toRow);
        updateBusy(`更新を保存中… ${Math.min(i + 50, updTargets.length)}/${updTargets.length}件`);
        const { error } = await sb.from('items').upsert(chunk, { onConflict: 'id' });
        if (error) { _lastDbError = '商品マスタ一括更新: ' + (error.message || ''); importFailed = true; break; }
        done += chunk.length;
      }
      // 新規：IDを先に採番して50件ずつ一括INSERT（衝突時のみ1件ずつ再試行）
      const brandObjImp = (State.brands || []).find(b => b.id === brand);
      const prefix = (brandObjImp && brandObjImp.idPrefix) ? brandObjImp.idPrefix : brand.charAt(0);
      const used = new Set((State.items[brand] || []).map(it => it.id));
      let n = (State.items[brand] || []).length + 1;
      const prepared = [];
      for (const itemData of newItems) {
        const { _supInfo, ...itemCore } = itemData;
        let id;
        do { id = `${prefix}${String(n).padStart(4, '0')}`; n++; } while (used.has(id));
        used.add(id);
        prepared.push({ id, ...itemCore });
      }
      for (let i = 0; i < prepared.length && !importFailed; i += 50) {
        const chunk = prepared.slice(i, i + 50);
        updateBusy(`新規登録中… ${Math.min(i + 50, prepared.length)}/${prepared.length}件`);
        const { error } = await sb.from('items').insert(chunk.map(toRow));
        if (!error) { chunk.forEach(it => State.items[brand].push(it)); done += chunk.length; continue; }
        // 一括で衝突した場合のみ、この塊だけ1件ずつ再試行（他端末との同時追加対策）
        for (const it of chunk) {
          let saved = false;
          for (let tries = 0; tries < 50 && !saved; tries++) {
            const res = await storage.insertItem(brand, it);
            if (res.ok) { State.items[brand].push(it); saved = true; }
            else if (res.conflict) { do { it.id = `${prefix}${String(n).padStart(4, '0')}`; n++; } while (used.has(it.id)); used.add(it.id); }
            else { importFailed = true; break; }
          }
          if (importFailed) break;
          done++;
        }
      }
      if (importFailed) { hideBusy(); toast('取込中に保存エラー：' + (_lastDbError || '通信エラー'), 'error'); return false; }

      // 仕入先情報をsupplierNotesに反映（同じ仕入先の最後の値を採用）
      if (!State.supplierNotes) State.supplierNotes = {};
      let supplierUpdated = 0;
      const collectSupInfo = (sup, info) => {
        if (!sup || !info) return;
        if (!info.person && !info.contact && !info.memo) return; // 全部空ならスキップ
        const existing = State.supplierNotes[sup] || {};
        State.supplierNotes[sup] = {
          person: info.person !== '' ? info.person : (existing.person || ''),
          contact: info.contact !== '' ? info.contact : (existing.contact || ''),
          memo: info.memo !== '' ? info.memo : (existing.memo || '')
        };
        supplierUpdated++;
      };
      for (const u of updates) collectSupInfo(u.existing.supplier, u.supInfo);
      for (const itemData of newItems) collectSupInfo(itemData.supplier, itemData._supInfo);
      if (supplierUpdated > 0) await saveSupplierNotes();

      render();
      const supMsg = supplierUpdated > 0 ? ` / 仕入先情報${supplierUpdated}件` : '';
      toast(`商品マスターを更新しました（新規${newItems.length}件 / 更新${updates.length}件${supMsg}）`, 'success');
      return true;
      } finally { window._masterImportBusy = false; hideBusy(); }
    }
  });
}

// ---- 商品マスター: 全商品を一括削除 --------------------------
async function deleteAllItems(brand) {
  const u = State.user;
  if (!u || (u.role !== 'admin' && u.role !== 'super_admin')) { toast('権限がありません', 'error'); return; }
  const count = (State.items[brand] || []).length;
  if (count === 0) { toast('この業態に登録済みの商品はありません', 'error'); return; }
  openModal({
    title: `${brandLabel(brand)} 全商品を削除`,
    body: `
      <div class="stack">
        <div style="background:#fef2f2;border:1px solid #fca5a5;border-radius:8px;padding:12px 14px;color:#b91c1c;font-weight:700;">
          ⚠ ${brandLabel(brand)} の商品マスター <u>${count}件すべて</u> を削除します。
        </div>
        <div class="help">・二重取込みなどで増えてしまった商品を一度リセットしたい場合に使います。<br>
        ・削除後は「⬇テンプレートDL」→ Excel編集 →「📤Excel取込み」で登録し直せます。<br>
        ・<strong>この操作は元に戻せません。</strong>削除を実行するには下の欄に「削除」と入力してください。</div>
        <input class="input" id="delete-all-confirm-word" placeholder="削除 と入力">
      </div>`,
    confirmLabel: '全件削除を実行',
    onConfirm: async () => {
      const w = (document.getElementById('delete-all-confirm-word') || {}).value || '';
      if (w.trim() !== '削除') { toast('「削除」と入力してください', 'error'); return false; }
      showBusy(`${brandLabel(brand)} の商品${count}件を削除中…`);
      try {
        const { error } = await sb.from('items').delete().eq('brand', brand);
        if (error) { toast('削除に失敗：' + (error.message || '通信エラー'), 'error'); return false; }
        State.items[brand] = [];
        render();
        toast(`${brandLabel(brand)} の商品${count}件を削除しました`, 'success');
        return true;
      } finally { hideBusy(); }
    }
  });
}

// ---- 棚卸表: 入力テンプレート出力 ---------------------------
async function exportInventoryTemplateXlsx(storeId) {
  if (typeof XLSX === 'undefined') { toast('Excelライブラリが読み込めません', 'error'); return; }
  const store = State.stores.find(s => s.id === storeId);
  if (!store) { toast('店舗情報が見つかりません', 'error'); return; }
  const items = getStoreItems(storeId);
  if (items.length === 0) {
    toast('この店舗に商品が登録されていません。先に商品マスターを登録してください', 'error');
    return;
  }
  const entries = getStoreEntries(storeId);
  const inv = State.inventory[storeId] || {};
  const notes = inv.notes || {};

  // カテゴリ順にソート
  const sorted = [...items].sort((a, b) => {
    const c = (a.category || '').localeCompare(b.category || '', 'ja');
    if (c !== 0) return c;
    return (a.no || 0) - (b.no || 0);
  });

  // 案内シート
  const guide = [];
  guide.push([`${storeDisp(store)} 棚卸表 入力テンプレート（${formatMonth(State.month)}）`]);
  guide.push([]);
  guide.push(['■ 使い方']);
  guide.push(['1. 「棚卸入力」シートを開いてください。']);
  guide.push(['2. 各品目の「数量」列に、実際の在庫数を入力してください。']);
  guide.push(['3. 必要に応じて「備考」列にメモを入力できます（任意）。']);
  guide.push(['4. 入力後、ファイルを保存し、アプリの「Excel取込み」ボタンから読み込んでください。']);
  guide.push([]);
  guide.push(['■ 注意事項']);
  guide.push(['・「ID」「カテゴリー」「品名」「単位」「単価」の列は変更しないでください（取込み時の照合に使います）。']);
  guide.push(['・数量は数値で入力してください（小数も可）。空欄や0は「未入力」扱いです。']);
  guide.push(['・既にアプリ側で入力済みの数量がある場合は、取込み時に上書きされます。']);
  guide.push(['・既に完了済の棚卸には取込みできません。修正モードに切り替えてから実行してください。']);

  const guideWs = XLSX.utils.aoa_to_sheet(guide);
  guideWs['!cols'] = [{wch:90}];

  // 入力シート
  const rows = [];
  rows.push([`${storeDisp(store)}　棚卸表  ${formatMonth(State.month)}`]);
  rows.push([]);
  rows.push(['ID', 'カテゴリー', 'No', '品名', '仕入先', '単位', '単価(円)', '数量', '備考']);
  for (const it of sorted) {
    const q = entries[it.id];
    const note = notes[it.id] || '';
    rows.push([
      it.id,
      it.category || '',
      itemNo(it),
      it.name || '',
      it.supplier || '',
      it.unit || '',
      it.price || 0,
      (q !== undefined && q !== '' && q !== null) ? q : '',
      note
    ]);
  }

  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{wch:8},{wch:14},{wch:6},{wch:32},{wch:14},{wch:8},{wch:10},{wch:10},{wch:24}];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, guideWs, '使い方');
  XLSX.utils.book_append_sheet(wb, ws, '棚卸入力');

  const safeName = store.name.replace(/[\/\\?*:\[\]]/g, '_');
  XLSX.writeFile(wb, `棚卸入力テンプレート_${safeName}_${State.month}.xlsx`);
  toast(`${store.name} の入力テンプレートをダウンロードしました`, 'success');
}

// ---- 棚卸表: Excel取込み ------------------------------------
async function importInventoryFromXlsx(storeId) {
  if (typeof XLSX === 'undefined') { toast('Excelライブラリが読み込めません', 'error'); return; }
  const store = State.stores.find(s => s.id === storeId);
  if (!store) return;
  const inv = State.inventory[storeId] || {};
  if (inv.completed) {
    toast('完了済の棚卸には取込みできません。修正モードに切り替えてください', 'error');
    return;
  }
  const items = getStoreItems(storeId);
  if (items.length === 0) { toast('商品が登録されていません', 'error'); return; }

  const file = await pickXlsxFile();
  if (!file) return;

  let rows;
  try {
    rows = await readXlsxAsRows(file);
  } catch (e) {
    toast('Excelファイルの読み込みに失敗しました', 'error');
    return;
  }

  const headerIdx = findHeaderRowIndex(rows, '品名');
  if (headerIdx < 0) {
    toast('「品名」列が見つかりません。入力テンプレートをご利用ください', 'error');
    return;
  }
  const headerMap = buildHeaderMap(rows[headerIdx]);
  if (headerMap['数量'] === undefined) {
    toast('「数量」列が見つかりません', 'error');
    return;
  }

  // 商品マッチ用インデックス
  const byId = new Map(items.map(it => [it.id, it]));
  const byNameCat = new Map(items.map(it => [`${it.category}|${it.name}`, it]));
  const byName = new Map();
  for (const it of items) {
    // 同名複数があれば上書きされるが、それは利用者責任
    byName.set(it.name, it);
  }

  const updates = []; // {item, qty, note}
  const skipped = []; // 理由付き
  const unmatched = []; // 商品見つからず

  for (let i = headerIdx + 1; i < rows.length; i++) {
    const row = rows[i] || [];
    if (row.every(c => c === '' || c === null || c === undefined)) continue;

    const name = String(pickCell(row, headerMap, '品名', '商品名') || '').trim();
    const idCell = String(pickCell(row, headerMap, 'ID', 'id') || '').trim();
    const category = String(pickCell(row, headerMap, 'カテゴリー', 'カテゴリ') || '').trim();
    const qtyRaw = pickCell(row, headerMap, '数量');
    const noteRaw = String(pickCell(row, headerMap, '備考', 'メモ') || '').trim();

    if (!name && !idCell) continue; // 空行扱い

    // マッチング: ID > カテゴリー+品名 > 品名のみ
    let item = null;
    if (idCell) item = byId.get(idCell);
    if (!item && category && name) item = byNameCat.get(`${category}|${name}`);
    if (!item && name) item = byName.get(name);

    if (!item) {
      unmatched.push(`${i + 1}行目: ${name || idCell}`);
      continue;
    }

    // 数量パース。空欄はスキップ（=「未入力のまま」扱い、上書きしない）
    if (qtyRaw === '' || qtyRaw === null || qtyRaw === undefined) {
      // 備考だけある場合は備考だけ取り込む
      if (noteRaw) {
        updates.push({ item, qty: null, note: noteRaw });
      }
      continue;
    }
    const qty = parseFloat(String(qtyRaw).replace(/,/g, ''));
    if (isNaN(qty) || qty < 0) {
      skipped.push(`${i + 1}行目: ${item.name} の数量「${qtyRaw}」が不正`);
      continue;
    }
    updates.push({ item, qty, note: noteRaw });
  }

  if (updates.length === 0 && unmatched.length === 0 && skipped.length === 0) {
    toast('取込み対象の行がありませんでした', 'error');
    return;
  }

  // 確認ダイアログ
  const qtyUpdates = updates.filter(u => u.qty !== null);
  const noteOnly = updates.filter(u => u.qty === null);
  const previewQty = qtyUpdates.slice(0, 5).map(u => {
    const amt = u.qty * (u.item.price || 0);
    return `<li>${escapeHtml(u.item.name)}: ${u.qty} ${escapeHtml(u.item.unit || '')} = ${formatYen(amt)}</li>`;
  }).join('');
  const unmatchedList = unmatched.slice(0, 5).map(s => `<li>${escapeHtml(s)}</li>`).join('');
  const skippedList = skipped.slice(0, 5).map(s => `<li>${escapeHtml(s)}</li>`).join('');

  // 合計金額プレビュー
  const totalAfter = qtyUpdates.reduce((sum, u) => sum + u.qty * (u.item.price || 0), 0);

  openModal({
    title: `${store.name} 棚卸取込み確認`,
    body: `
      <div class="stack">
        <div>以下の内容で取込みます：</div>
        <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px 12px;">
          <strong style="color:#15803d;">数量更新: ${qtyUpdates.length}件</strong>
          ${qtyUpdates.length > 0 ? `
            <ul style="margin:6px 0 0 18px;font-size:12px;color:#166534;">${previewQty}${qtyUpdates.length > 5 ? `<li>... 他${qtyUpdates.length - 5}件</li>` : ''}</ul>
            <div style="margin-top:6px;font-size:13px;color:#166534;"><strong>取込み分合計: ${formatYen(totalAfter)}</strong></div>
          ` : ''}
        </div>
        ${noteOnly.length > 0 ? `
        <div style="background:#fef9c3;border:1px solid #fcd34d;border-radius:8px;padding:10px 12px;font-size:12px;">
          <strong style="color:#a16207;">備考のみ更新: ${noteOnly.length}件</strong>
        </div>` : ''}
        ${unmatched.length > 0 ? `
        <div style="background:#fef2f2;border:1px solid #fca5a5;border-radius:8px;padding:10px 12px;">
          <strong style="color:#b91c1c;">⚠ 商品が見つかりません: ${unmatched.length}件</strong>
          <ul style="margin:6px 0 0 18px;font-size:12px;color:#991b1b;">${unmatchedList}${unmatched.length > 5 ? `<li>... 他${unmatched.length - 5}件</li>` : ''}</ul>
          <div style="font-size:11px;color:#991b1b;margin-top:4px;">→ 該当商品を商品マスターに先に登録してください。</div>
        </div>` : ''}
        ${skipped.length > 0 ? `
        <div style="background:#fef2f2;border:1px solid #fca5a5;border-radius:8px;padding:10px 12px;">
          <strong style="color:#b91c1c;">⚠ スキップ: ${skipped.length}件</strong>
          <ul style="margin:6px 0 0 18px;font-size:12px;color:#991b1b;">${skippedList}${skipped.length > 5 ? `<li>... 他${skipped.length - 5}件</li>` : ''}</ul>
        </div>` : ''}
        <div class="help">既存の数量・備考はこの取込み内容で上書きされます。</div>
      </div>`,
    confirmLabel: '取込みを実行',
    onConfirm: async () => {
      const target = State.inventory[storeId] || (State.inventory[storeId] = { entries: {}, notes: {} });
      target.entries = target.entries || {};
      target.notes = target.notes || {};
      for (const u of updates) {
        if (u.qty !== null) {
          // 0 はクリア。キー削除だと保存対象から外れサーバの旧値が復活するため、0 を残して quantity:0 を送る
          target.entries[u.item.id] = u.qty;
        }
        if (u.note !== undefined) {
          if (u.note) target.notes[u.item.id] = u.note;
          else delete target.notes[u.item.id];
        }
      }
      await saveInventory();
      render();
      toast(`数量${qtyUpdates.length}件 / 備考${noteOnly.length}件 を取り込みました`, 'success');
      return true;
    }
  });
}



// =========================================================
// 仕入先管理：削除・CSV取込
// =========================================================
async function deleteSupplier(supplierName) {
  if (!supplierName) return;
  // 該当仕入先を使っている商品を列挙
  const usingItems = [];
  for (const brand of allBrands()) {
    for (const it of (State.items[brand] || [])) {
      if ((it.supplier || '').trim() === supplierName) {
        usingItems.push({ brand, item: it });
      }
    }
  }
  const hasNote = !!(State.supplierNotes && State.supplierNotes[supplierName]);
  
  const msg = usingItems.length > 0
    ? `「${supplierName}」を削除しますか？\n\n• ${usingItems.length}件の商品から仕入先欄をクリアします\n• 仕入先のメモ（連絡先・備考）も削除されます\n\n商品自体は削除されません。`
    : `「${supplierName}」のメモを削除しますか？\n\n（現在、この仕入先を使っている商品はありません）`;
  
  if (!confirm(msg)) return;
  
  // 商品の supplier 欄をクリア
  for (const { brand, item } of usingItems) {
    item.supplier = '';
  }
  if (usingItems.length > 0) {
    await saveItems();
  }
  
  // メモを削除
  if (hasNote) {
    delete State.supplierNotes[supplierName];
    await saveSupplierNotes();
    // Supabase側のレコードも削除
    if (typeof sb !== 'undefined' && sb) {
      try { await sb.from('supplier_notes').delete().eq('supplier', supplierName); } catch (e) { console.error(e); }
    }
  }
  
  toast(`「${supplierName}」を削除しました`, 'success');
  render();
}

async function exportSuppliersCSV() {
  // すべての仕入先を集計
  const supplierMap = {};
  for (const brand of allBrands()) {
    for (const it of (State.items[brand] || [])) {
      const sup = (it.supplier || '').trim();
      if (!sup) continue;
      if (!supplierMap[sup]) supplierMap[sup] = { count: 0, brands: new Set() };
      supplierMap[sup].count++;
      supplierMap[sup].brands.add(brandLabel(brand));
    }
  }
  const supplierNotes = State.supplierNotes || {};
  const suppliers = Object.keys(supplierMap).sort((a, b) => a.localeCompare(b, 'ja'));
  
  // CSVを組み立て（BOM付UTF-8でExcel互換に）
  const rows = [['仕入先名', '連絡先（電話番号・担当者）', '備考（発注条件など）', '取扱品数', '取引業態']];
  for (const sup of suppliers) {
    const info = supplierMap[sup];
    const note = supplierNotes[sup] || { contact: '', memo: '' };
    rows.push([
      sup,
      note.contact || '',
      note.memo || '',
      String(info.count),
      [...info.brands].join('・')
    ]);
  }
  // 空行を10行追加（新規追加用）
  for (let i = 0; i < 10; i++) rows.push(['', '', '', '', '']);
  
  function csvEscape(s) {
    const str = String(s);
    if (/[",\n\r]/.test(str)) return '"' + str.replace(/"/g, '""') + '"';
    return str;
  }
  const csv = '\ufeff' + rows.map(r => r.map(csvEscape).join(',')).join('\r\n');
  
  // ダウンロード
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const today = new Date();
  const ymd = `${today.getFullYear()}${String(today.getMonth()+1).padStart(2,'0')}${String(today.getDate()).padStart(2,'0')}`;
  a.href = url;
  a.download = `仕入先一覧_${ymd}.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 200);
  
  toast(`${suppliers.length}件の仕入先をCSV出力しました`, 'success');
}

function importSuppliersCSV() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv,text/csv,application/vnd.ms-excel';
  input.style.display = 'none';
  input.onchange = async () => {
    const file = input.files && input.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      // BOM除去
      const clean = text.replace(/^\ufeff/, '');
      // 簡易CSVパース（引用符・改行対応）
      const rows = parseCSV(clean);
      if (rows.length < 2) { toast('CSVに有効な行がありません', 'error'); return; }
      
      // ヘッダー行を探す
      let headerIdx = -1;
      for (let i = 0; i < Math.min(rows.length, 5); i++) {
        const r = rows[i];
        if (r && r.some(c => (c || '').trim() === '仕入先名')) { headerIdx = i; break; }
      }
      if (headerIdx < 0) { toast('「仕入先名」列が見つかりません。テンプレートをご利用ください', 'error'); return; }
      
      const header = rows[headerIdx].map(c => (c || '').trim());
      const supIdx = header.indexOf('仕入先名');
      const contactIdx = header.findIndex(h => h === '連絡先（電話番号・担当者）' || h === '連絡先' || h === '電話番号');
      const memoIdx = header.findIndex(h => h === '備考（発注条件など）' || h === '備考' || h === 'メモ');
      
      const updates = [];
      for (let i = headerIdx + 1; i < rows.length; i++) {
        const r = rows[i];
        if (!r) continue;
        const sup = (r[supIdx] || '').trim();
        if (!sup) continue;
        const contact = contactIdx >= 0 ? (r[contactIdx] || '').trim() : '';
        const memo = memoIdx >= 0 ? (r[memoIdx] || '').trim() : '';
        updates.push({ supplier: sup, contact, memo });
      }
      
      if (updates.length === 0) { toast('取込み対象の行がありませんでした', 'error'); return; }
      
      // 確認ダイアログ
      const preview = updates.slice(0, 5).map(u => 
        `<li>${escapeHtml(u.supplier)}: ${escapeHtml(u.contact || '(連絡先なし)')} / ${escapeHtml(u.memo || '(備考なし)')}</li>`
      ).join('');
      
      openModal({
        title: '仕入先メモ取込み確認',
        body: `
          <div class="stack">
            <div>以下の内容で取込みます：</div>
            <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px 12px;">
              <strong style="color:#15803d;">取込み対象: ${updates.length}件</strong>
              <ul style="margin:6px 0 0 18px;font-size:12px;color:#166534;">${preview}${updates.length > 5 ? `<li>... 他${updates.length - 5}件</li>` : ''}</ul>
            </div>
            <div class="help">既存の連絡先・備考は上書きされます。<br>
            ※ 商品マスタの「仕入先」欄にこの名前が存在しない場合は、メモのみ登録されます（商品マスタへの自動追加はしません）。</div>
          </div>`,
        confirmLabel: '取込みを実行',
        onConfirm: async () => {
          State.supplierNotes = State.supplierNotes || {};
          for (const u of updates) {
            State.supplierNotes[u.supplier] = { contact: u.contact, memo: u.memo };
          }
          await saveSupplierNotes();
          // Supabaseには {supplier, note} で保存している（contact/memo統合）ので、
          // JSON文字列化して保存し直す処理は saveSupplierNotes 側で吸収
          toast(`${updates.length}件の仕入先メモを取り込みました`, 'success');
          render();
          return true;
        }
      });
    } catch (e) {
      console.error('CSV取込エラー', e);
      toast('CSV取込みに失敗しました: ' + (e.message || ''), 'error');
    }
    setTimeout(() => input.remove(), 200);
  };
  document.body.appendChild(input);
  input.click();
}


// =========================================================
// 業態別仕入先 管理機能
// =========================================================
async function addBrandSupplierDialog(brand) {
  openModal({
    title: `${brandLabel(brand)} - 仕入先を追加`,
    body: `
      <div class="stack">
        <div class="field">
          <label class="lbl">仕入先名 <span style="color:#ef4444;">*</span></label>
          <input type="text" id="new-supplier-name" class="ipt" placeholder="例: 岩谷、北陸乳業" />
        </div>
        <div class="field">
          <label class="lbl">連絡先（電話・担当者）</label>
          <input type="text" id="new-supplier-contact" class="ipt" placeholder="任意" />
        </div>
        <div class="field">
          <label class="lbl">備考（発注条件など）</label>
          <input type="text" id="new-supplier-memo" class="ipt" placeholder="任意" />
        </div>
        <div class="field">
          <label class="lbl">
            <input type="checkbox" id="new-supplier-hq" />
            本部仕入先として登録
          </label>
        </div>
      </div>`,
    confirmLabel: '追加',
    onConfirm: async () => {
      const name = document.getElementById('new-supplier-name').value.trim();
      const contact = document.getElementById('new-supplier-contact').value.trim();
      const memo = document.getElementById('new-supplier-memo').value.trim();
      const isHq = document.getElementById('new-supplier-hq').checked;
      if (!name) { toast('仕入先名を入力してください', 'error'); return false; }
      
      if (!State.suppliersByBrand[brand]) State.suppliersByBrand[brand] = [];
      if (State.suppliersByBrand[brand].some(s => s.name === name)) {
        toast('同じ名前の仕入先が既に存在します', 'error');
        return false;
      }
      
      const newSupplier = { name, contact, memo, isHeadquarters: isHq, sortOrder: isHq ? 1 : 100 };
      const saved = await sbStorage.upsertSupplier(brand, newSupplier);
      if (!saved) { toast('登録に失敗しました', 'error'); return false; }
      
      newSupplier.id = saved.id;
      State.suppliersByBrand[brand].push(newSupplier);
      toast(`「${name}」を追加しました`, 'success');
      render();
      return true;
    }
  });
}

async function deleteBrandSupplier(brand, name) {
  // 該当商品を列挙
  const usingItems = (State.items[brand] || []).filter(it => (it.supplier || '').trim() === name);
  const supplier = (State.suppliersByBrand[brand] || []).find(s => s.name === name);
  
  const msg = usingItems.length > 0
    ? `【${brandLabel(brand)}】「${name}」を削除しますか？\n\n• ${usingItems.length}件の商品から仕入先欄をクリアします\n• 仕入先のメモも削除されます\n\n商品自体は削除されません。`
    : `【${brandLabel(brand)}】「${name}」を削除しますか？\n\n（現在この仕入先を使っている商品はありません）`;
  
  if (!confirm(msg)) return;
  
  // 商品マスタから supplier をクリア
  for (const it of usingItems) it.supplier = '';
  if (usingItems.length > 0) await saveItems();
  
  // suppliers テーブルから削除
  await sbStorage.deleteSupplier(brand, name);
  if (State.suppliersByBrand[brand]) {
    State.suppliersByBrand[brand] = State.suppliersByBrand[brand].filter(s => s.name !== name);
  }
  
  toast(`「${name}」を削除しました`, 'success');
  render();
}

function showBrandSupplierItems(brand, name) {
  const items = (State.items[brand] || []).filter(it => (it.supplier || '').trim() === name);
  if (items.length === 0) {
    toast('この仕入先を使っている商品がありません', 'info');
    return;
  }
  const list = items.map(it => `<li>${escapeHtml(it.category)} / ${escapeHtml(it.name)} (${formatYen(it.price)})</li>`).join('');
  openModal({
    title: `「${name}」の取扱商品（${items.length}件）`,
    body: `<ul style="margin:0 0 0 18px;font-size:13px;line-height:1.7;max-height:60vh;overflow:auto;">${list}</ul>`,
    confirmLabel: '閉じる',
    onConfirm: async () => true
  });
}

async function registerOrphanSuppliers(brand) {
  const usedInItems = new Set();
  for (const it of (State.items[brand] || [])) {
    const sup = (it.supplier || '').trim();
    if (sup) usedInItems.add(sup);
  }
  const knownNames = new Set((State.suppliersByBrand[brand] || []).map(s => s.name));
  const orphans = [...usedInItems].filter(n => !knownNames.has(n));
  if (orphans.length === 0) { toast('登録対象がありません', 'info'); return; }
  
  if (!confirm(`${orphans.length}件の仕入先を仕入先マスタに登録しますか？\n\n${orphans.slice(0, 10).join('、')}${orphans.length > 10 ? `...他${orphans.length - 10}件` : ''}`)) return;
  
  const toAdd = orphans.map(name => ({
    name,
    contact: '',
    memo: '',
    isHeadquarters: name.includes('本部'),
    sortOrder: name.includes('本部') ? 1 : 100
  }));
  
  const ok = await sbStorage.bulkUpsertSuppliers(brand, toAdd);
  if (!ok) { toast('登録に失敗しました', 'error'); return; }
  
  // 反映
  if (!State.suppliersByBrand[brand]) State.suppliersByBrand[brand] = [];
  State.suppliersByBrand[brand].push(...toAdd);
  toast(`${orphans.length}件を登録しました`, 'success');
  render();
}

async function exportBrandSuppliersCSV(brand) {
  const suppliers = (State.suppliersByBrand[brand] || []).slice();
  const itemCounts = {};
  for (const it of (State.items[brand] || [])) {
    const sup = (it.supplier || '').trim();
    if (sup) itemCounts[sup] = (itemCounts[sup] || 0) + 1;
  }
  
  const rows = [['仕入先名', '本部フラグ', '連絡先', '備考', '取扱品数']];
  for (const s of suppliers) {
    rows.push([s.name, s.isHeadquarters ? '○' : '', s.contact || '', s.memo || '', String(itemCounts[s.name] || 0)]);
  }
  // 空行10行
  for (let i = 0; i < 10; i++) rows.push(['', '', '', '', '']);
  
  function csvEscape(s) {
    const str = String(s);
    if (/[",\n\r]/.test(str)) return '"' + str.replace(/"/g, '""') + '"';
    return str;
  }
  const csv = '\ufeff' + rows.map(r => r.map(csvEscape).join(',')).join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const today = new Date();
  const ymd = `${today.getFullYear()}${String(today.getMonth()+1).padStart(2,'0')}${String(today.getDate()).padStart(2,'0')}`;
  a.href = url;
  a.download = `仕入先一覧_${brandLabel(brand)}_${ymd}.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 200);
  toast(`${suppliers.length}件の仕入先をCSV出力しました`, 'success');
}

function importBrandSuppliersCSV(brand) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv,text/csv,application/vnd.ms-excel';
  input.style.display = 'none';
  input.onchange = async () => {
    const file = input.files && input.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const clean = text.replace(/^\ufeff/, '');
      const rows = parseCSV(clean);
      if (rows.length < 2) { toast('CSVに有効な行がありません', 'error'); return; }
      
      let headerIdx = -1;
      for (let i = 0; i < Math.min(rows.length, 5); i++) {
        const r = rows[i];
        if (r && r.some(c => (c || '').trim() === '仕入先名')) { headerIdx = i; break; }
      }
      if (headerIdx < 0) { toast('「仕入先名」列が見つかりません', 'error'); return; }
      
      const header = rows[headerIdx].map(c => (c || '').trim());
      const nameIdx = header.indexOf('仕入先名');
      const hqIdx = header.indexOf('本部フラグ');
      const contactIdx = header.findIndex(h => h === '連絡先' || h === '連絡先（電話・担当者）' || h === '電話番号');
      const memoIdx = header.findIndex(h => h === '備考' || h === '備考（発注条件など）' || h === 'メモ');
      
      const updates = [];
      for (let i = headerIdx + 1; i < rows.length; i++) {
        const r = rows[i];
        if (!r) continue;
        const name = (r[nameIdx] || '').trim();
        if (!name) continue;
        const hq = hqIdx >= 0 ? ['○', '◯', '〇', 'o', 'O', '1', 'true', 'TRUE', '✓', '✔'].includes((r[hqIdx] || '').trim()) : false;
        const contact = contactIdx >= 0 ? (r[contactIdx] || '').trim() : '';
        const memo = memoIdx >= 0 ? (r[memoIdx] || '').trim() : '';
        updates.push({ name, isHeadquarters: hq, contact, memo, sortOrder: hq ? 1 : 100 });
      }
      
      if (updates.length === 0) { toast('取込み対象の行がありませんでした', 'error'); return; }
      
      const preview = updates.slice(0, 5).map(u => 
        `<li>${escapeHtml(u.name)} ${u.isHeadquarters ? '★本部' : ''}: ${escapeHtml(u.contact || '(連絡先なし)')}</li>`
      ).join('');
      
      openModal({
        title: `${brandLabel(brand)} 仕入先マスタ取込み確認`,
        body: `
          <div class="stack">
            <div>以下の内容で${brandLabel(brand)}に取込みます：</div>
            <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px 12px;">
              <strong style="color:#15803d;">取込み対象: ${updates.length}件</strong>
              <ul style="margin:6px 0 0 18px;font-size:12px;color:#166534;">${preview}${updates.length > 5 ? `<li>... 他${updates.length - 5}件</li>` : ''}</ul>
            </div>
            <div class="help">既存の仕入先と同名のものは上書きされます。</div>
          </div>`,
        confirmLabel: '取込みを実行',
        onConfirm: async () => {
          const ok = await sbStorage.bulkUpsertSuppliers(brand, updates);
          if (!ok) { toast('取込みに失敗しました', 'error'); return false; }
          // State 更新
          if (!State.suppliersByBrand[brand]) State.suppliersByBrand[brand] = [];
          const map = new Map(State.suppliersByBrand[brand].map(s => [s.name, s]));
          for (const u of updates) {
            if (map.has(u.name)) {
              Object.assign(map.get(u.name), u);
            } else {
              State.suppliersByBrand[brand].push(u);
            }
          }
          toast(`${updates.length}件の仕入先を取り込みました`, 'success');
          render();
          return true;
        }
      });
    } catch (e) {
      console.error('CSV取込エラー', e);
      toast('CSV取込みに失敗しました: ' + (e.message || ''), 'error');
    }
    setTimeout(() => input.remove(), 200);
  };
  document.body.appendChild(input);
  input.click();
}

// CSVパース（引用符・改行内引用符対応）
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuote = false;
  let i = 0;
  while (i < text.length) {
    const c = text[i];
    if (inQuote) {
      if (c === '"') {
        if (text[i+1] === '"') { field += '"'; i += 2; continue; }
        inQuote = false; i++; continue;
      }
      field += c; i++; continue;
    } else {
      if (c === '"') { inQuote = true; i++; continue; }
      if (c === ',') { row.push(field); field = ''; i++; continue; }
      if (c === '\r') { i++; continue; }
      if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; i++; continue; }
      field += c; i++; continue;
    }
  }
  if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}


// =========================================================
// CSV fallback (in case CDN unreachable)
// =========================================================
function exportStoreCsv(storeId) {
  const store = State.stores.find(s => s.id === storeId);
  const rows = buildSheetRows(storeId);
  const csv = '\uFEFF' + rows.map(r => r.map(csvCell).join(',')).join('\r\n');
  const blob = new Blob([csv], {type: 'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `棚卸_${store.name}_${State.month}.csv`;
  document.body.appendChild(a); a.click();
  setTimeout(() => { a.remove(); URL.revokeObjectURL(url); }, 200);
}
function csvCell(v) {
  if (v == null) return '';
  const s = String(v);
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

// =========================================================
// Modal / Toast
// =========================================================
function openModal({ title, body, onConfirm, confirmLabel, dismissible = true, onCancel }) {
  const back = document.createElement('div');
  back.className = 'modal-backdrop';
  back.innerHTML = `
    <div class="modal">
      <h2>${escapeHtml(title)}</h2>
      ${body}
      <div class="actions">
        <button class="btn btn-secondary" data-modal-action="cancel">キャンセル</button>
        <button class="btn btn-primary" data-modal-action="confirm">${escapeHtml(confirmLabel || '追加')}</button>
      </div>
    </div>`;
  const closeModal = () => back.remove();
  back._closeModal = closeModal;
  back.addEventListener('click', async (e) => {
    // 背景クリック：dismissible=false のときは閉じない（誤操作で入力を失わないため）
    if (e.target === back) { if (dismissible) closeModal(); return; }
    const action = e.target.dataset?.modalAction;
    if (action === 'cancel') {
      if (onCancel) { const keep = await onCancel(); if (keep === false) return; }
      closeModal();
      return;
    }
    if (action === 'confirm') {
      const btn = e.target;
      if (btn.disabled) return; // 二重クリック防止
      btn.disabled = true;
      const orig = btn.textContent;
      btn.textContent = '処理中…';
      let ok;
      try { ok = await onConfirm(); }
      finally { btn.disabled = false; btn.textContent = orig; }
      if (ok !== false) back.remove();
    }
  });
  document.body.appendChild(back);
}

// 処理中オーバーレイ（進捗表示つき・二重操作防止）
function showBusy(msg) {
  let el = document.getElementById('busy-overlay');
  if (!el) {
    el = document.createElement('div');
    el.id = 'busy-overlay';
    el.innerHTML = '<div class="busy-box"><div class="busy-spin"></div><span id="busy-msg"></span></div>';
    document.body.appendChild(el);
  }
  el.style.display = 'flex';
  const m = document.getElementById('busy-msg');
  if (m) m.textContent = msg;
}
function updateBusy(msg) { const m = document.getElementById('busy-msg'); if (m) m.textContent = msg; }
function hideBusy() { const el = document.getElementById('busy-overlay'); if (el) el.style.display = 'none'; }

function toast(msg, type = '') {
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; }, 1800);
  setTimeout(() => { el.remove(); }, 2200);
}

// =========================================================
// Boot
// =========================================================
(async () => {
  try {
    if (typeof init === 'function') {
      await init();
    } else {
      await loadAll();
      render();
    }
  } catch (e) {
    console.error(e);
    document.getElementById('app').innerHTML = `<div style="padding:24px;color:#b91c1c;">読み込みエラー: ${e.message}</div>`;
  }
})();
