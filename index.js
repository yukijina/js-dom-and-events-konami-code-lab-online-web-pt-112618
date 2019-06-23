const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  document.body.addEventListener('keydown', function(event) {
    // Both event.detail and event.which are number but when we use || it looks like we need to add `parseInt`
    //const key = parseInt(event.detail || event.which)
    const key = event.which
    if(key === code[index]) {
      index++;

      if(index === code.length) {
        alert(`Congratulation!`);
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
