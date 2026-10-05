import { useMemo, useRef, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown, Search, X } from "lucide-react";
import team from "../data/team.json";

const columns = [
  ["name", "Name"], ["position", "Position"],
  ["degree", "Degree"], ["licensed", "Licensed"],
] as const;
type Column = typeof columns[number][0];

export function TeamDirectory() {
  const [query, setQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);
  const clearSearch = () => { setQuery(""); searchInput.current?.focus(); };
  const [sort, setSort] = useState<{ column: Column; descending: boolean } | null>(null);
  const rows = useMemo(() => {
    const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const filtered = team.filter(person => words.every(word =>
      Object.values(person).join(" ").toLocaleLowerCase().includes(word)));
    if (sort) filtered.sort((a, b) => a[sort.column].localeCompare(b[sort.column]) * (sort.descending ? -1 : 1));
    return filtered;
  }, [query, sort]);

  return (
    <section className="section container team-directory" id="team" aria-labelledby="team-heading">
      <div className="directory-heading">
        <div><h2 id="team-heading">The Team</h2><p>Dedicated to Serving You</p></div>
        <div className="directory-search">
          <label htmlFor="team-search">Find a team member</label>
          <div><Search size={19} aria-hidden="true" />
            <input ref={searchInput} id="team-search" name="team-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Name, position, degree or license…" />
            {query && <button type="button" onClick={clearSearch} aria-label="Clear team search"><X size={18} aria-hidden="true" /></button>}
          </div>
        </div>
      </div>
      <p className="directory-count" role="status" aria-live="polite">{rows.length} of {team.length} team members</p>
      <label className="directory-mobile-sort">Sort team members
        <select value={sort ? `${sort.column}:${sort.descending ? "desc" : "asc"}` : "source"} onChange={event => {
          const [column, direction] = event.target.value.split(":");
          setSort(column === "source" ? null : { column: column as Column, descending: direction === "desc" });
        }}>
          <option value="source">Directory order</option>
          {columns.flatMap(([key, label]) => [<option key={`${key}:asc`} value={`${key}:asc`}>{label}: A–Z</option>, <option key={`${key}:desc`} value={`${key}:desc`}>{label}: Z–A</option>])}
        </select>
      </label>
      <div className="directory-table-wrap">
        <table className="directory-table">
          <caption className="sr-only">Geolabs team directory. Select a column heading to sort.</caption>
          <thead><tr>{columns.map(([key, label]) => (
            <th key={key} scope="col" aria-sort={sort?.column === key ? (sort.descending ? "descending" : "ascending") : "none"}>
              <button type="button" onClick={() => setSort({ column: key, descending: sort?.column === key && !sort.descending })}>
                {label}{sort?.column === key ? (sort.descending ? <ArrowDown size={16} aria-hidden="true" /> : <ArrowUp size={16} aria-hidden="true" />) : <ArrowUpDown size={16} aria-hidden="true" />}
              </button>
            </th>
          ))}</tr></thead>
          <tbody>{rows.map(person => <tr key={person.name}>
            <th scope="row">{person.name}</th>
            <td>{person.position}</td><td>{person.degree}</td>
            <td>{person.licensed || <span className="sr-only">Not listed</span>}</td>
          </tr>)}</tbody>
        </table>
      </div>
      <div className="directory-mobile-rows">{rows.map(person => <article key={person.name}>
        <h3>{person.name}</h3><p>{person.position}</p>
        <dl><div><dt>Degree</dt><dd>{person.degree}</dd></div>{person.licensed && <div><dt>Licensed</dt><dd>{person.licensed}</dd></div>}</dl>
      </article>)}</div>
      {!rows.length && <div className="directory-empty"><h3>No matching team members</h3><p>Try a different name, position, degree or license.</p><button type="button" className="button button-yellow" onClick={clearSearch}>Show all team members</button></div>}
    </section>
  );
}
