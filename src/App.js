import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, {useState} from "react";


// import About from "./components/About"; lect 17 mai hataya isko


// import {
//   BrowserRouter as Router,
  // Switch,
  // Routes,
  // ab is syntax ko copy kara par ek dikkat thi ki ab jo switch hai vo Routes naam se update ho gaya hai, to jaha bhi switch likha hai vaha Routes ka use karo, or same hi neeche bhi error de raha tha ki bhai React Router v6 does not support putting components like <About /> or <Textform /> directly inside <Route>., to uske liye vapas changes kare neeche
  // Route,
  // Link (link ka use nahi tha to hata diya warning dera tha)
// } from "react-router-dom";



// let name="Khushi";

function App() {
  // yaha pe usestate likha, 10th lect ke according ki dark mode sab (state) vagera app.js se control karna chahte hai
  const[mode, setMode]=useState('light'); //false isliye likha ki bhai, whether dark mode is enabled or not
  // fir false ko hata ke likha light, jo initial rakhna chahte hai vo, ab light likha to by default pehle light rahega, aap dark karna chahte ho to bhi kar sakte ho

  const [alert, setAlert] = useState(null);
  // yaha apan ne state banayi, jiska initial state null rakha, or yaad rakhna yaha alert ek object hai, yaha apan alert ko ek object bana rahe hai, fir apan ek method bana rahe hai showAlert
  const showAlert=(message, type)=>{
    // to showAlert yaha par ek alert message lega or message ka type lega
    // setAlert or showAlert dono alag hai, setAlert jo hai vo value ko set karta hai or showAlert jo hai vo apna jo bhi message hoga usko show karega
    setAlert({
      msg:message,
      type:type
    })
    // to ab yaha kya hua pehle humaar alert null tha, ab alert yaha par object hai, jo ek to message lega or type lega, iske baad neeche alert mai apan ne manually msg diya tha usko haat ke alert diya, fir jaise dark mode or light mode tha uske alert show karwaya, usse pehle changes kare apan ne alert.js mai
    // matlab yaha par setAlert to kar diya, fir apan ne settimeout mai kya kara ki bhai kuch second jaise 3sec ke baad ya 1.5 sec, alert ko null kardo, matlab usko null set kardo
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // fir tenth lect ke liye hi apan ne jo navbar waali line hai usko mode diya
  // ab apan chahte hai jab dark mode ho tab hi mai dark dikhau baaki nahi dikhau, to uske liye apan ne navbar mai change kiya

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#032250';
      // yaha apan ne kya kara pehle to Routes pe click karne se sirf navbar ka color change hora tha, to apan ne body ke background ko color change karne ke liye ye likha
      // apan ne color gray rakha thoda differentiate karne ke liye, fir is gray ko baad mai change karke kuch or kar diya
      // ab apan chahte the ki bhai enter text to analyze vagera jo sab hai vo sab white ho jab dark enable ho tab, to apan ne app.js mai jaake textform ko bhi mode diya mode, neeche likha hai, fir uske baad jo ternary operator apan ne navbar ke Routes mai use kiya tha vahi apan ab textform mai jaake bhi karenge
      // matlab pehle wali evaluate hogi or agar vahi null ya false ho gayi to aage evaluate hi nahi hogi, but agar vo evaluate hoti hai to aage ki cheez return hogi
      showAlert(" Dark mode has been enabled ", "success");
      // fir yaha par showalert diye dono ko, fir apan ne vapas alert.js mai hi change kiya, apan ne usme capitalize wali cheez bhi kari, green color wali cheez bhi kari

      document.title="TextUtils- Dark Mode";
      // ye apan ne likha tha fifteenth lect mai, ki title ko dynamically change kese karna hai

      // setInterval(() => {
      //   document.title="Install TextUtils Now!";
      // }, 2000);

      // setInterval(() => {
      //   document.title="TextUtils ia a Amazing Application";
      // }, 1500);
      // ye bhi apan ne 15th lect mai hi kara title ko baar chamkane ke liye
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled ", "success");
      document.title="TextUtils- Light Mode";
    }
  }

  // ab ye toggleMode function kab run hoga, ye tab run hoga jab koi bhi insaan us enable dark mode wale Routes par click karega, to apan ne firse navbar mai jaake us Routes ke andar changes kare
  // fir apan ne dekha ki bhai chal to raha hai, but ek dikkat thi ki jab dark hai tab to Routes ke font ka color light ho raha ahi apan ne set kara tha isliye, but jab light hai tab bhi light hai to dikh nahi raha tha, to usko bhi dark karna hai to vapas chhanges kare navbar mai

  return (
    // <Router>
      <>
      <Navbar title="TextUtils" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
      {/* yaha pe mode daala, or function daaala jisko upar define kara jo ki ek arrow function hai */}
      {/* <Alert alert="This is alert."/> */}
      {/* thirteenth lect ke according yaha par alert daala, or kuch message dena tha to yahi de diya ki this is alert */}
      {/* usi lecture mai apan chahte the ki bhai alert naam ka state banaye, jis tarah se light/dark mode ka banaya na vese hi */}
      {/* fir baad mai usko comment karne ke baad apan ne alert de diya kyunki, fir state bana di thi to uska alert */}
      <Alert alert={alert}/>
      <div className="container my-3">


        {/* ye apan ne add kara 16th lect mai for router */}
        {/* <Routes> 17th lect mai in sabko comment kar diya */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* exact likhan prefer karo */}

          {/* <Route exact path="/about" element={<About />} /> */}

          {/* <Route path="/users">
            <Users />
          </Route> */ }
          {/* isko comment kar diya kyunki apne paas users jaise kuch tha nahi, or jaise about wali cheez jo apan ne neeche comment kar rakhi thi, vo yaha upar wale mai add kardi, or jo neeche slash wala tha vaha bhi apne home jaisa kuch nahi tha, to textform wali cheez yaha daal di, neeche se upar yaha daali */}
          {/* <Route path="/"> */}
            {/* <Home /> */}
            <Textform heading="Enter your text below to analyze" showAlert={showAlert} mode={mode}/>
          {/* </Route> */}

          {/* <Route exact path="/"
      element={
        <Textform heading="Enter your text below to analyze" showAlert={showAlert} mode={mode}/>}/>
        </Routes> */}

        {/* ab jaise thirteenth lect mai fir agar or alert apan add karna chahte hai, jaise textform mai to kar sakte hai */}
        {/* <Textform heading="Enter your text below to analyze" showAlert={showAlert} mode={mode}/> */}
        {/* show alert add karne ke baad fir textform mai jaha add karna tha vaha kara */}
        {/* yaha par textform add kara or import ki line bhi add kari upar, fir apan ne is textform ko container mai daala, container jo hai vo bootstrap ki class hai jo thoda sa alag type se center mai kar deti hai, dekh salte ho server pe */}
        {/* fir apne ko heading deni thi, to heading ko apan ne individually na de kar kya kara ki textarea mai hi as a prop paas kar diya, to jo yaha heading likhenge vo vaha render hoke aa jaegi, fir idhar add karne se hi sirf kaam nahi chalega, textform.js mai props ko paas karan padega, to ab udhar jaake dekho*/}
        {/* fir apan ne container ko class di jo bootstrap ki hoti hai, my-3, isse kya hua ki ye margin de deta hai y mai 3 ki */}

        {/* <About/> */}
      </div>
    </>
    /* </Router> */
    // ye apan ne pehle likhi thi, jab app banana start kiya to hata di
    // <>
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact Us</li>
    // </nav>
    // <div className="container">
    //   <h1>Hello {name} </h1>
    //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iste blanditiis nisi maiores, animi, non cupiditate asperiores natus ad quis accusamus reiciendis architecto rem odit placeat enim nesciunt optio temporibus nulla pariatur distinctio neque eligendi modi. Quisquam earum, labore quia facilis tenetur quasi eos obcaecati eaque, quod similique iure.
    // </div>
    // </>

    // apan ne ek variable banaya name or usme naam de diya, string hai double quotes diye, fir neeche para ke upar h1 mai us variable ko wrap kara within curly braces, or yaha par apan ne double quotes nahi diye, yaha JS khud resolve karti hai
    );
}
// apan ko navbar add karna hai, to matlab or component add karna chahte hai to apan ne usme fragment ka use kara

