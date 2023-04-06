
import styles from './Error.module.css'

export default function Error ({error}) {
    

    return (
<div className={styles['error']} >
    <p>{error}</p>
</div>
    )
}