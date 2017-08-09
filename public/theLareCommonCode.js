var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
};

var modal = document.getElementById('myModal');
var popUpEvent = function(popUpText) {
  modal.style.display = "block";
};
