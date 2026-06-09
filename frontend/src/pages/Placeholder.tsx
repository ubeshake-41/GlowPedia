import { WarningCircle } from '@phosphor-icons/react';
import styles from './Placeholder.module.css';

interface PlaceholderProps {
  title: string;
  description: string;
  icon?: string;
}

export default function Placeholder({ title, description, icon }: PlaceholderProps) {
  const displayedIcon = icon ? icon : <WarningCircle size={48} weight="duotone" />;
  
  return (
    <div className={styles.placeholder}>
      <div className={styles.content}>
        <div className={styles.icon}>{displayedIcon}</div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.badge}>Coming Soon</div>
      </div>
    </div>
  );
}
