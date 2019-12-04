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

function mostrarEditaryAgregar(){
	$("#activar_editar").click(apareceEditar);
	$("#activar_agregar").click(apareceNuevo);
}
$(document).ready(mostrarEditaryAgregar);