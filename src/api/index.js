import 'whatwg-fetch' // fetch polyfill

export function echo(target){
	let url = 'echo';
	for (var property in target){
		if (target.hasOwnProperty(property))
			url += `/${property}/${target[property]}`;
	}

	return get(url);
}

function get(url){
	return fetch(url).then(onSuccess, onError);
}

function onSuccess(response){
	return response.json();
}

function onError(err){
	console.log(err);		// eslint-disable-line no-console
}
