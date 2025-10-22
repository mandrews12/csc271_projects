// variables 
var zodiacSign = "Gemini";
var birthMonth = "June";
var birthday = 5; 
var luckyNumber = 12;
var horoscopeDescription = "Try not to get too caught up in trying to penetrate to the core of everything today. Enjoy the simple pleasures that are free. Be entertained by a bug walking on your windowsill. See trees as art. See the shapes and colors around you. Don't view things as annoyances. Most of the time the things you shun are those that can teach you the most.";
var believe = true;

// mood rating
var geminiRating = 4;
var leoRating = 5;
var virgoRating = 0;
var avrgRating = (geminiRating + leoRating + virgoRating) / 3;

// arrays
var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var descriptions = ["Today is a day for new beginnings. Embrace change and seize opportunities.", "Your determination will lead to success today. Stay focused on your goals.",
"Communication is key today. Express yourself clearly and listen to others.",
"Trust your intuition. It will guide you in making the right decisions.",
"Your creativity shines today. Use it to inspire and lead others.",
"Pay attention to the details. Your meticulous work will pay off.",
"Balance is essential. Find harmony in all aspects of your life.",
"Embrace transformation. Let go of what no longer serves you.",
"Adventure awaits. Explore new horizons and expand your horizons.",
"Hard work leads to success. Keep pushing toward your goals.", "Your unique perspective is an asset. Share your ideas with others.",
"Trust your emotions. They will guide you in making the right choices."
]
var mySign = signs[5];
var partner1 = signs[7];
var partner2 = signs[8];
var myDesc = descriptions[5];
var p1Desc = descriptions[9];
var p2Desc = descriptions[3];

var signEl = document.getElementById("sign");
signEl.innerHTML = zodiacSign;

var birthDayEl = document.getElementsByClassName("birthday");
birthDayEl[0].innerHTML = birthDayEl[0].innerHTML + birthMonth + " " + birthday + "th";

var num = document.getElementsByClassName("luckyNum");
num[0].innerHTML = num[0].innerHTML + luckyNumber;

var text = document.getElementsByTagName("p");
text[0].innerHTML = horoscopeDescription;
text[1].innerHTML = believe;
text[1].style.fontWeight = "bold";

text[2].innerHTML = "Today's mood rating for Gemini: "+ geminiRating + " out of 5. The average mood rating of Leo, Virgo, and Gemini is: " + avrgRating;

text[3].innerHTML = "My zodiac sign is: " + mySign + ". Gordon’s zodiac sign is: "+ partner1 + ". Emilienne's zodiac sign is: "+ partner1 + ".";
text[4].innerHTML = "Virgo Horoscope: " + p2Desc + ". Leo Horoscope: " + p1Desc + " Gemini Horoscope: " + myDesc;
