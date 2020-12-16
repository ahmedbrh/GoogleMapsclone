



mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtZWRicmgiLCJhIjoiY2toZDQ0Z3J2MDNwODJ1cXlncGJpZGdqZSJ9.M0PkDdDRwljWhhs4yiCNhg';
navigator.geolocation.getCurrentPosition( success,error , {enableHighAccuracy : true}) 

function success (position){
    setmap([position.coords.longitude  , position.coords.latitude]) ; 
console.log(position) ;
}
 

function error() { 
setmap([-6.83255 ,34.01325]) ;
}
function setmap(center) 
{ const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11' , 
center : center ,  
zoom : 13
});
// for direction 

const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken 
 
  });
  map.addControl(directions, 'top-left');



  // const marker = new mapboxgl.Marker()
  // .setLngLat(center)
  // .addTo(map);

  // Add geolocate control to the map.
  //localistation !
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true
})
);	



}


