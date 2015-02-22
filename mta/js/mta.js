var route = {
  lines: {lineN: ['times square', '34th', '28th', '23rd','union square', '8th'],
          lineL: ['8th', '6th', 'union square', '3rd', '1st'],
          line6: ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place']
        },

  sameLineStations: function(line,statStation,endStation){
    var statStationIndex = this.lines[line].indexOf(statStation);
    var endStationIndex = this.lines[line].indexOf(endStation);
    if (statStationIndex < endStationIndex){
      var endIndex = endStationIndex + 1;
      return this.lines[line].slice(statStationIndex, endIndex);
    } else {
        var endIndex = statStationIndex + 1;
        return this.lines[line].slice(endStationIndex, endIndex).reverse();
    }
  },

  diffLineStations: function(startLine,statStation,endLine,endStation){
    var firstPartStations = this.sameLineStations(startLine, statStation,"union square");
    var secondPartStations =  this.sameLineStations(endLine, "union square", endStation);
    var stations = firstPartStations.concat(secondPartStations);
    var index = stations.indexOf("union square");
    var removeExtraStation =  stations.splice(index,1);
    return stations;
  },

  result: function(startLine,statStation,endLine,endStation) {
    if (startLine === endLine) {
      var stations = this.sameLineStations(startLine, statStation,endStation);
    } else{
        var stations = this.diffLineStations(startLine, statStation,endLine,endStation);
    } 
    var numberOfStations = stations.length;
    var stationsList = stations.join(",");
    return "There are " + numberOfStations + " stations. " + "They are: " + stationsList + "."; 
  }
};



$(document).ready(function () {
  var menu = function () {
    var hash = route.lines
    $.each(hash, function(key, value) {
      var $group = $("<optgroup class='startGroup'/>").attr("label",key);
      $group.val(key);
      $.each(value, function (i, station) {
        var $option = $("<option class='engingGroup'/>");
        $option.text(station);
        $group.append($option);
      });
      $group.appendTo('.select');
    });
  };
  menu();

  var ruteRusult = function() {
    var $startStation = $("#start_point option:selected").val();
    var $startLine =$("#start_point option:selected").parent().attr('label');
    var $engingStation = $("#ending_point option:selected").val();
    var $endingLine =$("#ending_point option:selected").parent().attr('label');
    var $result = route.result($startLine, $startStation,$endingLine,$engingStation);
    $('#result').text($result);
  }

  $('#submit').on("click", ruteRusult);

});



console.log("Test 1: " + route.result('lineN', '8th', 'lineN', 'times square'));
console.log("Test 2: " + route.result('lineN', '28th', 'lineN', '8th'));
console.log("Test 3: " + route.result('lineL', '8th', 'lineL', '1st'));
console.log("Test 4: " + route.result('lineL', '1st', 'lineL', '8th'));
console.log("Test 5: " + route.result('line6', 'grand central', 'line6', '23rd'));
console.log("Test 6: " + route.result('line6', 'astor place', 'line6', '23rd'));
console.log("Test 7: " + route.result('lineN', '8th', 'lineL', '1st'));
console.log("Test 8: " + route.result('line6', 'astor place', 'lineL', '1st'));
console.log("Test 9: " + route.result('lineN', 'times square', 'line6', 'grand central'));
console.log("Test 10: " + route.result('lineL', '3rd', 'lineN', '34th'));






