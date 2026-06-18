import {useNavigate, useLocation} from "react-router-dom"

export function withNavigation(Component){
    return function (props)  {
        const navigate = useNavigate();

        return(
            <Component 
                {...props}
                navigate={useNavigate()}
                location={useLocation()}
            />
        )
    }
}