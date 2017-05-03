$(document).ready(function () {


    $(document).keypress(function (event) {
        //the add function requires an argument, so make sure to provide one.
        var keyCode = (event.which ? event.which : event.keyCode);

        if ((keyCode === 10 || keyCode == 13) && event.shiftKey) {
            highlited = getSelText();
            if (highlited.text.length > 0) {

                $.ajax({
                    url: '/web/site/sender',
                    type: 'POST',
                    dataType: 'html',
                    data: {text: highlited.text},
                    // You need to manually do the equivalent of "load" here
                    success: function (result) {
                        $('#pageModal').find(".modal-body").html(result);
                        $('#pageModal').modal('show');
                        capture(highlited.parent);
                    },
                    error: function (request, status, error) {
                        console.log(error);
                    }
                });
            }
        }

    });


    $('body').on('submit', '#contact-form', function () {

        $.ajax({
            url: '/web/site/sender',
            data: $('#contact-form').serialize(),
            type: 'POST',
            dataType: 'JSON',
            success: function (data) {
                $('#pageModal').modal('hide');
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        });
        return false;
    });
});


function getSelText() {
    var txt = '';
    if (window.getSelection) {
        sel = window.getSelection();
        txt = sel.toString();
        if (sel.rangeCount) {
            parentEl = sel.getRangeAt(0).commonAncestorContainer;
            if (parentEl.nodeType != 1) {
                parentEl = parentEl.parentNode;
            }
        }
    } else if (document.selection && document.selection.type != "Control") {
        txt = document.selection.createRange().text;
        parentEl = document.selection.createRange().parentElement();
    }

    return {'parent': parentEl, 'text': txt};
}
function capture(block) {
    form_sender = $('#contact-form');
    html2canvas($(block), {
        onrendered: function (canvas) {
            $('<input>').attr({
                type: 'hidden',
                id: 'form_image_id',
                name: 'ContactForm[form_image]',
                value: canvas.toDataURL("image/png")
            }).appendTo(form_sender);
        }
    });
}