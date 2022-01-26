import { Component } from "react"
import Page from "../components/Page"

export default class LandingPage extends Component {

  render() {
    const mainContent = <h1>Welcome to Physics Videos!</h1>
    return (
      <Page mainContent={mainContent} links={this.props.links} windowWidth={this.props.windowWidth} />
    )
  }

}
