interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  ...props
}) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
