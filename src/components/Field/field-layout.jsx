/* eslint-disable react/prop-types */
import styles from './field.module.css';

export const FieldLayout = ({ field, handlerField }) => {
	return (
		<>
			<div className={styles.btnGroup}>
				{field.map((cell, index) => (
					<button
						key={index}
						id={index}
						className={styles.btn}
						onClick={() => {
							handlerField(index);
						}}
					>
						{cell}
					</button>
				))}
			</div>
		</>
	);
};
