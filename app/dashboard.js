/**
 * Created by manuel on 5/8/18.
 */

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart', 'bar', 'table']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawKeywordTotalChart);

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


