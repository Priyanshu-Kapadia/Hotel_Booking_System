import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/booking`
  );
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" path="users"/>
          <Widget type="hotels" path="hotels"/>
          <Widget type="rooms" path="rooms"/>
          <Widget type="earning" path="booking"/>
        </div>
        <div className="charts">
          <Featured datas={data}/>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table datas={data}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
