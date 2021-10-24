export type Props = {
  label: string;
  checked: boolean;
  color: string;
  onChange: () => {};
};

export const Checkbox = ({
  onChange,
  color = "gray",
  label,
  checked = false,
}: Props) => {
  return (
    <label className="inline-flex items-center mt-3">
      <input
        type="checkbox"
        className={`form-checkbox h-5 w-5 text-${color}-600 rounded`}
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};
