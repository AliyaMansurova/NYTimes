import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { getTitles } from '../../reducers/search'
import  './SearchForm.less';

export const mapStateToProps = (state) => ({
  routeLocation: state.routing.location
});

export const mapDispatchToProps = (dispatch) => ({
  getTitles(search,page) {
    dispatch(
        getTitles(search,page)
    );
  },
});

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: queryString.parse(this.props.routeLocation.search).searchBar
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(newValue) {
    this.setState({
      value: newValue
    });
  }
  componentDidMount() {
    this.props.getTitles(this.state.value, queryString.parse(this.props.routeLocation.search).page);
  }

  render() {
    const {searchBar, page} = queryString.parse(this.props.routeLocation.search);
    return (
        <form className="searchForm">
          <input className="input" type="search" id="search" defaultValue={searchBar} onChange={(e) =>this.handleChange(e.target.value)} />
          <Link
              to={{
                pathname: '/search',
                search: `?searchBar=${this.state.value}&page=${page}`}}
              onClick={() => this.props.getTitles(this.state.value, page)}
              replace
          >
            <button className="search" type="submit">Search</button>
          </Link>
        </form>
    );
  }
}
SearchForm.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
