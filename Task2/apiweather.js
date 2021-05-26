var dataObject = {  //creating json object to for both (select options) dropdowns
  "England": {   //England object with all cities of England
    "Bath": [],"Bristol": [],"Birmingham": [],"Bradford": [],"Bournemouth": [],"Cambridge": [],"Canterbury": [],"Chester": [],"Derby": [], 
	"Exeter": [],"Gloucester": [],"Lancaster": [],"Leeds": [],"Liverpool": [],"London": [],"Manchester": [],"Newcastle upon Tyne": [],"Norwich": [],
	"Nottingham": [],"Oxford": [],"Plymouth": [],"Ripon": [],"Salford": [],"Sheffield": [],"Wakefield": [],"Wolverhampton": [],"Worcester": []
  },
  "Scotland": { //Scotland object with all cities of Scotland
    "Aberdeen": [],"Dundee": [],"Edinburgh": [],"Glasgow": [],"Inverness": []
  },
  "North Ireland": {//NorthIreland object with all cities of NorthIreland
    "Armagh": [],"Belfast": [],"Londonderry": [],"Lisburn": [],"Newry": []
  },
  "Wales": { //Wales object with all cities of Wales
    "Bangor": [],"Cardiff": [],"Newport": [],"Swansea": []
  }
}
window.onload = function() {    // this function runs whenever window is completely loaded
  var countrySel = document.getElementById("country");   // getting first dropdown i.e. country in a variable
  var citySel = document.getElementById("city");  // getting second dropdown i.e. city in a variable
  for (var x in dataObject) {
    countrySel.options[countrySel.options.length] = new Option(x, x);   // push data of country into country dropdown
  }
  
  countrySel.onchange = function() {  // onchange function for country drop down (function runs whenever country dropdown is changed)
    //empty Chapters- and Topics- dropdowns
    citySel.length = 1;  // empty the city dropdown whenever country dropdown is changed
    //display correct values
    for (var y in dataObject[this.value]) {
      citySel.options[citySel.options.length] = new Option(y, y);  // push data of respective country into city dropdown
    }
  }
}