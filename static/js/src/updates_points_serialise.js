const update_form = document.querySelector('#update_routes_form')
update_form.addEventListener('submit', submitUpdateForm)

function submitUpdateForm(e){

	document.getElementById('load-spinner').classList.remove('d-none')

	e.preventDefault() // stop submit
	// https://stackoverflow.com/questions/11338774/serialize-form-data-to-json
	let transport_options = document.getElementById('transport_type')
	let point_select = document.getElementById('point_id')

	update = {
		'route_id':point_select.options[point_select.selectedIndex].dataset.route_id,
		'transport_id':transport_options.options[transport_options.selectedIndex].value,
		'city_id':point_select.options[point_select.selectedIndex].dataset.city_id,
		'country_id':point_select.options[point_select.selectedIndex].dataset.country_id,
		'area_id':point_select.options[point_select.selectedIndex].dataset.area_id,
		'note':document.getElementById('note').value,
		'transport_type':transport_options.options[transport_options.selectedIndex].dataset.transport_type,
		'point_id': point_select.options[point_select.selectedIndex].value
	}

	var xhr = new XMLHttpRequest()

	// Normal flow
	xhr.open('POST', '/updates/point')
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.onload = function() {
	    if (xhr.status != 200 ) {
	    	// Need to display an error.
	    	response = JSON.stringify(xhr.responseText)
	    	console.log(response)
	    	window.location = response.return_url
	    } else {
	    	response = JSON.parse(xhr.responseText)
	    	console.log(response)
	    	window.location = response.return_url
	    }
	}
	xhr.send(JSON.stringify(update))
	
}