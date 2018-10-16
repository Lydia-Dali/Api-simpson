import  React  from  'react';
import './DisplayEmployee.css';


const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={employee.image}  alt="picture"  />
            <ul>
                <li><h3>{employee.character}</h3></li>
                <li>{employee.quote}</li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;