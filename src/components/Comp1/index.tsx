//modular import scss
import styles from "./comp1.module.scss"

const Comp1 = () => {
    return (
        <div className={styles.box}>
            <p>This is comp1</p>
        </div>
    )
}
export default Comp1