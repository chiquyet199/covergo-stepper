import styles from './Container.module.css'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
