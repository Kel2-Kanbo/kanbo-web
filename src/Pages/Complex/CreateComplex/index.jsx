import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import {
  getCity,
  getDistrict,
  createComplex,
  getProvince,
} from "../../../API/ApiFetch";
import { Link } from "react-router-dom";

import FormInput from "../../../Components/FormInput";
import SelectWrap from "../../../Components/SelectWrap";
import FormWrap from "../../../Components/FormWrap";
import Button from "../../../Components/Button";
import Sidebar from "../../../Components/Sidebar";
import Navbar from "../../../Components/Navbar";

export default function CreateComplex(props) {
  // const { handleClose, addComplex, city, district } = props;
  const [data, setData] = useState({
    complexName: "",
    complexAddress: "",
    city: "",
    district: "",
    building: "",
  });
  const [msg, setMsg] = useState("");

  const [province, setProvince] = useState([
    {
      id: "",
      name: "",
    },
  ]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);

  console.log(province);

  const getProvinces = async () => {
   try {
      await getProvince().then((response) => {
        setProvince(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCities = async (id) => {
    try {
      await getCity(id).then((response) => {
        setCity(response);
      });
    }
    catch (error) {
      console.log(error);
    }
  };

  const getDistricts = async () => {
    try {
      await getDistrict().then((response) => {
        setDistrict(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const dataProvince = province?.map((item) => {
  //   return {
  //     value: item.name,
  //     id: item.id,
  //   };
  // });
  // const data_province = new Array(dataProvince.length);
  // for (let i = 0; i < dataProvince.length; i++) {
  //   data_province[i] = dataProvince[i].value;
  // }

  // console.log(data_province);

  console.log(city);
  // const cityName = city?.map((item) => {
  //   return {
  //     value: item.name,
  //     id: item.id,
  //   };
  // });
  // const city_name = new Array(cityName.length);
  // for (let i = 0; i < cityName.length; i++) {
  //   city_name[i] = cityName[i].value;
  // }

  // console.log(city_name);

  const [inputs, setInputs] = useState([
    {
      id: 0,
      name: "complexName",
      type: "text",
      placeholder: "Complex Name",
      value: "",
      required: true,
    },
    {
      id: 1,
      name: "complexAddress",
      type: "text",
      placeholder: "Complex Address",
      value: "",
      required: true,
    },
    {
      id: 2,
      name: "province",
      type: "select",
      placeholder: "Province",
      // options: city_name,
      // options: data_province,
      options: province,
      value: "",
      required: true,
    },
    {
      id: 3,
      name: "city",
      type: "select",
      placeholder: "City",
      // options: city_name,
      options: ["City 1", "City 2", "City 3"],

      value: "",
      required: true,
    },
    {
      id: 4,
      name: "district",
      type: "select",
      placeholder: "District",
      options: ["District 1", "District 2", "District 3"],
      value: "",
      required: true,
    },
    {
      id: 5,
      name: "building",
      type: "number",
      placeholder: "Building",
      value: "",
      required: true,
    },
  ]);

  const _handleChange = (value, index) => {
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

  const _handleCreateComplex = (e) => {
    if (
      inputs[0].value &&
      inputs[1].value &&
      inputs[2].value &&
      inputs[3].value &&
      inputs[4].value &&
      inputs[5].value
    ) {
      createComplex({
        //   id: uuidv4(),
        complexName: inputs[0].value,
        complexAddress: inputs[1].value,
        province: inputs[2].value,
        city: inputs[3].value,
        district: inputs[4].value,
        building: inputs[5].value,
      });
      alert("Complex Created");
      e.preventDefault();

      setInputs([
        {
          id: 0,
          name: "complexName",
          type: "text",
          placeholder: "Complex Name",
          value: "",
          required: true,
        },
        {
          id: 1,
          name: "complexAddress",
          type: "text",
          placeholder: "Complex Address",
          value: "",
          required: true,
        },
        {
          id: 2,
          name: "province",
          type: "select",
          placeholder: "Province",
          // options: city_name,
          options: ["Province 1", "Province 2", "Province 3"],

          value: "",
          required: true,
        },
        {
          id: 3,
          name: "city",
          type: "select",
          placeholder: "City",
          // options: city_name,
          options: ["City 1", "City 2", "City 3"],

          value: "",
          required: true,
        },
        {
          id: 4,
          name: "district",
          type: "select",
          placeholder: "District",
          options: ["District 1", "District 2", "District 3"],
          value: "",
          required: true,
        },
        {
          id: 5,
          name: "building",
          type: "number",
          placeholder: "Building",
          value: "",
          required: true,
        },
      ]);
      // handleClose();
    } else {
      setMsg("Please fill out all fields");
    }
  };

  // const _handleClose = () => {
  //   // handleClose();
  //   setInputs([
  //     {
  //       id: 0,
  //       name: "complexName",
  //       type: "text",
  //       placeholder: "Complex Name",
  //       value: "",
  //       required: true,
  //     },
  //     {
  //       id: 1,
  //       name: "complexAddress",
  //       type: "text",
  //       placeholder: "Complex Address",
  //       value: "",
  //       required: true,
  //     },
  //     {
  //       id: 2,
  //       name: "city",
  //       type: "select",
  //       placeholder: "City",
  //       options: ["City 1", "City 2", "City 3"],
  //       value: "",
  //       required: true,
  //     },
  //     {
  //       id: 3,
  //       name: "district",
  //       type: "select",
  //       placeholder: "District",
  //       options: ["District 1", "District 2", "District 3"],
  //       value: "",
  //       required: true,
  //     },
  //     {
  //       id: 4,
  //       name: "building",
  //       type: "number",
  //       placeholder: "Building",
  //       value: "",
  //       required: true,
  //     },
  //   ]);
  // };
  useEffect(() => {
    const getAllCity = async () => {
      const allCity = await getCities();
      if (allCity) {
        setCity(allCity);
      }
    };
    getAllCity();

    const getAllProvince = async () => {
      const allProvince = await getProvinces();
      if (allProvince) {
        setProvince(allProvince);
      }
    };
    getAllProvince();
  }, []);

  useEffect(() => {
    const getAllProvince = async () => {
      const allProvince = await getProvinces();
      if (allProvince) {
        setProvince(allProvince);
      }
    };
    getAllProvince();
  }, []);

  return (
    <div className=" flex bg-secondary-blue h-screen">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6">
        <div className="px-4 py-4 mt-20">
          <h1 className="text-3xl font-bold mb-4">Complex</h1>

          <div className="flex items-center justify-between mb-6">
            <FormWrap onSubmit={_handleCreateComplex}>
              <h3 className="text-2xl text-center font-bold">Create Complex</h3>
              <p className="has-text-centered text-error-red">{msg}</p>
              <div className="w-full grid grid-cols-2 gap-4">
                {inputs.map((input, inputIdx) =>
                  input.type !== "select" ? (
                    <>
                      <FormInput
                        key={inputIdx}
                        {...input}
                        value={input.value}
                        type={input.type}
                        onChange={(e) =>
                          _handleChange(e.target.value, inputIdx)
                        }
                      />
                    </>
                  ) : (
                    <>
                      <SelectWrap
                        type={input.type}
                        onChange={(e) =>
                          _handleChange(e.target.value, inputIdx)
                        }
                      >
                        <option value="">{input.placeholder}</option>
                        {input.options.map((option, optionIdx) => (
                          <option key={optionIdx} value={option}>
                            {option}
                          </option>
                        ))}
                      </SelectWrap>
                    </>
                  )
                )}
              </div>

              <div className="flex gap-4 justify-between w-full text-primary-white">
                <Link to="/complex">
                  <button
                    className="font-bold text-textColor-black uppercase px-6 py-3 text-sm shadow mr-1 mb-1"
                    type="button"
                  >
                    Close
                  </button>
                </Link>
                <Button type="button" onClick={_handleCreateComplex}>
                  Add Complex
                </Button>
              </div>
            </FormWrap>
          </div>
        </div>
      </div>
    </div>
  );
}
