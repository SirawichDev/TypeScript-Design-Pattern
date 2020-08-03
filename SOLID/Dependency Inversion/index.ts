/**
 ** DIP Definition
 ** 1.High-level modules should not depend on low-level modules. Both should depend on the abstraction(interface).
 ** 2.Abstractions should not depend on details. Details should depend on abstractions.
 * ! high-level module(concrete classes) and low-level module(concrete classes)  both should depends on abstraction or interface
 */

import * as fs from "fs";

export interface Post {
  id: number;
  title: string;
  body: string;
  postedBy: string;
}

export interface IPostsService {
  getAll(): Promise<Post[] & string>;
  save(post: Post): Promise<void>;
}

//Low Level
export class PostsService implements IPostsService {
  private _fileName: string = "../../posts.json";
  constructor() {}
  getAll(): Promise<Post[] & string> {
    return new Promise((resolve, reject) => {
      fs.readFile(this._fileName, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(data));
      });
    });
  }
  save(post: Post): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getAll().then((posts) => {
        posts.push(post);
        fs.writeFile(this._fileName, posts, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    });
  }
}

//Hight Level
export class NewsFeed {
  constructor(private _service: IPostsService) {}
  show() {
    this._service.getAll().then((posts) => {
      posts.forEach((post) => {
        console.log(`${post.title} - ${post.body}`);
      });
    });
  }
}

let newsFeed = new NewsFeed(new PostsService());
newsFeed.show();
