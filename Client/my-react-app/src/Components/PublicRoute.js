import { useNavigate } from "react-router-dom"


function PublicRoute({ childrens }) {
    const navigate = useNavigate();


    if (localStorage.getItem("token")) {
        navigate("/");

    }
    else {
        return childrens;


    }
}

export default PublicRoute