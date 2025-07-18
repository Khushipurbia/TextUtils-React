import React, { useState } from "react";

// dekho state kya hota hai, jaise aapne textarea daal rakha hai, to jo open hua hai vo uska state hai, fir aapne kuch text likha usme to vo bhi uski state hai, fir kuch or text likha to vo bhi uska state hai, to state jo hai vo component ka part hai
// state lagane ke liye pehle apan ne ne usestate import kara, usestate jo hai vo react hook hai jo ki apne ko help karta hai state variable banane mai, fir function ke andar const count wali line hai vo react hook ke documentation se copy kari, fir apne ko count nahi rakhna tha to usko change karke state rakha
export default function Textform(props) {
  // yaha textform mai props paas kara
  const [text, setText] = useState("");
  // const [count, setCount] = useState(0);
  // fir ye state apne ko deni thi, textarea mai to vaha par apan ne value di {text} karke
  // yaha pe text to vo valu ehai jo apan ne by default de rakhi hai, enter your text here, or settext jo hai vo function hai jisko mai kabhi bhi use kar sakti hu meri text value ko update karne ke liye, jaise apan ne use kiya handleupclick mai

  // har jagah enter text aa raha tha to lect 8 mai is default msg ko hata diya, "Enter your text here " wala

  // fir agar apan chahte hai text ki value ko change karna jaise:
  // text=new text; Wrong way to set the state
  // to ye wali line jo hai vo server ke vaha error degi, vo bataega ki bhai aap state ko ese set nahi kar sakte, set karne ke liye aapko function ka use karna padega

  //setText("New Text");   //right way to set the state

  const handleUpClick=()=>{
    // console.log("UpperCase was clicked" + text); //iski bhi need nahi thi to comment kar diya
    // ek baar func ko ese hi define kara koi logic ni likha bas console.log karwa diya

    // FIR APAN AB FINALLY USKO UPPER CASE MAI CONVERT KAR RAHE HAI TO LET NEWTEXT KARKE UPPERCSE MAI CONVERT KARWAYA, AND THEN SETTEXT MAI BHI VO NEWTEXT WALI VALUE DI

    let newText=text.toUpperCase();
    setText(newText);

    // jaise thirteenth lect ke according uppercase mai alert chahiye to kara, ese hi lowercase mai kara, baaki sab mai kara, but isse pehle vaha app.js mai textform mai showalert diya
    props.showAlert(" UpperCase was Clicked!", "success");

    // setText(" You have clicked on handleUpClick");
    // matlab jaise hi aap click karoge uski state change ho jaaegi
    // but aap notice karna ki, jaise hi aap textarea mai jo text aa raha hai agar uske aage kuch likhne ka type karte ho to vo type hi ni hota hai, or console mai likh ke aata hai onchange, to ye kyu aa rah ahai, kyunki aapne textarea mai value set kar rakhi hai text
  }


  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert(" LowerCase was Clicked!", "success");
  }


  const handleCapitalizetext=()=>{
    let newText=text.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
    // ab dekho capitalize karne ke liye koi direct funct nahi hota hai, matlab har word in sentence ke first letter ko capital karna, to apan ne uske liye likha, pehle us text ko split kiya, fir word ko map karwaya, only 0 index wale ko to capital, fir us letter ko add karwa diya, word.slice(1) mai, or fir sab word ko jaoin karwa diya
    // word.charAt(0)	'k'	pehla letter nikala  .toUpperCase()	'K'	usko capital banaya    word.slice(1)	'hushi'	pehle letter ke baad ka pura word liya
    props.showAlert(" Capitalize Text was Clicked!", "success");
  }

  const handleClearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert(" Clear Text was Clicked!", "success");
  }


  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/)
    // text.split(/[ ]+ /) This line splits the string into an array of words, breaking wherever there's a group of spaces.
    setText(newText.join(" "));
    props.showAlert(" Remove Extra Spaces was Clicked!", "success");
    // ab aage jo bhi kara vo alert.js se kiya
  }

  const handleOnChange=(event)=>{
    // console.log("On Change");// iski need nahi thi to baad mai isko bhi hata diya
    setText(event.target.value);
    // to is line ka kya matlab hua ki bhai, jaise maine textarea mai value de rakhi thi text, jo ki meri state se belong karta hai matlab vo mera statevariable hai, to ye jo text hai usko mai update kar sakti hu with the help of settext
    // to ab apan yaha par kya bol rahe hi ki bhai jab bhi user text ko chang ekarne ka try kare textarea mai, jaise usne hello likhna chaha usme to ye jo hello hai usko bhi us text ke sath add kardo, matlab jo value hai usko kardo vaha par jo already text tha vo + hello, matlab jo mera text hai usko bhi us value ke barabar set kardo
//     Jab bhi user textarea me kuch likhta hai, onChange trigger hota hai. Hum setText(event.target.value) se text state ko update karte hain us input ke current value se. Isse React ka state text hamesha user ke typed input ke sath synced rahta hai.Jaise user hello likhta hai, to text bhi hello ho jaata hai.
// matlab kya ho raha hai function to run ho hi raha hai, iske sath kya ho raha hai jo hamari nayi value hai usko bhi set kar de raha hai text ke barabar
// fir jo console mai apan print karwa rahe the usme + text bhi kardiya
  }
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      {/* fir ye heading h1 mai chahiye thi to props.heading ko h1 mai daal diya */}
      {/* in sab ke baad ab apne ko button add karne the, to apan ne button add kara idhar form mai */}
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example textarea</label>, is line ki need nahi lag rahi thi to hata di */}
        <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode === 'dark'?'#032250':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
        {/* lect 10 ke according apan ab yaha pe dark mode ke according color change karna chahte hai to, yaha style add kari or curly braces lagaye matlab JS likhenge, or ek or lagaya kyunki object banaenge, uske andar background color mai udhar se copy kiya hua ternary operator diya, ki bhai jab dark mode ho tab color gray kardo, or baaki white */}
        {/* fir yahi style font ke liye upar container mai copy kardi or neeche wale mai bhi kardi, bas thode changes jaha karne the vaha kar diya, or textarea ka backgrouncolor to white kar diya but font color bhi white karna hai to vo bhi kara */}

        {/* apne ko textarea chota lag raha tha to yaha rows mai change kar diya */}
        {/* dekho yaha par aapne value text set kar rakhi hai, matlab iski jo value hogi vo hogi text, or jaise hi mai kuch change karunga to onchange function call hoga, TO YE BAAT DHYAN RAKHO KI KABHI BHI REACT MAI AGAR AAP KISI EVENT KO LISTEN KAR RAHE HO JAISE KI ONCHANGE, TAB KYA HOTA HAI KI FUNC TO RUN HOGA HI HOGA, BUT MUJHE YAHA PE FREE MAI EVENT OBJECT BHI MIL JAAEGA, ISLIYE EVENT  LIKHA OR SET WALI LINE LIKHI VAHA UPAR FUNCTION MAI */}
        {/* to apan ne dekhe ki bhai, onchange ko listen karna isliye zaroori hai kyunki agar ye nahi karenge to apan kuch type nahi kar paaenge, or meri jo ye state hai value={text} isko bhi set karna padega */}
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
        {/* fir apan chahte the ki bhai jaise hi us button pe click kare, tab function fire hona chahiye, to apan ne likha onclick or fir func ka naam diya, fir us func ko upar define kiya */}
        {/* iske baad kya hua thodi si onchange ki dikkat aa rahi thi, ye kya hota hai apan baad mai dekhenge, bas ek baar textarea mai apan ne ese hi ye or add kara, or is function ko bhi upar define kara */}
        {/* to apan ne dekha console pe apan ko print hoke mil raha tha jitni baar apan click kar rahe the bina page reload hue */}
        {/* for uske baad apan ne handle upclick wale function mai kya kara ki, bhai apan ne settext matlab stage ko set kar diya ki You have clicked on handleUpClick, matlab mai jaise hi click karungi to text ki value ye set ho jaegi, kyunki apan ne kya likha tha [text, setText], matlab jo meri setText ki value ko vo text ko dedo */}
        {/* text → tumhara state variable hai , setText() → use update karne ke liye function hai */}

        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>


        <button className="btn btn-primary" onClick={handleCapitalizetext}>Capitalize text</button>

        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        <button className="btn btn-primary " onClick={handleClearClick}>Clear Text</button>
      </div>
    </div>



    {/* ab lect 8 ke according apan ko or element add karna hai, to uske liye apan ne JSX fragment daala hai, or jo upar wala div tha usme id dedi container */}
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} letters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>

      <h2>Preview</h2>
      {/* <p>{text}</p> */}
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
      {/* yaha apan ne ternary operator mai likha ki, bhai jab kuch text nahi ho to ye show karo, or ho to text dedo */}
    </div>
    {/* to apan ne isme kya kara ki bhai hume words or letters chahiye, to pehle to heading dedi, fir paragraph mai likhwa diya, ek to letters ke liye jo text thi uski length calculate karwa li, or words ke liye apan ne kya kara pehle us text ko split kara space ke vaha se fir uski length ko count karwa diya  */}
    {/* ab uske baad apne ko ye bhi add karna tha ki kitna time le raha hai vo padhne mai, to apan ne pehle google mai dekha ki bhai 125 words ko agar slow machine mai padhte hai to, vo 1 minute leta hai, matlab 125 words ko 1 min, to 1 word ko 1/125=0.008, to is 0.008 ko agar words se multiply karenge to time aa jaega, to vahi apan ne kara */}
    {/* fir preview or add karna tha to vo bhi kara normally hi */}
    {/* iske baad mai apan ko lowercase mai convert karne ke liye bhi ek button banana tha to vo banaya, jaise pehle uppercase ke liye banaya tha */}
    {/* iske baad apan ne kya kaar ki jo navbar ka color tha usko black karna tha, to jaha par navbar.js wali hai uske navbar mai light likh rakha hai, vaha dark kar denge, to black ho jaaega, actually apan synatx thoda alag tha, to kese kya change kara vo udhar likh rakha ahi */}
    </>
  );
}

// react ka function based component chahiye tha to rfc likha
// fir apan ko form render karwana tha to bootstrap ki website se jaake copy kara, and then yaha paste kara, usme se sirf apne ko textarea hi rakhna tha to vahi rakha, baaki sab hata diya, or label for mai apan ne aam mybox daal diya or id mai bhi fir vahhi naam diya, but itne se se kaam nahi hoga, ye textarea vaha nahi dikeha, is textarea ko apne ko vaha app.js mai bhi likhna padega, to ab udhar jaake check karo kya kya likha apan ne
