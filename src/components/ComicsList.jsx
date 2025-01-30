import comics from "../data/comics";
export default function ComicsList() {
  return (
    <div className="top-section">
      {comics.map((elem) => {
        return (
          <div key={elem.id} className="comic">
            <div>
              <img src={elem.thumb} alt="" />
            </div>
            <div>
              <h1>{elem.series}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
