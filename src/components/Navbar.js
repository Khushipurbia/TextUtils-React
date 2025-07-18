import React from "react";
import PropTypes from "prop-types";


// import { Link } from "react-router-dom"; comment kara in 17th lect

export default function Navbar(props) {
  // ek to yaha props likha, or neeche vaha props.title likha hai braces mai kyunki vo JS hai
  return (
    // <div>
    //   Hello, I am a Navbar
    // </div>

    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    // navbar → tells Bootstrap this is a navbar component. navbar-expand-lg → navbar will expand in large viewports.bg-body-tertiary → this is the background color class.This is a Bootstrap 5 color utility class.It uses CSS variables from Bootstrap's theme.bg-body-tertiary is usually a very light gray or muted background.The actual color may vary depending on Bootstrap theme or dark/light mode.

    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      {/* to 10th lect ke according ye line mai JS se likhna chahunga, to isme pehle to curly brackets lagaye, or backticks lagaye, backticks kyu taaki is poori ki poori string ke andar mai template literal ka use kar saku, to fir andar apan ne $ lagaya fir curly braces jisse mai variable ka use kar sakti hu, or dark ko hata ke likha prop.mode */}

      {/* Class	What it doesnavbar	Tells Bootstrap this is a navbar component navbar-expand-lg	Expands navbar on large screens navbar-dark	Makes text/icons suitable for dark backgrounds (white/light color text) bg-dark	Applies a dark background (usually black or near-black) */}
      {/* fir neeche button ka color success(green) tha to usko blue karna tah to primary likha */}
      <div className="container-fluid">
        {/* 17lect mai hi href ke slash ko hash kara tha, sab jagah */}
        <a className="navbar-brand" href="#">{props.title}</a>
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link>  */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              {/* 17lect mai hi href ke slash ko hash kara tha, sab jagah */}

              {/* ye link wala vapas hataya in 17lect or a or href use kiya */}
              {/* <Link className="nav-link active" aria-current="page" to="/"> 
                Home
              </Link> */}
            </li>

            {/* is section ko comment kara about wale ko in 17lec */}
            {/* <li className="nav-item"> */}
              {/* <a className="nav-link" href="/"></a> */}
              {/* <Link className="nav-link" to="/about"> */}
              {/* yaha pe to mai / hi tha to vaha about bhi daala */}
                {/* {props.aboutText}
              </Link>
            </li> */}
          </ul>

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
          {/* <button className="btn btn-outline-success" type="submit"></button> */}
          {/* <button className="btn btn-primary" type="submit"> */}
          {/* danger red hota hai, success green hota hai, or primary blue hota hai, or outline nahi chahiye thi to outline hata di*/}
          {/* ye sab bootstrap ki classes hai, or agar aap chahte ho ki nahi yaad aari hai to official doc mai jaake dekh sakte ho, components ke andar buttons ke andar */}
          {/* Search
            </button>
          </form> */}

          {/* fir apan ko 10th lect mai search wala nahi chahiye the to hata diya, or ek switch add karna tah enbale dark mode ka to vo bootstrap ki doc mai se copy kara or yaha likha, iske baad apan ne function banaya app.js mai hi, to udhar jaa kar dekho */}

          {/* <div className="form-check form-switch text-light"> */}
            {/* yaha pe text-light apan ne daala, kyunki navbar black tha to usme font nahi dikhra tha kyunki vo bhi black tha, to iske liye text-light kara */}
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}> 
            {/* to sabse pehle isko template literal banaya, or fir text ke color mai variable de diya or usme bhi ternary operator lagaya ki bhai agar text light ho to dark set karna, varna light set karna text ko*/}
            <input
              className="form-check-input"
              onClick={props.toggleMode} //10th lect ke according yaha onclick add kara
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
// ab ye jo isrequired hai matlab agar mai title ki value nahi dungi to vo error show karega, but agar uske bad defaultprops de rakha hai, to fir error show nahi karega kyunki default value le lega, isrequired matlab kuch na kuch value ho undefined nahi hona chahiye

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About text Here",
};

// react function based components chahiye tha to sirf rfc likha, or by default syntax likha hua aa gaya

// upar import kara pehle, pehle import p likha to auto aa gaya, fir yaha neeche hi neeche likha, Navbar, prototypes, fir likha pts to aa gaya proptypes.string, fir kiska type ye hai to pehle prop ka naam tha title or dusra tha aboutext to va fir dono ka likha, to ye jo hai vo ek object hai, bas ye dhyan rakhna hai, navbar ke baad wale protypes mai p small hona chahiye
// agar aap kabhi syntax bhul jaate hai to react proptypes ke documentation mai jaake dekh sakte ho, or jaise kabhi aap 3 paas kar dete ho title ki value mai to vo error deta hai, kyunki idhar apan ne string diya to aap udhar number kese de rahe ho, console mai error bataega vo
// fir baad mai defaultprops bhi add kare ki bhai jaise abhi to navbar ke andar values de rakhi hai app.js mai, but agar mai kabhi dena bhul jaata hu values or sirf ye likh deta hu <Navbar/>, to tu ye default values vaha show karna
// ye default value kaam karni chahiye thi par nahi kar rahi hai kyunki kyunki kuch version vagera ki dikkat ho gayi hai baaki defaultprops ka matlab or syntax ye hota hai
