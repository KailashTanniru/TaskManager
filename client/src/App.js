import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import SideBar from "./components/SideBar";
import MainScreen from "./components/MainScreen";
import  { Route,Routes } from 'react-router-dom';
import CompletedTasks from "./components/actions/CompletedTasks";
import ActiveTasks from "./components/actions/ActiveTasks";
import ImportantTodos from "./components/actions/ImportantTodos";

function App() {
  // const url = "http://localhost:3001"
  
  // const [todo,setData] = useState([]);
  // useEffect(
  //   ()=>{
  //     axios.get(url+"/getTodos").then((res)=>{
  //       setData(res.data);
    
     

  //     }).catch(error =>{
  //       console.log(error);
  //     })
  //   },[])

  return (
    <GlobalProvider> 
    {/* <Main /> */}
      <div className="flex w-[100%]  h-screen">   
      <div className='flex-auto w-1/5 bg-[#F7F5F2] max-lg:hidden '>
        <SideBar />

      </div>
      <div className='flex-auto  w-4/5 h-screen bg-[#EFEFEF] overflow-auto'>

      <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/tasks" element={<ActiveTasks />}  />
          <Route path="/important" element={<ImportantTodos />}  />
          <Route path="*" element={<h1>Error</h1>}/>
          <Route path="/error"  element={<SideBar />} />
        
      </Routes>
      
      </div>
    
        
      
     
      
         
      </div>
       

    </GlobalProvider>
  );
}

export default App;
