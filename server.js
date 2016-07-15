var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/web_ject/' ;

router.use( function ( req, res, next ) {
	console.log( '/' + req.method );
	next();
});

router.get( '/home', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'index.html');
});

router.get( '/D3MIN', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'js/d3.min.js');
});

router.get( '/Europe', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'Europe.html');
});

router.get( '/Africa', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'Africa.html');
});

router.get( '/Australia', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'Australia.html');
});

router.get( '/Asia', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'Asia.html');
});

router.get( '/NAmer', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'NAmer.html');
});

router.get( '/EuG', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/eu_graph.html');
});

router.get( '/AfG', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/af_graph.html');
});

router.get( '/AuG', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/au_graph.html');
});

router.get( '/AsG', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/as_graph.html');
});

router.get( '/NaG', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/na_graph.html');
});

router.get( '/EuG1', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/eu_graph1.html');
});

router.get( '/EuG2', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/eu_graph2.html');
});

router.get( '/AfG2', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/af_graph2.html');
});

router.get( '/AuG2', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/au_graph2.html');
});

router.get( '/AsG2', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/as_graph2.html');
});

router.get( '/NaG2', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/na_graph2.html');
});

router.get( '/EuG3', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/eu_graph3.html');
});

router.get( '/AfG3', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/af_graph3.html');
});

router.get( '/AuG3', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/au_graph3.html');
});

router.get( '/AsG3', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/as_graph3.html');
});

router.get( '/NaG3', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/na_graph3.html');
});

router.get( '/EuG4', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/eu_graph4.html');
});

router.get( '/AfG4', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/af_graph4.html');
});

router.get( '/AuG4', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/au_graph4.html');
});

router.get( '/AsG4', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/as_graph4.html');
});

router.get( '/NaG4', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/na_graph4.html');
});

router.get( '/EuG5', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/eu_graph5.html');
});

router.get( '/AfG5', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/af_graph5.html');
});

router.get( '/AuG5', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/au_graph5.html');
});

router.get( '/AsG5', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/as_graph5.html');
});

router.get( '/NaG5', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/na_graph5.html');
});

router.get( '/EuG6', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/eu_graph6.html');
});

router.get( '/AfG6', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/af_graph6.html');
});

router.get( '/AuG6', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/au_graph6.html');
});

router.get( '/AsG6', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/as_graph6.html');
});

router.get( '/NaG6', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/na_graph6.html');
});

router.get( '/EuG7', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/eu_graph7.html');
});

router.get( '/AfG7', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/af_graph7.html');
});

router.get( '/AuG7', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/au_graph7.html');
});

router.get( '/AsG7', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/as_graph7.html');
});

router.get( '/NaG7', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/na_graph7.html');
});

router.get( '/EuG8', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/eu_graph8.html');
});

router.get( '/AfG8', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/af_graph8.html');
});

router.get( '/AuG8', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/au_graph8.html');
});

router.get( '/AsG8', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/as_graph8.html');
});

router.get( '/NaG8', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/na_graph8.html');
});

router.get( '/EuG9', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/eu_graph9.html');
});

router.get( '/AfG9', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/af_graph9.html');
});

router.get( '/AuG9', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/au_graph9.html');
});

router.get( '/AsG9', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/as_graph9.html');
});

router.get( '/NaG9', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/na_graph9.html');
});

router.get( '/BootstrapCoreCSS', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'css/bootstrap.min.css');
});

router.get( '/BootstrapCoreCSSRTL', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'css/bootstrap-rtl.min.css');
});

router.get( '/CustomCSS', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'css/sb-admin.css');
});

router.get( '/Service', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'continents/service.html');
});

router.get( '/CustomCSSRTL', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'css/sb-admin-rtl.css');
});

router.get( '/MorrisChartsCSS', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'css/plugins/morris.css');
});

router.get( '/CustomFonts', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'font-awesome/css/font-awesome.min.css');
});

router.get( '/BootstrapCoreCSS', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'css/bootstrap.min.css');
});

router.get( '/jQuery', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'js/jquery.js');
});

router.get( '/BootstrapCoreJavaScript', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'js/bootstrap.min.js');
});

