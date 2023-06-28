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
    if (moreMenu.style.display == 'none') {
        moreMenu.style.display = 'block'
    } else {
        moreMenu.style.display = 'none'
    }
};




document.getElementById('button-question').onclick = function () {  // HELP-USER
    let helpUserPopUp = document.getElementById('help-user')
    helpUserPopUp.style.display = 'block'
};
document.getElementById('button-close-help-user').onclick = function () {  // HELP-USER
    let helpUserPopUp = document.getElementById('help-user')
    helpUserPopUp.style.display = 'none'
};






document.getElementById('widget-dots-button').onclick = function () { // обработчик на кнопку чтобы показывался сайдбар "Мои дела"
    let widgetSettings = document.getElementById('widget-settings')
    if (widgetSettings.style.display == 'none') {
        widgetSettings.style.display = 'block'
    } else {
        widgetSettings.style.display = 'none'
    }
};




document.getElementById('delete-widget-button').onclick = function () {  // HELP-USER
    let popUpDeleteWidget = document.getElementById('delete-pop-up')
    popUpDeleteWidget.style.display = 'block'
};
document.getElementById('cancel-delete-button').onclick = function () {  // HELP-USER
    let popUpDeleteWidget = document.getElementById('delete-pop-up')
    popUpDeleteWidget.style.display = 'none'
};



document.getElementById('add-task-button').onclick = function () { // ADD-TASK
    let addTaskMenu = document.getElementById('add-task')
    if (addTaskMenu.style.display == 'none') {
        addTaskMenu.style.display = 'block'
    } else {
        addTaskMenu.style.display = 'none'
    }
};



document.getElementById('dots-button').onclick = function () { // ADD-TASK
    let dotsMenu = document.getElementById('dots-settings')
    if (dotsMenu.style.display == 'none') {
        dotsMenu.style.display = 'block'
    } else {
        dotsMenu.style.display = 'none'
    }
};

document.getElementById('interval-button').onclick = function () { // ADD-TASK
    let intervalMenu = document.getElementById('interval-menu')
    if (intervalMenu.style.display == 'none') {
        intervalMenu.style.display = 'block'
    } else {
        intervalMenu.style.display = 'none'
    }
};
