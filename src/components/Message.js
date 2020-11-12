import React from 'react';

const Message = ({ variant = 'message', message }) => {
	const color = (variant = 'warning' ? 'yellow' : 'blue');

	return (
		<div className="message" style={{ backgroundColor: color }}>
			{message}
		</div>
	);
};

export default Message;
