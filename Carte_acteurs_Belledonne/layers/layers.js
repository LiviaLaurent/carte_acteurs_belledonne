var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MassifdeBelledonne_1 = new ol.format.GeoJSON();
var features_MassifdeBelledonne_1 = format_MassifdeBelledonne_1.readFeatures(json_MassifdeBelledonne_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MassifdeBelledonne_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassifdeBelledonne_1.addFeatures(features_MassifdeBelledonne_1);
var lyr_MassifdeBelledonne_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassifdeBelledonne_1, 
                style: style_MassifdeBelledonne_1,
                popuplayertitle: 'Massif de Belledonne',
                interactive: false,
                title: '<img src="styles/legend/MassifdeBelledonne_1.png" /> Massif de Belledonne'
            });
var format_chelledaction_2 = new ol.format.GeoJSON();
var features_chelledaction_2 = format_chelledaction_2.readFeatures(json_chelledaction_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chelledaction_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chelledaction_2.addFeatures(features_chelledaction_2);
var lyr_chelledaction_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chelledaction_2, 
                style: style_chelledaction_2,
                popuplayertitle: 'Échelle d\'action',
                interactive: false,
    title: 'Échelle d\'action<br />\
    <img src="styles/legend/chelledaction_2_0.png" /> Internationale<br />\
    <img src="styles/legend/chelledaction_2_1.png" /> Nationale<br />\
    <img src="styles/legend/chelledaction_2_2.png" /> Alpes françaises<br />\
    <img src="styles/legend/chelledaction_2_3.png" /> Régionale<br />\
    <img src="styles/legend/chelledaction_2_4.png" /> Belledonne<br />\
    <img src="styles/legend/chelledaction_2_5.png" /> Départementale<br />\
    <img src="styles/legend/chelledaction_2_6.png" /> EPCI<br />\
    <img src="styles/legend/chelledaction_2_7.png" /> Intercommunale<br />\
    <img src="styles/legend/chelledaction_2_8.png" /> Communale<br />' });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '',
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_3_0.png" /> Administration publique générale<br />\
    <img src="styles/legend/_3_1.png" /> Agriculture<br />\
    <img src="styles/legend/_3_2.png" /> APN<br />\
    <img src="styles/legend/_3_3.png" /> Biodiversité<br />\
    <img src="styles/legend/_3_4.png" /> Chasse<br />\
    <img src="styles/legend/_3_5.png" /> Culture<br />\
    <img src="styles/legend/_3_6.png" /> Developpement territorial<br />\
    <img src="styles/legend/_3_7.png" /> Eau<br />\
    <img src="styles/legend/_3_8.png" /> Forêt<br />\
    <img src="styles/legend/_3_9.png" /> Recherche<br />\
    <img src="styles/legend/_3_10.png" /> Tourisme<br />\
    <img src="styles/legend/_3_11.png" /> Transition<br />\
    <img src="styles/legend/_3_12.png" /> Urbanisme<br />\
    <img src="styles/legend/_3_13.png" /> Pêche<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_MassifdeBelledonne_1.setVisible(true);lyr_chelledaction_2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MassifdeBelledonne_1,lyr_chelledaction_2,lyr__3];