router.get( '/Raphael', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'js/plugins/morris/raphael.min.js');
});

router.get( '/Morris', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'js/plugins/morris/morris.min.js');
});

router.get( '/MorrisData', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'js/plugins/morris/morris-data.js');
});

router.get( '/F0', function ( req, res ) {
        console.log(path+'index.html');
	res.sendFile(path+'font-awesome/');
});

router.get( '/F1', function ( req, res ) {
        console.log(path+'index.html');
	// res.sendFile(path+'font-awesome/fonts/fontawesome-webfont.eot?v=4.2.0');
		res.sendFile(path+'font-awesome/fonts/fontawesome-webfont.eot');
});

router.get( '/F2', function ( req, res ) {
        console.log(path+'index.html');
	// res.sendFile(path+'font-awesome/fonts/fontawesome-webfont.woff?v=4.2.0');
		res.sendFile(path+'font-awesome/fonts/fontawesome-webfont.woff');
});

router.get( '/F3', function ( req, res ) {
        console.log(path+'index.html');
	// res.sendFile(path+'font-awesome/fonts/fontawesome-webfont.ttf?v=4.2.0');
		res.sendFile(path+'font-awesome/fonts/fontawesome-webfont.ttf');
});

router.get( '/F4', function ( req, res ) {
        console.log(path+'index.html');
	// res.sendFile(path+'font-awesome/fonts/fontawesome-webfont.svg?v=4.2.0#fontawesomeregular');
		res.sendFile(path+'font-awesome/fonts/fontawesome-webfont.svg#fontawesomeregular');
});

router.get( '/DashG', function ( req, res ) {
        console.log(path+'index.html');
	// res.sendFile(path+'font-awesome/fonts/fontawesome-webfont.svg?v=4.2.0#fontawesomeregular');
		res.sendFile(path+'continents/dash_graph.html');
});

router.get( '/fonts/glyphicons-halflings-regular.woff2', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'fonts/glyphicons-halflings-regular.woff2');
});

router.get( '/fonts/glyphicons-halflings-regular.woff', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'fonts/glyphicons-halflings-regular.woff');
});

router.get( '/fonts/glyphicons-halflings-regular.ttf', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'fonts/glyphicons-halflings-regular.ttf');
});

router.get( '/llN', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'continents/lln.html');
});

router.get( '/dash_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/country_fre.csv');
});

router.get( '/eu_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/eu.csv');
});

router.get( '/af_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/af.csv');
});

router.get( '/au_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/au.csv');
});

router.get( '/as_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/as.csv');
});

router.get( '/na_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/na.csv');
});

router.get( '/eu1_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/eu1.csv');
});

router.get( '/eu2_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/eu2.csv');
});

router.get( '/af2_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/af2.csv');
});

router.get( '/as2_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/as2.csv');
});

router.get( '/au2_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/au2.csv');
});

router.get( '/na2_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/na2.csv');
});

router.get( '/eu3_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/eu3.csv');
});

router.get( '/af3_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/af3.csv');
});

router.get( '/au3_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/au3.csv');
});

router.get( '/as3_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/as3.csv');
});

router.get( '/na3_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/na3.csv');
});

router.get( '/eu4_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/eu4.csv');
});

router.get( '/af4_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/af4.csv');
});

router.get( '/au4_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/au4.csv');
});

router.get( '/as4_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/as4.csv');
});

router.get( '/na4_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/na4.csv');
});

router.get( '/eu5_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/eu5.csv');
});

router.get( '/af5_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/af5.csv');
});

router.get( '/au5_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/au5.csv');
});

router.get( '/as5_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/as5.csv');
});

router.get( '/na5_graph_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/na5.csv');
});

router.get( '/dash_graph_php', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'php/dash_graph.php');
});

router.get( '/dash_graph_json', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'json/dash_graph.json');
});

router.get( '/lln_csv', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'data/lln.csv');
});

router.get( '/jquery.csv.min.js', function ( req, res ) {
        console.log(path+'index.html');
		res.sendFile(path+'php/csv_min.js');
});



app.use( '/', router );
app.listen(1919,function(){
	console.log("Running 1919");
});
