function aparecelogin (){
	event.preventDefault();
	$("#login").animate({
		'top':'0'
	}, 500);
}
function desaparecelogin (){
	event.preventDefault();
	$("#login").animate({
		'top':'-100'
	}, 500);
}

function desapareceRegistro(){
	$("#oscurecer").fadeOut();
}
function desapareceFormulario(){
	$("#registrar").fadeOut(300,desapareceRegistro);
}
function mostrarFormulario(){
	$("#registrar").fadeIn();
	$("#oscurecer").click (desapareceFormulario);
	$("#cerrarRegistro").click(desapareceFormulario)
}
function apareceRegistro(e){
	e.preventDefault();
	$("#oscurecer").fadeIn(400, mostrarFormulario);
}
function mostrarLoginYRegistro(){
	$("#activarLogin").click(aparecelogin);
	$("#cerrar").click(desaparecelogin);

	$("#activarRegistrar").click(apareceRegistro);
}
$(document).ready (mostrarLoginYRegistro);

/*  Funcion del Boton hacia Arriba*/
$(document).ready(function(){
	$('.up').hide();

	$(window).scroll(function(){
		if($(this).scrollTop() > 100 ){
			$('.up').fadeIn('1000');
		}else{
			$('.up').fadeOut('1000');
		}
	});

	$('.up').click(function(){
		$('body, html').animate({
			scrollTop: 0
		},150);
	});
});



/****FUNCIONES PARA LOS DATOS DE LA TIENDA****/

/*FORMULARIO EDITAR DATOS*/
function desapareceEditar(){
	$("#oscurecer").fadeOut();
}
function desapareceFormEditar(){
	$("#editardatos").fadeOut(300,desapareceEditar);
}
function mostrarFormEditar(){
	$("#editardatos").fadeIn();
	$("#oscurecer").click(desapareceFormEditar);
	$("#cerrarRegistro").click(desapareceFormEditar);
}

/****MOSTRAR EL FORMULARIO DE EDITAR DATOS TIENDA****/
function apareceEditar(ed){
	ed.preventDefault();
	$("#oscurecer").fadeIn(400, mostrarFormEditar);
}

/*FORMULARIO AGREGAR PRODUCTOS*/
function desapareceNuevo(){
	$("#oscurecer").fadeOut();
}
function desapareceFormNuevo(){
	$("#nuevoproducto").fadeOut(300,desapareceNuevo);
}
function mostrarFormNuevo(){
	$("#nuevoproducto").fadeIn();
	$("#oscurecer").click(desapareceFormNuevo);
	$("#cerrarRegistro").click(desapareceFormNuevo);
}

/****MOSTRAR EL FORMULARIO AGREGAR PRODUCTOS****/
function apareceNuevo(en){
	en.preventDefault();
	$("#oscurecer").fadeIn(400, mostrarFormNuevo);
}


/*MOSTRAMOS LOS FORMULARIOS*/
function mostrarEditaryAgregar(){
	$("#activar_editar").click(apareceEditar);
	$("#activar_agregar").click(apareceNuevo);
}
$(document).ready(mostrarEditaryAgregar);



/**************************************************/
/****FUNCIONES PARA EL PREFIL DEL ADMINISTRADOR****/

/*FORMULARIO EDITAR DATOS ADMIN*/
function desapareceEditarAdmin(){
	$("#oscurecer").fadeOut();
}
function desapareceFormEditarAdmin(){
	$("#editardatosAdmn").fadeOut(300,desapareceEditarAdmin);
}
function mostrarFormEditarAdmin(){
	$("#editardatosAdmn").fadeIn();
	$("#oscurecer").click(desapareceFormEditarAdmin);
	$("#cerrarRegistro").click(desapareceFormEditarAdmin);
}
/****MOSTRAR EL FORMULARIO DE EDITAR DATOS ADMIN****/
function apareceEditarAdmin(ed){
	ed.preventDefault();
	$("#oscurecer").fadeIn(400, mostrarFormEditarAdmin);
}

/*******************AREA DE FORMULARIOS PARA LAS TABLAS*********************/

/*FORMULARIO AGREGAR USUARIOS A LA TABLA*/
function desapareceNuevoUsr(){
	$("#oscurecer").fadeOut();
}
function desapareceFormNuevoUsr(){
	$("#nuevoUsuario").fadeOut(300,desapareceNuevoUsr);
}
function mostrarFormNuevoUsr(){
	$("#nuevoUsuario").fadeIn();
	$("#oscurecer").click(desapareceFormNuevoUsr);
	$("#cerrarRegistro").click(desapareceFormNuevoUsr);
}

