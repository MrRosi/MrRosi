$(document).ready(function(){
   var mymap = L.map('mymap',
                    {
                     center: [50.68, 21.65], 
                     zoom: 10,
                     zoomControl:true,
                     attributionControl:true
                    }
                    );
    
    var lyrOrto = L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',
    {                           
        layers: "Raster",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
    }
                                 
    );
    
    var lyrSozo = L.tileLayer.wms ('http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer',
    {
        layers:"Raster",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
        
    }
                               
                               
                               );
      var lyrkolej = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_workspace/wms',
                               {
        layers:"kolej",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
    });
       
    var lyrdrogi = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_workspace/wms',
                               {
        layers:"drogi",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
        });
    
        var lyrcmentarze = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_workspace/wms',
                               {
        layers:"cmentarze",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
    });
    
        var lyrmyjnie = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_workspace/wms',
                               {
        layers:"myjnie",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
    });
    
        var lyrosiedla = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_workspace/wms',
                               {
        layers:"osiedla",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
    });
    
        var lyrrekreacja = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_workspace/wms',
                               {
        layers:"rekreacja",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
    });
    
        var lyrszkoly = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_workspace/wms',
                               {
        layers:"szkoly",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
    });
    
        var lyrwodyliniowe = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_workspace/wms',
                               {
        layers:"wody_liniowe",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
    });
    
        var lyrwodypowierzchniowe = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_workspace/wms',
                               {
        layers:"wody_pow",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
    });
    
    var lyrPRGWOJ = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_workspace/wms',
                               {
        layers:"wojewodztwa",
        format: 'image/png',
        transparent: 'true',
        version: '1.1.1'
    });
    
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrOSM);
    
    var baseMaps = {
        "ORTOFOTOMAPA": lyrOrto,
        "Mapa Sozologiczna": lyrSozo,
        "OpenStreetMaps": lyrOSM,
        
    };
    
    //LISTA OBIEKTÓW TYPU CHECBOX - dodac pozniej cechy analizy wielokryterialnej! tak by Warstwa tła była możliwa do podejrzenia - hollow; cały obiekt ma sie przybliżac z automatu - wpisac wspolrzedne w 6 linijce obiektu centralnego obszaru i dostosowac zoom - linijka 4 
    var overlays = {
        "Wykaz wojewodztw": lyrPRGWOJ,
        "Kolej": lyrkolej,
        "Drogi": lyrdrogi,
        "Cmentarze":lyrcmentarze,
        "Myjnie samochodowe": lyrmyjnie,
        "Osiedla mieszkaniowe": lyrosiedla,
        "Tereny rekreacyjne": lyrrekreacja,
        "Szkoly": lyrszkoly,
        "Cieki wodne": lyrwodyliniowe,
        "Zbiorniki wodne": lyrwodypowierzchniowe
    };

    L.control.layers(baseMaps, overlays).addTo(mymap);
    L.control.scale({imperial:false}).addTo(mymap);
    
});