import React from 'react'
const modelfileHoc=React.memo(function MyComponent(props){
    
    return (
        <div className={`modal fade in`} style={{display:'block'}}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.closemodel}><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title" id="gridSystemModalLabel">{props.title}</h4>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default fix-button">Add</button>
					        <button type="button" className="btn btn-default fix-button clr-new"  onClick={props.closemodel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>   
      )
})

export default modelfileHoc;
  

