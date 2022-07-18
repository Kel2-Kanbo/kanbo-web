import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";

import { getBuilding, createRoom } from "../../API/ApiFetch";
import Button from "../../Components/Button";
import FormInput from "../../Components/FormInput";
import FormWrap from "../../Components/FormWrap";
import FormTextArea from "../../Components/FormTextArea";
import FormWrapModal from "../../Components/FormWrapModal";
import SelectWrap from "../../Components/SelectWrap";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import FormRoomItem from "../../Components/FormRoomItem";
import ListRoomItem from "../../Components/ListRoomItem";
import { useMutation } from "@apollo/client";
import { GET_DATA_ROOM, UPDATE_ROOM } from "../../GraphQL/room/queries";
import Swal from "sweetalert2";

export default function UpdateRoom() {
  const location = useLocation();
  const state = location.state;
  const [room, setRoom] = useState(state);
  console.log(room);
  const value = Object.values(room);
  console.log(value);
  const getDataRoomm = value?.map((item) => {
    return item;
  });
  console.log(getDataRoomm);
  const navigate = useNavigate();
  const [data, setData] = useState({
    thumbnail: "",
    room_name: "",
    floor: "",
    room_description: "",
    price_per_day: 0,
    status: false,
    roomitem: [],
  });

  console.log(data);
  const [msg, setMsg] = useState("");
  const [building, setBuilding] = useState([]);

  const [updateDataRoom] = useMutation(UPDATE_ROOM, {
    refetchQueries: [GET_DATA_ROOM],
    onCompleted: (data) => {
      Swal.fire({
        title: "Success",
        text: "Update Room Success",
        icon: "success",
      });
    },
  });

  const [inputs, setInputs] = useState([
    {
      id: 0,
      name: "room_name",
      type: "text",
      placeholder: "Room Name",
      value: getDataRoomm[0].room_name,
      required: true,
    },
    {
      id: 1,
      name: "building_id",
      type: "select",
      placeholder: "Building",
      value: getDataRoomm[0].building_id,
      required: true,
    },
    {
      id: 2,
      name: "room_address",
      type: "text",
      placeholder: "Address",
      value: "",
      required: true,
    },
    {
      id: 3,
      name: "room_description",
      type: "textarea",
      placeholder: "Description",
      value: getDataRoomm[0].room_description,
      required: true,
    },
    {
      id: 4,
      name: "price_per_day",
      type: "text",
      placeholder: "Room Price",
      value: getDataRoomm[0].price_per_day,
      required: true,
    },
    {
      id: 5,
      name: "capacity",
      type: "number",
      placeholder: "e.g 10",
      value: "",
      required: true,
    },
    {
      id: 6,
      name: "floor",
      type: "number",
      placeholder: "e.g 10",
      value: getDataRoomm[0].floor,
      required: true,
    },
    {
      id: 7,
      name: "table",
      type: "text",
      placeholder: "e.g office table",
      value: "",
      required: true,
    },
    {
      id: 8,
      name: "large",
      type: "text",
      placeholder: "e.g 10m",
      value: "",
      required: true,
    },
    {
      id: 9,
      name: "status",
      type: "select",
      value: getDataRoomm[0].status,
      // required: true,
    },
  ]);

  const handleChange = (value, index) => {
    setInputs(
      inputs.map((input) => {
        if (input.id === index) {
          return {
            ...input,
            value,
          };
        }
        return input;
      })
    );
    setData({
      ...data,
      [inputs[index].name]: value,
    });
  };

  const [imageRoom, setImageRoom] = useState("");
  console.log(imageRoom)

  const uploadImageRoom = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImageRoom(base64);
    console.log(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };


  const _handleUpdateRoom = (e) => {
    if (
      inputs[0].value &&
      inputs[1].value &&
      // inputs[2].value &&
      inputs[3].value &&
      inputs[4].value &&
      // inputs[5].value &&
      inputs[6].value
      // inputs[7].value &&
      // inputs[8].value
    ) {
      // createRoom({
      //   // id: uuidv4(),
      //   roomName: inputs[0].value,
      //   buildingName: inputs[1].value,
      //   address: inputs[2].value,
      //   description: inputs[3].value,
      //   roomPrice: inputs[4].value,
      //   capacity: inputs[5].value,
      //   floor: inputs[6].value,
      //   table: inputs[7].value,
      //   large: inputs[8].value,
      //   picture: imageRoom,
      // });

      updateDataRoom(getDataRoomm[0].room_id, {
        variables: {
          id: room.room_id,
          room_name: inputs[0].value,
          building_id: inputs[1].value,
          room_description: inputs[3].value,
          price_per_day: inputs[4].value,
          floor: inputs[6].value,
          thumbnail: imageRoom,
          status: inputs[9].value,
        },
      });
      e.preventDefault();
      navigate("/room");

      setInputs([
        {
          id: 0,
          name: "roomName",
          type: "text",
          placeholder: "Room Name",
          value: "",
          required: true,
        },
        {
          id: 1,
          name: "buildingName",
          type: "select",
          placeholder: "Building",
          value: building,
          required: true,
        },
        {
          id: 2,
          name: "address",
          type: "text",
          placeholder: "Address",
          value: "",
          required: true,
        },
        {
          id: 3,
          name: "description",
          type: "textarea",
          placeholder: "Description",
          value: "",
          required: true,
        },
        {
          id: 4,
          name: "roomPrice",
          type: "text",
          placeholder: "Room Price",
          value: "",
          required: true,
        },
        {
          id: 5,
          name: "capacity",
          type: "number",
          placeholder: "e.g 10",
          value: "",
          required: true,
        },
        {
          id: 6,
          name: "floor",
          type: "number",
          placeholder: "e.g 10",
          value: "",
          required: true,
        },
        {
          id: 7,
          name: "table",
          type: "text",
          placeholder: "e.g office table",
          value: "",
          required: true,
        },
        {
          id: 8,
          name: "large",
          type: "text",
          placeholder: "e.g 10m",
          value: "",
          required: true,
        },
        {
          id: 9,
          name: "status",
          type: "select",
          value: getDataRoomm[0].status,
          // required: true,
        },
      ]);
    } else {
      setMsg("Please fill all the fields");
    }
  };

  const _handleClose = () => {
    navigate("/room");
    setInputs([
      {
        id: 0,
        name: "roomName",
        type: "text",
        placeholder: "Room Name",
        value: "",
        required: true,
      },
      {
        id: 1,
        name: "buildingName",
        type: "select",
        placeholder: "Building",
        value: building,
        required: true,
      },
      {
        id: 2,
        name: "address",
        type: "text",
        placeholder: "Address",
        value: "",
        required: true,
      },
      {
        id: 3,
        name: "description",
        type: "textarea",
        placeholder: "Description",
        value: "",
        required: true,
      },
      {
        id: 4,
        name: "roomPrice",
        type: "text",
        placeholder: "Room Price",
        value: "",
        required: true,
      },
      {
        id: 5,
        name: "capacity",
        type: "number",
        placeholder: "e.g 10",
        value: "",
        required: true,
      },
      {
        id: 6,
        name: "floor",
        type: "number",
        placeholder: "e.g 10",
        value: "",
        required: true,
      },
      {
        id: 7,
        name: "table",
        type: "text",
        placeholder: "e.g office table",
        value: "",
        required: true,
      },
      {
        id: 8,
        name: "large",
        type: "text",
        placeholder: "e.g 10m",
        value: "",
        required: true,
      },
      {
        id: 9,
        name: "status",
        type: "select",
        value: getDataRoomm[0].status,
        // required: true,
      },
    ]);
  };

  const getAllBuilding = async () => {
    try {
      await getBuilding().then((res) => {
        setBuilding(res);
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getAllBuildings = async () => {
      const allBuilding = await getAllBuilding();
      if (allBuilding) {
        setBuilding(allBuilding);
      }
    };
    getAllBuildings();
  }, []);

  return (
    <>
      <div className=" flex bg-secondary-blue h-full">
        <Sidebar />
        {/* <Navbar /> */}
        <div className="basis-5/6">
          <div className="px-4 py-4 mt-20">
            <div className="flex items-center justify-between mb-6">
              <FormWrap onSubmit={_handleUpdateRoom}>
                <h3 className="text-2xl text-left font-bold">Create Room</h3>
                <p className="has-text-centered text-error-red">{msg}</p>
                <div className="w-full grid grid-col gap-4">
                  {inputs.map((input, inputIdx) =>
                    input.name !== "roomPrice" &&
                    input.name !== "description" &&
                    input.type !== "select" &&
                    input.name !== "capacity" &&
                    input.name !== "floor" &&
                    input.name !== "table" &&
                    input.name !== "large" ? (
                      <FormInput
                        key={inputIdx}
                        {...input}
                        value={input.value}
                        type={input.type}
                        onChange={(e) => handleChange(e.target.value, inputIdx)}
                      />
                    ) : input.name === "description" ? (
                      <FormTextArea
                        key={inputIdx}
                        {...input}
                        value={input.value}
                        type={input.type}
                        onChange={(e) => handleChange(e.target.value, inputIdx)}
                      />
                    ) : input.name === "roomPrice" ? (
                      <div className="flex gap-2 items-center w-full">
                        <FormInput
                          key={inputIdx}
                          {...input}
                          value={input.value}
                          type={input.type}
                          onChange={(e) =>
                            handleChange(e.target.value, inputIdx)
                          }
                        />
                        <p className="text-md text-gray-600">/Days</p>
                      </div>
                    ) : input.type === "select" ? (
                      <>
                        <SelectWrap
                          key={inputIdx}
                          type={input.type}
                          onChange={(e) =>
                            handleChange(e.target.value, inputIdx)
                          }
                          value={input.value}
                        >
                          <option value="">{input.value}</option>
                          {input.name === "buildingName" ? (
                            building.map((building, buildingIdx) => (
                              <option key={buildingIdx} value={building.id}>
                                {building.buildingName}
                              </option>
                            ))
                          ) : (
                            <>
                              <option value={true}>Unavailable</option>
                              <option value={false}>Available</option>
                            </>
                          )}
                        </SelectWrap>
                      </>
                    ) : (
                      <div className="flex gap-8 justify-start items-center w-full">
                        <div>{input.name}</div>
                        <FormInput
                          key={inputIdx}
                          {...input}
                          value={input.value}
                          type={input.type}
                          onChange={(e) =>
                            handleChange(e.target.value, inputIdx)
                          }
                        />
                      </div>
                    )
                  )}
                  <div className="flex items-start justify-start">
                    <FormInput
                      type="file"
                      id="gambar"
                      onChange={(e) => uploadImageRoom(e)}
                    />
                  </div>

                  <hr className="text-secondary-softblue" />
                  <FormRoomItem />
                  <ListRoomItem />

                  <div className="w-full flex justify-end">
                    <div className="flex w-2/4 items-center gap-4">
                      <Button
                        className="font-bold bg-secondary-softblue text-primary-blue w-1/2 uppercase px-6 py-3 text-sm rounded shadow mr-1 mb-1"
                        type="button"
                        onClick={_handleClose}
                      >
                        Close
                      </Button>
                      <Button
                        className="bg-primary-blue w-1/2 text-primary-white font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
                        type="button"
                        onClick={_handleUpdateRoom}
                      >
                        Update Room
                      </Button>
                    </div>
                  </div>
                </div>
              </FormWrap>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
