import React, { Component } from 'react';
import './ArticleContainer.less';

class Article extends Component {
  render() {
    const date = this.props.title.pub_date ? (this.props.title.pub_date).slice(0, 10) :'';
    const image = this.props.title.multimedia[2] ? `http://www.nytimes.com/${this.props.title.multimedia[2].url}` : '';
    return (
        <div className="articleContainer">
          <div className="wrap">
            {image ?(
                <a><img className="image" src={image}></img></a>
            ):(<a></a>)
            }
            <div className="article">
          <a className="main" href={this.props.title.web_url}>{this.props.title.headline.main}</a>
          <p className="info"><span className="date">{date}</span> {this.props.title.snippet}</p>
            </div>
          </div>
        </div>
    );
  };
}
export default Article;

