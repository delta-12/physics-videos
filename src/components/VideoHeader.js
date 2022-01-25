import { Component } from "react"
import VideoHeaderLink from "./VideoHeaderLink"

export default class VideoHeader extends Component {

    render() {
        const videoLinks = this.props.videos.map(v => <VideoHeaderLink key={v.name} name={v.name} onClick={this.props.onClick} link={v.link} />)
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="row border-bottom pb-3">
                    <div className="col-xl-12 d-grid gap-2">
                        {videoLinks}
                    </div>
                </div>
            </div>
        )
    }

}