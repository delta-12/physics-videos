import { Component } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Videos from "./pages/Videos"

export default class App extends Component {

  state = {
    videoData: [],
    windowWidth: window.innerWidth    
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
    this.getVideoData()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize = e => {
    e.preventDefault()
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  getVideoData = () => {
    fetch("videos.json"
    ,{
      headers : { 
        "Content-Type": "application/json",
        "Accept": "application/json"
       }
    }
    )
      .then(res => {
        return res.json()
      })
      .then(json => {
        this.setState({ videoData: json.lectures})
      })
  }

  render() {
    let lectureLinks = this.state.videoData.map(l => <li key={l.number} id={l.number} className="nav-item justify-content-between align-items-center px-2 mt-1 mb-1"><Link to={"/lecture"+l.number} style={{ textDecoration: "none" }}>{"Lecture " + l.number}</Link></li>)
    let lectures = this.state.videoData.map(l => <Videos windowWidth={this.state.windowWidth} key={l.number} title={"Lecture " + l.number} videos={l.videos} links={lectureLinks} />)
    let routes = this.state.videoData.map(l => <Route key={l.number} path={"/lecture"+l.number} element={lectures[l.number]} />)
      return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage links={lectureLinks} windowWidth={this.state.windowWidth} />} />
            {routes}
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

}
