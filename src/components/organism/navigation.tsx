/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */

export type NavigationProps = { logo: any };

export const NavigationBar = <
  PROPS extends NavigationProps
>({}: PROPS): JSX.Element => {
  return (
    <div className="relative" style={{ width: "1283px", height: "60px" }}>
      <div
        className="inline-flex space-x-64 items-center justify-center absolute inset-y-0 left-0 my-auto"
        style={{ width: "1180px", height: "32px" }}
      >
        <img className="w-32 h-8" src="" />
        <div className="flex space-x-12 items-start justify-start">
          <div className="flex items-center justify-start">
            <p className="text-sm font-medium">Apps</p>
            <img
              className="w-5 h-5 rounded-lg"
              src="https://via.placeholder.com/20x20"
            />
          </div>
          <div className="flex items-center justify-start">
            <p className="text-sm font-medium">Community</p>
            <img
              className="w-1/5 h-5 rounded-lg"
              src="https://via.placeholder.com/20x20"
            />
          </div>
          <div className="flex items-center justify-start">
            <p className="text-sm font-medium">Pricing</p>
            <img
              className="w-5 h-5 rounded-lg"
              src="https://via.placeholder.com/20x20"
            />
          </div>
        </div>
        <div className="flex space-x-6 items-center justify-start">
          <img
            className="w-5 h-5 rounded-lg"
            src="https://via.placeholder.com/20x20"
          />
          <p className="text-sm font-medium leading-tight text-blue-700">
            Sign in
          </p>
          <div className="flex items-center justify-start px-4 py-1.5 bg-blue-700 shadow rounded-lg">
            <p className="text-xs font-medium leading-tight text-white">
              Try for free
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute left-0 top-0"
        style={{ width: "1280px", height: "60px" }}
      >
        <div
          className="flex items-center justify-center py-2.5 px-16 bg-white"
          style={{ width: "1280px", height: "60px" }}
        >
          <div className="relative" style={{ width: "1159px", height: "40px" }}>
            <div
              className="inline-flex space-x-80 items-center justify-center"
              style={{ width: "1159px", height: "40px" }}
            >
              <img
                className="w-32 h-3/4"
                src="https://via.placeholder.com/128.004638671875x30"
              />
              <div className="flex space-x-12 items-start justify-start">
                <div className="flex items-center justify-start">
                  <p className="text-sm font-medium">Apps</p>
                  <img
                    className="w-5 h-5 rounded-lg"
                    src="https://via.placeholder.com/20x20"
                  />
                </div>
                <div className="flex items-center justify-start">
                  <p className="text-sm font-medium">Community</p>
                  <img
                    className="w-1/5 h-5 rounded-lg"
                    src="https://via.placeholder.com/20x20"
                  />
                </div>
                <div className="flex items-center justify-start">
                  <p className="text-sm font-medium">Pricing</p>
                  <img
                    className="w-5 h-5 rounded-lg"
                    src="https://via.placeholder.com/20x20"
                  />
                </div>
              </div>
              <img
                className="w-10 h-full rounded-full"
                src="https://via.placeholder.com/40x40"
              />
            </div>
            <div
              className="inline-flex items-center justify-start w-48 h-10 py-10 pl-4 pr-5 absolute bg-white border rounded-full border-gray-200"
              style={{ width: "892px", height: "79px" }}
            >
              <div className="flex space-x-4 items-center justify-start">
                <img
                  className="w-5 h-5/6 rounded-lg"
                  src="https://via.placeholder.com/20x20"
                />
                <p className="text-xs leading-normal text-center">|Search...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
