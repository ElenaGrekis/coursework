$(function() {

		var placeholder = $("#placeholder");


		var data = $('li').map(function() {
		var $item = $(this);
 
			return { 
			    data: $item.attr('value'), 
			    label: $item.text()
			  };
}).get();

		$.plot(placeholder, data, {
			series: {
				pie: { 
					show: true,
					radius: 1,
					label: {
						show: true,
						radius: 3/4,
						formatter: labelFormatter,
						background: {
							opacity: 0.5
							}
						}
					}
				},
				legend: {
					show: false
				}
			});

});

	function labelFormatter(label, series) {
		return "<div style='font-size:12pt; text-align:center; padding:2px; color:black;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
	}

