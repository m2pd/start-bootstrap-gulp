$(document).ready(function () {
    $('#example').DataTable({
        language: {
            url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Vietnamese.json"
        }
    });
    
    var navHeight = $(".nav-tabs").height();
    $(".set-button").css({ height: navHeight - 4 });
    $("#hideButton").click(function () {
        $(".nav-tabs li").each(function () {
            if (!$(this).hasClass("active"))
                $(this).toggle("slow");
        });



        if ($(".set-button").height() == $(this).innerHeight()) {
            $(".set-button").animate({
                height: navHeight
            }, "slow");
        }
        else {
            $(".set-button").animate({
                height: $(this).innerHeight()
            }, "slow");
        }

        $(".dataTables_filter").addClass("form-inline");
        $("input[type=search]").addClass("form-control");
        $("input[type=search]").attr("placeholder", "Tìm kiếm từ khóa");
        // if ($(".get-button").length) {
        //     // $("#set-button").removeClass("set-button",2000);
        //     $("#set-button").addClass("get-button");
        //     // $(".set-button").switchClass( "get-button", "set-button", 3000, "easeInOutQuad" );
        // }
        // else {
        //     $("#set-button").remove("set-button",2000);
        //     $("#set-button").addClass("get-button",2000);
        // }

        // $("li :not(.active)").toggle();
    });
});


// $(document).ready(function () {
//     $('#example2').DataTable({
//         "processing": true,
//         "ajax": {
//             "url": "https://api.myjson.com/bins/puz5x",
//             dataSrc: ''
//         },
//         "columns": [
//             { "data": "id" },
//             { "data": "point" },
//             { "data": "title" },
//             { "data": "dateStart" },
//             { "data": "dateEnd" },
//             { "data": "update" },
//         ],
//         // dom: 'Bfrtip',
//         // buttons: [
//         //     'copy', 'csv', 'excel', 'pdf', 'print'
//         // ],
//         language: {
//             "sProcessing": "Đang xử lý...",
//             "sLengthMenu": "Xem _MENU_ mục",
//             "sZeroRecords": "Không tìm thấy dòng nào phù hợp",
//             "sInfo": "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
//             "sInfoEmpty": "Đang xem 0 đến 0 trong tổng số 0 mục",
//             "sInfoFiltered": "(được lọc từ _MAX_ mục)",
//             "sInfoPostFix": "",
//             "sSearch": "Tìm:",
//             "sUrl": "",
//             "oPaginate": {
//                 "sFirst": "Đầu",
//                 "sPrevious": "Trước",
//                 "sNext": "Tiếp",
//                 "sLast": "Cuối"
//             }
//         }

//     });
// });

$(function(){

});