#Penny Wise

**Pitch:**

Penny wise is a simple tip tracking app for delivery drivers, servers, and others in the service industry. It allows users to keep track of their tips and easily see relevant data in an easy-to-use interface.


**Overview:**

**Entering Tips (Multiple tips per day)**
 Users can easily add tips by either tapping a day on the calendar or tapping the plus button. In the new screen, hours and tips can be added. The entry will now be reflected on the calendar.
 If desired, additional entries can be added to a single day. To do so, select the desired day, tap edit to bring on the tip list, and tap the + button in the top right corner.

**Day selection**
Days with tips are bolded and can be selected with a tap. The info section below the calendar shows the totals from all selected days. This allows users to see totals at a glance. Questions like "how many hours did I work this week?" and "How much do I average on Fridays?" can be easily answered.



**Features:**
Clean, simple design
Quickly add tips
Multiple entries per day
Quick access to numbers and hourly average
Customize app with alternate themes and app icons

###Design Process


**Why I made it:**
I delivered pizzas for 5 years while studying music at Utah Valley University. During that time, I tried a few tip tracking apps, but they were either ugly or complicated. After deciding to learn iOS development, I thought a tip tracker would be a great first project; it was complicated enough to help me learn key concepts without being overwhelming.

**Design & UX:**
I had two main goals while designing Penny Wise: I wanted the user interface to be clean and I wanted it to be simple and easy to use. The center of the app is the calendar.
The calendar allows users to enter tips as well as view and interact with their data without going to other screens.

When picking the main blue color, I knew I wanted something bright. I much prefer Apple's bright, vibrant colors to the more dark, muted colors of Google's Material Design. I originally thought Green would be the best main color because it implies money, but I decided to go with blue because it's not quite as harsh. Plus, every other tip tracking app uses green. I went through many different shades of blue and ended up choose one that's very similar to Apple's default button blue. I liked its balance of brightness and familiarity. It just looked right.

**Challenges:**

One of the biggest challenges I ran into was with the calendar. I wanted it to have more functionality than just selecting a day, but the library I used only allows one date to be selected at a time. Couple that with the different states a particular day can be in and I had a really hard time making sure the data behind the scenes matched the data displayed on the calendar. I had to come up with my own system for keeping track of selected days and displaying those days correctly. I had to take a few runs at the problem to make sure all the bugs were gone.


**Tech Used** (Side bar??)
Native iOS frameworks
	- UIKit
	- Core Data
	- In-App Purchases
JTAppleCalendar






#Test Prep Tech

**Main Title:** 
Test Prep Tech creates flashcard-like study apps for various tests such as the SAT and ABA exams. Each app features hundreds of questions with answers and explanations to help users prepare for their exam. As the developer at Test Prep Tech, I develop for all 5 apps currently available for iOS and Android. I've been a part of 3 app launches and have added features such as iPhone X support, in-app user reviews, as well as various backend enhancements.

###Content Sections

**Angular / Ionic**
Test Prep Tech uses the Angular and Ionic frameworks to write all of their apps. They're available for both iOS and Android.
Because the apps are so similar in nature, they share a codebase. We use node scripts to replace the question data for each app. A major part of what I've done is providing enhancements to those scripts.


**JSON Transition**
When I first started, the question data was all written in Word Docs. These Docs were converted into JSON that the app then used. After adding a few apps, we decided it'd be much better to remove a step by replacing the Word Docs with JSON files, which stream line the process as well as simplify the codebase. I headed up the change made sure we had a smooth error-free transition.


**Mathjax Support**
Test Prep Tech's latest release SAT Math Wizard requires various types of math equations that can't be written with a standard keyboard. In order to add equations in, I needed to implement LaTex. I used the Mathjax library to take all the LaTex syntax and convert it to SVGs, which are then used to display in the app. This process took a very long time with the final JOSN file having over 16 million characters.



#Fat Cats


**Tech Used:**
HTMLx
CSS
JavaScript
ExpressJS

Fat Cats wanted a super simple landing page for their grand opening. It would allow users to enter their info and then redirect them to an external site to see pictures taken at their events. I created a CSV file to store customer's info that they could download.