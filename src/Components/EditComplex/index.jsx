
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FormInput from "../FormInput";
import FormWrap from "../FormWrap";
import Button from "../Button";
import SelectWrap from "../SelectWrap";

export default function EditComplex(props) {
    const { handleClose, complex, updateComplex } = props;
    const [msg, setMsg] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    // console.log(complex);
  
    const _handleClose = () => {
      handleClose();
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
          name: "city",
          type: "select",
          placeholder: "City",
          options: ["City 1", "City 2", "City 3"],
          value: "",
          required: true,
        },
        {
          id: 3,
          name: "district",
          type: "select",
          placeholder: "District",
          options: ["District 1", "District 2", "District 3"],
          value: "",
          required: true,
        },
        {
          id: 4,
          name: "building",
          type: "number",
          placeholder: "Building",
          value: "",
          required: true,
        },
      ]);
    }
  
    const [inputs, setInputs] = useState([
      {
        id: 0,
        name: "complexName",
        type: "text",
        placeholder: "Complex Name",
        value: complex.complexName,
        required: true,
      },
      {
        id: 1,
        name: "complexAddress",
        type: "text",
        placeholder: "Complex Address",
        value: complex.complexAddress,
        required: true,
      },
      {
        id: 2,
        name: "city",
        type: "select",
        placeholder: "City",
        options: ["City 1", "City 2", "City 3"],
        value: complex.city,
        required: true,
      },
      {
        id: 3,
        name: "district",
        type: "select",
        placeholder: "District",
        options: ["District 1", "District 2", "District 3"],
        value: complex.district,
        required: true,
      },
      {
        id: 4,
        name: "building",
        type: "number",
        placeholder: "Building",
        value: complex.building,
        required: true,
      },
    ]);

    // const _handleEditComplex = (e) => {
    //   e.preventDefault();
    //   const { complexName, complexAddress, city, district, building } = props
    //   const complex = {
    //     complexName: complexName.value,
    //     complexAddress: complexAddress.value,
    //     city: city.value,
    //     district: district.value,
    //     building: building.value,
    //   };
    //   props.updateComplex(complex);
    //   setMsg("Complex updated successfully");
    //   _handleClose();
    // }
  
    const _handleEditComplex = (e) => {
      e.preventDefault();
      if (
        inputs[0].value &&
        inputs[1].value &&
        inputs[2].value &&
        inputs[3].value &&
        inputs[4].value
      ) {
        updateComplex({
          id: complex.id,
          complexName: inputs[0].value,
          complexAddress: inputs[1].value,
          city: inputs[2].value,
          district: inputs[3].value,
          building: inputs[4].value,
        });
        alert("Complex has been updated");
        _handleClose();
      } else {
        setMsg("Please fill all fields");
      }
    };

    // useEffect(() => {
    //   if (props) {
    //     setInputs({
    //       complexName: props?.complex[0].complexName,
    //       complexAddress: props?.complex[0].complexAddress,
    //       city: props?.complex[0].city,
    //       district: props?.complex[0].district,
    //       building: props?.complex[0].building,
    //     });
    //     // setIsDataReady(true);
    //     // console.log(data);
    //   }
    // }, [props]);
  
    const _handleChange = (e) => {
      const { name, value } = e.target;
      setInputs((prevInputs) => {
        return prevInputs.map((input) => {
          if (input.name === name) {
            input.value = value;
          }
          return input;
        });
      });
    };

    const handleReset = (e) => {
      e.preventDefault();
  
      // setBaseImage("");
      navigate("/complex/:id");
      // onReset={handleReset}
    };
  return (
    <>
      <FormWrap onSubmit={_handleChange}>
        <h3 className="text-2xl text-center font-bold">Edit Complex</h3>
        <p className="has-text-centered text-error-red">{msg}</p>
        {inputs.map((input, id) =>
          input.type !== "select" ? (
            <>
              <FormInput
                key={id}
                {...input}
                value={input.value}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                onChange={_handleChange}
              />
            </>
          ) : (
            <>
              <SelectWrap
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                onChange={_handleChange}
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
        )
        }

        <div className="flex gap-4 justify-between w-full text-primary-white">
          <button
            className="font-bold text-textColor-white bg-secondary-red uppercase px-6 py-3 text-sm shadow mr-1 mb-1"
            onClick={_handleClose}
          >
            Close
          </button>
          
          <Button onClick={_handleEditComplex} type="button">
            Update Complex
          </Button>
        </div>
      </FormWrap >
    </>
  );
}


