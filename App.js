//React Router,Reach
// import Video from "./Video";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchArea from "./SearchArea";
import { Router } from "@gatsbyjs/reach-router";
import WatchArea from "./WatchArea";
import ColorContext from "./ColorContext";

const App = () => {
    const themeColor = useState("darkblack");
    return (
        <ColorContext.Provider value={themeColor}>
            <div>
                <header>
                    <a href="/">BeeTube</a>
                </header>
                <Router>
                    <SearchArea path="/" />
                    <WatchArea path="/watch/:id" />
                </Router>
                {/* <Video
                    title="How To Build YoutubeClone"
                dateAdded="1 days ago"
                Channel="Programming Channel"
                />
                <Video
                    title="Resident evil 7 walk Through"
                    dateAdded="2 days ago"
                    Channel="Gaming Channel"
                />
                <Video
                    title="Evil Twin Attack"
                    dateAdded="5 days ago"
                    Channel="LearnEthicalHacking"
                /> */}
            </div>
        </ColorContext.Provider>
    )
    // return React.createElement("div", { }, [
    //     React.createElement("h1", { }, "BeeTube"),
    //     React.createElement(Video, {
    //         title: "How To Build YoutubeClone",
    //         dateAdded: "1 days ago",
    //         Channel: "Programming Channel"
    //     }),
    //     React.createElement(Video, {
    //         title: "Resident evil 7 walk Through",
    //         dateAdded: "2 days ago",
    //         Channel: "Gaming Channel"
    //     }),
    //     React.createElement(Video, {
    //         title: "Evil Twin Attack",
    //         dateAdded: "5 days ago",
    //         Channel: "LearnEthicalHacking"
    //     })
    // ]);
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));