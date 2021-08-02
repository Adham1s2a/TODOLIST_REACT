import Button from "./Button";
import  {useLocation} from 'react-router-dom'

const Header = (props) => {
  const location = useLocation();
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1> {props.title}</h1>
        { location.pathname ==='/' &&<Button  color={ props.show ? 'red' : 'green'} text={props.show ? 'Close':'Add'} show={props.show} Addtaskbutton = {props.Addtaskbutton} />}
      </div>
    </div>
  );
};

export default Header;
