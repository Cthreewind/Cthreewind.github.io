// <ellipse cx="250" cy="250" rx="100" ry="120"
var GetRandomn = 1;
var svgcrl = d3.select('svg');
var svgcrl = d3.select('svg');
var e1 = svgcrl.append('ellipse');
var p1 = svgcrl.append('polygon');
var l1 = svgcrl.append('line');
var p2 = svgcrl.append('polyline');
var p3 = svgcrl.append('polyline');
var p4 = svgcrl.append('polyline');
var c1 = svgcrl.append('circle');
svgcrl.attr('height', 2000).attr('width', 2000);

function showBalloon() {

    // 取得 input 的值
    var x = $('#rx').val();
    var y = $('#ry').val();
    var y1 = y * 1 + 122;
    var x2 = x * 1 + 20;
    var y2 = y * 1 + 140;
    var x3 = x * 1 - 20;
    svgcrl.attr('height', 2000).attr('width', 2000);
    e1.attr('cx', x).attr('cy', y).attr('rx', 100).attr('ry', 120).attr('fill', '#EBEB7A').attr('stroke', '#858514').attr('stroke-width', 2); //100,120
    p1.attr('points', x + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y2).attr('fill', '#858514').attr('stroke', '#EBEB7A').attr('stroke-width', 1);
    l1.attr('x1', x).attr('y1', y * 1 + 140).attr('x2', x).attr('y2', y * 1 + 250).attr('stroke', '#858514').attr('stroke-width', 2);


}



function randx(x) {
    x = Math.floor(Math.random() * 300 + 200);
    document.getElementById('rx').value = x;

}




function randy(y) {
    y = Math.floor(Math.random() * 300 + 150);
    document.getElementById('ry').value = y;

}

function auto() {

    var y = 1;
    var x = 1;
    x = Math.floor(Math.random() * 300 + 200);
    y = Math.floor(Math.random() * 300 + 500);

    document.getElementById('ry').value = y;

    setInterval(function() {
        y = y - 50;
        var y1 = y * 1 + 122;
        var x2 = x * 1 + 20;
        var y2 = y * 1 + 140;
        var x3 = x * 1 - 20;
        svgcrl.attr('height', 2000).attr('width', 2000);
        e1.attr('cx', x).attr('cy', y).attr('rx', 100).attr('ry', 120).attr('fill', '#EBEB7A').attr('stroke', '#858514').attr('stroke-width', 2); //100,120
        p1.attr('points', x + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y2).attr('fill', '#858514').attr('stroke', '#EBEB7A').attr('stroke-width', 1);
        l1.attr('x1', x).attr('y1', y * 1 + 140).attr('x2', x).attr('y2', y * 1 + 250).attr('stroke', '#858514').attr('stroke-width', 2);
    }, 500);


}




// function autoM() {
//     var y = 1;
//     var x = 1;
//     x = Math.floor(Math.random() * 10);
//     y = Math.floor(Math.random() * 300 + 150);

//     document.getElementById('rx').value = x;
//     setInterval(function() {
//         x = x + 50;
//         p2.attr('points', (x + 700) + ',' + 330 + ' ' + (x + 650) + ',' + 500 + ' ' + (x + 695) + ',' + 500 + ' ' + (x + 700) + ',' + 490 + ' ' + (x + 705) + ',' + 500 + ' ' + (x + 750) + ',' + 500 + ' ' + (x + 700) + ',' + 330).attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', 3);
//         p3.attr('points', (x + 700) + ',' + 490 + ' ' + (x + 700) + ',' + 425 + ' ' + (x + 755) + ',' + 370 + ' ' + (x + 755) + ',' + 500 + ' ' + (x + 705) + ',' + 500).attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', 3);
//         p4.attr('points', (x + 700) + ',' + 425 + ' ' + (x + 645) + ',' + 370 + ' ' + (x + 645) + ',' + 500 + ' ' + (x + 650) + ',' + 500).attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', 3);
//         c1.attr('cx', x + 700).attr('cy', 323).attr('r', 7).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'none');
//     }, 1000);





$('#test').bind('click', showBalloon);
$('#testx').bind('click', randx);
$('#testy').bind('click', randy);
$('#testauto').bind('click', auto);
// $('#testautoM').bind('click', autoM);









// var svgcrl = d3.select('svg');
// var e1 = svgcrl.append('ellipse');
// e1.attr('cx', 250).attr('cy', 250).attr('rx', 120).attr('ry', 100).attr('fill', '#EBEB7A').attr('stroke', '#858514').attr('stroke-width', 2); //100,120


// e1.attr('cy', 250);
// e1.attr('rx', 100);
// e1.attr('ry', 120);
// e1.attr('fill', '#EBEB7A');
// e1.attr('stroke', '#858514');
// e1.attr('stroke-width', 2);

// <
// polygon points = "250,372 270,390 230,390"
// style = "fill:#858514;stroke:#EBEB7A;stroke-width:1" / >

//var p1 = svgcrl.append('polygon');
//p1.attr('points', '250,372 270,390 230,390').attr('fill', '#858514').attr('stroke', '#EBEB7A').attr('stroke-width', 1);

// <
// line x1 = "250"
// y1 = "390"
// x2 = "250"
// y2 = "500"
// style = "stroke:#858514;stroke-width:2" / >
//     var l1 = svgcrl.append('line');
//l1.attr('x1', 250).attr('y1', 390).attr('x2', 250).attr('y2', 500).attr('stroke', '#858514').attr('stroke-width', 2);

// <
// polyline points = "700,330 650,500 695,500 700,490 705,500 750,500 700,330"
// style = "fill:none;stroke:black;stroke-width:3" / >

//     p2.attr('points', '700,330 650,500 695,500 700,490 705,500 750,500 700,330').attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', 3);


// p3.attr('points', '700,490 700,425  755,370 755,500 705,500').attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', 3);


// p4.attr('points', '700,425  645,370 645,500 650,500').attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', 3);

// c1.attr('cx', '700').attr('cy', '323').attr('r', 7).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'none');


// var p2 = svgcrl.append('polyline');
// var p3 = svgcrl.append('polyline');
// var p4 = svgcrl.append('polyline');
// var c1 = svgcrl.append('circle');