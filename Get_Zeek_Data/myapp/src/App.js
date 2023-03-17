import BarChart from './Components/BarChart';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Dataset 1',
    data: [12, 19, 3, 5, 2, 3, 7],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }, {
    label: 'Dataset 2',
    data: [7, 11, 5, 8, 3, 9, 2],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

const App = () => {
  return (
    <div>
      <h1>My Bar Chart</h1>
      <BarChart data={data} />
    </div>
  );
};

export default App;
