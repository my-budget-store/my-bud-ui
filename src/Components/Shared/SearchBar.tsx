import { useDispatch, useSelector } from "react-redux";
import { storeSearchValue } from "redux/slices/searchValueSlice";
import { RootState } from "redux/store";

export function SearchBar() {
  const dispatch = useDispatch();
  
  const searchValue = useSelector(
    (state: RootState) => state.searchValue.value
  );

  const HandleSearchInput = (e: any) => {
    dispatch(storeSearchValue(e.target.value));
  };

  return (
    <header>
      <input
        placeholder="Search..."
        className="search-bar-style"
        onChange={HandleSearchInput}
        value={searchValue} />
    </header>
  );
}
