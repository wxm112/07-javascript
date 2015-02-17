var route = {
  lines: {lineN: ['times square', '34th', '28th', '23rd','union square', '8th'],
          lineL: ['8th', '6th', 'union square', '3rd', '1st'],
          line6: ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place']
        },

  checkLine: function(startLine, endLine) {
    if (this.lines[startLine] === undefined) {
      return "There is no such line: " + startLine;
    } else if (this.lines[endLine] === undefined) {
      return "There is no such line: " + endLine;
    } else if (startLine === endLine) {
        return true;
    } else {
       return false;
    }
  },

  sameLineStations: function(line,statStation,endStation){
    var statStationIndex = this.lines[line].indexOf(statStation);
    var endStationIndex = this.lines[line].indexOf(endStation);
    if (statStationIndex < endStationIndex){
      var endIndex = endStationIndex + 1;
      var stations = this.lines[line].slice(statStationIndex, endIndex);
      return stations
    } else {
        var endIndex = statStationIndex + 1;
        var stations = this.lines[line].slice(endStationIndex, endIndex);
        return stations.reverse();
    }
  },

  diffLineStations: function(startLine,statStation,endLine,endStation){
    var firstPartStations = this.sameLineStations(startLine, statStation,"union square");
    var secondPartStations =  this.sameLineStations(endLine, "union square", endStation);
    var stations = firstPartStations.concat(secondPartStations);
    var index = stations.indexOf("union square");
    var removeExtraStation =  stations.splice(index,1);
    return stations
  },

  result: function(startLine,statStation,endLine,endStation) {
    var check = this.checkLine(startLine,endLine)
    if (check === true) {
      var stations = this.sameLineStations(startLine, statStation,endStation);
    } else if (check === false) {
        var stations = this.diffLineStations(startLine, statStation,endLine,endStation);
    } else {
        return check;
    }
    var numberOfStations = stations.length;
    var stationsList = stations.join(",");
    return "There are " + numberOfStations + " stations. " + "They are: " + stationsList + ".";ccccccdcdihvvdndttvdctellkrkiffrebjjvvbgtulc
    
  }
};

console.log("Test 1: " + route.result('lineN', '8th', 'lineN', 'times square'));
console.log("Test 2: " + route.result('lineN', '28th', 'lineN', '8th'));
console.log("Test 3: " + route.result('lineL', '8th', 'lineL', '1st'));
console.log("Test 4: " + route.result('lineL', '1st', 'lineL', '8th'));
console.log("Test 5: " + route.result('line6', 'grand central', 'line6', '23rd'));
console.log("Test 6: " + route.result('line6', 'astor place', 'line6', '23rd'));
console.log("Test 7: " + route.result('line4', 'iii', 'lineL', '1st'));
console.log("Test 8: " + route.result('lineN', '8th', 'lineL', '1st'));
console.log("Test 9: " + route.result('line6', 'astor place', 'lineL', '1st'));
console.log("Test 10: " + route.result('lineN', 'times square', 'line6', 'grand central'));
console.log("Test 11: " + route.result('lineL', '3rd', 'lineN', '34th'));






