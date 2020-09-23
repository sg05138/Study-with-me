import React from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const Card = (props) => {
    const [collectedProps, drag] = useDrag({
        item: { type: "card", color: props.color },
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging(),
            };
        },
    });
    const isDragging = collectedProps.isDragging;
    const style = { backgroundColor: props.color, height: "50px", width: "50px", opacity: isDragging ? 0.5 : 1 };

    return <div className="square" style={style} ref={drag} />;
};

Card.propTypes = {
    color: PropTypes.string.isRequired,
};

export default Card;
