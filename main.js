
        var kuznetsovandrey76;    
        var campersList = [kuznetsovandrey76];
        var infowindow;



        var campersInfo = [
        {
            id: 0,
            name: "kuznetsovandrey76",
            title: "@kuznetsovandrey76",
            img: "kuznetsovandrey76.png",
            position: {lat: 57.185569, lng: 39.396566},
            contentString: 'Hello everybody. My name is Andrey'
        },
        {

        }];


        var centerMap = {lat: 35, lng: 30};


      function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          center: centerMap,
          scrollwheel: true, //запрет увеличения
          zoom: 3,
          minZoom: 2,
          fullscreenControl: true
        });


        // Маркеры
        var markerImageSize = 30,
            markerImage = new google.maps.Size(markerImageSize, markerImageSize);
        
        campersList[0] = new google.maps.Marker({
          position: campersInfo[0].position,
          title: campersInfo[0].title,
          icon: {
            url: campersInfo[0].img,       
            scaledSize: markerImage 
          }
          // draggable: true // Перетаскивать маркер
          // label: "Hello"
        });
        // Вывод на карту
        campersList[0].setMap(map);



        // Стиль карты
        var styles = [
                  {
                    stylers: [
                      { hue: "#00bfff" },
                      { saturation: -60 }
                         ]
                  },{
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                      { lightness: 100 },
                      { visibility: "simplified" }
                          ]
                 },{
                   featureType: "road",
                   elementType: "labels",
                   stylers: [
                     { visibility: "off" }
                         ]
                }
        ];
        map.setOptions({styles: styles});


            // Описание к маркеру
            // массив campersList и база campersInfo 
          infowindow = new google.maps.InfoWindow({
            content: campersInfo[0].contentString
         });
          campersList[0].addListener('click', function() {
            infowindow.open(map, campersList[0]);
         });

      }
