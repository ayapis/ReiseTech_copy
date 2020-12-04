# ReiseTech_copy
ReiseTechの公式サイトの模写です。FLOCSSに準じた設計でコーディングします。

【ゴール】

予測、再利用、保守、拡張しやすいコードにすること。




【全体共通ルール】

・単語の区切りはキャメルケース

・１ブロック１ファイル作成する

・ワイヤー分けに迷ったクラスはとりあえず、「object/component/_module」に入れる。

・&__Element記法は使用しない

大切なのは、クラス名を見たときに、セパレーターの種類によって、それがBlockとElementの区切りなのか、Modifierの区切りなのか、それともただの単語の区切りなのかが、はっきり判別できるようにすることです。

（https://app.codegrid.net/entry/bem-basic-1）

（検索のメリットと慣れないうちの見やすさで使用しないとしたが、慣れてきたら再検討）




【クラス名の命名規則】

・プレフィックス（l,c,p,u）-bock__element-modifier

・Elementを入れ子にするときに.block__element__elementのような名前にできるだけならないように

（これになってしまっている部分があれば可能な限り修正する）




【変数の命名規則】

$プロパティ名-使用用途-出てきた順番

例：$color-mainText、$color-mainText-2

使用用途で分けきれない場合は、末尾に数字を付加する。

変数名を確認するときに、まず「何のプロパティか」から入ることが多いので、

見つけやすいと考え上記とする。

使用用途で分けきれない場合については、連番で良いのか引き続き要検討




【projectかcomponentかについて】

お寿司を見本にしたサイトを主に参考に（https://www.ozlink.co.jp/lab/1050/）

▼component

・最小単位のパーツ

再利用できるパターンとして、小さな単位のモジュールを定義します。（公式）

出来る限り、最低限の機能を持ったものとして定義されるべきであり、それ自体が固有の幅や色などの特色を持つことは避ける（公式）

→幅や色指定しないという部分があまり分からず、一旦スルーしています。

これ以上分解できないような最小コンポーネント（Elementがないようなコンポーネント）か、それに近いコンポーネント（https://zenn.dev/haniwaman/articles/bf392f397c8db7341881）




▼project

例えば、記事一覧や、ユーザープロフィール、画像ギャラリーなどコンテンツを構成する要素（公式）

componentの最小限のパーツと、それ以外の要素が組み合わさってできる塊のこと。レイアウト部分でも

なく、componentに含まれないもの（https://yumegori.com/flocss#chapter-10）




基本的には下記のタグをprojectとする。

（理由：これらのタグで囲まれた部分が最小単位になることはあまりないと考えたから。）

<section> <article> <nav> <aside>（ <div>）




▼比較

・.c- ...　これ以上分解できないような最小コンポーネント（Elementがないようなコンポーネント）か、それに近いコンポーネント
・.p- ・・・ .c-以外のコンポーネント目的のBlock


（https://tsudoi.org/guide/detail/3.html）




コンポーネントには、marginやpaddingを付けない

プロジェクトに、marginやpaddingを付ける




【BlockかElementかについて】

▼Block

Blockは何度も繰り返し出現することが想定できます。

Blockはどこにでも置くことができ、Blockの中にBlockを含めることも可能です。ただし、CSSではBlockを入れ子にしてスタイルを指定してはいけません。

なぜなら、Blockは完全に独立し、Blockを別の場所に移動しても、単体で動作可能である必要があるからです。

（https://app.codegrid.net/entry/bem-basic-1）

category-list blockの子要素として article-list blockが登場しているが, これは全く問題ない。

そしてSCSSは1ファイルに1blockであるため, category-list と article-list は互いにネストすることもなく完全に独立して定義する。

気をつけるべきはほぼmarginのみの場合が多いが, margin以外にも要素の外側に影響を及ぼすようなスタイルは指定するべきでない。

（https://qiita.com/Takuan_Oishii/items/0f0d2c5dc33a9b2d9cb1）




▼Element

ElementはBlockの構成要素で、そのElementが属するBlock内でのみ意味を成します。

ひとつのElementはBlock内で何度も繰り返し利用できます。

（https://app.codegrid.net/entry/bem-basic-1）

blockの無いところにelementが登場してはいけない

（https://qiita.com/Takuan_Oishii/items/0f0d2c5dc33a9b2d9cb1）




▼Modifier

既存のBlockやElementと似ているけれど、見た目や動きが少しだけ違うものを作りたい場合には、新規にそれらを作るのではなく、Modifierを使うことができます。

（https://app.codegrid.net/entry/bem-basic-1）




【wrapをどのファイルに作成するか】

uにするっていうのは・・・？




そもそもwrapで何をしているかというと、コンテンツの幅を固定するのに使用している。

そのため、projectの中に属することもあると考えると、componentとするのが妥当ではないかと考える。

ただし、projectにするということについても検討の余地はあるため、それぞれデメリットをまとめる。

layoutはそもそも「ページ単位で唯一の存在である要素」のため、不適切である。




componentにした場合

componentは最小の単位とされているが、wrapの中に色々な素材が入るため、最小単位とは言えない




projectにした場合

componentの中に属することはないのかという懸念点がある。→質問１

ただし、componentは最小の単位とされているのだから、その中にwrapが入ってくるのは

おかしいといえばおかしい？




まだ少し検討が必要だが、projectに寄り気味。

先生に確認したいこととしては下記

・componentの中にprojectが入るケースはある？

（公式「https://github.com/hiloki/flocss」の例では入っているのがあった。）







【プロパティの宣言順】

まだ全く検討していないため、いずれ検討
