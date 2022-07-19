import styles from './Card.module.css'
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.cardContainer} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