export default App;

// pehle jo hai class based func use hote the ab function based comp jyda use hote hai
// create app bhi function based use karta hai
// apan ne upar ek function banaya app naam ka, fir return karwaya or parantheses chalu kara, to jo bhi us parantheses ke andar likha hua hai vo JSX hai
// JSX jo hai vo simple words mai ye hai ki ye poori html hi hai jisne JS ka mukut pehna hua hai
// JSX hai jo hai vo JS ka hi extension hai jaha aap html likho, par html ke sath sath aap kuch is tarah se JS daal sakte ho in curly brackets
// JSX jo hai vo 90-95% html hi hai, bas kahi kahi changes hai, jaise vaha class likhte the to yaha className likhenge, jaise html mai likhte the apan ki label for, to yaha par htmlFor likhna padta hai, baaki sab kuch same hai or ek tabIndex bhi hota hai
// aap jo bhi html hai usko agar return ke andar bracket mai daal doge to vo server pe aa jaegi, but JSX se aap kya kar sakte ho andar hi andar JS use kar sakte hai, but react ko banane walo ne esa kara kyu, kyunki vo esa chahte the ki bhai hum files ko alag alag nahi rakhna chahte ki js kahi or hai, html kahi or, css or kahi, to vo chahte the ki sab ek jagah hi ho taaki developer-experience acha ho
// ab jaise apan upar dekh sakte hai ki return ke andar apan ne ek hi element return karwaya hai jo ki hai div className=App
// jaise hi agar classname ke upar apan ek or element daal dete hai jaise <h1>This is me</h1>, to vo error dega, kyunki ek hi element apan return karwa sakte hai
// but agar apan chahte hai ki nahi hum to pehle heading chahte hai or fir app, to uske liye apne ko JSX fragment ka use karna padega, matlab apan heading ke pehle ye tag laga sakte hai <> or fir end mai usko close kar sakte hai</>
// vese to 99% mai jo return ke andar code likha hai, usko aap hata hi doge, or hata ke apna code likhoge, to apan ne upar usko hata diya hai
// parantheses isliye lagaye hai kyunki JS semicolon insert kar degi automatically kahi to fir vo meri JSX ko kharab kar degi, isliye return ke liye parantheses lagaye
// fir kya hua apan ko emmet nahi mil rahe the likhte time, to apan ne setting mai jaake emmet search kara or vaha add item ke andar likha, key mai to ki javascript, or value mai likha javascriptreact, matlab jab bhi javascript matlab .js extension ho or mai javascriptreact use karu to emmet dena
// ab jaise apan ne upar likha hai ki ye import kar raha hai app.css ko, to apan ne jo id di blank uske liye ek css add kari hai apan ne, pehle se kuch css likhi hai apan ne abhi uska kuch ni kiya, bas apan ne blank wale mai styling kari, apan ne demo ke liye ye kara tha fir vapas blank id hata di
// matlab react jo hai vo webpack ka use karta hai, jo ki kya karta hai aap easily kisi css ko import karna chahte ho to kar sakte ho, vo apply ho jaati hai
// to ab summarize kare to JSX kuch nahi hahi bas HTML hai, bas isme kuch changes hai jo hume karne hai, or sath hi jaha jaha hume JS likhni hogi tab hum curly braces use karenge
// Babel jo hai vo JSX ko compile karta hai to React.createElement() calls