lyr_MassifdeBelledonne_1.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', 'CODE_EPCI': 'CODE_EPCI', 'popmillion': 'popmillion', 'depop2': 'depop2', 'Maj20Dep': 'Maj20Dep', 'Dep-Arr_1': 'Dep-Arr_1', 'DepArrPop': 'DepArrPop', 'NbComArr': 'NbComArr', 'Maj5Arr': 'Maj5Arr', 'PNRTot': 'PNRTot', 'ComGAM': 'ComGAM', 'ComCCG': 'ComCCG', 'EPCI': 'EPCI', '2021leader': '2021leader', 'Adh': 'Adh', 'rencontré': 'rencontré', });
lyr_chelledaction_2.set('fieldAliases', {'ID': 'ID', 'Nom': 'Nom', 'Statut jur': 'Statut jur', 'Echelle ': 'Echelle ', 'Catégorie': 'Catégorie', 'Mail': 'Mail', 'Téléphon': 'Téléphon', 'Adresse (r': 'Adresse (r', 'Infos comp': 'Infos comp', 'Latitude_8': 'Latitude_8', 'Longitude_': 'Longitude_', 'Site inter': 'Site inter', 'Activités': 'Activités', });
lyr__3.set('fieldAliases', {'ID': 'ID', 'Nom': 'Nom', 'Statut jur': 'Statut jur', 'Echelle ': 'Echelle ', 'Catégorie': 'Catégorie', 'Mail': 'Mail', 'Téléphon': 'Téléphon', 'Adresse (r': 'Adresse (r', 'Infos comp': 'Infos comp', 'Latitude_8': 'Latitude_8', 'Longitude_': 'Longitude_', 'Site inter': 'Site inter', 'Activités': 'Activités', });
lyr_MassifdeBelledonne_1.set('fieldImages', {'ID': 'TextEdit', 'NOM_COM': 'TextEdit', 'NOM_COM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'POPULATION': 'Range', 'INSEE_ARR': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'NOM_REG': 'TextEdit', 'INSEE_REG': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'popmillion': 'TextEdit', 'depop2': 'TextEdit', 'Maj20Dep': 'Range', 'Dep-Arr_1': 'TextEdit', 'DepArrPop': 'TextEdit', 'NbComArr': 'TextEdit', 'Maj5Arr': 'Range', 'PNRTot': 'TextEdit', 'ComGAM': 'TextEdit', 'ComCCG': 'TextEdit', 'EPCI': 'TextEdit', '2021leader': 'TextEdit', 'Adh': 'TextEdit', 'rencontré': 'TextEdit', });
lyr_chelledaction_2.set('fieldImages', {'ID': 'TextEdit', 'Nom': 'TextEdit', 'Statut jur': 'TextEdit', 'Echelle ': 'TextEdit', 'Catégorie': 'TextEdit', 'Mail': 'TextEdit', 'Téléphon': 'TextEdit', 'Adresse (r': 'TextEdit', 'Infos comp': 'TextEdit', 'Latitude_8': 'TextEdit', 'Longitude_': 'TextEdit', 'Site inter': 'TextEdit', 'Activités': 'TextEdit', });
lyr__3.set('fieldImages', {'ID': 'TextEdit', 'Nom': 'TextEdit', 'Statut jur': 'TextEdit', 'Echelle ': 'TextEdit', 'Catégorie': 'TextEdit', 'Mail': 'TextEdit', 'Téléphon': 'TextEdit', 'Adresse (r': 'TextEdit', 'Infos comp': 'TextEdit', 'Latitude_8': 'TextEdit', 'Longitude_': 'TextEdit', 'Site inter': 'TextEdit', 'Activités': 'TextEdit', });
lyr_MassifdeBelledonne_1.set('fieldLabels', {'ID': 'no label', 'NOM_COM': 'no label', 'NOM_COM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_ARR': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'NOM_REG': 'no label', 'INSEE_REG': 'no label', 'CODE_EPCI': 'no label', 'popmillion': 'no label', 'depop2': 'no label', 'Maj20Dep': 'no label', 'Dep-Arr_1': 'no label', 'DepArrPop': 'no label', 'NbComArr': 'no label', 'Maj5Arr': 'no label', 'PNRTot': 'no label', 'ComGAM': 'no label', 'ComCCG': 'no label', 'EPCI': 'no label', '2021leader': 'no label', 'Adh': 'no label', 'rencontré': 'no label', });
lyr_chelledaction_2.set('fieldLabels', {'ID': 'no label', 'Nom': 'no label', 'Statut jur': 'no label', 'Echelle ': 'no label', 'Catégorie': 'no label', 'Mail': 'no label', 'Téléphon': 'no label', 'Adresse (r': 'no label', 'Infos comp': 'no label', 'Latitude_8': 'no label', 'Longitude_': 'no label', 'Site inter': 'no label', 'Activités': 'no label', });
lyr__3.set('fieldLabels', {'ID': 'hidden field', 'Nom': 'header label - always visible', 'Statut jur': 'hidden field', 'Echelle ': 'inline label - visible with data', 'Catégorie': 'inline label - visible with data', 'Mail': 'hidden field', 'Téléphon': 'hidden field', 'Adresse (r': 'hidden field', 'Infos comp': 'hidden field', 'Latitude_8': 'hidden field', 'Longitude_': 'hidden field', 'Site inter': 'hidden field', 'Activités': 'hidden field', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});