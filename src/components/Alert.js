import React from "react";

export default function Alert(props) {
    // yaha props paas kara
    // fir kya jo success likha hua aa raha tha uska s small aa raha tha to usko capital karne liye capitalize func banaya, jo ki ek word lega
    const capitalize=(word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
        // pehle const lower mai sabko lower case mai convert kiya, then return mai likha ki jo 0 index pe hai usko capital karo or fir usko add kardo slice(1) mai, or fir neeche jaha props.alert.type tha vaha capitalize func de diya
    }
  return (
    // <div class="alert alert-warning alert-dismissible fade show" role="alert"></div>
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> 
    {/* yaha par ye props.alert nahi add kara tha to error de raha tah kyunki alert jo tha vo initial stat emai to null tha, to uske liye props.alert likha fir ye likha &&, jo kya karega ki agar alert kuch hota hai to hi aage chalega, baaki nahi chalega */}
    {/* yaha pe warning ko hata ke apan ne props.alert.type diya, taaki success hai to green color ho jaaega, kyunki pehle vaha warning likha tha to usse yellow color aa raha tha */}
      {/* <strong>Holy guacamole!</strong> You should check in on some of those
      fields below. */}
      {/* <strong>{props.alert}</strong> */}
      {/* yaha props.alert de diya, alert ka msg apan ne app.js mai likha hai, or isko bold karna tha to strong ke andar daal diya */}
      {/* fir is line ko comment kara or change kara  */}
      {/* ki agar msg type sucess hai to usko print karwao or fir msg do, fir changes kare app.js mai dark orlight mode ke andar */}
      {/* yaha pe fir capitalize func bhi de diya, fir vapas app.js mai chnages agg kare kuch */}
      <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
      {/* ye poora ka poora return wala section bootstrap ki documentation se copy kara, bas ek by default wali line comment kardi or jo apne ko chahiye tha jaisa vo daal diya */}
      {/* <button type="button"class="btn-close"data-bs-dismiss="alert"aria-label="Close"></button> */}
      {/* dekho bhai ab ek dikkat thi ki alert aa raha tha to usko agar vaha cross pe click kar de rahe the, to vo vapas nahi aa raha tha, vapas alert kahi show ho hi nahi raha tha, to bas mai chahti thi ki bhai, alert aaye to sahi but vo hamesha ke liye tanga na rahe, kuch second rahe fir automatically gayab ho jaaye, to ye apan ne kese kara vo dekhenge, usse pehle ye cross apne ko nahi cahhaiye tha to button ko comment kar diya */}
      {/* to jo ye bug tha, to cross button ka option to isliye hataya ki bhai apan ko user ko alert dismiss karne ka option nahi dena tha, or fir chahte the ki kuch time tak rahe fir hat jaaye, to vo sab apan ne app.js mai showAlert ke andar kara */}
    </div>
  );
}
