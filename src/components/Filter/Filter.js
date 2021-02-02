import s from './Filter.module.css';

export default function Filter({ value, setFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={event => setFilter(event.target.value)}
      />
    </label>
  );
}
