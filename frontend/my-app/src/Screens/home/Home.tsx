import NavBar from "../../components/navbar/navbar";
import './Home.css'
import Sudokufield from "../../components/sudoku-field/sudokufield";


export default function HomeScreen() {
    return (
        <div style={{height: "100vh"}}>
            <div style={{height:"6vh"}}><NavBar/></div>
            <div style={{height:"94vh"}}><Sudokufield></Sudokufield></div>
        </div>

    );
};