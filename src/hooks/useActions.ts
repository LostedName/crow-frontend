import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import ActionCreators from "../redux/actions"; //TODO ActionCreators need to be created

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch);
}