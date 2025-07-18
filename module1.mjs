import bzk, {a,c,d} from './module2.mjs';
console.log(bzk);
console.log(a);
console.log(d);
console.log(c);


// fir module1.mjs mai apan ne un const ko import kara, to jo by default hota ahi na, usko apan exact name se bhi import kar sakte hai, jaise b or kisi random kuch bhi naam se bhi kar sakte hai, or neeche console wali line likhdi, to agar kuch bhi likh ke bhi import karoge to by default wali value hi import hogi
// or jo by default value nahi thi, unko bhi yaha curly braces mai saath mai daal kar import karna padega, unko to exact name se hi import karna padega, otherwise error denge, agar a ka a1 bhi kar doge to error aayega, or fir console wali line likhdi, is tarah se modules kaam karte hai
// ye sab actually JS ka concept hai

// terminal mai run karenge using this cmd- node .\module1.mjs