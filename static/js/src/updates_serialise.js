const update_form = document.querySelector('#update_form')
update_form.addEventListener('submit', submitUpdateForm)

function submitUpdateForm(e){
	e.preventDefault() // stop submit
	// https://stackoverflow.com/questions/11338774/serialize-form-data-to-json
	let transport_options = document.getElementById('transport_type')

	update = {
		'route_id':document.getElementById('route_id').getAttribute('value'),
		'point_id':document.getElementById('point_id').getAttribute('value'),
		'transport_id':document.getElementById('transport_id').getAttribute('value'),
		'city_id':document.getElementById('city_id').getAttribute('value'),
		'country_id':document.getElementById('country_id').getAttribute('value'),
		'area_id':document.getElementById('area_id').getAttribute('value'),
		'note':document.getElementById('note').value,
		'transport_type':transport_options.options[transport_options.selectedIndex].value
	}

	var xhr = new XMLHttpRequest()

	xhr.open('POST', '/updates/update')
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.onload = function() {
	    if (xhr.status != 200 ) {
	    	// Need to display an error.
	    	response = JSON.stringify(xhr.responseText)

	    } else {
	    	response = JSON.parse(xhr.responseText)
	    	window.location = response.return_url
	    }
	}
	xhr.send(JSON.stringify(update))
}