
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 18,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    capitalize = (string) => {
        return (string.charAt(0).toUpperCase() + string.slice(1))
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61e7f66a63694a86bca3aeacf2645550&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handleOnClickNext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61e7f66a63694a86bca3aeacf2645550&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
    }
    handleOnClickPrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61e7f66a63694a86bca3aeacf2645550&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }

    render() {

        return (
            <div className='container my-3'>
                <h1 className='text-center'>NewsFront - Top Headlines On {this.capitalize(this.props.category)}</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem imageUrl={element.urlToImage ? element.urlToImage : "https://s.yimg.com/os/creatr-uploaded-images/2022-07/287febc0-0445-11ed-bdf9-fd857a015336"} title={element.title ? element.title.slice(0, 45) : "No Title"} description={element.description ? element.description.slice(0, 88) : "No description"} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className='container d-flex justify-content-between'>
                    <button type="button" className="btn btn-dark" disabled={this.state.page <= 1 ? true : false} onClick={this.handleOnClickPrev}>&larr; Prev</button>
                    <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / 18) ? true : false} className="btn btn-dark" onClick={this.handleOnClickNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News