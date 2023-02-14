import Blockly from "blockly";
import { Ref, onMount } from "solid-js";

export default function Home() {
  const myDiv: HTMLDivElement | undefined = undefined;

  onMount(() => {
    console.log(myDiv);
    const ws = Blockly.inject(myDiv || "", { toolbox });
  });

  const toolbox = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "controls_if",
      },
      {
        kind: "block",
        type: "controls_repeat_ext",
      },
      {
        kind: "block",
        type: "logic_compare",
      },
      {
        kind: "block",
        type: "math_number",
      },
      {
        kind: "block",
        type: "math_arithmetic",
      },
      {
        kind: "block",
        type: "text",
      },
      {
        kind: "block",
        type: "text_print",
      },
    ],
  };

  return (
    <div class="text-center mx-auto text-gray-700 p-4">
      <div id="blocklyDiv" ref={myDiv} style={{ height: "480px", width: "600px;" }}>
        ss
      </div>
    </div>
  );
}
