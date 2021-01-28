import React, { useState } from "react";
import Link from "next/link";

const InputBox = () => {
    const [textValue, setTextValue] = useState();
    return (
        <div>
            <input value={textValue} onChange={({ target: { value } }) => setTextValue(value)}></input>
            <span style={{ marginLeft: "5px", cursor: "pointer", border: "1px solid lightgray" }}>
                {/* <Link to="/search">검색</Link> */}검색
            </span>
        </div>
    );
};
export default InputBox;
