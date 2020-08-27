import React from "react";
import { connect } from "react-redux";
import { removePun } from "../../actions/actions";

const PunList = ({ puns, filterText, onRemoveClick }) => {
const filteredPuns = puns.filter(el => el.pun.toLowerCase().includes(filterText))
  return (
    <div 
      style={{
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2rem 0'
      }}
    >
      {
        filteredPuns.length?
          filteredPuns.map((el) => {
            return (
              <div 
                key={el.id} 
                style={{
                  display: 'flex', 
                  textAlign: 'initial',
                  margin: '0.3rem 0',
                  width: '70%'
                }}
              
              >
                {(el.id+1) + ')  ' + el.pun}
                <button 
                  style={{
                    marginLeft: 'auto',
                    color: 'red',
                    height: '25px'
                  }}
                  onClick={() => onRemoveClick(el.id)}
                >
                  X
                </button>
              </div>
            );
          })
         : "No puns available!"
        }
    </div>
  );
};

const mapStateToProps = state => {
  return { puns: state.puns, filterText: state.filterText };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveClick: id => {
      dispatch(removePun(id));
    }
  }
}

const VisiblePunList = connect(mapStateToProps, mapDispatchToProps)(PunList);

export default VisiblePunList;
