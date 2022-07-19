import styles from './Button.module.css'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  appearance?: 'contained' | 'outlined' | 'ghost'
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  appearance = 'contained',
  ...props
}) => {
  const classes = [styles.button]
  if (className) classes.push(className)
  if (appearance) classes.push(styles[`appearance-${appearance}`])

  return (
    <button className={classes.join(' ')} {...props}>
      {children}
    </button>
  )
}

export default Button
