
import { useContext } from 'react';
import { CarContext } from '../../contexts/CarContext';
import styles from './DeleteCar.module.css'

export default function DeleteConfirmation({
  closeConfirmation,
  carId,

}) {

  const { onSubmitDeleteCar } = useContext(CarContext);

  const confirmDelete = async () => {
    closeConfirmation();
    onSubmitDeleteCar(carId);
  }

  return (

    <div className={styles["overlay"]}>
      <div className={styles["confirmation-dialog"]}>
        <div className={styles["confirmation-dialog-content"]}>
          <h2>Are you sure you want to delete?</h2>
          <p>This action cannot be undone.</p>
          <div className={styles["confirmation-buttons"]}>
            <button onClick={() => closeConfirmation()}>Cancel</button>
            <button onClick={() => confirmDelete()}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}