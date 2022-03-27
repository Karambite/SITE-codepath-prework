# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
- [x] The added buttons use a different pitch (frequency)
- [x] The player has an option to change playback speeds up on each turn
- [x] The player has an option to change the number of buttons before the game begins
- [x] The background and button color schemes use a gradient, instead of a single color.
- [x] The game has an introduction song (the music plays till the user press start). The player can mute and unmmute the introduction song
## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/ <br/>
https://www.javatpoint.com/how-to-call-javascript-function-in-html

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

One challenge was to make the program user-friendly. Instead of setting a standard speed for the game or the number of buttons, I decided to present options for the user to choose from. However, the program still limits the user to 2-3 preferences. While making it user-friendly, I found certain options played no role in specific game phases, causing bugs throughout the code. It was vital to debug the code and filter out the options when not necessary. For instance, changing the number of buttons in the middle of the game impacts the game's flow. So the options had to be removed after pressing the start button. To combat this problem, I declared methods that would remove and add elements when the start and stop buttons were pressed. This made my code more organized and I was able to recreate the start phase and the mid-game phase effectively.<br/>
The second challenge dealt with the introduction song. After debugging the code multiple times, I noticed the intro song could become a hindrance rather than an appealer. So I added a unmute and mute button giving the user the option to listen to the introduction song.<br/>
Another challenge was trying to create a countdown. When developing the feature for the user to change the game's speed, the countdown clock also changed according to the speed. The speed of the game was affected by clueHoldTime, cluePauseTime, nextClueWaitTime, and clueStartHoldTime variables. Affecting these variables altered the game's pace, but also affected the speed of the countdown. Initially, the normal speed should allow 15 seconds. However, when debugging, it was clear that changing the speed also changed the rate the clock was counting down. Thus, instead of being a countdown timer, it acts as a countdown scale from 15-0. If the countdown scale goes to zero, it does end the game, still functioning like a countdown timer.<br/>
Another challenge was inserting pictures within a button. The spacing, size, and padding of the button made it extremely hard to align the buttons. I played around with the width and height values to minimize the alignment issues.<br/>


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I also attempted to use an mp3 that I downloaded as the intro song. On glitch, all I had to do was upload the file and rename the file. However, when opening the game on a new window, the music never played. I ended up using a youtube link to play the intro song. I also resorted to using google links to represent the pictures on the buttons. How could this be done without being dependent on a web link? Also, what other ways could I enhance the images to merge with the buttons? <br/>
I also wonder if there is a way to save a state of a webpage to make the removal and adding of buttons easier? In my project, used a helper method that contained 5-6 lines of codes adding and removing attributes. I wonder if there is an easier way to by saving a start phase and every time the game ends, revert back to that phase.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time, I would focus on refactoring my code. I noticed that there are so many global variables and it became hard to read when I needed to debug the program. <br/>
I would also modify the countdown clock feature of the game and make it more effective. The speed of the game was affected by clueHoldTime, cluePauseTime, nextClueWaitTime, and clueStartHoldTime variables. Affecting these variables altered the pace of the game and affected the speed of the countdown. So, if the game was played at twice the normal speed, the countdown would happen twice as fast, rather than starting at a time less than 15.<br/>
I would adjust the feature so that each countdown interval is 1 second, even if the speed of the game is changed, thus being more of a timer than a scale for speed.
I would also adjust the pictures within the button to fit more into the program. My thought process was that adding an image or graphic to represent the number would make it more attractive for the player. However, it looks like a picture out of place. The pictures don't seem centered and even contradict the surrounding color scheme. A better idea would be to encapsulate the button within the image.<br/>
Finally, a feature that I wish I could add is a countdown using the tones used in the game before the first sequence. I attempted to add various colors, visuals, options, and background music to resemble a real game. But a characteristic that most games have is that my Light and the Sound game does not have is a countdown.




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Sudesh Easwaran]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
