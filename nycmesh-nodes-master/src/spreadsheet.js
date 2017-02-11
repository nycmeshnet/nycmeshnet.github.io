var GoogleSpreadsheet = require('google-spreadsheet');
var doc = new GoogleSpreadsheet('1bczvQFhQ5N2VjTLx1-QA361YkyJrsZ3F7mg0eI9BZWk');

var moment = require('moment');

var fs = require('fs');

function setAuth(cb) {
  var creds = require('../credentials.json');
  console.log("Authorizing with sheets API...")
  doc.useServiceAccountAuth(creds, cb);
}

function generateJson() {
  console.log("Fetching sheet...")
  doc.getRows(3, function(err, rows) { //third worksheet is nodes
    if (err) {
      console.log(err)
      return
    }

    console.log("Generating GeoJSON...")
    var geojson = { "type": "FeatureCollection" }

    geojson.features = rows.map(featureFromRow).filter(function(feature) {
      if (!feature) return false
      if (feature.properties.status == "Abandoned") return false
      return true
    })

    fs.writeFile('./nodes.json', JSON.stringify(geojson, null, 2), function(err) {
      if (err) console.error("Error writing geojson", err)
      else console.log("GeoJSON written to ./nodes.json")
    })
  })
}

function featureFromRow(row, index) {

  const { status, latlng, info, rooftopaccess } = row;
  const id = index+2; // correcting for title row and starts at 0

  var coordinates = latlng.split(', ').reverse().map(function(c) {
    return parseFloat(c)
  })

  if (!coordinates[0]) {
    console.log('Node '+id+' is missing latlng')
    return null
  }

  var feature = {
    type: "Feature",
    properties: {
      id: id,
      status: status
    },
    geometry: {
      coordinates: coordinates,
      type: "Point"
    }
  }

  if (info) {
    feature.properties.info = info;
  }

  if (rooftopaccess && rooftopaccess != '') {
    feature.properties.roof = true;
  }

  // get panoramas
  // pretty hacky but should work fine for now
  if (fs.existsSync('panoramas/'+id+'.jpg')) {
    feature.properties.panoramas = [id+'.jpg'];

    if (fs.existsSync('panoramas/'+id+'a.jpg')) {
      feature.properties.panoramas.push(id+'a.jpg');
    }
    if (fs.existsSync('panoramas/'+id+'b.jpg')) {
      feature.properties.panoramas.push(id+'b.jpg');
    }
    if (fs.existsSync('panoramas/'+id+'c.jpg')) {
      feature.properties.panoramas.push(id+'c.jpg');
    }
  }

  return feature;
}

function panoramasForNode() {

}

function addNode(data, cb) {
  sheet.addRow(data, function(err) {
    cb(err)
  })
}

setAuth(generateJson)
