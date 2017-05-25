$(document).ready(function() {

  var portfolioPoint = new Waypoint({
    element: document.getElementById('portfolio'),
    handler: function() {
      $("#portfolio").toggleClass("animated tada");
    }
  });

  var panelFormacao = new Waypoint({
    element: document.getElementById('curriculo'),
    handler: function() {
      $("#panelFormacao").toggleClass("animated bounceInUp");
    }
  });

  var yearFormacao = new Waypoint({
    element: document.getElementById('curriculo'),
    handler: function() {
      $("#yearFormacao").toggleClass("animated bounceInDown");
    }
  });

  var panelAndroid = new Waypoint({
    element: document.getElementById('curriculo'),
    handler: function() {
      $("#panelAndroid").toggleClass("animated fadeInLeft");
    }
  });

  var yearAndroid = new Waypoint({
    element: document.getElementById('curriculo'),
    handler: function() {
      $("#yearAndroid").toggleClass("animated fadeInRight");
    }
  });

  var panelOctalysis = new Waypoint({
    element: document.getElementById('curriculo'),
    handler: function() {
      $("#panelOctalysis").toggleClass("animated bounceInUp");
    }
  });

  var yearOctalysis = new Waypoint({
    element: document.getElementById('curriculo'),
    handler: function() {
      $("#yearOctalysis").toggleClass("animated bounceInDown");
    }
  });

  var uxPanel = new Waypoint({
    element: document.getElementById('curriculo'),
    handler: function() {
      $("#uxPanel").toggleClass("animated fadeInLeft");
    }
  });
  var uxYear = new Waypoint({
    element: document.getElementById('curriculo'),
    handler: function() {
      $("#uxYear").toggleClass("animated fadeInRight");
    }
  });

  var habilidadesPointCol = new Waypoint({
    element: document.getElementById('habilidades'),
    handler: function() {
      $("#skillCol").toggleClass("animated bounceInLeft");
    }
  });

  var habilidadesPointCol2 = new Waypoint({
    element: document.getElementById('habilidades'),
    handler: function() {
      $("#skillCol2").toggleClass("animated bounceInRight");
    }
  });

});
