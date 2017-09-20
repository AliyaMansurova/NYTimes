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
  getTitles(search,page,sort) {
    dispatch(
        getTitles(search,page,sort)
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
    this.props.getTitles(this.state.value, queryString.parse(this.props.routeLocation.search).page, queryString.parse(this.props.routeLocation.search).sort);
  }

  render() {
    const {searchBar, page, sort} = queryString.parse(this.props.routeLocation.search);
    return (
        <form className="searchForm">
          <input type="text" id="search" defaultValue={searchBar} onChange={(e) =>this.handleChange(e.target.value)} />
          <Link
              to={{
                pathname: '/search',
                search: `?searchBar=${this.state.value}&page=${page}&sort=${sort}`}}
              onClick={() => this.props.getTitles(this.state.value, page, sort)}
              replace
          >
            <button  type="submit">Search</button>
          </Link>
        </form>
    );
  }
}
SearchForm.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
