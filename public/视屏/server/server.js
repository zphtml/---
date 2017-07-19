/**
 * Created by lovering on 16/9/23.
 */

var exp = require("express");

var fs = require("fs");

var path = require("path");

var app = exp();

app.use(exp.static("../music/"));

app.get("/music",function (req,res) {

    var musicPath = path.resolve(__dirname,"../music");

    var obj = {};

    var url = "http://localhost:1314/";
    //http://localhost:1314/music/薛之谦-演员.mp3

    //利用fs 的 readdir 读取 ../music/ 路径下的文件名
    fs.readdir("../music/",function (err,files) {

        //遍历读取出来的文件名 分别拼接成url
        files.forEach(function (item,index) {

            // console.log(url + item);

            //将拼接好的url 以文件名为key url 为 value 存储到obj里 以便进行json字符串转换
            obj[item] = url + item;


        })

        // console.log(obj);

        //添加请求头 解决跨域问题
        res.setHeader("Access-Control-Allow-Origin","*");

        //将obj转换成json 字符串 返回到 客户端
        res.send(JSON.stringify(obj));

        //path.resolve 是将一个相对于第一个绝对路径的相对路径转换为一个绝对路径
        // console.log(files);

    })

    //接收到请求 在此处把歌曲信息返回给客户端即可
    // res.send("");

})


app.listen(1314,function () {

    console.log("监听1314 端口成功!")

})