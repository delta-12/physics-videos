import { Component } from "react"
import classnames from "classnames"
import VideoHeader from "./VideoHeader"

export default class MainContent extends Component {

    state = {
        videoID: ""
    }

    onClick = e => {
        let stringArr = e.target.value.split("/")
        this.setState({ videoID: stringArr[stringArr.length - 1].split("=")[1] })
    }

    render() {
        const width = (this.props.windowWidth >= 1153) ? 1153 : this.props.windowWidth * 0.9
        return (
            <main className={classnames((width >= 1153) ? "ml-sm-auto col-lg-12 px-4 mt-5" : "col-lg-12 mt-5")} >
                <VideoHeader title={this.props.title} videos={this.props.videos} onClick={this.onClick} />
                {
                    (this.state.videoID.length > 0) ? <iframe className="mt-3" width={width} height={width / 1.6} src={"https://www.youtube.com/embed/"+this.state.videoID} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : null 
                }
            </main>
        )
    }

}