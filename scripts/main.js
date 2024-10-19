import { series } from './data.js';
var seriestable = document.getElementById("series");
mostrarseries(series);
function mostrarseries(seriesList) {
    var seriesTbody = document.createElement('tbody');
    var totaltemporadas = 0;
    for (var _i = 0, seriesList_1 = seriesList; _i < seriesList_1.length; _i++) {
        var serie = seriesList_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n                <td>".concat(serie.id, "</td>\n                <td>").concat(serie.titulo, "</td>\n                <td>").concat(serie.plataforma, "</td>\n                <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
        totaltemporadas += serie.temporadas;
    }
    var promedio = totaltemporadas / seriesList.length;
    var promedioT = document.createElement("tr");
    promedioT.innerHTML = "\n                <td>#</td>\n                <td><strong>promedio Temporadas:</strong></td>\n                <td>".concat(promedio, "</td>");
    seriesTbody.appendChild(promedioT);
    seriestable.appendChild(seriesTbody);
}
