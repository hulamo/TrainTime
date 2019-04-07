
var config = {
    apiKey: "AIzaSyC9jUHhdQagSbuEvAngWDQ_WSKzLCGC8Hk",
    authDomain: "bootcamp-test-hugo.firebaseapp.com",
    databaseURL: "https://bootcamp-test-hugo.firebaseio.com",
    projectId: "bootcamp-test-hugo",
    storageBucket: "bootcamp-test-hugo.appspot.com",
    messagingSenderId: "972487557012"
  };
  
  firebase.initializeApp(config);
  
    // Initialize Firebase
  
  
    // Create a variable to reference the database
  
    var database = firebase.database();
    $("#datostabla").html("");
    
    //   
  function refrescar() {
    var database2 = firebase.database().ref("Trains");
    $("#datostabla").html("");
  
  
    database2.orderByChild("TrainName").on("child_added", function(data) {
  
      var d = new Date();
  
  var ano = d.getFullYear();
  var mes = d.getMonth()+1;
  var dia = d.getDate();
  
  var dahora = d.getTime();
  
  
  console.log(d);
  console.log(mes);
  
  
  var Frequency = data.val().Frequency;
  var FirstTime = data.val().FirstTime;
  
  var fech2 = mes +" " + dia + "," + ano + " " + FirstTime+":00";
  
  
  
  var dia2 = new Date(fech2);
  
  var dtren = dia2.getTime();
  
  console.log("dahora"+ dahora);
  console.log("dtren" + dtren);
  
  
  if (dtren >= dahora ){
  
     console.log("Mayor");
  }else {
  
  do  {
      console.log("Menor");
  console.log(Frequency);
  
  dtren = dtren + Frequency*60000;
  } while (dtren < dahora);
  
  
  }
  
  var fechatren2 = new Date(dtren);
  console.log("dahora2"+ Date(dahora));
  console.log("dtren2" + moment(fechatren2));
  
  
  var Horas = "";
  if (fechatren2.getMinutes()<10)
  Horas= fechatren2.getHours() + ":0" + fechatren2.getMinutes();
  else
  Horas= fechatren2.getHours() + ":" + fechatren2.getMinutes();
  
  console.log("Horas" + Horas);
  
  
  var intervalo = (dtren-dahora)/60000;
  intervalo=intervalo.toFixed(0);
  
     console.log(data.val().TrainName);
     $("#datostabla").append("<div class='col-sm-4' style='background-color:white;'>" +
      data.val().TrainName + "</div>" +
      "<div class='col-sm-2' style='background-color:white;'>" +
      data.val().Destination + "</div>" +
      "<div class='col-sm-2' style='background-color:white;'>" +
      data.val().Frequency + "</div>" +
      "<div class='col-sm-2' style='background-color:white;'>" +
      Horas + "</div>" +
      "<div class='col-sm-2' style='background-color:white;'>" +
      intervalo + "</div>"); 
  
  });
  }
  
    $("#submite").on("click", function(event) {
    // Prevent form from submitting
    event.preventDefault();
  
    // Get the input values
  
    var TrainName = $("#TrainName").val();
    var Destination = $("#Destination").val();
    var Frequency = $("#Frequency").val();
    var FirstTime = $("#FirstTime").val();
  
      database.ref("Trains").push({
        TrainName: TrainName,
        Destination: Destination,
        Frequency: Frequency,
        FirstTime: FirstTime,
        
  });
  
  alert("Train Added");
 
  $("#TrainName").val("");
$("#Destination").val("");
$("#Frequency").val("");
$("#FirstTime").val("");
 refrescar;


  });
  
  refrescar();
  setInterval(refrescar  , 3000);

  var mostViewedPosts = firebase.database().ref('Trains');
  // console.log(mostViewedPosts);
  
  
 /* database.ref("Trains").on("child_added", function (childSnapshot) {
  
  // Log everything that's coming out of snapshot
  //console.log(childSnapshot.val().TrainName);
  //console.log(childSnapshot.val().Destination);
  //console.log(childSnapshot.val().Frequency);
  //console.log(childSnapshot.val().FirstTime);
  
  var d = new Date();
  
  var ano = d.getFullYear();
  var mes = d.getMonth()+1;
  var dia = d.getDate();
  
  var dahora = d.getTime();
  
  
  console.log(d);
  console.log(mes);
  
  
  var Frequency = childSnapshot.val().Frequency;
  var FirstTime = childSnapshot.val().FirstTime;
  
  var fech2 = mes +" " + dia + "," + ano + " " + FirstTime+":00";
  
  
  
  
  var dia2 = new Date(fech2);
  
  var dtren = dia2.getTime();
  
  console.log("dahora"+ dahora);
  console.log("dtren" + dtren);
  
  
  if (dtren >= dahora ){
  
     console.log("Mayor");
  }else {
  
  do  {
      console.log("Menor");
  console.log(Frequency);
  
  dtren = dtren + Frequency*60000;
  } while (dtren < dahora);
  
  
  }
  
  var fechatren2 = new Date(dtren);
  console.log("dahora2"+ Date(dahora));
  console.log("dtren2" + moment(fechatren2));
  
  
  var Horas = "";
  if (fechatren2.getMinutes()<10)
  Horas= fechatren2.getHours() + ":0" + fechatren2.getMinutes();
  else
  Horas= fechatren2.getHours() + ":" + fechatren2.getMinutes();
  
  console.log("Horas" + Horas);
  
  
  var intervalo = (dtren-dahora)/60000;
  intervalo=intervalo.toFixed(0);
  
  console.log("Tiempo" + intervalo);
  
  //var dia2 = new Date(ano,mes,dia,FirstTime);
  console.log(fech2);
  
  console.log("fecha2 "+dia2);
  
  
  //console.log(moment(FirstTime).fromNow());
  
  var CurrentDate = moment().add(1,'minute').format('MMMM Do YYYY, h:mm:ss a');
  
  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  
  console.log(moment().startOf('day').fromNow());
  
  console.log(CurrentDate);
  

  
  // full list of items to the well
  $("#datostabla").append("<div class='col-sm-4' style='background-color:white;'>" +
      childSnapshot.val().TrainName + "</div>" +
      "<div class='col-sm-2' style='background-color:white;'>" +
      childSnapshot.val().Destination + "</div>" +
      "<div class='col-sm-2' style='background-color:white;'>" +
      childSnapshot.val().Frequency + "</div>" +
      "<div class='col-sm-2' style='background-color:white;'>" +
      Horas + "</div>" +
      "<div class='col-sm-2' style='background-color:white;'>" +
      intervalo + "</div>"); 
     // " </span><span class='member-email'> " + childSnapshot.val().email +
      //" </span><span class='member-age'> " + childSnapshot.val().age +
      //" </span><span class='member-comment'> " + childSnapshot.val().comment +
     // " </span></div>");
  
  // Handle the errors
  }, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
  });
  
  
  //database.ref("Empleados").on("value", function(snapshot) {
  //snapshot.forEach(function(data){
        
       
       //   Console.log(Nombre);
  //});
  
  // If any errors are experienced, log them to console.
  //}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
  //});
  */
 