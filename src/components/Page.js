import { Component } from "react"
import Header from "../components/Header"
import VideoSidebar from "../components/VideoSidebar"

export default class Page extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <VideoSidebar links={this.props.links} />
          </div>
        </div>
        <main className="col-md-9 ml-sm-auto px-4 mt-5" style={{marginLeft: "17%" }}>
            {this.props.mainContent}
        </main>
      </div>
    )
  }

}
