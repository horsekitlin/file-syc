
/*
 * GET home page.
 */
var mongoose = require( 'mongoose' );
var db = require('../db.config/mongoDB.config.js');
var file_info = db.file_info.model( 'file_info');
var mongoose = require("mongoose");
exports.index = function(req, res){
    res.render('index', {});
};

exports.fileupload = function(req, res){
    var i,
    target_path,
    mongo_insert,
    upload_rs,
    now= new Date();
    console.log(now.toLocaleString());
    var result=new Array();
    var fs = require('fs');
    var file=req.files.files;
    var tmp_path=file.path,
        upload_rs=false,
        target_path="/data/epubreader/"+file.name;
    
         fs.rename(tmp_path , target_path , function(err){
            if(!err){
                var upload_rs=true;
                new file_info({
                    filename:file.name
                    ,filesize:file.size
                    ,filetype:file.type
                    ,upload_type:upload_rs
                    ,date:now.toLocaleTimeString()
                    }).save(function( err, user, count ){
                        var mongo_insert=true;
                    });               
                }
            res.redirect('/');
        });
    }
