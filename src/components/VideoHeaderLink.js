import { Component } from "react"

export default class VideoHeaderLink extends Component {

    render() {
        return (
            <div>
                <button className="btn btn-secondary" onClick={this.props.onClick} value={this.props.link}>{this.props.name}</button>
            </div>
        )
    }

}