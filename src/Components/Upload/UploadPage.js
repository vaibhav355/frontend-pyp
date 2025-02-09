import React, { useState } from "react";

import { TextField, Paper, Button, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import styled from "styled-components";

import baseApi from "../../config";
// import Swal from "sweetalert2";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { DropzoneDialog } from "material-ui-dropzone";

const FormContainer = styled.form`
  display: flex;
  align-content: space-around;
  justify-content: space-around;
  margin-top: 4rem;

`;

const FirstContainer = styled(Paper)`
  width: 34rem;
  height: 38rem;
  border-radius: 19px;
  //form {
  display: flex;
  flex-direction: column;
  align-items: center;
  // }

  h1 {
    font-weight: bold;
    margin-top: 62px;
    margin-bottom: 32px;
  }
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const StyleName = {
  height: "42px",
  borderRadius: "5px",
  width: "22.6rem",
  paddingLeft: "15px",
  paddingTop: "8px",

  boxShadow: "0.5px 2px 9px #524f504d",

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: "800",
  },
};

const BoxStyle = styled(Box)`
  display: flex;
`;

// Styling With Classes
const AutoStyle = {
  "& .MuiAutocomplete-inputRoot": {
    width: "24rem",
    height: "52px",
    borderRadius: "6px",
    paddingLeft: "15px",
    marginTop: "24px",
    marginBottom: "12px",

    boxShadow: "0.5px 2px 9px #524f504d",
  },

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: "bold",
  },
};

const AutoFirstText = {
  "& .MuiAutocomplete-inputRoot": {
    width: "11.7rem",
    height: "52px",
    borderRadius: "5px",
    paddingLeft: "15px",

    boxShadow: "0.5px 2px 9px #524f504d",
  },

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: "bold",
  },
};

const AutoSecondText = {
  "& .MuiAutocomplete-inputRoot": {
    width: "11.5rem",
    height: "52px",
    borderRadius: "5px",
    paddingLeft: "15px",
    marginLeft: "10px",

    boxShadow: "0.5px 2px 9px #524f504d",
  },

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: "bold",
  },
};

const Buttoncss = {
  marginTop: "3rem",
  marginLeft: "19rem",
  minWidth: "86px",
  borderRadius: "12px",
  textTransform: "none",
  fontSize: "17px",
  lineHeight: "1.5",
  backgroundColor: "#2b92f8",

  "& 	.MuiButton-text": {
    backgroundColor: "black",
    border: "2px solid red",
  },
};

//Upload File Styles ##### starts

const SecondContainer = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 38rem;
  width: 34rem;
  border-radius: 19px;
`;

// const Papercss = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   flexDirection: "column",
//   // marginTop: "70px",
//   height: "38rem",
//   width: "34rem",
//   borderRadius: "19px",
// };

const IconStyle = {
  fontSize: "123px",
  cursor: "pointer",
};

const ButtonStyle = {
  minWidth: "86px",
  borderRadius: "12px",
  textTransform: "none",
  fontSize: "17px",
  lineHeight: "1.5",
  backgroundColor: "#2b92f8",
  display: "flex",
  justifyContent: "center",
};

// #### ends here...

const Branch = [
  {
    key: "cse",
    label: "Department of Computer Science And Engneering",
  },
  {
    key: "age",
    label: "Department of Agricultural Engineering",
  },
  {
    key: "ece",
    label: "Department of Electronics and Communication Engineering",
  },
  {
    key: "ee",
    label: "Department of Electrical Engineering",
  },
  {
    key: "forest",
    label: "Department of Forestry",
  },
  {
    key: "civil",
    label: "Department of Civil Engineering",
  },
  {
    key: "mecs",
    label: "Department of Mechanical Engineering",
  },
];

const subjectCode = [
  {
    key: "1",
    label: "CS22101",
  },
  {
    key: "2",
    label: "ME22101",
  },
  {
    key: "3",
    label: "RE22101",
  },
  {
    key: "4",
    label: "EE22101",
  },
  {
    key: "5",
    label: "DF273401",
  },
  {
    key: "6",
    label: "HR22101",
  },
];
const semester = [
  {
    key: "s1",
    label: "First",
  },
  {
    key: "s2",
    label: "Second",
  },
];
const year = [
  {
    key: "11",
    label: "First",
  },
  {
    key: "12",
    label: "Second",
  },
  {
    key: "13",
    label: "Third",
  },
  {
    key: "14",
    label: "Fourth",
  },
  {
    key: "15",
    label: "Fifth",
  },
  {
    key: "16",
    label: "Sixth",
  },
];

function UploadPage() {
  // const initialState = {
  //   open: false,
  //   files: [],
  // };

  // const [state, setState] = useState(initialState);

  // const handleOpen = () => {
  //   setState({
  //     ...state,
  //     open: true,
  //   });
  // };

  // const handleClose = () => {
  //   setState({
  //     ...state,
  //     open: false,
  //   });
  // };

  // const handleSave = (files) => {
  //   setState({
  //     ...state,
  //     files: files,
  //     open: false,
  //   });
  // };

  // console.log(state.files);

  const DEFAULT_VALUES = {
    name: "",
    subCode: "",
    semester: "",
    year: "",
    branch: "",
    files: {
      open: false,
      file: []
    }
  };

  const [uploadData, setuploadData] = useState(DEFAULT_VALUES);

  const handleOpen = () => {
    setuploadData({
      ...uploadData,
      open: true,
    });
  };

  const handleClose = () => {
    setuploadData({
      ...uploadData,
      open: false,
    });
  };

  const handleSave = (files) => {
    setuploadData({
      ...uploadData,
      files: files,
      open: false,
    });
  };

  const handleInputChange = (e) => {
    setuploadData({
      ...uploadData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSliderChange = (name) => (e, value) => {
    setuploadData({
      ...uploadData,
      [name]: value.label,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const res = await baseApi.post("/upload", { ...uploadData });
    console.log(uploadData);
  };

  return (
    // <Style>
    <FormContainer onSubmit={handleSubmit}>
      <FirstContainer elevation={10}>
        <h1>The Art of Sharing</h1>

        <TextField
          type="text"
          name="name"
          value={uploadData.name}
          onChange={handleInputChange}
          id="standard-basic"
          variant="standard"
          sx={StyleName}
          placeholder="Name"
          InputProps={{ disableUnderline: true }}
          elevation={5}
          required
        />

        <Box>
          <Autocomplete
            name="subCode"
            options={subjectCode}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            value={uploadData.subCode}
            onChange={handleSliderChange("subCode")}
            sx={AutoStyle}
            renderInput={(params) => (
              <TextField
                placeholder="Subject Code"
                variant="standard"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                required
              />
            )}
          />
        </Box>

        <BoxStyle>
          <Autocomplete
            name="semester"
            value={uploadData.semester}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={handleSliderChange("semester")}
            options={semester}
            sx={AutoFirstText}
            renderInput={(params) => (
              <TextField
                // type="number"
                placeholder="Semester"
                variant="standard"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                required
              />
            )}
          />

          <Autocomplete
            name="year"
            value={uploadData.year}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={handleSliderChange("year")}
            options={year}
            sx={AutoSecondText}
            renderInput={(params) => (
              <TextField
                // type="number"
                placeholder="Year"
                variant="standard"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                required
              />
            )}
          />
        </BoxStyle>

        <Autocomplete
          name="branch"
          value={uploadData.branch}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={handleSliderChange("branch")}
          disablePortal
          options={Branch}
          sx={AutoStyle}
          renderInput={(params) => (
            <TextField
              type="text"
              placeholder="Branch"
              variant="standard"
              {...params}
              InputProps={{ ...params.InputProps, disableUnderline: true }}
            />
          )}
        />

        <Button variant="contained" sx={Buttoncss} type="submit" value="Submit">
          Done
        </Button>
      </FirstContainer>

      <SecondContainer elevation={10}>
        <CloudUploadOutlinedIcon sx={IconStyle} />

        <Button variant="contained" sx={ButtonStyle} onClick={handleOpen}>
          Select Document
        </Button>

        <DropzoneDialog
          // open={state.open}
          open={uploadData.open}
          onSave={handleSave}
          acceptedFiles={[]}
          showPreviews={true}
          maxFileSize={500000000}
          onClose={handleClose}
          cancelButtonText={"cancel"}
          submitButtonText={"submit"}
          showFileNamesInPreview={true}
          dialogTitle={"Upload File"}
          dropzoneText={"Drag and drop here"}
        />
      </SecondContainer>
    </FormContainer>
  );
}

export default UploadPage;
