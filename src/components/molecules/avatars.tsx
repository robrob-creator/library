/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */

export type AvatarProps = {
  name: string;
  color?: string;
};

export const Avatar = <PROPS extends AvatarProps>({
  name,
  color,
}: PROPS): JSX.Element => {
  return (
    <div className="relative" style={{ width: 56, height: 56, margin: 1 }}>
      <div
        className={`inline-flex items-center justify-center w-12 h-12 py-4 absolute left-0 top-0 bg-${
          color || "gray"
        }-700 rounded-full`}
      >
        <p className="flex-1 h-full text-sm font-semibold leading-none text-center text-gray-50">
          {name}
        </p>
      </div>
    </div>
  );
};
