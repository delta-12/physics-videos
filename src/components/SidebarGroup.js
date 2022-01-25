import { Component } from "react"

export default class SidebarGroup extends Component {
  render() {
    return (
      <ul className="nav flex-column">
        {this.props.links}
      </ul>
    )
  }
}