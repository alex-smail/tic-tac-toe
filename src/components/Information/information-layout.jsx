/* eslint-disable react/prop-types */
import styles from './information.module.css';

export const InformationLayout = ({ checkWinner }) => {
	return (
		<>
			<div className={styles.dsc}>{checkWinner}</div>
		</>
	);
};