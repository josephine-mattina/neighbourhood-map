//Fetches the list of venues from Foursquare API
export const getAll = (radius) =>

	fetch('https://api.foursquare.com/v2/venues/search?client_id=ST4WAHMLHGUWIKTA2YRGR1CUDNCDORALSP034APN4LPFJPC2&client_secret=FQOQCD1AKQKNZAY3V2E14Q2C2KUKBFIT3OFZVN4KE3O3CPET&v=20180323&ll=55.859292, -4.258055&intent=checkin&radius=' + radius + '&categoryId=4bf58dd8d48988d1d3941735')
	.then(response => response.json())
	.then(data => data.response.venues)
    .catch((error) => {
		window.alert('Sorry, Foursquare data cannot load right now! ' + error)
	});
