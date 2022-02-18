// * was trying to add typewriting effect to browser title, got example from stackoverflow but decided against it.
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
//   from: https://stackoverflow.com/a/39914235/14251221
  
//   var str = 'a collection of my work';
//   document.title = '';
//   async function typewriteTitle() {
//     for (let i = 0; i < str.length; i++) {
//       document.title += str.charAt(i);
//       console.log(document.title); //debug only
//       await sleep(200);
//     }
//   }
//   typewriteTitle();

// * from W3Schools
var i = 0;
var txt = 'hello, welcome to my work 🐛'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  };
};
typeWriter();