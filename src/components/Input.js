export function Input({placeholder,label,type,className}) {
    return(
       
            <>
          <label for="">{label} : </label> <br/>
          <input type={type} name="nom" placeholder={placeholder} className={className}/> <br/>
          </>
       
   
    );
}