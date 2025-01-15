//import {getDatabase,ref ,set} from "firebase/database";
import  app  from "./firebase";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
//const db = getDatabase(app);
const auth = getAuth(app);

function App() {

  const signupUser =() =>{
    createUserWithEmailAndPassword(
      auth, 
      'devindi@gmail.com',
      'devindi123'
    ).then(value => console.log(value));

  };
  
  {/*const putData =()=>{
    set(ref(db, "users/"),{
      id:2,
      name:"anuradha",
      age:21,
    });
  };*/}

  return (
    <div >
      <Signup/>
      <Login/>
      {/*<h1>firebase</h1>
      <button onClick={putData}> add data</button>
      <button onClick={signupUser}>create user</button>*/}
    </div>
  );
}

export default App;


  