import  React  from  'react';

const  GenerateEmployee = ({ selectEmployee }) => {
    return (
        <div  className="GenerateEmployee">
        <button className="btn btn-danger" onClick={selectEmployee}>New quote</button>
        </div>
    );
};

export  default  GenerateEmployee;