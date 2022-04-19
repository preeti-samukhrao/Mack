// open and close sidenav when clicked on icon
var o =document.getElementById("one");
var to =document.getElementById("two");
to.style.display = 'none';
function openNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("mySidebar").style.padding = "0px";
    document.getElementById("sidebar_cont").style.display = "none";
    document.getElementById("main_content").style.marginLeft = "0px";
	o.style.display = 'none';
    to.style.display = '';
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mySidebar").style.padding = "20px";
    document.getElementById("sidebar_cont").style.display = "block";
    document.getElementById("main_content").style.marginLeft= "250px";
	o.style.display = '';
    to.style.display = 'none';  
}

// onclick of sidebar, show div
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// sidenav filter dropdown
var dropdown = document.getElementsByClassName("filter_dropdown");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } 
        else {
            dropdownContent.style.display = "block";
        }
    });
}

// sidenav precurement dropdown
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        // this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "inline-table") {
            dropdownContent.style.display = "none";
        } 
        else {
            dropdownContent.style.display = "inline-table";
        }
    });
}

// sidebar search section
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search_navmenu");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search_list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } 
        else {
            li[i].style.display = "none";
        }
    }
}

// change one dropdown based on other dropdown
$('#vessels').on('change', function(){
    $('#other_menu').html('');
    if($('#vessels').val()=='all_vessels'){
        $('#other_menu').append('<option value="donegal_spirit">Donegal Spirit</option>');
        $('#other_menu').append('<option value="galeway_spiri">Galeway Spirit</option>');
        $('#other_menu').append('<option value="london_spirit">London Spirit</option>');
        $('#other_menu').append('<option value="barcelona_spirit">Barcelona Spirit</option>');
        $('#other_menu').append('<option value="atlanda_spirit">Atlanda Spirit</option>');
    }
    else if ($('#vessels').val()=='my_vessels'){
        $('#other_menu').append('<option value="galeway_spirit">Galeway Spirit</option>');
        $('#other_menu').append('<option value="london_spirit">London Spirit</option>');
        $('#other_menu').append('<option value="barcelona_spirit">Barcelona Spirit</option>');
    }
    else if ($('#vessels').val()=='backup_vessels'){
        $('#other_menu').append('<option value="atlanda_spirit">Atlanda Spirit</option>');
    }
    else {
        $('#other_menu').append('<option value="galeway_spirit">Galeway Spirit</option>');
    }
});

// change div based on dropdown value
$(document).ready(function(){
    $("#vessels").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".vessel_info").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".vessel_info").hide();
            }
        });
    }).change();
});


// all donut charts
$(document).ready(function() {
    var donutChart = $('.donut-chart-js');
    if(donutChart.length > 0) {
      $.each(donutChart, function(index, item) {
        var donutChartPercentage = $(item).attr('data-percentage');
        var donutChartRadio = $(item).find('.donut-chart').attr("r");
        var donutChartValue = ( (100 - Number(donutChartPercentage)) * (6.28 * Number(donutChartRadio)) )/100;
        $(item).find('.donut-chart-value').html(donutChartPercentage + "%");
        $(item).find('circle.donut-chart').css('stroke-dashoffset', donutChartValue);
      });
    }
});



// bar chart
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['', 'Requisition', 'Analysing', 'RFQ', 'Vendor', 'PO', 'Invoicing', 'Shipment', 'Warehouse', 'Others'],
            ['$24K', 70, 0, 0, 0, 0, 0, 0, 0, 0],
            ['$8K', 70, 70, 0, 0, 0, 0, 0, 0, 0],
            ['$19K', 70, 70, 70, 60, 60, 30, 0, 0, 0],
            ['$28K', 70, 70, 70, 50, 0, 0, 0, 0, 0],
            ['$65K', 70, 45, 45, 45, 15, 15, 70, 85, 0],
            ['$8K', 15, 10, 10, 10, 15, 20, 20, 70, 0],
            ['$19K', 50, 20, 20, 20, 35, 35, 35, 35, 0],
            ['$28K', 30, 15, 15, 15, 15, 25, 25, 25, 0]
        ])
        var options = {
            series: {
                0: { color: '#022a4b' },
                1: { color: '#51aefb' },
                2: { color: '#ff4d6a' },
                3: { color: '#330000' },
                4: { color: '#ffffb3' },
                5: { color: '#ffd280' },
                6: { color: '#008000' },
                7: { color: '#ff965a' },
                8: { color: '#cccccc' }
            },
            legend:{position: 'none'},
            isStacked: true,
            vAxis: {
                gridlines: {
                  count: 0,
                  color: 'transparent'
                }
              },
            bars: 'horizontal' // Required for Material Bar Charts.
        };
        var chart = new google.charts.Bar(document.getElementById('barchart_material'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }


    // accordion
    var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
    	var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');
        
       	if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}
