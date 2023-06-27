anychart.onDocumentReady(function () {
    // create pie chart with passed data
    var chart = anychart.pie([
      ['Александра', 5.5],
      ['Владимир', 0.5],
      ['Тимур', 1],
      ['Ангелина Сейт', 2],
      ['Денис', 1]
    ]);

    // set chart title text settings
    chart
      .title('')
      // create empty area in pie chart
      .innerRadius('50%');

    // set chart labels position to outside
    chart.labels().position('outside');

    // set container id for the chart
    chart.container('chart__donut');
    // initiate chart drawing
    chart.draw();
});



anychart.onDocumentReady(function () {
  // prepare data for the chart
  var data = [
    ['Новый лид', 1],
    ['Взяли в работу', 2],
    ['Квалифицирован', 1],
    ['Бриф отправлен', 0],
    ['Бриф согласован', 1]
    ['Договор/счет выставлен', 1]
    ['Предоплата получена', 1]
  ];

  // create funnel chart
  var chart = anychart.funnel(data);

  // set chart margin
  chart
    .margin(10, '20%', 10, '20%')
    // set chart base width settings
    .baseWidth('70%')
    // set the neck height
    // .neckHeight('17%');

  // set chart labels settings
  chart.labels().position('outside-left').format('{%X} - {%Value}');

  // enable animation
  // chart.animation(true);

  // set container id for the chart
  chart.container('chart__funnel');
  // initiate chart drawing
  chart.draw();
});