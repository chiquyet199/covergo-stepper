import styles from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className={styles.header}>
      <span className={styles.segmentLeft} />
      <h1 className={styles.pageTitle}>{title}</h1>
      <span className={styles.segmentRight} />
      <span />
    </div>
  )
}

export default PageHeader
