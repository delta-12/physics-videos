import { Component } from "react"
import SidebarGroup from "./SidebarGroup"

export default class VideoSidebar extends Component {

  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar" style={{ height: "100vh", position: "fixed" }}>
        <div className="sidebar-sticky mt-4">
          <ul className="nav flex-column">
            <h4 className="sidebar-heading d-flex justify-content-between align-items-center px-2 mt-4 mb-2 text-dark">
              <span className="border-bottom border-dark">Videos</span>
            </h4>
          </ul>
          <SidebarGroup links={this.props.links} />
        </div>
      </nav>
    )
  }

}