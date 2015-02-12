var riz ={
	name:"Rizwan",
	age:32,
	skills:["HTML", "CSS", "JavaScript"],
	greet: function (name, mood){
		name = name || "you";
		mood = mood || "good";
		console.log("Hello, " 
			+ name + 
			" I am " 
			+ this.name + 
			" and I am in " 
			+ mood + " mood.");
	}
	};
	var last ={
	name:"Ghuman",
	age:32,
	skills:["HTML", "CSS", "JavaScript"],
	greet: riz.greet
	};
last.greet("PA","Bad");
riz.greet(last);
var greetings = riz.greet;
greetings.apply(last, ["GEO", "Die"]);
last.greet.call({name:"PA"}, "John", "Bad")

