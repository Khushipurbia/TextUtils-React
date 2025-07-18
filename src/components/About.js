import React, {useState} from "react";

export default function About() {
  // let myStyle = {

  // ye syntax emmet se aana chahiye tha, par aa nahi raha tha, to iska syntax hota hai const[state, setstate]=useState(initialState), to apan ne state mai likha mystyle, or setstate mai likha setmystyle and initial state mai jo initial state thi color ki vo daali, matlab jo set karni hai dark mode pe click karne ke baad vo nahi daali, jo initial thi isko daali, light mode wali
  const[myStyle, setMyStyle]=useState( {
    color: 'black',
    backgroundColor: 'white',
  })
  // to apan ne yaha initial state daali hai bas

  // {
  //   color: 'black',
  //   backgroundColor: 'white',
  // };
  const[btntext, setBtnText]=useState("Enable Dark Mode")
  // yaha apan chahte the ki button ki state ko bhi as a state use kare to vo kara apan ne, ye bhi dekh sakte ho ki apan ne yaha par ek se zyda state use kari hai, to vo apan kar sakte hai, yaha apan ne initial light mode set kara to, btntext us time jo initial hoga vo dark ka hoga, to dark ka likha, or vaha neeche button ka jo text tha vaha apan ne likha tha enable dark mode, to vaha se hata ke likha {btntext}


  // uske baad neeche button wali line mai, onclick mai function likha toggle click, jo ki ek arrow function hai, or usko yaha define kara
  const toggleClick = () => {
    // yaha apan ne likha ki bhai agar font color black ho to(matlab light mode), to usko dark kar dena, to bg color black diya or font white diya, or matlab jab dark mode ho jaega, to fir us time pe button ki state ho jaani chahiye enable light mode
    // equality ke liye double bhi use kar sakte hai, but triple or jyda strict hota hai
    if(myStyle.color === 'black'){
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("Enable Light Mode")
    }

    // fir else mai condition poori ulti kardi or light mode set kar diya, or button ka set kara enable dark mode 
    else{
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable Dark Mode")
    }
  }

  return (
    <div className="container" style={myStyle}>
      {/* fir yaha jo className hai na apan vaha style bhi daal sakte hai, uske andar apan ne naam daal diya mystyle jo ki style ka variable hai jo ki ek object hi hai, fir upar define kar diya usko , or usi style ko accordion mai bhi use kar liya, uske baad jo buttons the andar accordion mai, usme bhi dark mode daala, or jo body thi teeno ki usme bhi yahi style daali to sab darkmode jaisa ho gaya*/}
    {/* in sab ke baad if mai style ko ek statevariable bana du to, uske baad dark mode pe click karenge to vo enbale ho jaega, to uske liye apan use state ka use karenge, to apan ne import ke vaha likha useState, let myStyle ka jo syntax tha usko bhi thoda change kara, useState ke format se */}
      <h2 className="my-3">About Us</h2>
      {/* yaha heading daali apan ne */}
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item’s accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item’s accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item’s accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* neeche yaha button add kara bootstrap ke components mai se hi */}
      <button type="button" onClick={toggleClick} className="btn btn-primary my-3">{btntext}</button>
    </div>
    
  );
}



// dekho agar textform or about dono chahiye to app.js mai import wali line dono ki rakho, or textform wali line or about wali line bhi rakho, or agar koi ek nahi chajiye to comment kardo usko, maine fir abou wala nahi chahiye tha to comment kardi