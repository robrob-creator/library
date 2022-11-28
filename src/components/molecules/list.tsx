/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import { Text } from "../atoms/Text";

export interface ListProps {
  data?: { label?: string; value: string }[];
}

export const List = <PROPS extends ListProps>({ data }: PROPS): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-start justify-start w-full">
      {data &&
        data?.map((item, index) => {
          return (
            <div
              className={`inline-flex items-start justify-start w-full ${
                index % 2 != 0 && "bg-gray-200"
              }`}
              style={{ height: 50 }}
            >
              <div
                className="flex items-center justify-start pl-5 w-full"
                style={{ height: 50 }}
              >
                <Text size="xl" color="gray-600" fontStyle="medium">
                  {item?.label}
                </Text>
              </div>
              <div
                className="flex items-center justify-end pr-5 w-full"
                style={{ height: 50 }}
              >
                <Text
                  size="xl"
                  color="gray-600"
                  fontStyle="medium"
                  className="text-right"
                >
                  {item?.value}
                </Text>
              </div>
            </div>
          );
        })}
    </div>
  );
};
