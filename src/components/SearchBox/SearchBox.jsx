import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <div className={css["searchbox-container"]}>
      <label className={css.label} htmlFor="searchBox">
        Find contact by name
      </label>
      <input
        id="searchBox"
        type="text"
        value={filter}
        className={css.field}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
