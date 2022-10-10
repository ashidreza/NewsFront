
import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.length >= 45 ? title.concat("...") : title}</h5>
                        <p className="card-text">{description.length < 88 ? description : description.concat("...")}</p>
                        <a href={newsUrl} className="btn btn-primary btn-dark">News Read</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem