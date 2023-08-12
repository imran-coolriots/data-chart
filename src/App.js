import React, { useEffect, useState } from 'react';

function App() {
  const [apiData, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  // const [date, setDate] = useState([]);
  // const [sector, setSector] = useState([]);
  // const [value, setValue] = useState([]);


  // const [currentPage, setCurrentPage] = useState(1);
  // const recordsPerPage = 10;
  // let ii = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    fetch('http://localhost:5000/insight') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        setData(data);
        // setDate([...data["Date"]]);
        // setSector([...data["Sector"]]);
        // setValue([...data["Value"]]);

        console.log(data);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < apiData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = apiData.slice(startIndex, endIndex);

  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = data.slice(firstIndex, lastIndex);
  // const npage = Math.ceil(data.length / recordsPerPage)
  // const numBers = [...Array(npage).keys()].slice(1)

  return (
    <div>
      <h2>CO2 Emissions Data</h2>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Value</th>
            <th>Sector</th>
          </tr>
        </thead>
        {/* {
          date.forEach((e, index) => {
            if (index < 10) {
              <tr>
                <td>{date[index]}</td>
                <td>{value[index]}</td>
                <td>{sector[index]}</td>
              </tr>
            }
          })
        } */}
        {/* {
          ii.map((i) => {
            if (i < 30) {
              return <tr>
                <td>{date[i]}</td>
                <td>{value[i]}</td>
                <td>{sector[i]}</td>
              </tr>
            }
          })
        } */}
        <tbody>
          {
            currentData.Date.forEach((date, index) => {
              <tr key={index}>
                <td>{date}</td>
                <td>{currentData.Value[index]}</td>
                <td>{currentData.Sector[index]}</td>
              </tr>
            })
          }
        </tbody>



      </table>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage * itemsPerPage >= apiData.length}>
          Next
        </button>
      </div>
    </div>
  );

  // function prePage() { }
  // function changePage(id) {

  // }

  // function nextPage() {

  // }

}

export default App;
