/**
 * Created by manuel on 5/8/18.
 */

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart', 'bar', 'table']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawKeywordTotalChart);
google.charts.setOnLoadCallback(totalKeywordCountByTweet);
google.charts.setOnLoadCallback(totalTweetsPerUserCount);
google.charts.setOnLoadCallback(totalRepliesPerTweetCount);
google.charts.setOnLoadCallback(totalusernamesByFirstCharCount);

function drawKeywordTotalChart() {
    var allText = "diarrhea	19637\nebola	7090\nflu	61559\nheadache	415\nmeasles	6095\ntrump	1101\nzika	2393";

    console.log(allText);

    var allTextLines = allText.split("\n");
    console.log(allTextLines);
    var arrayData = [];
    for (var j=0; j<allTextLines.length; j++) {
            var row = allTextLines[j].split("\t");
            arrayData.push([row[0], parseInt(row[1], 10)]);
    }

    console.log(arrayData);

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Keyword');
    data.addColumn('number', 'Total Word Count');
    data.addRows(arrayData);

    var options = {
        title: 'Total Keywords In All Tweets',
        chartArea: {width: '800px'},
        hAxis: {
            title: 'Word Count',
            minValue: 0
        },
        vAxis: {
            title: 'Keyword'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('totalKeywordCount'));

    chart.draw(data, options);
}

function totalKeywordCountByTweet() {
    var allText = "1	68491\n2	11140\n3	1876\n4	336\n5	74\n6	11\n12	2\n8	4\n9	2\n7	3\n16	1"
    console.log(allText);

    var allTextLines = allText.split("\n");
    console.log(allTextLines);
    var arrayData = [];
    for (var j=0; j<allTextLines.length; j++) {
            var row = allTextLines[j].split("\t");
            arrayData.push([row[0] + " Keywords", parseInt(row[1], 10)]);
    }

    console.log(arrayData);

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Total Keyword In Tweet');
    data.addColumn('number', 'Total Keyword Tweet Count');
    data.addRows(arrayData);


    var options = {
      title: 'Tweets Count By Total Keyword Count In Tweets'
    };

    var chart = new google.visualization.PieChart(document.getElementById('totalKeywordCountByTweet'));

    chart.draw(data, options);
}

function totalTweetsPerUserCount() {

    var allText = "1	53488\n7	181\n3	1858\n2	6715\n4	870\n9	83\n32	2\n84	2\n6	290\n10	59\n8	147\n12	46\n30	5\n14	38\n44	3\n5	452\n11	51\n13	30\n19	11\n21	11\n16	24\n18	14\n24	9\n28	5\n25	10\n15	18\n17	22\n36	9\n20	14\n37	3\n27	9\n60	1\n38	4\n41	1\n31	4\n279	1\n22	11\n52	2\n54	2\n55	1\n26	8\n29	5\n76	1\n75	1\n621	1\n124	1\n62	2\n39	3\n83	1\n6666	1\n45	2\n23	7\n42	1\n66	1\n35	2\n178	1\n70	1\n33	1\n68	1\n34	4\n43	2\n74	1\n73	1\n102	1\n57	1\n112	1\n65	1\n590	1\n48	1\n159	1\n50	1\n114	1\n71	1\n63	1\n93	1\n51	1"

    console.log(allText);

    var allTextLines = allText.split("\n");
    console.log(allTextLines);
    var arrayData = [];
    for (var j=0; j<allTextLines.length; j++) {
            var row = allTextLines[j].split("\t");
            arrayData.push([row[0] + " Tweets", parseInt(row[1], 10)]);
    }

    console.log(arrayData);

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Tweet Count');
    data.addColumn('number', 'Tweet Count Total Users');
    data.addRows(arrayData);


    var options = {
      title: 'User Count By Total Tweets Posted'
    };

    var chart = new google.visualization.PieChart(document.getElementById('totalTweetsPerUser'));

    chart.draw(data, options);
}

function totalRepliesPerTweetCount() {

    var allText = "0\t72064\n1	25842\n4	65\n2	1003\n19	1\n3	194\n5	36\n9	9\n8	16\n7	9\n6	15\n37	2\n11	1\n14	1\n15	3\n21	1\n10	6\n13	2\n22	1\n16	3\n24	1\n17	1\n34	1"

    console.log(allText);

    var allTextLines = allText.split("\n");
    console.log(allTextLines);
    var arrayData = [];
    for (var j=0; j<allTextLines.length; j++) {
            var row = allTextLines[j].split("\t");
            arrayData.push([row[0] + " Replies", parseInt(row[1], 10)]);
    }

    console.log(arrayData);

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Reply Count');
    data.addColumn('number', 'Reply Count Total Tweets');
    data.addRows(arrayData);


    var options = {
      title: 'Reply Count By Total Tweets Posted'
    };

    var chart = new google.visualization.PieChart(document.getElementById('totalRepliesPerTweet'));

    chart.draw(data, options);
}

function totalusernamesByFirstCharCount() {

    var allText = "T	3220\nW	1121\nsymbol	2843\nnumber	298\nA	4075\nB	2813\nC	3760\nD	3381\nE	1693\nF	1173\nG	1628\nH	1542\nI	1054\nJ	3712\nK	2421\nL	2576\nM	4625\nN	1918\nO	674\nP	2164\nQ	130\nR	2544\nS	4676\nU	505\nV	790\nX	55\nY	305\nZ	296\na	577\nb	445\nc	511\nd	349\ne	267\nf	194\ng	202\nh	216\ni	220\nj	478\nk	404\nl	377\nm	614\nn	244\no	88\np	299\nq	13\nr	283\ns	755\nt	419\nu	59\nv	111\nw	164\nx	38\ny	86\nz	67\nÁ	5\nÄ	3\nÅ	1\nÉ	1\nË	1\nÏ	1\nÓ	2\nÖ	1\nØ	2\nÜ	1\nß	2\ná	1\næ	1\nè	1\në	1\nó	1\nü	1\nþ	1\nĀ	1\nĄ	1\nĈ	1\nċ	1\nČ	2\nĐ	1\nđ	1\nħ	1\nİ	1\nı	3\nĸ	1\nŁ	2\nş	1\nŦ	1\nū	1\nƊ	1\nƑ	2\nƓ	1\nƙ	1\nƤ	1\nƸ	1\nǝ	1\nǟ	1\nɃ	1\nɌ	1\nɐ	1\nɑ	1\nɕ	1\nɖ	1\nɢ	2\nɥ	1\nɦ	1\nɮ	1\nɱ	2\nɴ	5\nɾ	1\nʀ	1\nʂ	1\nʆ	1\nʇ	1\nʊ	1\nʍ	1\nʎ	2\nʕ	2\nʙ	1\nʜ	2\nʝ	3\nʟ	5\nʦ	1\nʲ	1\nʷ	1\nʸ	1\nˢ	1\nΔ	4\nΕ	1\nΛ	4\nΜ	3\nΞ	2\nΟ	1\nΠ	1\nΧ	1\nΩ	1\nα	13\nβ	2\nδ	1\nε	2\nη	1\nι	1\nκ	1\nλ	1\nρ	1\nς	3\nσ	1\nυ	1\nω	2\nϟ	1\nϯ	1\nА	6\nБ	1\nВ	3\nГ	2\nД	7\nЕ	4\nЗ	2\nИ	4\nК	1\nЛ	5\nМ	7\nН	8\nО	1\nП	1\nР	3\nС	3\nТ	4\nЮ	3\nЯ	3\nв	2\nг	1\nд	1\nи	1\nк	1\nм	1\nн	1\nп	1\nт	2\nф	1\nэ	1\nѕ	6\nҍ	1\nғ	2\nҜ	1\nҡ	2\nԱ	1\nՇ	1\nא	2\nג	1\nכ	1\nמ	1\nנ	1\nש	1\nء	1\nآ	2\nأ	10\nإ	5\nا	45\nب	6\nت	1\nج	2\nح	3\nخ	3\nد	7\nر	5\nز	3\nس	14\nش	5\nص	3\nض	2\nط	4\nع	22\nغ	1\nف	6\nق	1\nك	3\nل	1\nم	26\nن	12\nه	4\nو	5\nي	3\nअ	1\nइ	1\nई	1\nच	1\nप	3\nभ	1\nम	1\nव	2\nश	3\nस	3\nॐ	7\nख़	1\nপ	1\nਇ	1\nઆ	1\nપ	1\nૐ	1\nଓ	1\nପ	1\nସ	1\nஅ	1\nக	1\nక	1\nಇ	1\nಡ	1\nറ	1\nบ	1\nป	1\nภ	1\nร	2\nห	1\nแ	1\nไ	1\nღ	3\nც	1\nᄅ	1\nኤ	1\nዮ	1\nᎦ	1\nᎫ	1\nᎬ	1\nᎯ	1\nᎶ	2\nᎷ	1\nᏋ	1\nᏒ	1\nᏚ	1\nᏞ	1\nᏟ	1\nᏨ	1\nᏴ	1\nᑭ	2\nᒍ	1\nᒪ	1\nᕕ	1\nᕼ	2\nᗡ	1\nᗩ	1\nᗪ	1\nᗷ	1\nᙏ	1\nᛋ	1\nᜆ	1\nᴀ	6\nᴄ	2\nᴅ	6\nᴇ	1\nᴊ	6\nᴋ	1\nᴍ	6\nᴘ	2\nᴚ	1\nᴛ	3\nᴠ	1\nᴡ	1\nᴿ	1\nᵈ	2\nᵍ	1\nᵔ	1\nᶜ	1\nḓ	1\nḼ	1\nỌ	1\nℂ	1\nℊ	1\nℑ	3\nℒ	2\nℓ	1\nℕ	1\nℜ	1\nℤ	1\nℬ	2\nℭ	4\nℰ	1\nℳ	5\nℹ	3\nⅆ	1\nⱩ	1\nあ	2\nい	2\nえ	1\nか	2\nが	1\nく	1\nさ	1\nと	1\nは	1\nふ	1\nみ	1\nも	1\nゆ	1\nよ	3\nゔ	1\nァ	1\nア	3\nイ	1\nエ	1\nオ	1\nカ	1\nキ	2\nク	1\nケ	1\nサ	1\nシ	1\nジ	4\nス	1\nタ	1\nダ	2\nッ	1\nツ	2\nデ	1\nト	1\nド	3\bナ	1\nニ	1\nハ	1\nパ	2\nフ	1\nベ	2\nマ	4\nミ	1\nメ	2\nモ	2\nラ	1\nリ	3\nル	2\nレ	2\nㅂ	1\nㅊ	1\nㅡ	1\nㅤ	9\n上	1\n乇	2\n保	1\n凛	1\n名	1\n唐	1\n善	1\n天	1\n女	1\n娜	1\n寿	1\n小	2\n岩	1\n庄	1\n慧	1\n我	1\n承	2\n折	1\n抱	1\n招	1\n文	1\n明	1\n最	1\n权	1\n林	1\n株	1\n桜	1\n沖	1\n沛	1\n法	1\n渦	1\n溺	1\n無	1\n爪	2\n玉	1\n王	1\n真	1\n眠	1\n空	1\n自	1\n荼	1\n藤	1\n许	1\n雨	1\n雪	1\n靜	1\n音	1\n香	1\n骗	1\n鬼	1\n黃	1\n黑	1\nꋧ	1\nꙮ	2\n강	1\n거	1\n고	1\n광	1\n김	2\n나	3\n니	2\n단	2\n데	1\n래	1\n매	1\n모	1\n문	1\n미	1\n민	1\n박	1\n방	1\n배	1\n보	1\n비	1\n빛	1\n석	1\n선	1\n세	1\n슈	1\n슨	1\n시	1\n아	3\n안	1\n알	1\n어	1\n언	2\n엘	2\n영	1\n예	1\n유	1\n이	3\n자	1\n정	4\n제	2\n준	1\n지	1\n질	1\n카	1\n크	1\n킨	1\n토	1\n툥	1\n하	2\n한	1\n현	1\n히	1\nＡ	1\nＣ	3\nＥ	2\nＧ	1\nＬ	2Ｍ	2\nＰ	1\nＲ	2\nＳ	1\nＴ	3\nｋ	1\nｍ	2\nｐ	1\nｓ	1\nｔ	1\n𓅓	1\n𓋹	1\n𖤐	3\n𝐀	2\n𝐁	2\n𝐂	3\n𝐅	1\n𝐇	2\n𝐉	1\n𝐌	1\n𝐍	1\n𝐏	1\n𝐒	2\n𝐛	1\n𝐜	2\n𝐞	1\n𝐥	1\n𝐦	1\n𝐨	1\n𝐪	1\n𝐹	1\n𝐻	1\n𝐼	1\n𝑀	1\n𝑒	1\n𝑪	1\n𝑱	2\n𝑳	2\n𝒉	1\n𝒌	1\n𝒍	1\n𝒏	1\n𝒑	1\n𝒔	1\n𝒜	2\n𝒞	3\n𝒢	1\n𝒥	4\n𝒦	2\n𝒫	1\n𝒬	1\n𝒮	4\n𝒯	1\n𝒲	2\n𝒶	2\n𝒸	4\n𝒹	1\n𝒻	3\n𝒿	2\n𝓁	4\n𝓂	1\n𝓃	1\n𝓅	1\n𝓇	1\n𝓈	1\n𝓐	2\n𝓑	3\n𝓒	2\n𝓔	2\n𝓕	2\n𝓙	2\n𝓚	3\n𝓛	2\n𝓝	1\n𝓢	3\n𝓣	1\n𝓨	1\n𝓪	1\n𝓬	1\n𝓳	2\n𝓶	1\n𝔅	2\n𝔐	2\n𝔒	1\n𝔞	2\n𝔟	2\n𝔢	1\n𝔥	1\n𝔧	1\n𝔩	2\n𝔰	2\n𝔱	1\n𝔷	1\n𝔸	2\n𝔹	1\n𝔻	1\n𝔼	1\n𝕀	2\n𝕁	3\n𝕃	1\n𝕄	4\n𝕊	3\n𝕋	5\n𝕍	1\n𝕎	1\n𝕏	1\n𝕒	2\n𝕔	1\n𝕕	1\n𝕗	1\n𝕛	1\n𝕝	1\n𝕞	1\n𝕤	1\n𝕥	4\n𝕬	1\n𝕭	1\n𝕮	2\n𝕰	1\n𝕳	1\n𝕴	1\n𝕵	2\n𝕻	1\n𝕽	2\n𝕾	2\n𝖆	4\n𝖇	2\n𝖉	1\n𝖊	2\n𝖋	1\n𝖍	2\n𝖏	1\n𝖑	4\n𝖗	1\n𝖛	1\n𝖳	1\n𝗴	1\n𝘋	1\n𝘓	1\n𝘙	1\n𝘬	1\n𝘮	1\n𝘯	1\n𝘳	1\n𝘴	1\n𝘵	1\n𝘼	1\n𝘽	1\n𝙄	1\n𝙈	1\n𝙊	1\n𝙍	1\n𝙎	1\n𝙚	1\n𝙢	1\n𝙣	1\n𝙦	1\n𝙵	2\n𝙷	1\n𝙹	1\n𝙼	2\n𝚂	1\n𝚉	1\n𝚊	2\n𝚎	1\n𝚑	1\n𝚓	1\n𝚔	2\n𝚜	1\n𝚝	2"

    console.log(allText);

    var allTextLines = allText.split("\n");
    console.log(allTextLines);
    var arrayData = [];
    for (var j=0; j<allTextLines.length; j++) {
            var row = allTextLines[j].split("\t");
            arrayData.push([row[0], parseInt(row[1], 10)]);
    }

    console.log(arrayData);

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Character');
    data.addColumn('number', 'Total usernames');
    data.addRows(arrayData);

    var options = {
        title: 'Unique Username Count by First Character',
        chartArea: {width: '800px'},
        hAxis: {
            title: 'Word Count',
            minValue: 0
        },
        vAxis: {
            title: 'Keyword'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('totalusernamesByFirstChar'));

    chart.draw(data, options);
}