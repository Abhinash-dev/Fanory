import React from "react";

const SquareComponent = (props) => {
    const classes = (props.className ? `${props.className} square` : `square`)
    return (
        <span
            className={classes + (props.state === "X" ? ` cross` : ` zero`)}
            onClick={() => props.onClick(props.index)}>
            {props.state}
        </span>
    )
}
export default SquareComponent