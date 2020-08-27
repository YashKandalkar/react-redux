import React from "react";
import { connect } from "react-redux";
import { addPun } from "../../actions/actions";

const AddPun = ({ onAddPun }) => {
  const inputRef = React.createRef(null);
  const onClick = () => {
    const val = inputRef.current.value;
    if(val){
      onAddPun(val);
      inputRef.current.value = '';
    }
  }
  return (
    <>
      <input placeholder={"Add pun"} ref={inputRef}/>
      <button onClick={onClick}>Add</button>
    </>
  )
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onAddPun: pun => {
      dispatch(addPun(pun));
    }
  }
}

const VisibleAddPun = connect(mapStateToProps, mapDispatchToProps)(AddPun)

export default VisibleAddPun;