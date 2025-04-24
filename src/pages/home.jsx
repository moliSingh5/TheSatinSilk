import React,{ useEffect } from "react";
import { Table } from "antd";
import "antd/dist/reset.css";
import { useGlobalState } from "../provider/GlobalStateContext";
// import { useGlobalState } from "../provider/GlobalStateContext";

function Home() {
  const {data, setData} = useGlobalState();
  // const [records, setRecords] = useState(data)

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => response.json())
      .then((result) => {
        setData(result.data)
        // setRecords(result.data)
    })
      .catch((error) => console.log("error"));
  }, [setData]);

  const columns = [
    { title: "Nation", dataIndex: "Nation", key: "Nation" },
    { title: "Year", dataIndex: "Year", key: "Year" },
    { title: "Population", dataIndex: "Population", key: "Population" },
  ];

  return (
    <div style={{marginLeft:-120,marginTop:40}}>
        {/* <input type="number" className='form-control' onChange={Filter}  placeholder="year"/> */}

      <h1>US Data</h1>
      <Table dataSource={data.map((item,index)=>({...item, key:index}))} columns={columns} pagination={{pageSize:6}} bordered/>;
    
    </div>
  );
}

export default Home;