// @flow
import React, { Component } from 'react';
import { history } from '../../configs/configureStore';
import queryString from 'query-string';
import { connect } from 'react-redux';
import Article from './Article'
import './ArticleContainer.less';


const mapStateToProps = state => ({
  titles: state.search.list
});


export const mapDispatchToProps = (dispatch) => ({

});


class ArticleContainer extends Component {
  render() {
    const titles = this.props.titles;
    return (
        <div>
          {titles ? titles.map(title => (
          <Article title={title}/>
          )):(<div>Not</div>)
          }
        </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
