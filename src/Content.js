import { useState } from "react";
import './Content.css';

const Content = () => {
    const [data, setData] = useState({ input: '' })
    const [records, setRecords] = useState([]);

    const handleAdd = () => {

        if (data.input.trim() !== '') {
            const rcds = [...records];
            rcds.push(data);
            setRecords(rcds);
            setData({ input: '' }); 
        }

    }

    const hanldeDelete=(i)=>{
        const rcds = [...records];
        rcds.splice(i,1);
        setRecords(rcds);
    }

    return (
        <>
            <div className="wrap-2">
                <div className="container">
                    <div className="row">
                        <div className="col-2 "></div>

                        <div className="col-8 .col-l-12">
                            <label>Todos :</label>
                            <input className="input" type="text" placeholder="Add Tasks...." value={data.input} onChange={(e) => setData({...data,input:e.target.value})} />
                            <button onClick={handleAdd}>Add</button>
                        </div>

                        <div className="col-2 .col-l-none"></div>
                    </div>
                </div>
            </div>
            {
                records.map((row,i)=>{return(
                    <div key={i} className="wrap-3" >
                        <div className="container">
                            <div className="row">
                                <div className="col-3"></div>

                                <div className="col-6">
                                    <input className="button" type="button" value="X" onClick={()=>hanldeDelete(i)} />
                                    <div className="input">
                                    {row.input}
                                    </div>

                                </div>

                                <div className="col-3"></div>
                            </div>
                        </div>
                        
                    </div>
                )})
            }
        </>
    );
}
export default Content;