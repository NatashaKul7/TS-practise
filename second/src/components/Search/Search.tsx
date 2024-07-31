import { useRef } from "react";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import styles from "./Search.module.scss";
import { Button } from "components/Button";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const hadleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = searchRef.current?.value || "";

    if (text) {
      onSubmit(text);
      if (searchRef.current) {
        searchRef.current.value = "";
      }
    }
  };

  return (
    <form onSubmit={hadleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}></label>
        <input
          ref={searchRef}
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
