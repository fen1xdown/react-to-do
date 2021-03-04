import React from "react";

const ToDo = (props) => {
	return (
		<li className="list-item">
			<div>
				<p id={props.current_array_entry} className="to-do">
					{props.current_array_entry}
				</p>
				<p className="complete-to-do"
					onClick={() => props.handleComplete(props.current_array_entry)}
				>
					Complete
				</p>
				<p className="delete-button"
					onClick={() => props.handleDelete(props.index, props.current_array_entry)}>
					Delete
				</p>
			</div>
		</li>
		);
};

export default ToDo;