import { useDispatch } from "react-redux";
import { closeAlerts } from "../redux/actions";


function AlertOwn(props: any) {
  
  const dispatch = useDispatch()
  return (
    <div className="alert">
      <div className="alert__body">
        <h1>{props?.text}</h1>
        <button onClick={() => dispatch(closeAlerts())}>X</button>
      </div>
    </div>
  );
}

export default AlertOwn;