
import { useState, useEffect, useRef } from "react";
import { Box, InputLabel, Typography, Button } from "@mui/material";
import gallery from "../../assets/gallery.png";
import styles from "./styles.module.css";
import Resizer from "react-image-file-resizer";

interface ValidationError {
  param: string;
  msg: string;
}
interface ImageProps {
  value: string;
  name: string;
  validationErrors?: ValidationError[];
  error?: any;
  errors?: any;
  touched?: any;
  isEdit?: boolean;
  imageName?: string;
  setImageName?: any;
  noCompress?: boolean;
  setfieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}
export const UploadImageNoCompress = ({
  value,
  setfieldValue,
  name,
  validationErrors,
  error,
  errors,
  touched,
  isEdit,
  imageName,
  setImageName,
  noCompress = false,
}: ImageProps) => {
  const [validationError, setValidationError] = useState<
    ValidationError | undefined
  >(error);
  const [helperText, setHelperText] = useState<string | undefined>(error);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [inputKey, setInputKey] = useState(Date.now());
  const [imageURL, setImageURL] = useState(gallery);
  useEffect(() => {
    setImageURL(gallery);
  }, []);
  useEffect(() => {
    setImageURL(gallery);
    const getImage = async () => {
      if (value) {
        if (isEdit) {
          if (changed.current) {
            return setImageURL(value);
          } else {
            return setImageURL(`${process.env.REACT_APP_FIREBASE_URL}${value}`);
          }
        }

        return setImageURL(value);
      }
      return setImageURL(gallery);
    };
    getImage();
  }, [value, gallery, setImageURL]);
  const changed = useRef(false);
  useEffect(() => {
    setValidationError(
      validationErrors?.filter((item) => item.param === name)[0]
    );
  }, [validationErrors]);
  useEffect(() => {
    setHelperText(validationError?.msg);
  }, [validationError]);
  useEffect(() => {
    if (errors && errors[name!] && touched) {
      setHelperText(errors[name!]);
    } else {
      setHelperText(undefined);
    }
  }, [errors, touched]);

  const handleConfirm = () => {
    setfieldValue(name, "");
    if (setImageName) setImageName("");
    setOpenConfirm(false);
  };

  return (
    <Box
      mb={3}
      mr={5}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* <ConfirmationModal
        open={openConfirm}
        handleClose={handelClose}
        handleConfirm={handleConfirm}
        subtitle='Are you sure you want to clear the image?'
      /> */}
      <InputLabel sx={{ color: "#ff1493" }} shrink>
        Picture
      </InputLabel>

      <input
        type="file"
        id={name}
        name={name}
        accept="image/*"
        key={inputKey}
        onChange={(event: any) => {
          const file = event?.target.files[0];
          changed.current = true;
          Resizer.imageFileResizer(
            file,
            noCompress ? file.width : 800,
            noCompress ? file.height : 800,
            file.type.split("/")[1],
            noCompress ? 100 : 80,
            0,
            (uri: any) => {
              setfieldValue(name, uri);
              setfieldValue("imageName", fileName);
            },
            "base64"
          );
          setInputKey(Date.now());
          const fileName = file.name.split(".")[0];
          setImageName(fileName);
        }}
        style={{ display: "none" }}
      />
      <Box
        className={styles.imageBox}
        sx={{ background: "rgba(255, 20, 147, 0.3)" }}
      >
        <label htmlFor={name}>
          <img src={imageURL} alt="nothing" className={styles.imageWidth} />
        </label>
        <label htmlFor={name}>
          <Button
            variant="text"
            component="span"
            size="small"
            className={styles.uploadbutton}
            sx={{ color: "#ff1493" }}
          >
            {imageName ? imageName : "Browse png , jpeg .."}
          </Button>
        </label>
        <Box>
          {" "}
          <Typography
            sx={{
              cursor: "pointer",
              color: "#ff1493",
              marginTop: "10px",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={() => {
              if (value) {
                handleConfirm();
              }
            }}
          >
            Clear Image
          </Typography>
        </Box>
      </Box>
      <Box mt={4}>
        {" "}
        <Typography className="errorMsg">{helperText}</Typography>
      </Box>
    </Box>
  );
};
