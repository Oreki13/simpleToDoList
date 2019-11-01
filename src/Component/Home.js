import React, { Fragment, useState } from "react";
import { Navbar, Form, Container, Button } from "react-bootstrap";
import "../Style/home.css";
// import {} from "";

const Home = () => {
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState("Add List");
  const [kategori, setKategori] = useState("Kategori");
  const [fil, setFil] = useState([]);
  //   const [id, setId] = useState(0);

  const handleChange = e => {
    setItem(e.target.value);
  };
  const handleChange2 = e => {
    setKategori(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const uuidv4 = require("uuid/v4");
    let kat = kategori === "Kategori" ? "Work" : kategori;
    console.log(items.length);

    let newData = {
      kategori: kat,
      data: {
        id: uuidv4(),
        item: item
      }
    };
    const updateItems = [...items, newData];

    setItems(updateItems);
    setItem("Add List");
  };
  const handelDelete = id => {
    const filterItem = items.filter(data => data.data.id !== id);

    setItems(filterItem);
  };
  const handelEdit = (id, kategoris) => {
    console.log(kategoris);

    const filterItem = items.filter(data => data.data.id !== id);

    const find = items.find(data => data.data.id === id);

    setItem(find.item);
    setEdit(true);
    setKategori(kategoris);
    setItems(filterItem);
  };
  const handleFilterKat = e => {
    const filter = items.filter(data => data.kategori === e.target.value);

    setFil(filter);
  };

  const handleDeleteFilter = () => {
    setFil([]);
  };
  console.log(items);

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{"To Do List App"}</Navbar.Brand>
      </Navbar>
      <Container className="justify-content-center">
        <div className="input-box">
          <div>
            <h3 className="text-center pb-2">Input</h3>
          </div>
          <div className="input">
            <Form.Control type="text" onChange={handleChange} value={item} />
            <Form.Control
              className="ml-3"
              type="text"
              onChange={handleChange2}
              value={kategori}
            />
          </div>
          <div className="ml-3 text-center">
            {edit ? (
              <Button variant="success" onClick={e => handleSubmit(e)}>
                Edit List
              </Button>
            ) : (
              <Button variant="primary" onClick={e => handleSubmit(e)}>
                Make
              </Button>
            )}
          </div>
        </div>
        <div className="filter">
          <h3 className="text-center">Filter</h3>
          <Form.Label>Kategori</Form.Label>
          <Form.Control as="select" onChange={e => handleFilterKat(e)}>
            {items.map((data, key) => {
              return <option>{data.kategori}</option>;
            })}
          </Form.Control>
          <Button
            variant="danger"
            className="mt-3"
            onClick={() => handleDeleteFilter()}
          >
            Hapus Filter
          </Button>
        </div>
        <div className="todo">
          <h3 className="text-center">ToDo List</h3>
          <div className="todo-box">
            {fil.length > 0 ? (
              fil.map((data, index) => {
                return (
                  <div>
                    <p>{data.kategori}</p>

                    <hr />
                    <div className="todo-box-mini">
                      <p>{data.data.item}</p>
                      <div className="action">
                        <p
                          onClick={() =>
                            handelEdit(data.data.id, data.kategori)
                          }
                        >
                          Edit
                        </p>
                        <p onClick={() => handelDelete(data.data.id)}>Hapus</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : items.length > 0 ? (
              items.map((data, index) => {
                return (
                  <div>
                    <p>{data.kategori}</p>

                    <hr />
                    <div className="todo-box-mini">
                      <p>{data.data.item}</p>
                      <div className="action">
                        <p
                          onClick={() =>
                            handelEdit(data.data.id, data.kategori)
                          }
                        >
                          Edit
                        </p>
                        <p onClick={() => handelDelete(data.data.id)}>Hapus</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="pt-2 text-center">Belum Ada List</p>
            )}
            {/* {items.length > 0 ? (
              items.map((data, index) => {
                return (
                  <div>
                    <p>{data.kategori}</p>

                    <hr />
                    <div className="todo-box-mini">
                      <p>{data.data.item}</p>
                      <div className="action">
                        <p
                          onClick={() =>
                            handelEdit(data.data.id, data.kategori)
                          }
                        >
                          Edit
                        </p>
                        <p onClick={() => handelDelete(data.data.id)}>Hapus</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="pt-2 text-center">Belum Ada List</p>
            )} */}
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Home;
