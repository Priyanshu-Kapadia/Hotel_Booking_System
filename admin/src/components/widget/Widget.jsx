import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import HomeIcon from "@mui/icons-material/Home";
import KingBedIcon from "@mui/icons-material/KingBed";
import useFetch from "../../hooks/useFetch"
import { Link } from "react-router-dom";

const Widget = ({ type, path }) => {
  let tempdata;
  let cal = 0;
  const { data, loading, error } = useFetch(`http://localhost:5000/api/${path}`);
  data?.map((i)=> cal = cal + i.amount);
  //temporary
  // const diff = 20;

  switch (type) {
    case "user":
      tempdata = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        amount: data.length,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "hotels":
      tempdata = {
        title: "HOTELS",
        isMoney: false,
        link: "View all hotels",
        amount: data.length,
        icon: (
          <HomeIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "rooms":
      tempdata = {
        title: "Rooms",
        isMoney: false,
        link: "View all rooms",
        amount: data.length,
        icon: (
          <KingBedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "earning":
      tempdata = {
        title: "EARNINGS",
        isMoney: true,
        // link: "View net earnings",
        amount: cal,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    // case "balance":
    //   data = {
    //     title: "BALANCE",
    //     isMoney: true,
    //     link: "See details",
    //     icon: (
    //       <AccountBalanceWalletOutlinedIcon
    //         className="icon"
    //         style={{
    //           backgroundColor: "rgba(128, 0, 128, 0.2)",
    //           color: "purple",
    //         }}
    //       />
    //     ),
    //   };
    //   break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{tempdata.title}</span>
        <span className="counter">
          {tempdata.isMoney && "₹"} {tempdata.amount}
        </span>
        <span className="link"><Link to={`/${path}`} style={{textDecoration: "none"}} >{tempdata.link}</Link></span>
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {tempdata.icon}
      </div>
    </div>
  );
};

export default Widget;
