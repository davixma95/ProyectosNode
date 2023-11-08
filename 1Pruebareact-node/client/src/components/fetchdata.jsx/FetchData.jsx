// const FetchData = () => {
//     fechdata();
//     // console.log('Estoy en fetchData')
//     return (
//         <div>FetchData</div>
//     )
// }

import { useContext } from "react";
import { AuthContext } from "../../contents/auth.context";

// const fechdata = async() => {
//     const response = await fetch('http://localhost:3000',{
//         method:'POST'
//     });
//     const data = response.json();
//     console.log(data);
// }

// Uso de contexto aqui debajo

const FetchData = () => {
    const  { number } = useContext(AuthContext);
    console.log(number)
    // fechdata();
    // console.log('Estoy en fetchData')
    return (
        <div>FetchData</div>
    )
}



export default FetchData;