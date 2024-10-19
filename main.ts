import {series} from './data.js'
import { Serie } from './Serie.js';


   
let seriestable: HTMLElement = document.getElementById("series")!;

mostrarseries(series);

function mostrarseries(seriesList: Serie[]): void {
    let seriesTbody: HTMLElement = document.createElement('tbody')
    let totaltemporadas = 0;
    for (let serie of seriesList){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
                <td>${serie.id}</td>
                <td>${serie.titulo}</td>
                <td>${serie.plataforma}</td>
                <td>${serie.temporadas}</td>`;
                seriesTbody.appendChild(trElement);
        totaltemporadas += serie.temporadas;
    }
    let promedio = totaltemporadas/seriesList.length;

    let promedioT: HTMLElement = document.createElement("tr");
    promedioT.innerHTML = `
                <td>#</td>
                <td><strong>promedio Temporadas:</strong></td>
                <td>${promedio}</td>`;
    seriesTbody.appendChild(promedioT);
    seriestable.appendChild(seriesTbody);
}