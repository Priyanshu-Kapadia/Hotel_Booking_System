import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import * as moment from 'moment'

const Featured = ({datas}) => {
  let target = 10000;
  let cal = 0;
  datas?.map((i)=> {
    var x = moment(Date.now()).format('DD/MM/YYYY')
    var y = moment(Date(i.createdDate)).format('DD/MM/YYYY')
    if (x == y) {
      cal = cal + i.amount
    }
  })

  const perc = Math.round(cal/target * 100);
  console.log(Math.round(perc));

  console.log(datas);
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={perc} text={`${perc}%`} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">₹ {cal}</p>
        <p className="desc">
          Today transactions processing. Last payments may not be included.
          Daily Target is {target}
        </p>
        {/* <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;
