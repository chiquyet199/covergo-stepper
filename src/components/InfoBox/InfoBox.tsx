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
      <button className="btn btn-primary" onClick={onClick}>
        {actionLabel}
      </button>
    </div>
  </div>
)

export default InfoBox