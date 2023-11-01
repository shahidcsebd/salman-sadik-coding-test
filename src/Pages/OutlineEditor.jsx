import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import Loading from "../Shared/Loading";
import OutlinesCard from "../components/OutlinesCard";

const OutlineEditor = () => {
  const [outlines, setOutlines] = useState([]);
  const [h2InputBox, seth2InputBox] = useState(false);
  const [input, setInput] = useState("");

  // Fetch Data from DATA.json

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const data = await fetch("DATA.json");
        const res = await data.json();
        setOutlines(res);
      };
      fetchData();
    }, 1000);
  }, []);

  if (!outlines.length > 0) {
    return <Loading />;
  }

  // Drag and Drop functionality

  const handleDragAndDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedOutlines = [...outlines];

      const outlineSourceIndex = source.index;
      const outlineDestinationIndex = destination.index;

      const [removedOutline] = reorderedOutlines.splice(outlineSourceIndex, 1);
      reorderedOutlines.splice(outlineDestinationIndex, 0, removedOutline);

      return setOutlines(reorderedOutlines);
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const outlineSourceIndex = outlines.findIndex(
      (outline) => outline.id === source.droppableId
    );
    const outlineDestinationIndex = outlines.findIndex(
      (outline) => outline.id === destination.droppableId
    );

    const newSourceItems = [...outlines[outlineSourceIndex].subHeading];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...outlines[outlineDestinationIndex].subHeading]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newOutlines = [...outlines];

    newOutlines[outlineSourceIndex] = {
      ...outlines[outlineSourceIndex],
      subHeading: newSourceItems,
    };
    newOutlines[outlineDestinationIndex] = {
      ...outlines[outlineDestinationIndex],
      subHeading: newDestinationItems,
    };

    setOutlines(newOutlines);
  };

  const handleH2 = (e) => {
    const data = {
      id: Date.now().toString(),
      heading: input,
      tint: outlines.length,
    };
    if (e.keyCode == 13) {
      if (input == "") return;
      seth2InputBox((prev) => !prev);
      setOutlines((prev) => [...prev, data]);
      setInput("");
    }
  };

  const handleAddH2 = () => {
    seth2InputBox((prev) => !prev);
  };
  return (
    <div className="max-w-full md:py-10 px-6">
      <div className="shadow-lg w-full mx-auto p-10 rounded-md flex flex-col gap-3 max-w-3xl md:justify-between justify-center bg-white">
        <DragDropContext onDragEnd={handleDragAndDrop}>
          <div className="header">
            <h1 className="text-left text-2xl font-bold">
              {" "}
              <span className="bg-yellow-100 p-1 rounded">✍️</span> Outlines
              Editor
            </h1>
            {!h2InputBox && (
              <div className="flex my-4">
                <Button onHandleClick={handleAddH2} text="  + Add H2 Section" />
              </div>
            )}
            {h2InputBox && (
              <div className="pb-5 flex w-full my-4">
                <InputBox
                  onInputKeyUp={handleH2}
                  setInput={setInput}
                  input={input}
                  placeholder="Add H2 Section"
                />
              </div>
            )}
          </div>
          <Droppable droppableId="ROOT" type="group" className="w-full">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {outlines?.map((outline, index) => (
                  <OutlinesCard
                    index={index}
                    key={outline.id}
                    draggableId={outline.id}
                    outline={outline}
                    onSetOutlines={setOutlines}
                    onOutlines={outlines}
                  />
                ))}
                {console.log(snapshot)}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default OutlineEditor;
