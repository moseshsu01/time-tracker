import { Link } from "react-router-dom";

function AddEntry() {

  return (
    <>
      <div>
        Add entry
      </div>
      <Link to='/home'>
        Home
      </Link>
    </>
  );
}

export default AddEntry;
