import React from "react";
import { GiDeerTrack } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { RiCustomerServiceLine } from "react-icons/ri";
import { SiSpringCreators } from "react-icons/si";
import { MdSettingsSuggest } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidenav(){
    return(
        <div className="nav">
            <table className="navtable">
                <tr>
                    <td>
                        <img src="/images/logo.png" alt="logo/" width="180px" height="180px"/>
                    </td>
                </tr>
                <br></br>
                <tr>
                    <td>
                         <Link className="Home" to="/"> <GiDeerTrack /> Tracker</Link>  
                    </td>
                </tr>
                <br></br>
                <tr>
                    <td>
                        <Link className="History" to="TransactionList/"> <GrTransaction /> Transaction</Link>
                    </td>
                </tr>
                <br></br>
                <tr>
                    <td>
                        <Link className="Report" to="Report/"> <FaChartPie /> Reports</Link>
                    </td>
                </tr>
                <br></br>
                <tr>
                    <td>
                        <Link className="Sett" to="Sett/"> <MdSettingsSuggest /> Settings </Link>
                    </td> 
                </tr>
                <br></br>
                <tr>
                    <td>
                        <a href="https://github.com/Vidxu/First-Student-Portfolio" target="_blank">
                            <SiSpringCreators/> Creator
                        </a>
                    </td>
                </tr>
                <br></br>
                <tr>
                    <td>
                        <Link className="Chatbot" to="Chatbot/"><RiCustomerServiceLine /> Customer Care</Link>  
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Sidenav ;