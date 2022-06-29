const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "170043f322mshfc386e972c7b74fp11c8b2jsnf26f0c9768b2",
		"X-RapidAPI-Host": "genius.p.rapidapi.com",
	},
};

export default async function request(playlist) {
	let result = [];

	await fetch(`https://genius.p.rapidapi.com/artists/${playlist}/songs`, options)
		.then(response => response.json())
		.then(data => (result = data.response.songs))
		.catch(err => console.error(err));

	return result;
}
