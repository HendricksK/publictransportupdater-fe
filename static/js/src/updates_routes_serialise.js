const update_form = document.querySelector('#update_routes_form')
update_form.addEventListener('submit', submitUpdateForm)

function submitUpdateForm(e){

	e.preventDefault() // stop submit
	// https://stackoverflow.com/questions/11338774/serialize-form-data-to-json
	let transport_options = document.getElementById('transport_type')
	let route_select = document.getElementById('route_id')

	update = {
		'route_id':route_select.options[route_select.selectedIndex].value,
		'transport_id':transport_options.options[transport_options.selectedIndex].value,
		'city_id':route_select.options[route_select.selectedIndex].dataset.city_id,
		'country_id':route_select.options[route_select.selectedIndex].dataset.country_id,
		'area_id':route_select.options[route_select.selectedIndex].dataset.area_id,
		'note':document.getElementById('note').value,
		'transport_type':transport_options.options[transport_options.selectedIndex].dataset.transport_type
	}

	var xhr = new XMLHttpRequest()

	// disabled

	// Normal flow
	xhr.open('POST', '/updates/update/route')
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.onload = function() {
	    if (xhr.status != 200 ) {
	    	// Need to display an error.
	    	response = JSON.stringify(xhr.responseText)
	    	window.location = response.return_url
	    } else {
	    	response = JSON.parse(xhr.responseText)
	    	window.location = response.return_url
	    }
	}
	xhr.send(JSON.stringify(update))
	
}