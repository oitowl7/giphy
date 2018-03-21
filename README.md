# Giphy
### *HOMEWORK #6:* Cat Action

[Link to Gitpages](https://oitowl7.github.io/giphy/)
This assignment was our first look into using APIs. In this case we were using the giphy API. This being the internet, I made it cat themed. 
![Simon's Cat](https://i.imgur.com/SVkVct5.jpg)

The premise of this assignment was pretty simple. As such, I had some extra time and thought I would tack on a little extra to make it interesting by adding animations. I ended up spending more time on the little tacked on thing than on the actual API calls and displays that we were required to do. 

***
## Technologies
As with the [Trivia Game Homework #5](https://github.com/oitowl7/trivia-game), we used jQuery, vanilla JavaScript, CSS3, and HTML5. However, this was the first time we used `AJAX` request. This concept took many weeks to really take hold in my head but these were the cautious first steps into it. 

***
## Lessons Learned
This homework obviously was the first step in using APIs. For mine, I made every search that was done have the word "cat " in front of it so that I could only get cat pictures back.

This homework was also the first time I really remember running into real asynchronicity and single-threaded issues that JavaScript has. It took quite a while to figure out how to deal with things not being there when I expected them and how to deal with this issue when it arose. I would say that it took quite some time until I became comfortable with handling these issues and this is the first time I really did. I know at one point, I was running a `setTimeout` function to give the server time to respond back.

One aspect of this assignment was that I needed to make it so that when you click on a gif, if it is animated, it would stop and if it was stopped, it would animate. This requires reading an attribute of the image that I rendered and, if it was x, do y and vice versa. This was a difficult task but has been very useful in my time sinse.

Animations and CSS positioning were the last major things I took away from this assignment. Getting the screen to fade in at a certain interval was the first issue, but the hardest part of the animations was making the "button" that was moving accross the screen to stop right where the *Simon Cat* was pointing no matter what the screen size was. 
![Pointing](https://i.imgur.com/iDMI7cI.jpg)
Eventually, I got to a "good enough" point and moved on with the knowledge that this is a very difficult thing to master and that being a CSS wiz may not be my calling.

***
## Issues
As I mentioned above, my biggest issue still outstanding is that the "button" that flies accross the screen when you click on it doesn't always stop in the exact correct spot due to the background image and screen size being a little out of sync. However, there really does reach a point where you do have to say "good enough" and move on.

***
## Additional Images
If you haven't already, find this gif of Samuel L Jackson on a cat face. You wont regret it
![Sam Jackson](https://i.imgur.com/ELYKScq.jpg)
