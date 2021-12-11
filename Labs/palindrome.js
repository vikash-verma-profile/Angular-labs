let reverse=""
var word = "madam"
for (var x=word.length-1;x>=0;x--){
reverse = reverse + word[x];
}
if (word == reverse){
console.log ("Palindrome of the madam is : "+reverse);
}
else
{
console.log ("not a palindrome : "+reverse);}