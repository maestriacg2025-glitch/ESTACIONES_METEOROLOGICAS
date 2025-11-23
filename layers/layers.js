ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-74.323933, -25.118468, -52.775747, -9.292832]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamentos_boliviadepartamentos_geo_1 = new ol.format.GeoJSON();
var features_Departamentos_boliviadepartamentos_geo_1 = format_Departamentos_boliviadepartamentos_geo_1.readFeatures(json_Departamentos_boliviadepartamentos_geo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Departamentos_boliviadepartamentos_geo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_boliviadepartamentos_geo_1.addFeatures(features_Departamentos_boliviadepartamentos_geo_1);
var lyr_Departamentos_boliviadepartamentos_geo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_boliviadepartamentos_geo_1, 
                style: style_Departamentos_boliviadepartamentos_geo_1,
                popuplayertitle: 'Departamentos_bolivia — departamentos_geo',
                interactive: false,
    title: 'Departamentos_bolivia — departamentos_geo<br />\
    <img src="styles/legend/Departamentos_boliviadepartamentos_geo_1_0.png" /> Beni<br />\
    <img src="styles/legend/Departamentos_boliviadepartamentos_geo_1_1.png" /> Chuquisaca<br />\
    <img src="styles/legend/Departamentos_boliviadepartamentos_geo_1_2.png" /> Cochabamba<br />\
    <img src="styles/legend/Departamentos_boliviadepartamentos_geo_1_3.png" /> La Paz<br />\
    <img src="styles/legend/Departamentos_boliviadepartamentos_geo_1_4.png" /> Oruro<br />\
    <img src="styles/legend/Departamentos_boliviadepartamentos_geo_1_5.png" /> Pando<br />\
    <img src="styles/legend/Departamentos_boliviadepartamentos_geo_1_6.png" /> Potosí<br />\
    <img src="styles/legend/Departamentos_boliviadepartamentos_geo_1_7.png" /> Santa Cruz<br />\
    <img src="styles/legend/Departamentos_boliviadepartamentos_geo_1_8.png" /> Tarija<br />\
    <img src="styles/legend/Departamentos_boliviadepartamentos_geo_1_9.png" /> <br />' });
var format_Estaciones_SENAMHIestacion_meteorologica_2 = new ol.format.GeoJSON();
var features_Estaciones_SENAMHIestacion_meteorologica_2 = format_Estaciones_SENAMHIestacion_meteorologica_2.readFeatures(json_Estaciones_SENAMHIestacion_meteorologica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Estaciones_SENAMHIestacion_meteorologica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_SENAMHIestacion_meteorologica_2.addFeatures(features_Estaciones_SENAMHIestacion_meteorologica_2);
cluster_Estaciones_SENAMHIestacion_meteorologica_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Estaciones_SENAMHIestacion_meteorologica_2
});
var lyr_Estaciones_SENAMHIestacion_meteorologica_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Estaciones_SENAMHIestacion_meteorologica_2, 
                style: style_Estaciones_SENAMHIestacion_meteorologica_2,
                popuplayertitle: 'Estaciones_SENAMHI — estacion_meteorologica',
                interactive: true,
    title: 'Estaciones_SENAMHI — estacion_meteorologica<br />\
    <img src="styles/legend/Estaciones_SENAMHIestacion_meteorologica_2_0.png" /> Autom�tica<br />\
    <img src="styles/legend/Estaciones_SENAMHIestacion_meteorologica_2_1.png" /> Autom�tica telem�trica GPRS<br />\
    <img src="styles/legend/Estaciones_SENAMHIestacion_meteorologica_2_2.png" /> Convencional<br />\
    <img src="styles/legend/Estaciones_SENAMHIestacion_meteorologica_2_3.png" /> Satelital<br />\
    <img src="styles/legend/Estaciones_SENAMHIestacion_meteorologica_2_4.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Departamentos_boliviadepartamentos_geo_1.setVisible(true);lyr_Estaciones_SENAMHIestacion_meteorologica_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Departamentos_boliviadepartamentos_geo_1,lyr_Estaciones_SENAMHIestacion_meteorologica_2];
lyr_Departamentos_boliviadepartamentos_geo_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'c_ut': 'c_ut', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_Estaciones_SENAMHIestacion_meteorologica_2.set('fieldAliases', {'fid': 'fid', 'estacion': 'estacion', 'latitud': 'latitud', 'longitud': 'longitud', 'altura': 'altura', 'activo': 'activo', 'orden': 'orden', 'fecha_inic': 'fecha_inic', 'cod_omm': 'cod_omm', 'cod_oaci': 'cod_oaci', 'cod_otro': 'cod_otro', 'propietari': 'propietari', 'telefono': 'telefono', 'direccion': 'direccion', 'correo': 'correo', 'web': 'web', 'observacio': 'observacio', 'clasificac': 'clasificac', 'operador': 'operador', 'financiado': 'financiado', 'nom_dep': 'nom_dep', 'nom_mun': 'nom_mun', 'nom_prov': 'nom_prov', 'categoria': 'categoria', 'tipo_estac': 'tipo_estac', 'nombre_obs': 'nombre_obs', 'ci_obs': 'ci_obs', 'estado': 'estado', 'pronostico': 'pronostico', });
lyr_Departamentos_boliviadepartamentos_geo_1.set('fieldImages', {'fid': '', 'id': '', 'c_ut': '', 'DEPARTAMEN': '', });
lyr_Estaciones_SENAMHIestacion_meteorologica_2.set('fieldImages', {'fid': '', 'estacion': '', 'latitud': '', 'longitud': '', 'altura': '', 'activo': '', 'orden': '', 'fecha_inic': '', 'cod_omm': '', 'cod_oaci': '', 'cod_otro': '', 'propietari': '', 'telefono': '', 'direccion': '', 'correo': '', 'web': '', 'observacio': '', 'clasificac': '', 'operador': '', 'financiado': '', 'nom_dep': '', 'nom_mun': '', 'nom_prov': '', 'categoria': '', 'tipo_estac': '', 'nombre_obs': '', 'ci_obs': '', 'estado': '', 'pronostico': '', });
lyr_Departamentos_boliviadepartamentos_geo_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'c_ut': 'no label', 'DEPARTAMEN': 'no label', });
lyr_Estaciones_SENAMHIestacion_meteorologica_2.set('fieldLabels', {'fid': 'hidden field', 'estacion': 'inline label - always visible', 'latitud': 'inline label - always visible', 'longitud': 'inline label - always visible', 'altura': 'hidden field', 'activo': 'inline label - always visible', 'orden': 'hidden field', 'fecha_inic': 'hidden field', 'cod_omm': 'hidden field', 'cod_oaci': 'hidden field', 'cod_otro': 'hidden field', 'propietari': 'hidden field', 'telefono': 'hidden field', 'direccion': 'hidden field', 'correo': 'hidden field', 'web': 'hidden field', 'observacio': 'hidden field', 'clasificac': 'hidden field', 'operador': 'hidden field', 'financiado': 'hidden field', 'nom_dep': 'hidden field', 'nom_mun': 'hidden field', 'nom_prov': 'hidden field', 'categoria': 'hidden field', 'tipo_estac': 'inline label - always visible', 'nombre_obs': 'hidden field', 'ci_obs': 'hidden field', 'estado': 'hidden field', 'pronostico': 'hidden field', });
lyr_Estaciones_SENAMHIestacion_meteorologica_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});