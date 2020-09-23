import React from "react";
import Knight from "Knight";
import Square from "Square";
import TutorialApp from "TutorialApp";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <TutorialApp></TutorialApp>
            </DndProvider>
        </div>
    );
};
export default App;
