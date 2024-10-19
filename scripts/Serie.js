var Serie = /** @class */ (function () {
    function Serie(id, title, channel, seasons, description, link, imageUrl) {
        this.id = id;
        this.titulo = title;
        this.plataforma = channel;
        this.temporadas = seasons;
        this.descripcion = description;
        this.enlace = link;
        this.imagen = imageUrl;
    }
    return Serie;
}());
export { Serie };