// fir fifth lect ke accprding apan ne kya kara ki, getbootstrap wali website se apan ne, quick start mai se ek to bootstrap ki css add kari title ke upar, or bootstrap ki javascript add kari div id root ke neeche, ye dono add kari inside index.html, fir apan ne npm start karke check kara ki bhai hamari bootstrap add ho gayi ya nahi, bootstrap jo hai vo css ka framework hai
// uske baad app.css ke andar jo CSS thi usko poore ko apan ne hata di
// ab apan kya kar sakte hai javascript or css of bootstrap ko add karne ke baad apan bootstrap ke components ko use kar sakte hai, kaha use karenge insisde app.css mai
// ab apan chalu kar rahe hai apni serious appp ko banana jo ki hai textutils, isliye upar jo bhi code likha tha return ke andar vo apan hata denge
// ye textutils app mai kya hai ki apan ek textbox banaenge usme text denge, fir agar usme se spaces hatane hai to hataenge, lowercase mai karna hai to karenge, sab ko agar uppercase mai karna hai to karenge, number of words kitne hai to dekh sakte hai, ye sab karenge, to apan pehle navbar se start karenge, isliye apna app.js se hi start karenge, jo yaha likhenge vo vaha aa ajega
// fir apan ne kya kara ki usi bootstrap wali website mai components mai jaake navbar mai jaake jo html thi usko yaha copy kardi, ab vo kya thodi bahut error useDebugValue, jo closing tag nahi honge usko apan ko end mai '/' laga ke close karna hoga jaise img ho gaya, hr ho gaya, in sab ko / se close karna hoga otherwise error denge, or class ko bhi chnag ekarna hoga className mai, to ye sab changes kare apan ne, fir run kara to chal raha tha, bas naam vaha navbar aara tha to vo hata ke, textutils likha, fir jo li hatane the vo hataye, jaha naam change karne the vo kare, jaise link ki jagah about daala
// abhi agar ham kisi pe bhi click karte hai to vo home page pe hi leke jaata hai, kyunki href mai / de rakha hai, baad mai apan react router ki help lenge, or search baar ko abhi apan ne rakha hai
// to apan ne ye dekha ki kese bootstrap ko add karte hai, or kese components ko use kar sakte hai, or kya changes karne hai
// or package.json mai jaake apan apna react ka version dekh sakte hai, or public folder mai vo files hoti hai jo ki publicly available hoti hai jab usko deploy karte hai, to isme koi bhi esi cheez mat daalna jo ki secret ho jaise ki password ho gaya, ya koi esi file jo credentials ko hold karti ho
// hum kabhi bhi apni app ko npm start karke host nahi karenge, hum apni app ko build karenge usking "npm run build", neeche aapne terminal mai dekha hoga ye likha hua aata hai: Note that the development build is not optimized.To create a production build, use npm run build., matlab ye optimized nahi hai, yaha pe aapko npm run build karna hoga fir jo aapko bundle milega vo optimize hoga, usko aap deploy kare, uspe traffic leke aaye, or jo aapke user hai vo isko dekhe, na ki unoptimized version ko
// fir navbar.js banane ke baad apan ne add kara <Navbar></Navbar>, esa bhi likh sakte hai <Navbar/>, upar fir import navbar wali line likhi import navbar likha jite hi automatically line aa gayi poori, fir npm start kara, to vo navbar component vaha load ho raha tha
// ab apan ne navbar kyu banaya, navbar isliye banaya taaki poora rayta yaha app.js mai na fel jaaye, to apan ne kya kara jo bootstrap se navbar ka content copy kiya tha na, usko apan ne navbar.js mai div poora hata ke vaha copy paste kar diya, taaki fir is navbar ko kahi or use karna chahe to kar sakte hai
// Mai cahhta hu us navbar component ko mai use to kar paau lekin kuch cheeze esi rakhu component mai jo badalti rahe mere hisaab se
// ab jaise jaha navbar mai naam aa raha hai na server pe textutils vaha mai chahta hu ki mai usko as a variable paas karu
// to apan ne kya kara ki jo navbar ka title tha vaha naam de diya for example textutils2, or navbar.js mai do changes kare, vaha function mai props paas kara, or fir neeche likha props.title in curly braces kyunki vo js hai
// to jab run kara to dekha ki bhai naam textutils2 aa raha hai, matlab maine ek esa react component bana liya jiska title mai change kar sakta hu, yaani koi dusri website banani pad gayi to title change karke isi navbar ko utilize kar sakta hu
// or agar koi or cheez bhi change karni pad jaaye to as a prop paas kar dunga, or fir accpt kar lunga as props.
// fir ese hi apan ne jo about tha, usko navbar.js mai likha props.abouText or app.js mai fir vahi navbar ke title ke aage hi likha aboutText or naam de diya About TextUtils, to vo bhi vaha aa gaya
// apan ne jo upar textutils2 diya tha vo isliye diya tha ki bhai naam pehle bhi yahi tha to chnag eho raha hai ya nahi ye dekhne ke liye 2 likha, but apan ne fir vapas 2 hata diya
// props kuch nahi hai bas properties hai
// aapne component banaya or aap uske andar kuch cheeze paas karna chahte hai, matlab ki bhai ye component hai par is component ke andar kuch variable hai jo ki mai bataunga ki kya honge, vo props hai
// props matlab aap kuch cheeze de rahe hai, matlab navbar ek component hai, jisko 2 cheeze chahiye(props) jo ki mai de raha hu title or abouttext, jo ki vo mujhe baad mai render karke de raha hai
// jo navbar component hai, vo title or aboutText ke bina adhoora hai, ab zaroori nahi hai in dono ki value string hi ho, kuch bhi ho sakti hai, vo koi obejct bhi ho sakta hai, link bhi ho sakti hai, apan amn chahe jitne props bhej sakte hai
// fir apan ne baat kari proptypes ki, to iske liye navbar.js mai likh rakha ahi
