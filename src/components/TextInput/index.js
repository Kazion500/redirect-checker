import { SearchIcon } from "@heroicons/react/outline";

function TextInput({ error, handleSubmit,url,onChange }) {
  return (
    <>
      <form
        className="flex items-center border pl-4 rounded"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={url}
          onChange={onChange}
          placeholder="Enter the url for your webite"
          className="py-3 mr-4 flex-1 h-full outline-none text-lg"
        />
        <button className="p-4 focus:outline-none">
          <SearchIcon className="h-6 w-6 text-blue-300" />
        </button>
      </form>
      {error && <small className="text-red-400">{error}</small>}
    </>
  );
}

export default TextInput;
