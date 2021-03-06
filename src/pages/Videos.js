import { Component } from "react"
import Page from "../components/Page"
import MainContent from "../components/MainContent"

export default class Videos extends Component {

  render() {
      const mainContent = <MainContent title={this.props.title} videos={this.props.videos} windowWidth={this.props.windowWidth} />
      return (
          <Page mainContent={mainContent} links={this.props.links} windowWidth={this.props.windowWidth} />
      )
  }

}
