const add_point_form = document.querySelector('#add_point_form')
console.log(add_point_form)

add_point_form.addEventListener('submit', submitUpdateForm)

function submitUpdateForm(e){
	e.preventDefault() // stop submit
	// https://stackoverflow.com/questions/11338774/serialize-form-data-to-json
	
	new_point_route_id = document.getElementById('new_point_route_id')

	new_point = {
		'route_id': new_point_route_id.options[new_point_route_id.selectedIndex].value,
		'point_identifier': document.getElementById('new_point_identifier').value
	}

	var xhr = new XMLHttpRequest()

	xhr.open('POST', '/points/add')
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
	xhr.send(JSON.stringify(new_point))
	
}