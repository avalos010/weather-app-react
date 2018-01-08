import React from 'react';

const Input = (props) => (
    <div className="row">
    <form 
    onSubmit={e => props.updateLocation(e)}
    className=" m-5 form-group text-center col-lg-6 col-xs-12 mx-auto">
    <input className="form-control" type="text" placeholder="Enter City Only"/>
    <input className="btn btn-primary m-1" type="submit" value="GO"/>
    </form>
    </div>
);

export default Input;