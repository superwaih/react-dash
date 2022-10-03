import React from 'react'
import "./featured.scss"
import { CircularProgressbar } from "react-circular-progressbar"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1>Total Revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={80} text={"80%"} strokeWidth={5} />

                </div>
                <p className="title">Total Sales made today</p>
                <p className="amount">$420</p>
                <p className="desc">Previous transactions processing. Last transactions may not be included.</p>
                <div className="summary">
                    <div className="item">
                        Last Month
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize='small' />
                            <div className="resultAmount">$12.4k</div>

                        </div>
                    </div>
                    <div className="item">
                        Last Week
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize='small' />
                            <div className="resultAmount">$12.4k</div>

                        </div>
                    </div>
                    <div className="item">
                        Last Month
                        <div className="itemResult positive">
                            <KeyboardArrowDownIcon fontSize='small' />
                            <div className="resultAmount">$12.4k</div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Featured