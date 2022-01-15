import s from './FeedbackForm.module.css';

export default function FeedbackForm({ children }) {
  return <div className={s.form}>{children}</div>;
}
