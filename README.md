##Stats keeper

* DONE Stats keepers at basketball games need to record data quickly and calculate statistics on the fly. Let's make an app to help them out.

* DONE Start out by just creating an Ember app using the starter kit from the homepage. So that you don't have to create a Rails API app for saving and retrieving records, use the Ember Data Local Storage Adapter.

* DONE Before the game starts, the stats keeper needs to enter the names of the teams who are playing, and the names of the players on the teams. To keep things simple, we'll make it so that this app can only be used for a single game at a time, at least to start (otherwise, we'd have to have a many-to-many relationship between teams and games). Hint: Read the Ember guides on relationships in models; a team has many players.
creating a team


* DONE When a player shoots the ball, the stats keeper needs to record who shot it and whether they made or missed the basket. For now, we'll treat all shots the same - don't worry about free throws or 3-pointers. Hint: Make a ShotAttempt model.
adding shot attempts

For each player, display the total number of shots they attempted. Hint: Add a computed property to your Player model.
showing stats automatically

Also display the percentage of shots they made and the total number of points they scored. Hint: Use Ember's aggregate
