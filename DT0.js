$(document).ready(function () {
  $('#example').dataTable({
      "serverSide": false,
      "responsive": true,
      "paging":   true,
      "ordering": true,
      "info":     true,
      "ajax": "db0.php",
      "paging":true,
      "columnDefs": [ {
           "targets": [ 0 ],
           "orderData": [ 0, 1 ]
       }, {
           "targets": [ 1 ],
           "orderData": [ 1, 0 ]
       }, {
           "targets": [ 4 ],
           "orderData": [ 4, 0 ]
       } ],
      "columns": [
            { "data": "PLATAFORMA" },
            { "data": "CLIENTE" },
            { "data": "ARTICULO",
              "render": function(data, type, row, meta){
                return '<a href=index2.html?ARTICULO='+data+'>'+data+'</a>';

              }
            },
            { "data": "TOT_STOCK" },
            { "data": "TOTAL_LINEAS" }
        ]
        });
});
