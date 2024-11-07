const button = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const outputText = document.getElementById("result");
 

function isPalindrome(text) { 
  const reversed = text.toReversed()
  return text.join("") === reversed.join("")
}
 
function cleanText(text) {
  text = text.toLowerCase()
  const regex = /[a-z0-1]/gi;
  text = text.match(regex);
  return text
}

function test() {
  let text = inputText.value

  if (!text) {
    alert("Please input a value");
    return 0
  }

  
  text = cleanText(text)
  
  if(isPalindrome(text)){
    outputText.innerText = `${inputText.value} is a palindrome`
  } else{
    outputText.innerText = `${inputText.value} is not a palindrome`
  }


}

button.addEventListener("click", test);



