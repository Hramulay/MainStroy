var myMap;
var marker;
ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [54.732460, 55.975274],
        zoom: 17
    },                      
    {
        searchControlProvider: 'yandex#search'
    });
    
    marker = new ymaps.Placemark([54.732460, 55.975274], {
  hintContent: 'Расположение',
  balloonContent: 'Это наша фирма'
  });
  myMap.geoObjects.add(marker);
}