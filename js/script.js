$(document).ready(function () {
	$("#enviar").bind('click', function () {
		var nome = $("#name").val();
		var email = $("#email").val();
		var telefone = $("#telefone").val();
		var $mensagem = $("#mensagem").val();

		$.ajax({
			type: 'POST',
			url: 'email.php',
			data: 'name=' + nome + '&email=' + email + '&telefone=' + telefone + '&email=' + email + '&mensagem=' + $mensagem, // NÃO ESQUEÇA DE PASSAR OS VALORES POR AQUI
			cache: false,
			success: function (result, status) {}
		});
	});
	$("#telefone").mask("(00) 00000000");
	var s = skrollr.init();
});

$('#myForm').submit(function (e) {
	$('#mensagemEnviada').html('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Mensagem enviada com! <strong>Sucesso...</strong></div>');
	limpaCampos();
	resetPlaceholders();
	e.preventDefault();

});

function limpaCampos() {
	$('#name').val("");
	$('#email').val("");
	$('#telefone').val("");
	$('#mensagem').val("");
}

function resetPlaceholders() {
	$('#name').attr("placeholder", "nome");
	$('#email').attr("placeholder", "Email");
	$('#telefone').attr("placeholder", "Telefone");
	$('#mensagem').attr("placeholder", "Sua mensagem ou dúvida...");
}

var profilePoint = new Waypoint({
	element: document.getElementById('profile'),
	handler: function () {
		$("#profile").toggleClass("animated pulse");
	}
});

var portfolioPoint = new Waypoint({
	element: document.getElementById('portfolio'),
	handler: function () {
		$("#portfolio").toggleClass("animated tada");
	}
});

var estrategiaPoint = new Waypoint({
	element: document.getElementById('servicos'),
	handler: function () {
		$("#estrategia").toggleClass("animated fadeInLeft");
	}
});
var marcaPoint = new Waypoint({
	element: document.getElementById('servicos'),
	handler: function () {
		$("#marca").toggleClass("animated fadeInDownBig");
	}
});
var webdesignPoint = new Waypoint({
	element: document.getElementById('servicos'),
	handler: function () {
		$("#webdesign").toggleClass("animated fadeInUpBig");
	}
});
var desenvolvimentoPoint = new Waypoint({
	element: document.getElementById('servicos'),
	handler: function () {
		$("#desenvolvimento").toggleClass("animated fadeInRight");
	}
});

var panelFormacao = new Waypoint({
	element: document.getElementById('curriculo'),
	handler: function () {
		$("#panelFormacao").toggleClass("animated bounceInUp");
	}
});
var yearFormacao = new Waypoint({
	element: document.getElementById('curriculo'),
	handler: function () {
		$("#yearFormacao").toggleClass("animated bounceInDown");
	}
});
var panelCertificacao = new Waypoint({
	element: document.getElementById('curriculo'),
	handler: function () {
		$("#panelCertificacao").toggleClass("animated fadeInRight");
	}
});
var yearItil = new Waypoint({
	element: document.getElementById('curriculo'),
	handler: function () {
		$("#yearItil").toggleClass("animated fadeInLeft");
	}
});
var panelAndroid = new Waypoint({
	element: document.getElementById('curriculo'),
	handler: function () {
		$("#panelAndroid").toggleClass("animated fadeInLeft");
	}
});
var yearAndroid = new Waypoint({
	element: document.getElementById('curriculo'),
	handler: function () {
		$("#yearAndroid").toggleClass("animated fadeInRight");
	}
});
var panelDell = new Waypoint({
	element: document.getElementById('curriculo'),
	handler: function () {
		$("#panelDell").toggleClass("animated bounceInDown");
	}
});
var yearDell = new Waypoint({
	element: document.getElementById('curriculo'),
	handler: function () {
		$("#yearDell").toggleClass("animated bounceInUp");
	}
});
var habilidadesPoint = new Waypoint({
	element: document.getElementById('habilidades'),
	handler: function () {
		$("#skills, #skills2, #skills3, #skills4, #skills5, #skills6, #skills7, #skills8").toggleClass("animated bounceInLeft");
	}
});
var contato = new Waypoint({
	element: document.getElementById('habilidades'),
	handler: function () {
		$("#contato").toggleClass("animated jello");
	}
});