const Todo = require("../model/schema")
const HTTP = require("../../constant/response.constant");

var path = require("path");
const { copyFileSync } = require("fs");

class class1 {

    static a = async (req, res) => {

        try {

            var a = await Todo.find({});

            let data = new Todo({

                image: req.file.filename

            })

            await data.save();

            res.send("file upload")

        } catch (err) {

            console.log(err);
            return res.status(HTTP.SUCCESS).send({
                "errors" : [{
                        "message" : "Something went wrong!",
                        "code" : HTTP.INTERNAL_SERVER_ERROR
                    }
                ]
            })

        }

    }

    static b = async (req, res) => {

        try {
        
            res.render("files");
    
        } catch (e) {

            console.log(err);
            return res.status(HTTP.SUCCESS).send({
                "errors" : [{
                        "message" : "Something went wrong!",
                        "code" : HTTP.INTERNAL_SERVER_ERROR
                    }
                ]
            })

        }

    }

    static c = async (req, res) => {

        try {

            for(var j = 0 ; j<req.files.length ; j++){

                let data = new Todo({

                    image: req.files[j].filename
    
                })

                await data.save();
                
            }

            res.send("file upload")
            
        } catch (err) {

            console.log(err);
            return res.status(HTTP.SUCCESS).send({
                "errors" : [{
                        "message" : "Something went wrong!",
                        "code" : HTTP.INTERNAL_SERVER_ERROR
                    }
                ]
            })

        }

    }

    static d = async (req, res) => {

        try {

            await Todo.find({}).deleteMany();

            res.send("data deleted");
    
        } catch (e) {

            console.log(err);
            return res.status(HTTP.SUCCESS).send({
                "errors" : [{
                        "message" : "Something went wrong!",
                        "code" : HTTP.INTERNAL_SERVER_ERROR
                    }
                ]
            })
        }

    }

    static e = async (req, res) => {

        try {
        
            var a = await Todo.find({});

            var array = [] ;

            for(var i = 0 ; i<a.length ; i++){
                array.push(`https://memwolds.herokuapp.com/${a[i].image}`);
            }

            var data = {
                "url":array
                }

            res.send(data);
            // res.render("show" , { array , url  })
    
        } catch (e) {

            console.log(e);
            return res.status(HTTP.SUCCESS).send({
                "errors" : [{
                        "message" : "Something went wrong!",
                        "code" : HTTP.INTERNAL_SERVER_ERROR
                    }
                ]
            })

        }

    }

    static f = async (req, res) => {

        try {
        
            var a = await Todo.find({});

            var array = [] ;

            for(var i = 0 ; i<a.length ; i++){
                array.push(`https://memwolds.herokuapp.com/${a[i].image}`);
            }

            res.render("show" , { array })
    
        } catch (e) {

            console.log(e);
            return res.status(HTTP.SUCCESS).send({
                "errors" : [{
                        "message" : "Something went wrong!",
                        "code" : HTTP.INTERNAL_SERVER_ERROR
                    }
                ]
            })

        }

    }

    static g = async (req, res) => {

        try {
        
            var a = await Todo.find({});

            var array = [] ;

            for(var i = 0 ; i<a.length ; i++){
                array.push(`https://memwolds.herokuapp.com/${a[i].image}`);
            }

            res.render("show3" , { array })
    
        } catch (e) {

            console.log(e);
            return res.status(HTTP.SUCCESS).send({
                "errors" : [{
                        "message" : "Something went wrong!",
                        "code" : HTTP.INTERNAL_SERVER_ERROR
                    }
                ]
            })

        }

    }

}

module.exports = { class1 };
