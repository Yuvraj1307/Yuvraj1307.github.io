// ----------------------------------button to take you top starts -------------------------------------//
var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

 function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ---------------------------------------button to take you top end --------------------------------------//

 




var string = "Yuvraj Maharshi";
var str = string.split("");
var el = document.getElementById("user-detail-name");

(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  var running = setTimeout(animate, 90);
})();

// // code sleep rep
// // get the element
//  const text1 = document.querySelector(".typing-text");

// // make a words array
//  const words1 = ["eat.", "sleep.", "code.", "repeat."];

// // start typing effect
// setTyper(text1, words1);

 const text = document.querySelector(".typing-dev");

// make a words array
const words = [
 
  "Full Stack Developer..."
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {
  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }
    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }
  }
}


// // main project bus 
// document.getElementById("depbus").addEventListener("click", function () {
//   window.open(
//     "https://effortless-daffodil-5b9af6.netlify.app/",
//     "_blank"
//   );
// });
// document.getElementById("gitbus").addEventListener("click", function () {
//   window.open(
//     "https://github.com/krishna8464/-pricey-secretary-8466",
//     "_blank"
//   );
// });





// //1st prject github and deploy link
// document.getElementById("gitindiamart").addEventListener("click", function () {
//   window.open("https://github.com/krishna8464/-average-alarm-4307", "_blank");
// });

// document.getElementById("indmartdep").addEventListener("click", function () {
//   window.open("https://mailtrap.netlify.app/", "_blank");
// });

//2nd prject github and deploy link
// document.getElementById("depshopnow").addEventListener("click", function () {
//   window.open(
//     "https://get-a-hut.netlify.app/",
//     "_blank"
//   );
// });
// document.getElementById("gitshopnow").addEventListener("click", function () {
//   window.open(
//     "https://github.com/krishna8464/-dreary-hand-8237",
//     "_blank"
//   );
// });

//3rd prject github and deploy link

// document.getElementById("gitweather").addEventListener("click", function () {
//   window.open("https://github.com/krishna8464/Weatherapp", "_blank");
// });
// document.getElementById("depweather").addEventListener("click", function () {
//   window.open("https://guileless-marshmallow-17f541.netlify.app", "_blank");
// });



// linkedin and github
// document.getElementById("contact-linkedin").addEventListener("click", function () {
//   window.open(
//     "https://www.linkedin.com/in/yenda-vamshi-krishna-0826a2253/",
//     "_blank"
//   );
// });
// document.getElementById("contact-github").addEventListener("click", function () {
//   window.open("https://github.com/krishna8464", "_blank");
// });

// document.getElementById("contact-emails").addEventListener("click", function () {
//   window.open("mailto:yendavamshikrishna123@gmail.com", "_blank");
// });

// document.getElementById("contact-phones").addEventListener("click", function () {
//   window.open("tel:8464963224", "_blank");
// });


//Resume button line
document.getElementById('resume-link-2').addEventListener("click",()=>{
  window.open("https://drive.google.com/file/d/14E1Rx27bgiBs6zp8RqJBsc3xOiKSRmHy/view?usp=sharing","_blank")
})

 

// or enable responsive functionality:
GitHubCalendar(".calendar", "Yuvraj1307", { responsive: true , private:true});


function fun(){
  window.open("https://drive.google.com/file/d/14E1Rx27bgiBs6zp8RqJBsc3xOiKSRmHy/view?usp=sharing","_blank")
}