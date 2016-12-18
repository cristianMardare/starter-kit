import {echo} from './api'

echo({
	key1: "value1",
	key2: "value2"
}).then(result => {
	console.log(result);
});
