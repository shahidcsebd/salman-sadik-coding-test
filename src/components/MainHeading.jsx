import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import InputBox from "./InputBox";
import Keywords from "./Keywords";
import Button from "./Button";

const MainHeading = ({ h2, h3, id, onSetOutlines, onOutlines }) => {
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
          className="mb-16"
        >
          <div className="store-container rounded-md">
            <h3 className="my-5 font-medium text-2xl text-left pl-2">
              ⏩ <span className="font-bold">H2:</span> {h2}
            </h3>
          </div>
          <div className="items-container">
            {h3?.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => (
                  <div
                    className="item-container"
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <h4 className="text-xl text-left pl-8 py-4">
                      🫳 <span className="font-medium">H3:</span> {item.name}
                    </h4>
                  </div>
                )}
              </Draggable>
            ))}

            <div className="flex my-4 pl-12 gap-8">
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
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default MainHeading;
