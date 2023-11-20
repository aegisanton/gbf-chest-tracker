# gbf-blue-chest-tracker

Granblue Fantasy (GBF) Blue Chest Tracker is a web app built by me to facilitate tracking statistics when farming raids in Granblue Fantasy. It serves two main purposes:

* Helps individual players keep track of their drops when farming raids
* Gathers drop data across all players that use the app

The app is useful for tracking aggregate statistics. Gone are the days of filling in spreadsheets or using material counts to estimate the number of raids you have farmed! With that being said, the app is not built to answer all questions. If you are wondering when you got certain drops, or how many raids have passed since your last Gold Bar, the app will unfortunately not be of any help.

# How to use the app

Simply navigate to the app here: [link] and log in with your Google account. You can then open the tabs for the raids you want to farm, and simply click the different drops to increment their counter by one. 

To avoid constant writes to the database, the user has to manually sync their data to save their progress. Any drops that have not been synced will disappear if you refresh the page or close down the tab. You can view the date and time for when your data was last synced at the top of the page. Simply press the sync button to save your progress (but please avoid doing this too often!). I recommend just doing it right before you end a farming session. The app will also automatically attempt to sync your data every 30 minutes from when you open the tab. 

# Planned features

* Allow users to manually change the drop counts (currently, you can only increment it)
* Show more detailed statistics about how lucky/unlucky you are 
