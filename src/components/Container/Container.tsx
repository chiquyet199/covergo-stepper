import styles from './Container.module.css'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  align?: 'center' | 'left' | 'right'
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = [styles.container]
  if (className) classes.push(className)
  if (props.align) classes.push(styles[`align-${props.align}`])

  return (
    <div className={classes.join(' ')} {...props}>
      {children}
    </div>
  )
}

export default Container
