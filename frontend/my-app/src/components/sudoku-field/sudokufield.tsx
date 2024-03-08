import React from "react";

export function SudokuField() {
    return (
        <div className="container">
            <table style={{width: "100%", height: "100%"}}>
                <tbody>
                    <col className={"width: 10%"}></col>
                    <col className={"width: 10%"}></col>
                    <col className={"width: 10%"}></col>
                    <col className={"width: 10%"}></col>
                    <col className={"width: 10%"}></col>
                    <col className={"width: 10%"}></col>
                    <col className={"width: 10%"}></col>
                </tbody>
            </table>
        </div>
    );
}

export default SudokuField;