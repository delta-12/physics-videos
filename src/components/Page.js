import { Component } from "react"
import Header from "../components/Header"
import VideoSidebar from "./VideoSidebar"
import VideoTopbar from "./VideoTopbar"

export default class Page extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            {
              (this.props.windowWidth > 900) ? <VideoSidebar links={this.props.links} /> : <VideoTopbar links={this.props.links} />
            }
          </div>
        </div>
        <main className="col-md-9 ml-sm-auto px-4 mt-5" style={(this.props.windowWidth > 900) ? {marginLeft: "17%" } : null}>
            {this.props.mainContent}
        </main>
      </div>
    )
  }

}
