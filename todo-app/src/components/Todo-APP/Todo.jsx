import React, { useState } from 'react';
import "../Todo-APP/todo.css";
import Navbar from '../navbar/navbar';

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [dataList, setDataList] = useState([]);
 

  const handleSubmit = () => {
    if (inputData.trim() !== "") {
      setDataList([...dataList, { text: inputData, checked: false }]);
      setInputData("");
    }
  };

  const deleteItem = (indexToDelete) => {
    const filteredData = dataList.filter((item, index) => index !== indexToDelete);
    setDataList(filteredData);
  };

  const toggleUnderline = (index) => {
    const updatedDataList = [...dataList];
    updatedDataList[index].checked = !updatedDataList[index].checked;
    setDataList(updatedDataList);
  };



  return (
    <>
      <Navbar />
      <div className="container" >
        <div className="row d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
          <div className="col-lg-10 col-md-12 col-12 box">
            <h1 className='text-info text-center my-5'>
              <span className='bi bi-check-lg p-2 text-white bg-info rounded'></span> My Todo-s
            </h1>

        

            <div className="box">
              <div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control fs-4 p-4 border-0 rounded shadow-lg"
                    placeholder="Enter New...."
                    aria-label="Recipient's username"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    aria-describedby="button-addon2"
                  />
                  <button className="btn btn-outline-secondary fs-1 border-0 bg-info bi bi-plus" type="button" onClick={() => handleSubmit()} id="button-addon2"></button>
                </div>
              </div>
              <div>
                <table className="table table-responsive">
                  <tbody>
                    {dataList.map((item, index) => (
                      <tr key={index} className='bg-danger'>
                        <th scope="row"></th>
                        <td>
                          <div className="form-check mt-2 p-0">
                            <input
                              className="form-check-input fs-4 mx-2"
                              type="checkbox"
                              value=""
                              id={`flexCheckDefault${index}`}
                              onClick={() => toggleUnderline(index)}
                            />
                          </div>
                        </td>
                        <td
                          className={`pt-lg-3 fs-5 ${item.checked ? ' text-decoration-line-through' : ''}`}
                        >
                          {item.text}
                        </td>

                        
                        <td className='d-flex justify-content-end'><button className='bi btn bi-trash text-danger border-0 fs-3' onClick={() => deleteItem(index)}></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;




