import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { getTitles } from '../../reducers/search'
import  './Links.less';

export const mapStateToProps = (state) => ({
  routeLocation: state.routing.location
});

export const mapDispatchToProps = (dispatch) => ({
  getTitles(search,page,sort) {
    dispatch(
        getTitles(search,page,sort)
    );
  },
});

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: queryString.parse(this.props.routeLocation.search).sort
    };
      this.handleChange = this.handleChange.bind(this);
  }


  handleChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  render() {
    const {searchBar, page} = queryString.parse(this.props.routeLocation.search);
    return (
        <div className="links">
          <Link
              to={{
                pathname: '/search',
                search: `?searchBar=${searchBar}&page=${page}&sort=newest`}}
              onClick={() => this.props.getTitles(searchBar, page, 'newest')}
              replace
          >
            Newest |
          </Link>
          <Link
              to={{
                pathname: '/search',
                search: `?searchBar=${searchBar}&page=${page}&sort=oldest`}}
              onClick={() => this.props.getTitles(searchBar, page, 'oldest')}
              replace
          >
            Oldest |
          </Link>
          <Link
              to={{
                pathname: '/search',
                search: `?searchBar=${searchBar}&page=${page}&sort=`}}
              onClick={() =>  this.props.getTitles(searchBar, page, 0)}
              replace
          >
            Relevance
          </Link>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Links);
