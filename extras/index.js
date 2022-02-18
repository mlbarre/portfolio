function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  //from: https://stackoverflow.com/a/39914235/14251221
  
  var str = 'a collection of my work';
  document.title = '';
  async function typewriteTitle() {
    for (let i = 0; i < str.length; i++) {
      document.title += str.charAt(i);
      console.log(document.title); //debug only
      await sleep(200);
    }
  }
  typewriteTitle();