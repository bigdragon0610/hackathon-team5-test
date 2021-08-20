smallArticles =[
    '1.南部エリアの観光スポット',
    '2.中部エリアの観光スポット',
    '3.北部エリアの観光スポット',
    '4.宮古島・石垣島の観光情報',
    '5.離島の絶景ビーチ',
    '6.沖縄の人気ホテル・旅館',
    '7.沖縄のレンタカー・観光バスツアー',
    '8.沖縄のお土産',
];

recommendSpots =[
    ['首里城公園','瑞泉酒造株式会社','識名園（しきなえん）','第一牧志公設市場','玉陵（たまうどぅん）'],
    ['万座毛（まんざもう）','恩納ガラス工房', '真栄田岬（まえだみさき）・青の洞窟', '琉球村', 'やちむんの里'],
    ['沖縄美ら海水族館','備瀬のフクギ並木','もとぶ元気村','ナゴパイナップルパーク','オリオンハッピーパーク'],
];

    let Contents =

'<div id="main" class="container">'
    +'<h1 class="title">【2021年】沖縄観光で南国リゾート満喫！エリア別おすすめスポット41選！</h1>'
    +'<p class="article_dates">公開日:2021/07/01</p>'
    
       
        +'<a class="a2a_button_twitter" target="_blank" href="https://twitter.com/intent/tweet?text=%E3%80%902021%E5%B9%B4%E3%80%91%E6%B2%96%E7%B8%84%E8%A6%B3%E5%85%89%E3%81%A7%E5%8D%97%E5%9B%BD%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%E6%BA%80%E5%96%AB%EF%BC%81%E3%82%A8%E3%83%AA%E3%82%A2%E5%88%A5%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E3%82%B9%E3%83%9D%E3%83%83%E3%83%8841%E9%81%B8%EF%BC%81%20https%3A%2F%2Ftravel.rakuten.co.jp%2Fmytrip%2Franking%2Fspot-okinawa&related=AddToAny,micropat" rel="nofollow noopener">'
            +'<span class="a2a_label_twitter">Twitter</span>'
        +'</a>'
        +'<a class="a2a_button_line" target="_blank" href="https://www.addtoany.com/add_to/line?linkurl=https%3A%2F%2Ftravel.rakuten.co.jp%2Fmytrip%2Franking%2Fspot-okinawa&amp;linkname=%E3%80%902021%E5%B9%B4%E3%80%91%E6%B2%96%E7%B8%84%E8%A6%B3%E5%85%89%E3%81%A7%E5%8D%97%E5%9B%BD%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%E6%BA%80%E5%96%AB%EF%BC%81%E3%82%A8%E3%83%AA%E3%82%A2%E5%88%A5%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E3%82%B9%E3%83%9D%E3%83%83%E3%83%8841%E9%81%B8%EF%BC%81&amp;linknote=" rel="nofollow noopener">'
            +'</span><span class="a2a_label_line">Line</span></a>'
    +'<div>'
    +'<img src="./okinawa1-image/spot-okinawa-key.jpg" alt="沖縄イメージ図" width="900" class="image">'
    +'</div>' 
    +'<p class="bold_explain">一年中楽しめる沖縄観光</p>'
    +'<p class="intro_explain">日本屈指の観光県でもある沖縄県。海のほかにも、世界遺産の「首里城」「中城城跡」など琉球王国関連の遺跡の数々や本州ではちょっと見られない大自然の絶景、沖縄ならではの水族館や工場見学など、見所満載で楽しみ方もいろいろ。長期休みがとれなくても、スポットやコースをあらかじめ決めておけば1泊2日でも十分に楽しむことができます。また沖縄の日差しは年間を通して強めなので、紫外線対策を忘れずにお出かけください。</p>'       
    +'<div class="border">'
            +'<p class="bold">目次</p>'
        +'<ul class="lists_arrange">'
            +'<li><a href="#index1">南部エリアの観光スポット</a></li>'
            +'<li><a href="#index2">中部エリアの観光スポット</a></li>'
            +'<li><a href="#index3">北部エリアの観光スポット</a></li>'
            +'<li><a href="#index4">宮古島・石垣島の観光情報</a></li>'
            +'<li><a href="#index5">離島の絶景ビーチ</a></li>'
            +'<li><a href="#index6">沖縄の人気ホテル・旅館</a></li>'
            +'<li><a href="#index7">沖縄のレンタカー・観光バスツアー</a></li>'
            +'<li><a href="#index8">沖縄のお土産</a></li>'
        '</ul>'
    +'</div>'
    +'<iframe src="https://www.google.com/maps/d/embed?mid=1LTTgdA3OVNq1RpkLlUd8Q0oq2Y3YWM2v" width="900" height="380" class="image"></iframe>'
for (let number = 0; number < 8; number++){
    Contents = Contents
     +`<h2 id="index${number+1}" class="small_articles">${smallArticles[number]}</h2>`
     //document.getElementById("index"+(number+1));
     //console.log(document.getElementById("index"+(number+1)));   
    };
    
    
       //document.getElementById("index"+(number)).appendChild(li);
    
    /*for(let i=0; i<5; i++){
        const eachSpots = document.createElement('li');
        eachSpots.innerHTML = recommendSpots[0][i];
        console.log(eachSpots)
        //document.getElementById("index"+(number)).appendChild(li);
    };*/
    
    
+'</div>';
    document.currentScript.insertAdjacentHTML('beforebegin', Contents);

for(let i=0; i<3; i++){
        const eachSpots = document.createElement('li');
           eachSpots.innerHTML = recommendSpots[i];
           console.log(eachSpots);    
}


    let hoge =document.getElementById("index1");
    console.log(hoge);
    eachSpot = document.createElement('li');
    eachSpot.className ="each-spot";
    eachSpot.innerHTML = recommendSpots[0][0];
    hoge.appendChild(eachSpot);


function makingElements(i){
    let hogehoge =document.getElementById("index"+(i+1));
    console.log(hogehoge);
};