anychart.onDocumentReady(function () { // DONUT CHART
    var chart = anychart.pie([
        ['Александра', 5.5],
        ['Владимир', 0.5],
        ['Тимур', 1],
        ['Ангелина Сейт', 2],
        ['Денис', 1]
    ]);
    chart
        .title('')
        .innerRadius('50%');
    chart.labels().position('outside');

    chart.container('chart__donut');
    chart.draw();
});



anychart.onDocumentReady(function () { // FUNNEL CHART
    var data = [
        ['Новый лид', 1],
        ['Взяли в работу', 2],
        ['Квалифицирован', 1],
        ['Бриф отправлен', 0],
        ['Бриф согласован', 1]
        ['Договор/счет выставлен', 1]
        ['Предоплата получена', 1]
    ];

    var chart = anychart.funnel(data);

    chart
        .margin(10, '20%', 10, '20%')
        .baseWidth('70%')

    chart.labels().position('outside-left').format('{%X} - {%Value}');


    chart.container('chart__funnel');
    chart.draw();
});

document.getElementById('showMyDeals').onclick = function () { // обработчик на кнопку чтобы показывался сайдбар "Мои дела"
    document.getElementById('my-work').style.display = 'block'
    document.getElementById('showMyDeals').style.backgroundColor = '#273142'
};
document.getElementById('my-work__cross-button').onclick = function () { // обработчк чтобы сайдбар "Мои дела" закрывался нажав на крестик
    let myDeals = document.getElementById('my-work')
    let showMyDealsButton = document.getElementById('showMyDeals')
    myDeals.style.display = 'none'
    showMyDealsButton.style.backgroundColor = '#354052'
};




document.getElementById('button-more-menu').onclick = function () { // обработчик на кнопку чтобы показывался сайдбар "Мои дела"
    let moreMenu = document.getElementById('menu-more') 
    if(moreMenu.style.display == 'none') {
        moreMenu.style.display = 'block'
    } else {
        moreMenu.style.display = 'none'
    }
};