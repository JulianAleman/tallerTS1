export class Serie{
    id:number;
    titulo: string; 
    plataforma: string; 
    temporadas: number;
    descripcion: string; 
    enlace: string; 
    imagen: string; 
    constructor(id: number, title: string, channel: string, seasons: number, description: string, link: string, imageUrl: string) {
        this.id = id;
        this.titulo = title;
        this.plataforma = channel;
        this.temporadas = seasons;
        this.descripcion = description;
        this.enlace = link;
        this.imagen = imageUrl;
    }

}