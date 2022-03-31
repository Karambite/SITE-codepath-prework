# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sudesh Easwaran**

Time spent: **15** hours spent in total

Link to project: (https://glitch.com/edit/#!/breezy-towering-secretary?path=index.html%3A70%3A66)<br>
Link to webpage: https://breezy-towering-secretary.glitch.me/

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
- [x] The added buttons that use a different pitch (frequency)
- [x] The player has an option to change playback speeds up on each turn
- [x] The player has an option to change the number of buttons before the game begins
- [x] The background and setting button use different color scheme.
- [x] The game buttons use an image background
- [x] The game has an introduction song (the music plays till the user press start). The player can mute and unmmute the introduction song
## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:<br><br>
![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/70345588/161146243-a2838c9a-01e2-4979-9d96-e6363bc570cb.gif)<br>
Pregame buttons <br><br>
![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/70345588/161146250-d3be17e3-5ffd-42ba-8bcf-c5e899898f9c.gif)<br>
Playing the game with times 4 speed and 6 buttons resulting in a win. Also shows the randomized arrays <br><br>
![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/70345588/161144915-ccca0c7a-7a37-4ab1-ab08-5619fb63cf57.gif)<br>
Losing game by Timer running out <br><br>
![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/70345588/161146237-e55cd636-7fe4-4ade-80ca-96a272ad3ab8.gif)<br>
Losing game by using all strikes <br><br>



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/ <br/>
https://www.javatpoint.com/how-to-call-javascript-function-in-html

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

One challenge was to make the program user-friendly. Instead of setting a standard speed for the game or the number of buttons, I decided to present options for the user to choose from. However, the program still limits the user to 2-3 preferences. While making it user-friendly, I found certain options played no role in specific game phases, causing bugs throughout the code. It was vital to debug the code and filter out the options when not necessary. For instance, changing the number of buttons in the middle of the game impacts the game's flow. So the options had to be removed after pressing the start button. To combat this problem, I declared methods that would remove and add elements when the start and stop buttons were pressed. This made my code more organized and I was able to recreate the start phase and the mid-game phase effectively.<br/>
The second challenge dealt with the introduction song. I had to learn how to implement a song within the webpage. After debugging the code multiple times, I noticed the intro song could become a hindrance rather than an appealer. So I added a unmute and mute button giving the user the option to listen to the introduction song.<br/>
Another challenge was trying to create a countdown. First I had to learn more about SetInterval() and ClearInterval(). When developing the feature for the user to change the game's speed, the countdown clock also changed according to the speed. The speed of the game was affected by clueHoldTime, cluePauseTime, nextClueWaitTime, and clueStartHoldTime variables. Affecting these variables altered the game's pace, but also affected the speed of the countdown. I made the initial game speed to be 5 seconds, which minimized the effect of the counter counting down <br/>
Another challenge was inserting pictures within a button. The spacing, size, and padding of the button made it extremely hard to align the buttons. I played around with the width and height values to minimize the alignment issues. Then I learned about button background images. This made the buttons more pleasing to look at than my initial idea.<br/>
Finally, I needed to learn how to set 3 images side-by-side-by-side to represent the lives remaining. I referred to many examples before implementing this idea. I also saw some alignment issues between the text and the pictures, which I was able to solve quickly.<br>


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I also attempted to use an mp3 that I downloaded as the intro song. I used a youtube link to play the introduction song. I also resorted to using google links to represent the pictures on the buttons. How could this be done without being dependent on a web link? How would you use a server to store files such as audio and pictures and still manage to display them properly (in terms of resolution and size)<br>
I also wonder if there is a way to save a state of a webpage to make the removal and adding of buttons easier? In my project, I used a helper method that contained 5-6 lines of codes adding and removing attributes. I wonder if there is an easier way to by saving a start phase and every time the game ends, revert to that phase.<br>
Instead of using buttons to record the user's inputs for settings such as game speed and buttons, how could I incorporate an input field? If I could give the user full autonomy over the speed and buttons, what else would be necessary to ensure the user input is valid. <br>
If I could make this a multiplayer game tracking scores or have a Light and Sound memory game rush in real-time, what would I need to make this happen? <br>

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time, I would focus on refactoring my code. I noticed that there are so many global variables and it became hard to read when I needed to debug the program. <br/>
I would also modify the countdown clock feature of the game and make it more effective. The speed of the game was affected by clueHoldTime, cluePauseTime, nextClueWaitTime, and clueStartHoldTime variables. Affecting these variables altered the pace of the game and affected the speed of the countdown. I also noticed the delay in updating the countdown clock when increasing the number of clues in a sequence. The clock also starts 1 second less than it should. I would refactor my timer functions to avoid these issues.<br/>
I wish I could add is a countdown using the tones used in the game before the first sequence. I attempted to add various colors, visuals, options, and background music to resemble a real game. But a characteristic that most games have is that my Light and the Sound game does not have is a music countdown when the player presses start.<br.>
Finally, I would add more details to the appearance of the webpage. I would add custom fonts and different pictures for the strikes. I would add some interesting elements to the background and experiment more with the color scheme of the application<br/>



## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/deXkVu4LAv4)


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
