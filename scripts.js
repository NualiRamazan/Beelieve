var _formstruct = {
    formId: '5ff1d276497393953b8b4587',
    formTitle: 'Beelieve',
    buttonText: 'Обратная связь',
    buttonTextColor: 'black',
    buttonBgColor: 'FFDB1A',
    position: 'right',
    boxWidth: 450,
    verticalOffset: 90,
    baseUrl: 'https://formstruct.ru/'
};

(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript'; 
    script.async = 'true';
    script.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 
        'formstruct.ru/widget/widget-2.2.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);
})();
