var assert = require('assert');

describe('prototypes', function () {

    it('are attached to an object ', function () {

        function User() { }
        User.prototype.sayHello = function () {
            return "hello";
        }

        // the 'new' keyword constructs an object of type User
        var u = new User();

        let actual = u.sayHello();
        let expected = 'hello';

        assert.equal(actual, expected);

    });

    it('can access data on the parent object once instantiated', function () {

        function User() {
            // the parent object
            this.firstName = "Sam";
        }
        User.prototype.sayHello = function () {
            return `Hello, my name is ${this.firstName}!`;
        }

        var u = new User();

        let actual = u.sayHello();
        let expected = 'Hello, my name is Sam!';

        assert.equal(actual, expected);

    });

    it('have something to do with scope', function testMethod() {


        function User() {
            // I will forget to use the new keyword, therefore 'this' points to nothing!
            this.firstName = "Sam";
        }
        User.prototype.sayHello = function () {
            return `Hello, my name is ${this.firstName}!`;
        }

        // !!!! BEWARE, I forgot the 'new' keyword on purpose !!!!
        var u = User();

        let actual = typeof u;
        let expected = 'undefined';

        assert.equal(actual, expected);
    });

    it('can be used to create new instances; tested by "instanceof"', function testMethod() {

        function User() {
            this.firstName = "Sam";
        }
        User.prototype.sayHello = function () {
            return `Hello, my name is ${this.firstName}!`;
        }
        
        var u = new User();

        let actual = u instanceof User;
        let expected = true;

        assert.equal(actual, expected);
    });

    it('can be used to create many objects / instances', function testMethod() {

        // User function is being treated as a constructor function
        function User(name) {
            this.firstName = name;
        }
        User.prototype.sayHello = function () {
            return `I am ${this.firstName}.`;
        }
        
        let names = ['Peter', 'Paul', 'Merry'];
        let users = [];
        for (var name of names ) {
            var u = new User(name);
            users.push(u);
        }
       
        let actual = [];
        users.forEach(function(user){ 
            var greeting = user.sayHello();
            actual.push(greeting);
        })

        let expected = ['I am Peter.', 'I am Paul.', 'I am Merry.'];

        assert.deepEqual(actual, expected);
    });

    it('Different constructor functions, same prototypes, same instanceof ?', function testMethod() {

        function sayHello () {
            return `I am ${this.firstName}.`;
        }

        function User(name) { this.firstName = name;  }
        User.prototype.sayHello = sayHello;
        var u = new User();

        function Person(name) { this.firstName = name;  }
        Person.prototype.sayHello = sayHello;
        var p = new Person();

        let actual = u instanceof Person;

        let expected = false;

        assert.equal(actual, expected);
    });

    it('Every object in JS has some prototype methods already set, override?', function testMethod() {

        function Account(userId, pwd) { 
            this.id = userId;
            this.password = pwd;
        }
        Account.prototype.toString  = function() {
            return `[user="${this.id}", hash=${this.password}]`;
        }

        var a = new Account("peter", "abc123");
        let actual = "" + a;

        let expected = `[user="peter", hash=abc123]`;
        assert.equal(actual, expected);
    });


    it('You can even override existing prototypes', function testMethod() {

        // let's save the original version of toString for later
        var oldToString = Object.prototype.toString;

        // toString will be called when you want the string representation of an object; nice!
        Object.prototype.toString  = function() {
            return 'I am object';
        }

        var o = { a: 1, b: 2};
        let actual = "" + o;
        let expected = 'I am object';

        // reset the overriden toString method back to original
        Object.prototype.toString = oldToString;

        assert.equal(actual, expected);
    });


    it('You can use prototypes to create inheritance', function testMethod() {

        // GeometricObject represents a geometric figure that 
        function GeometricObject() {
            this.name = "?";
        }
        GeometricObject.prototype.toString  = function() {
            return `I am a ${this.name} with an area of ${this.area()}`;
        }

        // Rectancle represents a rectancle
        function Rectangle(w,h) {
            this.name = "Rectangle";
            this.width = w;
            this.height = h;
        }

        // Object.create adds the prototypes of GeometricObject to the Rectangle prototypes
        Rectangle.prototype = Object.create(GeometricObject.prototype);

        // override or set the area prototype function
        Rectangle.prototype.area  = function() {
            return this.width * this.height;
        }

        var rec1 = new Rectangle(10,5);
        var rec2 = new Rectangle(5,5);
        let actual = rec1 + " and " + rec2;

        let expected = 'I am a Rectangle with an area of 50 and I am a Rectangle with an area of 25';
        assert.equal(actual, expected);
    });
});