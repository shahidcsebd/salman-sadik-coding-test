import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import InputBox from "./InputBox";
import Keywords from "./Keywords/Keywords";
import Button from "./Button";
import { RiDraggable } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";

const OutlineCard = ({
  heading,
  subHeading,
  id,
  onSetOutlines,
  onOutlines,
  setKeywordHover,
}) => {
  const [h3InputBox, seth3InputBox] = useState(false);
  const [keywordBox, setKeywordBox] = useState(false);

  const [input, setInput] = useState("");

  const handleH3 = (e) => {
    const data = {
      id: Date.now().toString(),
      name: input,
    };

    if (e.keyCode == 13) {
      if (input == "") return;
      let newOutline = onOutlines.map((ele) => {
        if (ele.id == id) {
          return {
            ...ele,
            subHeading: ele.subHeading ? [...ele.subHeading, data] : [data],
          };
        }
        return ele;
      });

      onSetOutlines(newOutline);

      setInput("");
    }
  };
  const handleAddKeyword = () => {
    setKeywordBox((prev) => !prev);
  };
  const handleAddH3 = () => {
    seth3InputBox((prev) => !prev);
  };

  const handleDeleteH3 = (h3Id) => {
    // let findOutline = onOutlines?.find((ele) => ele.id == id);
    let newOutline = onOutlines.map((ele) => {
      if (ele.id == id) {
        return {
          ...ele,
          subHeading: [
            ...ele.subHeading.filter((outline) => outline.id != h3Id),
          ],
        };
      }
      return ele;
    });
    // console.log(newOutline);
    // let editH3Outline = findOutline?.subHeading?.filter(
    //   (outline) => outline.id != h3Id
    // );

    // findOutline = { ...findOutline, subHeading: editH3Outline };
    // let filteredOutline = onOutlines?.filter((ele) => ele.id != id);

    onSetOutlines(newOutline);
  };

  const handleDeleteH2 = () => {
    let filteredOutline = onOutlines?.filter((ele) => ele.id != id);

    onSetOutlines([...filteredOutline]);
  };
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`mb-4`}
        >
          <div className="rounded-md border hover:border-blue-400 duration-1000">
            <h3 className="py-4 flex  justify-between items-center gap-2  text-xl text-left pl-2">
              <span className="flex items-center gap-2">
                <RiDraggable /> <span className="font-bold">H2:</span>{" "}
                <span contentEditable>{heading}</span>
              </span>
              <button onClick={() => handleDeleteH2(id)}>
                <TiDelete className="mr-4 text-2xl" />
              </button>
            </h3>
          </div>
          <div
            className={`${
              snapshot.isDraggingOver ? `bg-base-200 rounded-md` : ``
            }`}
          >
            {subHeading?.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided, snapshot) => (
                  <div
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    className={`my-2 ml-4  ${
                      snapshot.isDragging
                        ? `bg-blue-200 rounded-md`
                        : "bg-white"
                    }`}
                  >
                    <h4 className=" text-md hover:border-blue-400 text-left pl-4 py-4 flex justify-between s items-center gap-2 border rounded-md">
                      <span className="flex items-center gap-2">
                        {" "}
                        <RiDraggable /> <span className="font-medium">
                          H3:
                        </span>{" "}
                        <span contentEditable className="border-0">
                          {item.name}
                        </span>
                      </span>
                      <button onClick={() => handleDeleteH3(item.id)}>
                        <TiDelete className="mr-4 text-2xl" />
                      </button>
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
              <button
                className="inline-flex items-center px-4 py-2 bg-base-200 hover:bg-gray-300 text-gray-700 text-sm font-normal rounded-md"
                onClick={handleAddKeyword}
                onMouseOver={() => setKeywordHover(true)}
                onMouseLeave={() => setKeywordHover(false)}
              >
                + Insert NLP & LSI Keywords
              </button>
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
