$('[lang]').hide(); // hide all lang attributes on start.
$('[lang="ko"]').show(); // show just Korean text (you can change it)
$('#lang-switch').change(function () { // put onchange event when user select option from select
    var lang = $(this).val(); // decide which language to display using switch case. The rest is obvious (i think)
    switch (lang) {
        case 'en':
            $('[lang]').hide();
            $('[lang="en"]').show();
        break;
        case 'ko':
            $('[lang]').hide();
            $('[lang="ko"]').show();
        break;
        default:
            $('[lang]').hide();
            $('[lang="ko"]').show();
        }
});