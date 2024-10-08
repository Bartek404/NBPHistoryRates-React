export function Calendar({ date, setDate }) {
  return (
    <div className="my-6 flex flex-row items-center justify-center gap-10">
      <div className="flex w-5/6 flex-col items-center justify-center gap-2 rounded border-2 border-solid border-slate-200 p-5">
        <label
          className="pb-3 text-center text-xl font-semibold"
          htmlFor="date"
        >
          Data:
        </label>
        <input
          className="cursor-pointer rounded border-2 bg-slate-200 px-2 outline-none focus:border-2 focus:border-sky-600"
          value={date}
          onChange={setDate}
          type="date"
          id="date"
        />
      </div>
    </div>
  );
}
