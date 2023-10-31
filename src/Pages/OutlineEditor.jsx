import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import OutlineCard from "../components/OutlineCard";
const DATA = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    h2: "Mastering React Components",
    h3: [
      {
        id: "26fd50b3-3841-496e-8b32-73636FCDf6f4197",
        name: "Creating and rendering components",
      },
      {
        id: "b0ee9d50-d0a6-46f8-96e3-7f3f0fERWE9a2525",
        name: "Component Lifecycle and Hooks",
      },
      {
        id: "b0eesdfs50-d0a6-46f8-96e3-7f3f0DSAFCf9a2525",
        name: "Managing State and Props",
      },
    ],
    tint: 1,
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df4DSAC6247",
    h2: "Understanding the basics",
    h3: [
      {
        id: "95ee6a5d-f927-4579-8c15-2b4ebDSAD86210ae",
        name: "Managing Data Flow with Redux",
      },
      {
        id: "5bee94eb-6bde-4411-b438-1c37faSDSAC6af364",
        name: "Key concepts of react components",
      },
      {
        id: "5bee94eb-6bde-4411-b438-1c37fa6DSDFAaf364",
        name: "Fetching and updating data with APIs",
      },
      {
        id: "5bee94eb-6bde-4411-b438-1c37fasDSAa6af364",
        name: "The fundamental of reactjs",
      },
    ],
    tint: 2,
  },

  {
    id: "487fds68b4-1746-438c-920e-d67b7df4dsd6247",
    h2: "NPM and Webpack",
    h3: [
      {
        id: "95ee6dsa5d-f927-4579-8c15-2b4eb86210dsae",
        name: "Install React using NPM",
      },
      {
        id: "5beswe94eb-6bde-4411-b438-1cds37fa6af364",
        name: "Understanding webpack and NPM",
      },
      {
        id: "5bedwde94eb-6bde-4411-b438-1c37fdsda6af364",
        name: "Build and transpile jsx using webpack Babel",
      },
      {
        id: "5beesds94eb-6bde-4411-b438-1c37fdsa6af364",
        name: "Rendering the jsx component on DOM Node",
      },
    ],
    tint: 3,
  },
];
const OutlineEditor = () => {
  const [outlines, setOutlines] = useState(DATA);
  const [h2InputBox, seth2InputBox] = useState(false);
  const [input, setInput] = useState("");
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
      const outlineDestinatonIndex = destination.index;

      const [removedOutline] = reorderedOutlines.splice(outlineSourceIndex, 1);
      reorderedOutlines.splice(outlineDestinatonIndex, 0, removedOutline);

      return setOutlines(reorderedOutlines);
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const outlineSourceIndex = outlines.findIndex(
      (outline) => outline.id === source.droppableId
    );
    const outlineDestinatonIndex = outlines.findIndex(
      (outline) => outline.id === destination.droppableId
    );

    const newSourceItems = [...outlines[outlineSourceIndex].h3];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...outlines[outlineDestinatonIndex].h3]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newOutlines = [...outlines];

    newOutlines[outlineSourceIndex] = {
      ...outlines[outlineSourceIndex],
      h3: newSourceItems,
    };
    newOutlines[outlineDestinatonIndex] = {
      ...outlines[outlineDestinatonIndex],
      h3: newDestinationItems,
    };

    setOutlines(newOutlines);
  };
  const handleH2 = (e) => {
    const data = {
      id: Date.now().toString(),
      h2: input,
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
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {outlines?.map((outline, index) => (
                  <Draggable
                    draggableId={outline.id}
                    index={index}
                    key={outline.id}
                  >
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="w-full bg-white border p-2 my-4 rounded-md group "
                      >
                        <OutlineCard
                          {...outline}
                          onSetOutlines={setOutlines}
                          onOutlines={outlines}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
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
