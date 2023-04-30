# WareHouse24-7
## PROYECTO “ALMACENADORA”
### Descripción:
> El proyecto a realizar debe crearse bajo el Stack de desarrollo MERN (MongoDB, Express, React y NodeJs), para poder visualizarlo desde la web. Este sistema servirá para poder llevar el control de una empresa que se dedica al arrendamiento de bodegas. Algunas de las funcionalidades será el poder crear bodegas y que estas sean visibles para los clientes, estas bodegas tendrán un estado, donde el cliente interesado podrá ver si está disponible o no. Además, se podrán tener sucursales y cada bodega puede estar ubicada en diferentes sucursales.
### Detalles específicos del sistema:
> Se le solicita una página web para una empresa de renta de bodegas, la cual debe de tener una página principal atractiva con la información necesaria para que los clientes potenciales puedan conocer los detalles de las bodegas disponibles, como su ubicación, tamaño y precio. También debería incluir información sobre los servicios que ofrece la empresa, como seguridad, limpieza y acceso a las instalaciones; así como los servicios adicionales (con costo adicional) que pueden adquirir al momento de rentar su bodega. Algunos de estos servicios son: cámaras internas y grabación 24/7, acceso mediante una cerradura electrónica, aire acondicionado, etc.
En la página principal se deben útil incluir testimonios (en este caso ficticios) de clientes satisfechos y fotografías de las bodegas disponibles para dar una idea clara de lo que se ofrece. En resumen, una página web bien diseñada y completa puede ser una herramienta muy valiosa para atraer a nuevos clientes a una empresa de renta de bodegas.
### Funciones del administrador:
#### Gestión de sucursales:
* Este apartado permitiría al administrador realizar las operaciones básicas de CRUD (crear, leer, actualizar y eliminar) de las sucursales disponibles en donde se encuentran las bodegas.
* Algunos detalles que se pueden agregar son: ubicación, plusvalía, si posee parqueo, etc. Puede agregar más si lo ve conveniente.
* En el apartado de ver las sucursales se mostrarán todas las sucursales disponibles, y que se hayan creado y al momento de seleccionar una se podrá acceder a las bodegas que esta tenga disponibles (gestión de bodegas, mostrar).
* Las sucursales no se pueden eliminar, solamente se pueden deshabilitar, lo cual haría que todas las bodegas que estén dentro de dicha sucursal pasen a estar como no disponibles.
#### Gestión de usuarios:
* Este apartado permitirá al administrador realizar las operaciones básicas de CRUD (crear, leer, actualizar y eliminar) para los usuarios. Es importante mencionar que los usuarios son simplemente registros en la BD y que no tendrán acceso al sistema.
* No se puede eliminar un usuario si está arrendando una bodega.
#### Gestión de bodegas:
* Este apartado permitiría al administrador realizar las operaciones básicas de CRUD (crear, leer, actualizar y eliminar) de las bodegas. Algunos detalles que se pueden agregar son: nombre, descripción, ubicación, tamaño, disponibilidad y precio, si lo desea puede agregar más datos.
* En la página de mostrar se mostrarán con el formato que prefiera, pero si debe de mostrarse una barra de búsqueda, para poder buscar y filtrar las bodegas según su nombre, así como por la sucursal y por disponibilidad.
* Al momento de eliminar una bodega se debe de verificar si no está asignada a un usuario, de ser así no se podrá eliminar la bodega.
#### Gestión de cuentas:
* Este apartado permitiría al administrador realizar las operaciones básicas de CRUD (crear, leer, actualizar y eliminar) de las cuentas de usuario.
* Solo puede agregar usuarios con rol trabajador.
#### Gestión de servicios adicionales:
* Este apartado permitirá al administrador realizar las operaciones del CRUD del mismo, la única acción que no estará disponible es la de eliminar, y los servicios no se pueden duplicar.
### Funciones del trabajador:
#### Gestión de arrendamiento (también disponible para administrador):
* En este apartado se podrá realizar el CRUD del arrendamiento, donde se podrán ver las bodegas que actualmente están arrendadas (no disponibles) junto con el cliente que las está arrendando, así como la información de cobro. Este será un apartado donde se “compra o arrienda” una bodega, donde la bodega pasa a estar a disposición de un solo cliente y el estado de la bodega pasa a no disponible.
* Para agregar un arrendamiento se deben de tener como mínimo 2 datos, la bodega y el usuario que la arrendará, sin embargo, también se podrán seleccionar servicios adicionales si en tal caso el cliente desee agregarlos. Recuerde que solo se pueden arrendar las bodegas disponibles.
* El actualizar serviría para poder cambiar la bodega si en tal caso fuese necesario.
* El eliminar del arrendamiento vuelve el estado de la bodega a disponible, así como el usuario deja de estar vinculado a la misma.
* Al momento de ver el arrendamiento se podrá ver el detalle del mismo, usuario, bodega, servicios adicionales y por ende el total del arrendamiento.  
