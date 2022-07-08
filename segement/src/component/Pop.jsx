import {useState} from "react";
import "./Pop.css";
import axios from "axios";




export const Pop=()=>{
    const [todoList,setTodoList]=useState([]);
    const [text,setText]=useState("");
    const [arr,setArr]=useState([]);
    const [click,setClick]=useState([]);
    const options=["first_name","last_name","genter","age","account_name","city","state"];
    const label=["First Name","Last Name","Gender","Age","Account Name","City","State"];
    console.log(arr);
    console.log(click,click.length);
    const arrow="<";
      
    
        
       

    
    const getData = (todo) => {
        setTodoList([...todoList, todo])
        console.log(todoList)
        
        axios.post(' http://localhost:3004/', {
          segement_name: todo,
          
          
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
        setText("");

    }

    function handleChange(e){
        if(e.target.value !== "add Schema" ){
            
            console.log("e",e.target.value);
            let z=[...arr];
            if(z.includes(e.target.value)=== false){
                z=[...arr,e.target.value];
                setArr(z);
            }
            
            

        }
    }
    return(
        <div>
            <div className="nav">
                <div> &nbsp;&nbsp;{arrow} &nbsp; Saving Segments</div>
            </div>
            <h5  >Enter the name of the segement</h5>
            
                <input className="segment" value={text} onChange={(e)=>{
                // console.log(e.target.value)
                setText(e.target.value)
            }} placeholder="Name Of the segment"></input>
            
            <div><h5>To save your segment you need to add the schema to build the query</h5></div>
            <div >
                <ul className="li">
                    <li style={{marginRight:"18px"}}>-User triats</li>
                    <li>-Group triats</li>
                </ul>
            </div>
            
           <div className={click.length>0 ? "selection" : null}>{click.map((e)=>{
             return <ul><li><div><select className="schema1" >
                
                {options.map((x,i)=>{
                     if(e === x){
                        console.log("x",x);
                        return <option value={x}>{label[i]}</option>
                        
                     }
                     

                })}
                {options.map((x,i)=>{
                     if(e !== x && !click.includes(x)){
                        console.log("x",x);
                        return <option value={x}>{label[i]}</option>
                        
                     }
                     

                })}
             </select><button className="side">-</button>
             </div></li></ul>
           })}</div>
           
           <div> 
            <select className="schema" style={{marginLeft:"40px"}} onChange={handleChange}>
            <option  value="add schema" >Add Schema To Segment</option>
                { 
               options.map((e,i)=>{
                return <option value={e} >{label[i]}</option>
               })
           }
            </select><button className="side">-</button>
            
            </div>
            <br></br>
            <div><button className="submit" style={{marginLeft:"40px"}} onClick={()=>{
                setClick(arr);
            }}>+ Add  new schema</button></div>
            <div>
            <button className="savebut" onClick={()=>{getData(text)}}>Save the Segment</button>
            <button className="cancelbut">cancel</button>
            </div>
         </div>
    )
}