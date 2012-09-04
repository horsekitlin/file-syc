/*
 *example
 */
 exports.home = function(req,res){
     var fs = require('fs');
     var tmp_path=req.files.file.path;
     var target_path="/data/oxenote/"+req.files.file.name;
     fs.rename(tmp_path , target_path , function(err){
         console.log(err);
     //   if (err) throw err;
        fs.unlink(tmp_path,function(){
         //   if(err) throw err;
            res.send("File upload To : "+target_path);
            });
         });
        res.render('home',{
            title:'file_upload',
            file_name:req.files.file.name,
            file_size:req.files.file.size,
            temp_path:req.files.file.path
        });
     };
