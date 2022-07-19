import Button from '../Button/Button'

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
  <div className="info-box">
    <div className="info-box-header">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>

    <div className="info-box-footer">
      <Button onClick={onClick}>{actionLabel}</Button>
    </div>
  </div>
)

export default InfoBox
