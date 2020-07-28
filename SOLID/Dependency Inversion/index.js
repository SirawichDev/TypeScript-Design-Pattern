"use strict";
/**
 ** DIP Definition
 ** 1.High-level modules should not depend on low-level modules. Both should depend on the abstraction.
 ** 2.Abstractions should not depend on details. Details should depend on abstractions.
 * ! high-level module(concrete classes) and low-level module(concrete classes)  both should depends on abstraction or interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
//Low Level
var PostsService = /** @class */ (function () {
    function PostsService() {
        this._fileName = "../../posts.json";
    }
    PostsService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fs.readFile(_this._fileName, "utf8", function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(data));
            });
        });
    };
    PostsService.prototype.save = function (post) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAll().then(function (posts) {
                posts.push(post);
                fs.writeFile(_this._fileName, posts, function (err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            });
        });
    };
    return PostsService;
}());
exports.PostsService = PostsService;
//Hight Level
var NewsFeed = /** @class */ (function () {
    function NewsFeed(_service) {
        this._service = _service;
    }
    NewsFeed.prototype.show = function () {
        this._service.getAll().then(function (posts) {
            posts.forEach(function (post) {
                console.log(post.title + " - " + post.body);
            });
        });
    };
    return NewsFeed;
}());
exports.NewsFeed = NewsFeed;
var newsFeed = new NewsFeed(new PostsService());
newsFeed.show();
