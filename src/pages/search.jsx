import React,{ useEffect, useState } from "react";
import { Table } from "antd";
import "antd/dist/reset.css";
// import Test from "./test";
// import {Menu } from 'antd';
// const { RangePicker } = DatePicker;

function Search() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState(data)

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => response.json())
      .then((result) => {
        setData(result.data)
        setRecords(result.data)
    })
      .catch((error) => console.log("error"));
  }, []);

  const Filter = (event) =>{

    setRecords(data.filter(f => f.Year.includes(event.target.value)))
  }

  const columns = [
    { title: "Nation", dataIndex: "Nation", key: "Nation" },
    { title: "Year", dataIndex: "Year", key: "Year" },
    { title: "Population", dataIndex: "Population", key: "Population" },
  ];

  return (
    <div style={{marginLeft:-120,marginTop:40}}>
        <input type="number" className='form-control' onChange={Filter}  placeholder="year"/>

      <h1>US Data</h1>
      <Table dataSource={records.map((item,index)=>({...item, key:index}))} columns={columns} pagination={{pageSize:6}} bordered/>;
    
    </div>
  );
}

export default Search;