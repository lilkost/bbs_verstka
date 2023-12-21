const api_key = 'd5539ab7-8e91-4a20-877a-97a81d73a383';
const map = document.querySelector('#yandex-map')
let center = [54.930217, 37.394018];

function init() {
	let map = new ymaps.Map('yandex-map', {
		center: center,
		zoom: 17
	});

	let placemark = new ymaps.Placemark(center, {
		balloonContentHeader: 'Хедер балуна',
		balloonContentBody: 'Боди балуна',
		balloonContentFooter: 'Подвал',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'images/icon/yandexmap.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

	let placemark1 = new ymaps.Placemark(center, {
		balloonContent: `

		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: '../images/icon/yandexmap.svg',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	// map.geoObjects.add(placemark);
	map.geoObjects.add(placemark1);

	// placemark1.balloon.open();
}

ymaps.ready(init);
