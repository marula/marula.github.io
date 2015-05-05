# Yumee Tool Investigation

####Server side frameworks:
These frameworks provide structure, libraries, ecosystems and web servers as a combined package to help you build websites, web applications and web api's. When you hit a URL you hit your load balancer which passes on the request to your web application. The server side application talks to your db, manipulates the objects and returns the appropriate data.

- [Spring (Java)](http://spring.io) is the most popular Java framework. 
- [Play 2.0 (Java and Scala)](https://www.playframework.com) is my favourite Java framework. It's very fast and it supports Scala. It was used by some people in last years CS334 project.
- [Django (Python)](https://www.djangoproject.com) is the most popular Python framework.
- [Sinatra (Ruby)](http://www.sinatrarb.com) a minimalist Ruby framework used mostly for small projects.
- [Expressjs (Javascript and CoffeeScript)](http://expressjs.com) is the most popular Nodejs framework. It's a very minimalistic framework (inspired by Sinatra) but for small sites it's nice to work with. The Node ecosystem is the second largest behind the Rails one. I think it is used at Ebay, LinkedIn, Walmart and Yahoo. This one was used by most people last year.
- [Rails (Ruby)](https://github.com/rails/rails) the worlds most popular web framework. Largest ecosystem, nicest server side language (my opinion), biggest community (try searching for a Play 2.0 bug on stack-overflow vs searching for a Rails bug!) Rails is used by Github, Twitch, Soundcloud, AirBnB, Hulu.

*Note*: Twitter ran into scaling issues using Rails and switched to in house Java, Scala and Clojure frameworks, however when you read their engineering reports you will see that almost all of their scaling issues came from MySQL and that they solved most of their problems by building on open source solutions implemented by database engineers working on MySQL at Facebook and Google. As well as using NoSQL, Hadoop and Cassandra for certain things. Here is an [old slideshow](http://www.mysql.com/news-and-events/events/innovation-day/slides/Scaling%20MySQL%20at%20Twitter%20-%20MySQL%20Innovation%20Day.pdf) during the time they were working heavily on fixing scaling, note that a lot of the information in these slides are no longer applicable.


#### Client side frameworks/libraries:
Client side libraries provide an interface which we can use to make our web pages function dynamically similar to native applications.

- [jQuery](http://jquery.com) Library that gives you a large amount of remade functions to use when adding javascript to your website. Some years ago there were others like it, for example [prototype](http://prototypejs.org) or [script.aculo.us](http://script.aculo.us) but jQuery was simply miles ahead and today it is the de facto standard for library based web development. jQuery works really well when adding a small amount of javascript to a website however when you try to build an application in it you have to hash together a framework yourself and the code can get extremely messy. Even what architected correctly you still waste a lot of time doing things that are already taken care of if you use a framework. 
- [React](http://facebook.github.io/react/) is the fastest client side library. It is developed by Facebook and is used at Facebook, Instagram, AirBnB. It is really well engineered, however even when used with it's associated framework [Flux](https://facebook.github.io/flux/) it is still lacking in tooling and you have to write most things yourself. On top of this the nature of it's tempting system leads to many lines of code. These two things combined can cause projects to become very bloated very quickly. There are other problems too, see [these sildes](https://docs.google.com/a/baobablogic.com/presentation/d/1afMLTCpRxhJpurQ97VBHCZkLbR1TEsRnd3yyxuSQ5YY/edit) by a member of the Ember core team.
- [Angular](https://angularjs.org) The first client side framework I ever used. Compared to writing in jQuery it is amazing. It offers 2-way data binding to html. It changes the html directly by using something called angular directives to define rules for updating an element with data from the controller. This directive then acts almost like a function that can be used directly in your html. You can even pass stuff back from html to your directives using something called transclusion. The best talk I've seen on angular is by the same ember core team member that did the React vs Ember slides above. He starts at the 56 minute mark, [angular vs ember](https://www.youtube.com/watch?v=7ecsYtRiD5Q#). Angular suffers from performance hits as a result of it's 2-way-everywhere approach. These happen as follows. Say you have a page with a list of 10000 students, their names are binded to the controller using a directive and as soon as the controller sees a name has been changed it updates the DOM. You also have an edit field. When you type in the edit field angular detects the changes and updates the name being edited in the controller. Sounds brilliant right? It is! However if we think about it further we realise that out of the 101 elements on the page only 1 is editable and needs to bind back to the controller. The rest would have been perfectly fine binding one way from the controller. The performance wastage checking if these 100 things changed can add up. On top of this passing things between angular controllers and between views and controllers can get messy when you have to keep track of what is being transcluded in where etc. etc. So in summary angular is a very nice framework but made some bad decisions which impact structure and performance. This is why angular 1 is deprecated and they are working on a new version.
- [Ember](http://emberjs.com) Opinionated framework, with almost everything you can think of already taken care of for you. Fast rendering engine called Glimmer based on ideas from react. High learning curve because it is such a big framework but once you know where everything goes extremely easy to use and powerful. Evolved out of the SproutCore project which as a web implementation of the Cocoa frameworks used to develop Mac and iOS applications. Instead of building a large community around a useful library the core team focused on building a complete framework for large companies that could do everything the company needed. It was from the very beginning built as an open source project used by Yahoo, Netflix, Twitch, Groupon, Zendesk, Square, Heroku, Microsoft and [many more](http://emberjs.com/ember-users/). For this reason there was a small but very active community who built a LOT of features. As the project matures and started being able to do everything these companies needed it's open source community grew and today it is one of they key client side frameworks. It's latest beta version makes it the client side framework with the largest ecosystem (add-on wise), fastest rendering engine, smallest code-to-feature ratio and best support. (A lot of that is opinion based but then again so is this entire document.)
- [Ember-CLI](http://www.ember-cli.com) Ember-CLI is being incorporated as part of ember itself during the course of this year. It is the de facto way to develop ember apps and includes and add-on system for ember-cli packages as well as support for testing, asset compilation, 


#### Full Stack Frameworks

- [Meteor](https://www.meteor.com) Great framework, fully open source yet backed by a full-time team with funding by co-founders of Facebook and ex-Twitter people. Virtual DOM used in it's Blaza engine. Reactivity using DDP and minimongo. A client side representation of the backend mongo db. This local copy is kept consistent and up to date using the DDP protocol. Large ecosystem. Active community. Least amount of code to get an app live. Full stack means absolutely everything can be taken care of using a combination of conventions and add-ons. Two big flaws: 
1. JavaScript simply isn't as nice as Ruby, Java, Scala, C, Python, Go, Rust etc. so being locked into a lesser language on the server where one actually has the option of better languages is an unnecessary sacrifice. 
2.  Polyglot architecture! Referenced in Willem Visser's slides for CS334 ([Polyglot Persistance](http://martinfowler.com/bliki/PolyglotPersistence.html), [Polyglot Programming](http://memeagora.blogspot.com/2006/12/polyglot-programming.html)). Trust me Martin and Neal know what they're talking about in those links. It's not a complicated idea though. You want your chat box to have fast real time data so you wanna run that on some NoSQL implementation. You want your financial data in an extremely reliable RDBMS. Not only that you wanna write your client side code directly in JavaScript not wasting time generating templates from Ruby or Java and then rewriting a bunch of the code to manipulate these templates in JavaScript. At the same time you wanna optimise a complex backend procedure used for load balancing in a fast, concurrent,  safely typed language. For example [Rust](http://www.rust-lang.org) (Btw seriously look at Rust! I'll bet good money that in the same way Ember took time but eventually far surpassed Google's Angular, the open source project Rust, started by the Mozzilla Foundation,  will in time replace Google's language [Go](https://golang.org).) Getting back to Meteor, in a full stack framework, that is not written specifically with modularity in mind, you completely lose fine-grained control of your stack and you are locked into one database, one language, one package system across your entire codebase. For this reason Meteor could quite literally cure cancer and I still wouldn't use it.

#### CSS Frameworks
CSS frameworks these frameworks have essentially 3 functions:

1. To add default styles ie. colors, fonts, buttons etc.
2.  To add some standard components eg. [responsive](http://en.wikipedia.org/wiki/Responsive_web_design) nav bar.
3.  To provide a grid system that makes your layout easy to implement and easy to make responsive.

Here are the two most widely used ones:
- [Bootstrap](http://getbootstrap.com) 
- [Zurb Foundation](http://foundation.zurb.com)

Here is a brilliant [bog post](http://www.helloerik.com/the-subtle-magic-behind-why-the-bootstrap-3-grid-works) explaining the bootstrap grid.

#### HTML and CSS Preprocessors
CSS
- [Sass](http://sass-lang.com): Written in Ruby added lots of things like mixins also added a new syntax. Less was more popular cause the new Sass syntax was stupid, they moved to a Less like syntax and now they are probably the best one however there isn't much reason to switch back after most people moved to Less.
- [Less](http://lesscss.org): Originally written in Ruby but ported to JavaScript it adds support for mixins and other nice features that make your CSS [DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself).
- [Stylus](http://learnboost.github.io/stylus/): Does what Sass should have done, because the syntax is actually nice. However not a lot of users.

HTML
- [Jade](http://jade-lang.com): Nicer syntax for HTML built in JavaScript.
- [Slim](http://slim-lang.com): Nicer syntax for HTML built in Ruby.
- [Handlebars](http://handlebarsjs.com): The tempting engine that comes with Ember.
- [Emblem](http://emblemjs.com): Nicer slim/jade type syntax for Handlebars.
- [HAML](http://haml.info): The original one that introduced better syntax for HTML, built in Ruby but used less nowadays as Slim is nicer to work with.

[CoffeeScript](http://coffeescript.org) isn't exactly a preprocessor but rather a language that compiles to JavaScript while adding an indentation based syntax (like Python or Ruby), support for classes that work better than JavaScript prototypes and fixes to strange problems in the JavaScript language.

#### Service Providers

- [Heroku](https://www.heroku.com)
- [AWS](http://aws.amazon.com)
- [Engine Yard](https://www.engineyard.com)
- [Firebase](https://www.firebase.com)
- [Linode](https://www.linode.com)
- [Digital Ocean](https://www.digitalocean.com)

Personally I think to start out with for a prototype version the combination that provides us the a combination of a powerful and stable architecture, a low amount of effort and the greatest developer happiness is as follows:

- Ember in pure Javascript and Handlebars:
  - it's the best client side framework (See details above).
  -  Pure JavaScript because it is easier for people new to web development not to worry about translating examples in pure JavaScript to CoffeeScript or translating Handlebars which looks like normal HTML to Emblem.
- Bootstrap in Less:
  - There are more examples and documentation for Bootstrap than foundation which is good for newcomers.
  - Less - no real reason differences are very small.
- Firebase
  - The downside of not having relational databases is mitigated by having reactivity, hosting, server side code, and almost half the app taken care of by firebase. It greatly simplifies the architecture, which for a prototype made on limited time is perfect.

