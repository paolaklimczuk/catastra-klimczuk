## Nombre Proyecto

Catrasca-Klimczuk. 

## Descripción

Catrasca es una ecommerce para venta de alimentos balanceados para mascotas. Permite la compra de diferentes marcas de alimentos para perros y gatos, dependiendo de su edad y su tamaño. Asi como tambien, alimentos para distinas enfermedades.  
La pagina provee login, control de stock y 

## Manejador de Base de Datos, Autenticacion y Storage

Se utilizo la plataforma Firebase que nos provee lo siguiente:

### Authentication 

    se utlizo Auth de Firebase ya que facilita la creacion y login de usuario de forma segura con email y contraseña.

### Firestore Database

    Utilizamos firestore Database para registar los productos del emprendimiento y las ordenes identificadas con un id de orden y asociadas a un email para luego poder ser consultadas.  

### Storage 

    Lo utilizamos para almacenar el carrito y no perderlo cuando se recarga la pagina.

## Dependencias

Se utilizaron dependencias de MUI en distinas partes del proyecto donde se utilizaron los siguientes componentes:

### @mui/material
Container: contenedor para por ejemplo detalle de item, pagina de contacto, pagina de faq, nosotros, etc.
### @mui/material/IconButton
IconButton: se utilizó para representar el carrito.

## Boton
### @mui/material/Button

## Menues para armar el menu del NavBar y para submenu de productos

### @mui/material/Menu
### @mui/material/MenuItem


## Para el icono carrito de compras

### @mui/icons-material/AddShoppingCart    
AddShoppingCartIcon: se utilizó para representar el carrito.

## Para visualizacion en tabla de ordenes de compra

### Collapsible table

## Para popup de la aplicacion

### PopupState 
### MenuPopupState