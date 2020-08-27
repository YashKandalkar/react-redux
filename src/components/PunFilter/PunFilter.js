import React from "react";
import { connect } from "react-redux";
import { filterPun } from "../../actions/actions";

const PunFilter = ({ onFilter }) => {
  const onChange = ({target: {value}}) => {
    onFilter(value)
  }
  return (
    <input placeholder={"Search pun"} onChange={onChange} />
  )
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onFilter: filterText => {
      dispatch(filterPun(filterText));
    }
  }
}

const VisiblePunFilter = connect(mapStateToProps, mapDispatchToProps)(PunFilter)

export default VisiblePunFilter;