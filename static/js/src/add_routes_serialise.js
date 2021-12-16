const add_routes_form = document.querySelector('#add_routes_form')
console.log(add_routes_form)

add_routes_form.addEventListener('submit', submitUpdateForm)

function submitUpdateForm(e){
	e.preventDefault() // stop submit
	// https://stackoverflow.com/questions/11338774/serialize-form-data-to-json
	
	area_select = document.getElementById('new_route_area')

	new_route = {
		'route_identifier': document.getElementById('new_route_route_identifier').value,
		'city_id':area_select.options[area_select.selectedIndex].dataset.city_id,
		'country_id':area_select.options[area_select.selectedIndex].dataset.country_id,
		'area_id':area_select.options[area_select.selectedIndex].value
	}

	var xhr = new XMLHttpRequest()

	xhr.open('POST', '/routes/add')
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
	xhr.send(JSON.stringify(new_route))
	
}