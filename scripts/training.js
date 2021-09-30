$(document).ready(function () {
    $("#training-list").DataTable({
        scrollCollapse: true,
        info: false,
        columnDefs: [{
            orderable: false,
            targets: -1
        }],
        sorting: false,
        oLanguage: {
            sSearch: `_INPUT_ <i class="bi bi-search"></i>`,
            sSearchPlaceholder: "Search...",
        },
        "initComplete": function (settings, json) {
            $('body').find('.dataTables_scrollBody').addClass("scrollbar");
        },
        "paging": false,
    });
})

tinymce.init({
    selector: '#longDescription',
    plugins: 'image code lists',
    menubar: false,
    statusbar: false,
    toolbar: 'undo redo | bold italic alignleft aligncenter alignright alignjustify| bullist numlist outdent indent| code',

    /* without images_upload_url set, Upload tab won't show up*/
    images_upload_url: 'postAcceptor.php',

    /* we override default upload handler to simulate successful upload*/
    images_upload_handler: function (blobInfo, success, failure) {
        setTimeout(function () {
            /* no matter what you upload, we will turn it into TinyMCE logo :)*/
            success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
        }, 2000);
    },
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});

