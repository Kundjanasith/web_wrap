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
		res.sendFile(path+'data/country_mag.csv');
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
