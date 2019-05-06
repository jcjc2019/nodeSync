const User = require("./models/User");
const Script = require("./models/Script");
//TO DO:
//1. create userscript as model
//2. reseed data

User.sync();
// User.destroy()
Script.sync();
// Script.destroy()

const users = [
  {
    username: "Cory",
    password: "password"
  },
  {
    username: "Jing",
    password: "password"
  },
  {
    username: "Eli",
    password: "password"
  }
];

users.forEach(user => User.create(user));

const scripts = [
  {
    title: "hello.js",
    content: "const hello = 'Hello' ",
    language: "JavaScript",
    category: "variable"
  },
  {
    title: "world.js",
    content: "const world = 'world' ",
    language: "JavaScript",
    category: "variable"
  },
  {
    title: "helloWorld.js",
    content: 'console.log("Hello World")',
    language: "JavaScript",
    category: "print"
  },
  {
    title: "hello_world.rb",
    content: "puts 'Hello World!'",
    language: "Ruby",
    category: "print"
  },
  {
    title: "helloWorld.p",
    content: 'print("Hello, World!")',
    language: "Python",
    category: "print"
  },
  {
    title: "helloWorld_2.js",
    content: 'console.log("Hello World")',
    language: "JavaScript",
    category: "print"
  },
  {
    title: "hello_world_2.rb",
    content: "puts 'Hello World!'",
    language: "Ruby",
    category: "print"
  },
  {
    title: "helloWorld_2.p",
    content: 'print("Hello, World!")',
    language: "Python",
    category: "print"
  },
  {
    title: "helloWorld_3.js",
    content: 'console.log("Hello World")',
    language: "JavaScript",
    category: "print"
  },
  {
    title: "hello_world_3.rb",
    content: "puts 'Hello World!'",
    language: "Ruby",
    category: "print"
  },
  {
    title: "helloWorld_3.p",
    content: 'print("Hello, World!")',
    language: "Python",
    category: "print"
  }
];

scripts.forEach(script => Script.create(script));

const userScripts = [
  {
    userId: 1,
    scriptId: 1
  },
  {
    userId: 2,
    scriptId: 2
  },
  {
    userId: 3,
    scriptId: 3
  },
  {
    userId: 1,
    scriptId: 3
  },
  {
    userId: 1,
    scriptId: 2
  },
  {
    userId: 2,
    scriptId: 1
  },
  {
    userId: 2,
    scriptId: 3
  },
  {
    userId: 3,
    scriptId: 1
  },
  {
    userId: 3,
    scriptId: 2
  },
  {
    userId: 1,
    scriptId: 4
  },
  {
    userId: 2,
    scriptId: 4
  },
  {
    userId: 3,
    scriptId: 4
  },
  {
    userId: 1,
    scriptId: 5
  },
  {
    userId: 2,
    scriptId: 6
  },
  {
    userId: 3,
    scriptId: 7
  },
  {
    userId: 1,
    scriptId: 8
  },
  {
    userId: 2,
    scriptId: 8
  },
  {
    userId: 2,
    scriptId: 9
  },
  {
    userId: 3,
    scriptId: 9
  },
  {
    userId: 1,
    scriptId: 10
  },
  {
    userId: 2,
    scriptId: 10
  },
  {
    userId: 3,
    scriptId: 10
  },
  {
    userId: 3,
    scriptId: 11
  }
];

userScripts.forEach(userScript => UserScript.create(userScript));
