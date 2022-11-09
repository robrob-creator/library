/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import logo from "../../../assets/images/logo-white.svg";
import background from "../../../assets/images/bg.png";
import { Text, HeaderText } from "../atoms/Text";

export type SideDisplayProps = {
  header?: string;
  content?: string;
};

export const SideDisplay = <
  PROPS extends SideDisplayProps
>({}: PROPS): JSX.Element => {
  return (
    <div
      className={`flex  font-Poppins justify-center bg-cover`}
      style={{
        width: "550px",
        height: "832px",
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex-row mt-24 ">
        <img className="w-80 h-20" src={logo} />
        <div
          className="flex flex-col space-y-2 items-center justify-end"
          style={{ width: "432px", height: "206px" }}
        >
          <HeaderText
            color="white"
            text="Welcome guest!"
            className="mt-64 mb-4"
          />

          <Text
            color="white"
            text="ut eu sem integer vitae justo eget magna fermentum iaculis eu non
            diam phasellus vestibulum lorem sed risus ultricies tristique"
          />
        </div>
      </div>
    </div>
  );
};
