# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
	{ 
		name: "Batman",
		email: "batman.kadowaki@gmail.com"
	}
]);

rsvps = Rsvp.create([
	{
		phone: "310-938-5977",
		attending: true,
		name1: "bat",
		name2: "lulu",
		name3: "otto",
		name4: "bailey",
		name5: "cooper",
	}
]);
