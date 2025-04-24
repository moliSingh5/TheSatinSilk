import React,{ useEffect, useState} from "react";
// import { Table } from "antd";
// import { MenuProps } from 'antd';
import { Button, Flex } from 'antd';
import "antd/dist/reset.css";
import { useGlobalState } from "../provider/GlobalStateContext";
// import Add from "./crud_form/additem.jsx"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function Products() {

  const blankUser = {
    "title":"",
    "price":"",
    "description":"",
    "category":"",
    "image":""

  }

  const {data, setData} = useGlobalState();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(blankUser);
  const[userdata, setUserdata ]= useState([]);


  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const addUser=()=>{

    setUserdata([...userdata,user]);
    setUser(blankUser);
    onCloseModal();
  }


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setData(result)
        // setRecords(result.data)
    })
      .catch((error) => console.log("error"));
  }, [setData]);

  // const columns = [
  //   { title: "Title", dataIndex: "title", key: "title" },
  //   { title: "Price", dataIndex: "price", key: "price" },
  //   { title: "Description", dataIndex: "description", key: "description" },
  //   { title: "Category", dataIndex: "category", key: "category" },
  //   { title: "Image", dataIndex: "image", key: "image" },

  // ];

  return (
    <div  className="App" style={{marginLeft:-120,marginTop:50}}>


  <Flex align="flex-end" gap="small" vertical>
    <Button onClick={onOpenModal}>ADD PRODUCT</Button>
  </Flex>



      <h1>Product Details</h1>
      {/* <Table dataSource={[...data, ...userdata].map((item,index)=>({...item, key:index}))} columns={columns} pagination={{pageSize:6}} bordered/>; */}
      <div className="product-grid">

        {[...data, ...userdata].map(product =>(
          <div key ={product.id} className="card">
            <img src={product.image} alt={product.title}/>
            <h2>${product.price}</h2>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <button>Add to cart</button>
            </div>
        ))}
        </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Add Product Details</h2>
        <div className="form">
        <label htmlFor="Title">Title:</label>
        <input
          type="text"
          value={user.title}
          onChange={(e) => setUser({ ...user, title: e.target.value })}
        />
        <br></br>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          value={user.price}
          onChange={(e) => setUser({ ...user, price: e.target.value })}
        /><br></br>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={user.description}
          onChange={(e) => setUser({ ...user, description: e.target.value })}
        /><br></br>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          value={user.category}
          onChange={(e) => setUser({ ...user, category: e.target.value })}
        /><br></br>
        <label htmlFor="image">Image:</label>
        {/* <input
          type="file"
          value={user.image}
          onChange={(e) => setUser({ ...user, image: e.target.files[0]})}
        /><br></br> */}

        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file);
              setUser({ ...user, image: imageUrl });
            }
          }}
        /><br></br>
        <button className='btn'  onClick={()=>addUser()}>Submit</button>
        </div>
      </Modal>
    
    </div>
  );
}

export default Products;