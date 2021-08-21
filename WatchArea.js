import React from "react";
import axios from "axios";
import * as AppConstant from "./AppConstant"
import FormatNumber from "./FormatNumber"
import ErrorBoundary from "./ErrorBoundary";
import ColorContext from "./ColorContext";
import Model from "./Model";

// what u mean React.Component(its goonna get some inheritance from React.Component)
class WatchArea extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            showModal: false
        };
    }

    componentDidMount() { //best place to write Api
        axios.get(`${AppConstant.VIDEO__URL}&id=${this.props.id}`)
            .then((res) => {
                const item = res.data.items[0];
                this.setState({
                    title: item.snippet.title,
                    views: item.statistics.viewCount,
                    description: item.snippet.description,
                    channel: item.snippet.channelTitle,
                    like: item.statistics.likeCount,
                    url: item.id,
                    loading: false
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        if (this.state.loading) {
            return <h1 className="loader"></h1>
        }
        const { title, views, description, channel, like, url, showModal } = this.state;
        return (
            <div className="watch-area">
                <div className="player">
                    <iframe src={`//www.youtube.com/embed/${url}`}
                        width="1050"
                        height="500"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        title={title}>
                    </iframe>
                </div>

                <h1>{title}</h1>
                <div className="video-stats">
                    <div className="v1"><FormatNumber number={views} /> 🤳Views</div>
                    <div className="l1"><FormatNumber number={like} /> 👍Likes</div>
                </div >
                <div className="channel-name">{channel} 🎧Channel</div>
                <p className="d1">Description 👇: <br />
                    <br />{description}</p>
                {showModal ? (
                    <Model>
                        <div>
                            <h1>question</h1>
                        </div>
                    </Model>
                ) : null
                }

            </div>
        )
    }
}

export default function WatchAreaWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <WatchArea {...props} />
        </ErrorBoundary>
    )
}