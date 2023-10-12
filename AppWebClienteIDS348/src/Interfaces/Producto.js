export default class Producto{
    constructor(idProducto,nombre,precio,descripcion,idCategoria,nombreCategoria,color,size,descuento,idEstadoProductos,nombreEstadoProductos,fotos,cant_stock){
        this.idProducto = idProducto,
        this.nombre = nombre,
        this.precio = precio,
        this.descripcion = descripcion,
        this.idCategoria = idCategoria,
        this.nombreCategoria = nombreCategoria,
        this.color = color,
        this.size = size,
        this.descuento = descuento,
        this.idEstadoProductos = idEstadoProductos
        this.nombreEstadoProductos = nombreEstadoProductos
        this.fotos = fotos
        this.cant_stock = cant_stock
    }
}