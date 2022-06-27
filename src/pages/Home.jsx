import { Box } from "../components/TextBox";
export const HomePage=(props) =>{
    return(
        <div className='container my-4'>
        <Box mode={props.mode}/>
        </div>
    )
}

