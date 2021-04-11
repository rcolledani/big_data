db.getCollection("movielens_movies").find({})
db.movielens_movies.find()
db.movielens_users.find()
db.movielens_users.find({name : "Christoper Evan"})
db.movielens_users.find({name : "Miquel Trent"},{_id:0, occupation:1})
db.movielens_users.find({occupation : "programmer"}).count()
db.movielens_users.find({occupation : "programmer"},{_id:0, name:1}).sort({age:-1}).limit(1)
db.movielens_users.find({gender : "F", occupation : "programmer"}).count()
db.movielens_users.find({movies : {$gt : 1}})
db.movielens_users.aggregate({"$unwind": "$movies"}, {"$group" : {_id : "$name" , count:{$sum:1}, count:{$gt: 1}}})
db.movielens_users.aggregate({"$unwind": "$movies"})
db.movielens_movies.find({_id: 589}, {_id:0, title:1} )

db.movielens_movies.find({ title: {$elemMatch : {title : "The Untouchables"}}})

db.movielens_movies.find({title : /Untouchables/}, {_id:1}, )

db.movielens_movies.find({genres : /Adventure/})

db.movielens_users.find({movies : {%elemMatch : {movies.movieid : 589}}})

db.movielens_users.aggregate( [{$unwind: "$movies"}, {%match : {movies.movieid:589}])

db.movielens_users.aggregate( [{$unwind: "$movies"}, {$match : { genger :"M"}])
    
db.movielens_users.aggregate([{$match : {gender : "M"}}])


db.movielens_movies.find({ }).forEach( function (x) { x.genres = x.genres.split("|");db.movielens_movies.save(x);})
db.movielens_movies.find({genres : ["Adventure", "Action"]}, {_id:0, title:1})

db.movielens_movies.find({genres {$or : ["Adventure", "Action"] }})
db.movielens_movies.find({genres:{$in:["Adventure", "Action"]}}, {_id:0, title:1} )


db.movielens_users.find({"movies" : { "$elemMatch" : {"movieid" : {"$eq" : 589}}}})

db.movielens_users.find({"movies" : { "$elemMatch" : {"movieid" : {"$eq" : 2194} ,"rating" : {"$eq" : 5}}}}, {_id:0, name:1})

db.movielens_users.aggregate({"$unwind": "$movies"}, {"$group": {_id: "$name", count:{$sum:1}}},{$sort:{count:-1}})