/****MOSTRAR EL FORMULARIO AGREGAR USUARIOS****/
function apareceNuevoUsr(en){
	en.preventDefault();
	$("#oscurecer").fadeIn(400, mostrarFormNuevoUsr);
}

/***********************************/
/****FORMULARIO EDITAR USUARIO****/
function desapareceEditarUsr(){
	$("#oscurecer").fadeOut();
}
function desapareceFormEditarUsr(){
	$("#editarUsuario").fadeOut(300,desapareceEditarUsr);
}
function mostrarFormEditarUsr(){
	$("#editarUsuario").fadeIn();
	$("#oscurecer").click(desapareceFormEditarUsr);
	$("#cerrarRegistro").click(desapareceFormEditarUsr);
}

function apareceEditarUsr(en){
	en.preventDefault();
	$("#oscurecer").fadeIn(400, mostrarFormEditarUsr);
}
/*****************************************/
/****************************************/



/****FORMULARIOS AGREGAR ROLES A LA TABLA****/
function desapareceNuevoRl(){
	$("#oscurecer").fadeOut();
}
function desapareceFormNuevoRl(){
	$("#nuevoRol").fadeOut(300,desapareceNuevoRl);
}
function mostrarFormNuevoRl(){
	$("#nuevoRol").fadeIn();
	$("#oscurecer").click(desapareceFormNuevoRl);
	$("#cerrarRegistro").click(desapareceFormNuevoRl);
}

function apareceNuevoRl(en){
	en.preventDefault();
	$("#oscurecer").fadeIn(400, mostrarFormNuevoRl);
}

/***********************************/
/****FORMULARIO EDITAR ROL****/
function desapareceEditarRl(){
	$("#oscurecer").fadeOut();
}
function desapareceFormEditarRl(){
	$("#editarRol").fadeOut(300,desapareceEditarRl);
}
function mostrarFormEditarRl(){
	$("#editarRol").fadeIn();
	$("#oscurecer").click(desapareceFormEditarRl);
	$("#cerrarRegistro").click(desapareceFormEditarRl);
}

function apareceEditarRl(en){
	en.preventDefault();
	$("#oscurecer").fadeIn(400, mostrarFormEditarRl);
}
/*****************************************/
/********************************************/



/****FORMULARIOS AGREGAR ETIQUETAS A LA TABLA****/
function desapareceNuevoTgs(){
	$("#oscurecer").fadeOut();
}
function desapareceFormNuevoTgs(){
	$("#nuevoTag").fadeOut(300,desapareceNuevoTgs);
}
function mostrarFormNuevoTgs(){
	$("#nuevoTag").fadeIn();
	$("#oscurecer").click(desapareceFormNuevoTgs);
	$("#cerrarRegistro").click(desapareceFormNuevoTgs);
}

function apareceNuevoTgs(en){
	en.preventDefault();
	$("#oscurecer").fadeIn(400, mostrarFormNuevoTgs);
}

/***********************************/
/****FORMULARIO EDITAR ETIQUETAS****/
function desapareceEditarTgs(){
	$("#oscurecer").fadeOut();
}
function desapareceFormEditarTgs(){
	$("#editarTag").fadeOut(300,desapareceEditarTgs);
}
function mostrarFormEditarTgs(){
	$("#editarTag").fadeIn();
	$("#oscurecer").click(desapareceFormEditarTgs);
	$("#cerrarRegistro").click(desapareceFormEditarTgs);
}

function apareceEditarTgs(en){
	en.preventDefault();
	$("#oscurecer").fadeIn(400, mostrarFormEditarTgs);
}
/*****************************************/

/***************************************************************************/

/*MOSTRAMOS LOS FORMULARIOS DE LA PÁGINA DEL ADMINISTRADOR*/
function mostrarEditaryAgregarADM(){
	$("#activar_editar_admin").click(apareceEditarAdmin);

	/*Agregar y editar usuario*/
	$("#activar_agregar_usuario").click(apareceNuevoUsr);
	$("#activar_editar_usuario").click(apareceEditarUsr);

	/*Agregar y editar rol*/
	$("#activar_agregar_rol").click(apareceNuevoRl);
	$("#activar_editar_rol").click(apareceEditarRl);

	/*Agregar y editar etiquetas*/
	$("#activar_agregar_tag").click(apareceNuevoTgs);
	$("#activar_editar_Tag").click(apareceEditarTgs);
}
$(document).ready(mostrarEditaryAgregarADM);