import Button from '../Button/Button'
import styles from './InfoBox.module.css'
interface InfoBoxProps {
  title: string
  description: string
  actionLabel: string
  onClick: () => void
}

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  description,
  actionLabel,
  onClick,
}) => (
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>

    <Button onClick={onClick}>{actionLabel}</Button>
  </div>
)

export default InfoBox
