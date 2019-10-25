var express = require('express'),
	path = require('path'),
	bodyParser = require ('body-parser'),
	cons = require('consolidate'),
	dust = require('dustjs-helpers'),
	pg = require('pg'),
	app = express();

var connect = "postgres://postgres:123456@localhost/Names_Ids";
