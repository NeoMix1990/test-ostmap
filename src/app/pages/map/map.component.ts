import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import L from 'leaflet';
import { from, map, concatMap, delay, catchError, of } from 'rxjs';
import { CheckboxComponent, Task } from '../../shared/components/checkbox/checkbox.component';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, MatSliderModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
  arr: any = [
    {
      "_id": {
        "$oid": "64bb00af334556a2a4c5fe37"
      },
      "unique": "ht9v",
      "initUrl": "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/wien/wien-1230-liesing/winteraktion-1-monat-mietfrei-hoflagige-3-zimmerwohnung-mit-balkon-2022844715/",
      "link": "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/wien/wien-1190-doebling/hohe-warte-696209211/",
      "title": "Hohe Warte",
      "address": "1190 Wien, 19. Bezirk, Döbling, Gallmeyergasse",
      "addressmap": "1190 Wien, 19. Bezirk",
      "details": "84 m² 2 Zimmer",
      "metters": 84,
      "rooms": 2,
      "balcony": "",
      "seller": "Privat",
      "price": 800,
      "phone": [],
      "provision": "free",
      "client": "channel",
      "date": {
        "$date": "2023-07-21T22:03:27.930Z"
      },
      "__v": 0,
      "images": [
        "https://static.vecteezy.com/system/resources/previews/025/220/125/non_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg",
        "https://static.vecteezy.com/system/resources/previews/036/324/708/large_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
        "https://static.vecteezy.com/system/resources/previews/040/710/818/large_2x/birdgraphy-bird-picture-most-beautiful-birdgraphy-naturegraphy-photo.jpg"
      ]
    },
    {
      "_id": {
        "$oid": "64bb00af334556a2a4c5fe2e"
      },
      "unique": "1p2o",
      "initUrl": "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/wien/wien-1230-liesing/winteraktion-1-monat-mietfrei-hoflagige-3-zimmerwohnung-mit-balkon-2022844715/",
      "link": "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/wien/wien-1170-hernals/wohnung-mit-guter-infrastruktur-persofort-635777784/",
      "title": "Wohnung mit guter Infrastruktur persofort",
      "address": "1170 Wien, 17. Bezirk, Hernals, Haslingergasse",
      "addressmap": "1170 Wien, 17. Bezirk",
      "details": "85 m² 3 Zimmer Balkon",
      "metters": 85,
      "rooms": 3,
      "balcony": "",
      "seller": "Privat",
      "price": 1150,
      "phone": [],
      "provision": "free",
      "client": "channel",
      "date": {
        "$date": "2023-07-21T22:03:27.928Z"
      },
      "__v": 0,
      "images": [
        "https://static.vecteezy.com/system/resources/previews/036/324/708/large_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
        "https://static.vecteezy.com/system/resources/previews/025/220/125/non_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg"
      ]
    },
    {
      "_id": {
        "$oid": "64bb00af334556a2a4c5fe36"
      },
      "unique": "japy",
      "initUrl": "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/wien/wien-1230-liesing/winteraktion-1-monat-mietfrei-hoflagige-3-zimmerwohnung-mit-balkon-2022844715/",
      "link": "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/wien/wien-1100-favoriten/helle-moeblierte-zimmer-in-grosser-3er-wg-naehe-fh-campus-wien-696206509/",
      "title": "helle möblierte Zimmer in großer 3er WG, Nähe FH Campus Wien",
      "address": "1100 Wien, 10. Bezirk, Favoriten, Bleigasse",
      "addressmap": "1100 Wien, 10. Bezirk",
      "details": "9 m² 4 Zimmer Balkon",
      "metters": 9,
      "rooms": 4,
      "balcony": "",
      "seller": "Privat",
      "price": 4000,
      "phone": [],
      "provision": "free",
      "client": "channel",
      "date": {
        "$date": "2023-07-21T22:03:27.930Z"
      },
      "__v": 0,
      "images": [
        "https://static.vecteezy.com/system/resources/previews/040/710/818/large_2x/birdgraphy-bird-picture-most-beautiful-birdgraphy-naturegraphy-photo.jpg",
        "https://static.vecteezy.com/system/resources/previews/025/220/125/non_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg",
        "https://static.vecteezy.com/system/resources/previews/036/324/708/large_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
      ]
    },
    {
      "_id": {
        "$oid": "64bb00af334556a2a4c5fe3b"
      },
      "unique": "rpad",
      "initUrl": "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/wien/wien-1230-liesing/winteraktion-1-monat-mietfrei-hoflagige-3-zimmerwohnung-mit-balkon-2022844715/",
      "link": "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/wien/wien-1080-josefstadt/luxurioese-3-zi-wohnung-im-zentrum-wiens-2-badezimmer-aufzug-keller-restaurants-bars-in-der-naehe-694168191/",
      "title": "Luxuriöse 3 Zi Wohnung im Zentrum Wiens, 2 Badezimmer, Aufzug, Keller, Restaurants/ Bars in der Nähe",
      "address": "1080 Wien, 08. Bezirk, Josefstadt, Lerchenfelder Str. 74",
      "addressmap": "Lerchenfelder Str. 74",
      "details": "126 m² 3 Zimmer",
      "metters": 126,
      "rooms": 3,
      "balcony": "",
      "seller": "Blueground Austria GmbH",
      "price": 8320,
      "phone": ["004312264404"],
      "provision": "free",
      "client": "channel",
      "date": {
        "$date": "2023-07-21T22:03:27.931Z"
      },
      "__v": 0,
      "images": [
        "https://static.vecteezy.com/system/resources/previews/036/324/708/large_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
        "https://static.vecteezy.com/system/resources/previews/040/710/818/large_2x/birdgraphy-bird-picture-most-beautiful-birdgraphy-naturegraphy-photo.jpg"
      ]
    },
    {
      "_id": {
        "$oid": "64bb00af334556a2a4c5fe5d"
      },
      "unique": "85am",
      "initUrl": "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/wien/wien-1230-liesing/winteraktion-1-monat-mietfrei-hoflagige-3-zimmerwohnung-mit-balkon-2022844715/",
      "link": "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/wien/wien-1210-floridsdorf/-provisionsfrei-erstbezug-traumhafte-wohnung-am-puls-der-zeit-685987880/",
      "title": "*Provisionsfrei & Erstbezug* - Traumhafte Wohnung am Puls der Zeit",
      "address": "1210 Wien, 21. Bezirk, Floridsdorf, Pilzgasse 28 - Stiege 2 - Top 5",
      "addressmap": "1210 Wien, 21. Bezirk",
      "details": "48 m² 2 Zimmer Balkon",
      "metters": 48,
      "rooms": 2,
      "balcony": "",
      "seller": "Raiffeisen Vorsorge Wohnung GmbH",
      "price": 1825,
      "phone": ["015333000", "0153330002996"],
      "provision": "free",
      "client": "channel",
      "date": {
        "$date": "2023-07-21T22:03:27.936Z"
      },
      "__v": 0,
      "images": [
        "https://static.vecteezy.com/system/resources/previews/040/710/818/large_2x/birdgraphy-bird-picture-most-beautiful-birdgraphy-naturegraphy-photo.jpg",
        "https://static.vecteezy.com/system/resources/previews/036/324/708/large_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
      ]
    }
  ]

  map!: L.Map;
  filterArr: any;

  constructor() { }

  ngOnInit(): void {
    this.filterArr = this.arr;
    this.initMap();
    this.processAddresses();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [48.2082, 16.3738],
      zoom: 12
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private geocodeAddress(address: string) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;

    return from(
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const result = data[0];
            return { lat: parseFloat(result.lat), lon: parseFloat(result.lon) };
          } else {
            console.warn(`Адрес "${address}" не найден.`);
            return null;
          }
        })
        .catch((err) => {
          console.error(`Ошибка при обработке адреса "${address}":`, err);
          return null;
        })
    );
  }

  private processAddresses(): void {
    console.log(this.filterArr);
    from(this.filterArr)
      .pipe(
        concatMap((item: any) =>
          this.geocodeAddress(item.addressmap).pipe(
            // delay(1200),
            map((location) => ({ ...item, location })),
            catchError((err: any) => {
              console.error(`Ошибка для адреса "${item.address}":`, err);
              return of(null);
            })
          )
        )
      )
      .subscribe((itemWithLocation) => {
        if (itemWithLocation?.location) {
          const { lat, lon } = itemWithLocation.location;
          const popupContent = `
          <strong><a href="${itemWithLocation.initUrl}" target="_blank">${itemWithLocation.title}</a></strong>
          <br>${itemWithLocation.address}
          <br>${itemWithLocation.seller}
          <br>${itemWithLocation.details}
          <br><strong>${Array.isArray(itemWithLocation.phone) && itemWithLocation.phone.length ? 'Phones:' : ''}</strong>
          <br> ${Array.isArray(itemWithLocation.phone) && itemWithLocation.phone.length
              ? itemWithLocation.phone.map((phone: any) => `<span>${phone}</span>`).join('<br>')
              : itemWithLocation.phone || 'Нет телефонов'
            }
          <br> 
          <div class="info-img">${Array.isArray(itemWithLocation.images) && itemWithLocation.images.length
              ? itemWithLocation.images.map((image: any) => `<img src="${image}">`)
              : itemWithLocation.images || 'Нет телефонов'
            }
          </div>
        `;
          this.addCircle(lat, lon, popupContent);
        } else {
          console.warn(`Не удалось определить местоположение для: ${itemWithLocation?.address}`);
        }
      });
  }

  // Добавление круга вместо маркера
  private addCircle(lat: number, lon: number, popupContent: string): void {
    if (this.map) {
      const circle = L.circleMarker([lat, lon], {
        color: 'blue',
        radius: 10,
        fillOpacity: 0.5
      }).addTo(this.map);
      circle.bindPopup(popupContent);
    } else {
      console.error('Карта не инициализирована!');
    }
  }

  taskGroups: Task[] = [
    {
      name: 'rooms',
      completed: false,
      subtasks: [
        { name: '1', completed: false },
        { name: '2', completed: false },
        { name: '3', completed: false },
        { name: '4', completed: false },
        { name: '5', completed: false },
      ]
    },
    {
      name: 'seller',
      completed: false,
      subtasks: [
        { name: 'Privat', completed: false },
        { name: 'Blueground Austria GmbH', completed: false },
        { name: 'Raiffeisen Vorsorge Wohnung GmbH', completed: false },
      ]
    }
  ];

  onGroupChange(updatedGroup: Task): void {
    const index = this.taskGroups.findIndex(g => g.name === updatedGroup.name);
    if (index !== -1) {
      this.taskGroups[index] = updatedGroup;
    }
    console.log(this.taskGroups.some((x: any) => x.subtasks.some((y: any) => y.completed)))
    this.map.remove();
    this.initMap();
    this.clearMarkers();
    if (this.taskGroups.some((x: any) => x.subtasks.some((y: any) => y.completed))) {

      this.filterArr = this.filterArray(this.arr, this.taskGroups);
      this.filterArr = this.filterByPriceRange(this.filterArr, this.minRange, this.maxRange);
    } else {
      this.filterArr = this.arr;
      this.filterArr = this.filterByPriceRange(this.filterArr, this.minRange, this.maxRange);
    }
    // console.log(this.taskGroups);
    // console.log(this.filterArr);
    // console.log(this.arr);
    // setTimeout(() => {this.processAddresses();}, 1300);
    this.processAddresses();

  }

  filterArray(arr: any, taskGroups: any) {
    const selectedRooms = taskGroups.find((group: any) => group.name === 'rooms').subtasks
      .filter((subtask: any) => subtask.completed)
      .map((subtask: any) => parseInt(subtask.name));

    const selectedSellers = taskGroups.find((group: any) => group.name === 'seller').subtasks
      .filter((subtask: any) => subtask.completed)
      .map((subtask: any) => subtask.name);

    return arr.filter((item: any) =>
      (selectedRooms.length === 0 || selectedRooms.includes(item.rooms)) &&
      (selectedSellers.length === 0 || selectedSellers.includes(item.seller))
    );
  }

  private clearMarkers(): void {
    this.filterArr.forEach((marker: any) => {
      this.map.removeLayer(marker); // Удаляем маркер с карты
    });
    this.filterArr = []; // Очищаем массив маркеров
  }

  minRange: number = 800;
  maxRange: number = 2000;
  changeStart(event: any) {
    console.log(`value start`, event);
    this.minRange = event?.value;
    this.filterArr = this.filterArray(this.arr, this.taskGroups);
    this.filterArr = this.filterByPriceRange(this.filterArr, this.minRange, this.maxRange);
    this.map.remove();
    this.initMap();
    // this.clearMarkers();
    this.processAddresses();
    console.log(this.filterArr);
  }
  changeEnd(event: any) {
    console.log(`value end`, event);
    this.maxRange = event?.value;
    this.filterArr = this.filterArray(this.arr, this.taskGroups);
    this.filterArr = this.filterByPriceRange(this.filterArr, this.minRange, this.maxRange);
    this.map.remove();
    this.initMap();
    // this.clearMarkers();
    this.processAddresses();
    console.log(this.filterArr);
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'k'; // Ограничиваем до одного знака после запятой
    }

    return `${value}`;
  }

  filterByPriceRange(items: any , minPrice: any, maxPrice: any) {
    return items.filter((item: any) => item.price >= minPrice && item.price <= maxPrice);
}
}

