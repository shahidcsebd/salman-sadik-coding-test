import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import InputBox from "./InputBox";
import Keywords from "./Keywords/Keywords";
import Button from "./Button";
import { RiDraggable } from "react-icons/ri";

const OutlineCard = ({ h2, h3, id, onSetOutlines, onOutlines }) => {
  const [h3InputBox, seth3InputBox] = useState(false);
  const [keywordBox, setKeywordBox] = useState(false);
  const [input, setInput] = useState("");
  // console.log(onOutlines, onSetOutlines);
  const handleH3 = (e) => {
    const data = {
      id: Date.now().toString(),
      name: input,
    };
    console.log(e.keyCode == 13);
    if (e.keyCode == 13) {
      if (input == "") return;
      let findOutline = onOutlines.find((ele) => ele.id == id);

      if (findOutline?.h3?.length > 0) {
        let h3 = [...findOutline.h3, data];
        findOutline = { ...findOutline, h3 };
      }

      if (!findOutline?.h3?.length) {
        findOutline = { ...findOutline, h3: [data] };
      }

      let filteredOutline = onOutlines.filter((ele) => ele.id != id);
      seth3InputBox((prev) => !prev);
      onSetOutlines([...filteredOutline, findOutline]);
      setInput("");
    }
  };
  const handleAddKeyword = () => {
    setKeywordBox((prev) => !prev);
  };
  const handleAddH3 = () => {
    seth3InputBox((prev) => !prev);
  };
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="mb-4 "
        >
          <div className="rounded-md border group-hover:border-blue-400">
            <h3 className="my-4 flex items-center gap-2  text-xl text-left pl-2">
              <RiDraggable /> <span className="font-bold">H2:</span> {h2}
            </h3>
          </div>
          <div>
            {h3?.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => (
                  <div
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    className="my-2 ml-3"
                  >
                    <h4 className="text-md group-hover:border-blue-400 text-left pl-4 py-4 flex items-center gap-2 border rounded-md">
                      <RiDraggable /> <span className="font-medium">H3:</span>{" "}
                      {item.name}
                    </h4>
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
          <div>
            <div className="flex mt-4 pl-12 gap-8 ">
              <Button onHandleClick={handleAddH3} text="   + New H3 Heading" />
              <Button
                onHandleClick={handleAddKeyword}
                text="  + Insert NLP & LSI Keywords"
              />
            </div>

            {keywordBox && <Keywords />}
            {h3InputBox && (
              <InputBox
                onInputKeyUp={handleH3}
                setInput={setInput}
                input={input}
                placeholder="Add H3 Section"
              />
            )}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default OutlineCard;
