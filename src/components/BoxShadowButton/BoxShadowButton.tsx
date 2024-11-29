import { ComponentProps } from "react";
import { Button } from "../ui/button";

//ComponentProps<typeof コンポーネント名>とすることで、特定のコンポーネントのPropの型を取得することができる。
export type BoxShadowButtonProps = ComponentProps<typeof Button>;

function BoxShadowButton(props: BoxShadowButtonProps) {
  return (
    <>
      {/* 通常時はボタン下部に影が表示され、押されたときに消える。 */}
      <Button
        boxShadow={"0px 2px 0px rgba(0,200,250,0.3);"}
        _active={{ boxShadow: "0px 3px 0px rgba(0,0,0,0);" }}
        {...props}
      />
    </>
  );
}

export { BoxShadowButton };
