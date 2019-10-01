export class Post {
    constructor(_id = '',titulo = '', contenido = '', fecha = '', idUser=''){
        this._id = _id;
        this.titulo = titulo;
        this.contenido = contenido;
        this.fecha = fecha;
        this.idUser = idUser;
    }

    _id: string;
    titulo: string;
    contenido: string;
    fecha: string;
    idUser: string;

}
