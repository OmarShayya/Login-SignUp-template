/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useEffect, useState } from "react";
import {
  Box,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AREA_CODES } from "../utils/main-utils";
interface ValidationError {
  path: string | undefined;
  param: string;
  msg: string;
}
interface DropdownListItem {
  id?: number;
  name: string;
}
interface Country {
  countryName: string;
  areaCode: string;
  countryCode: string;
}
type inputType =
  | "input"
  | "select"
  | "date"
  | "phone"
  | "country"
  | "password"
  | "file";
interface InputFieldProps {
  name: string;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  value?: string;
  formValue?: string;
  placeholder?: string;
  error?: any;
  required?: boolean;
  errors?: any;
  validationErrors?: ValidationError[];
  values?: any;
  isDisabled?: boolean;
  touched?: any;
  onChangeValue?: (e: any) => void;
  onBlurValue?: (e: React.FocusEvent<any>) => void;
  className?: string;
  textFieldClassName?: string;
  width?: string | number;
  height?: string;
  minWidth?: string;
  endAdornment?: ReactNode;
  type?: inputType;
  setfieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  dropdownList?: DropdownListItem[];
  areaCode?: string;
  phoneNumber?: string;
  countryCodeValue?: string;
  helperTextClassName?: string;
  loginLabels?: boolean;
  darkMode?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  value,
  formValue,
  placeholder,
  error,
  validationErrors,
  values,
  errors,
  isDisabled,
  touched,
  onChangeValue,
  onBlurValue,
  setfieldValue,
  required = false,
  className,
  textFieldClassName,
  width,
  minWidth,
  endAdornment,
  type = "input",
  dropdownList,
  areaCode,
  phoneNumber,
  countryCodeValue,
  helperTextClassName,
  multiline,
  rows,
  height,
  maxRows,
  loginLabels,
  darkMode = false,
}) => {
  const [validationError, setValidationError] = useState<
    ValidationError | undefined
  >(error);
  const [helperText, setHelperText] = useState<string | undefined>(error);
  useEffect(() => {
    setValidationError(
      validationErrors?.filter((item) => item.path === formValue)[0]
    );
  }, [validationErrors]);

  useEffect(() => {
    setHelperText(validationError?.msg);
  }, [validationError]);

  useEffect(() => {
    if (errors && errors[formValue!] && touched) {
      if (formValue === "dob") {
        setHelperText("invalid Date");
        return;
      }
      setHelperText(errors[formValue!]);
    } else {
      setHelperText(undefined);
    }
  }, [errors, touched]);

  const darkModeStyles = {
    input: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgba(255, 255, 255, 0.23)", // Border color for dark mode
        },
        "&:hover fieldset": {
          borderColor: "rgba(255, 255, 255, 0.23)", // Border color on hover for dark mode
        },
        "&.Mui-focused fieldset": {
          borderColor: "rgba(255, 255, 255, 0.23)", // Border color when focused for dark mode
        },
      },
      "& .MuiInputLabel-root": {
        color: "rgba(255, 255, 255, 0.7)", // Label color for dark mode
      },
      "& .MuiInputBase-input": {
        color: "white", // Text color for dark mode
      },
      "& .MuiFormHelperText-root": {
        color: "rgba(255, 255, 255, 0.7)", // Helper text color for dark mode
      },
    },
    select: {
      "& .MuiSelect-select": {
        color: "white", // Text color for select in dark mode
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 255, 255, 0.23)", // Border color for select in dark mode
      },
    },
  };

  return (
    <>
      <Box className={className}>
        <div>
          <InputLabel
            shrink
            className="input-label"
            style={{
              fontSize: loginLabels ? "larger" : "",
              ...(darkMode ? darkModeStyles.input : {}),
            }}
          >
            {name}
            {required && "*"}
          </InputLabel>

          {type === "select" ? (
            <>
              <Select
                style={{ minWidth: minWidth || 150 }}
                size="small"
                name={formValue}
                fullWidth
                value={value}
                variant="outlined"
                error={!!(helperText || touched)}
                onChange={(e: unknown) => {
                  setValidationError(undefined);
                  setHelperText(undefined);
                  if (onChangeValue) {
                    onChangeValue(e);
                  }
                }}
                sx={{
                  borderRadius: 3,
                  width: width || 400,
                  height: 41,
                }}
                displayEmpty
                renderValue={value !== "" ? undefined : () => placeholder}
                disabled={isDisabled}
              >
                {dropdownList?.map((item: DropdownListItem) => (
                  <MenuItem
                    key={`${item?.id}${item.name}`}
                    value={item?.id ? item.id : item.name}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <Typography className="errorMsg">
                {helperText || errors[formValue!]}
              </Typography>
            </>
          ) : //   : type === 'file' ? (
          //     <input
          //       type='file'
          //       name={name}
          //       onChange={(event) => {
          //         const file = event?.target?.files[0];
          //         if (setfieldValue) {
          //           setfieldValue(name, file);
          //         }
          //       }}
          //       disabled={isDisabled}
          //       style={{ width: width || 400 }}
          //     />
          //   )
          type === "phone" ? (
            <>
              <PhoneInput
                inputProps={{
                  name: "phone",
                }}
                enableSearch={true}
                inputStyle={{
                  borderRadius: "10px",
                  width: "400px",
                  height: "41px",
                  borderColor: "#0B79F4",
                }}
                buttonStyle={{
                  borderColor: "#0B79F4",
                  borderTopLeftRadius: "10px",
                  backgroundColor: "#FFFFFF",
                  borderBottomLeftRadius: "10px",
                  borderRight: "none",
                }}
                placeholder={placeholder}
                value={value}
                onChange={(phone: string, country: { dialCode: string }) => {
                  if (country.dialCode) {
                    setValidationError(undefined);
                    setHelperText("");
                    if (setfieldValue) {
                      setfieldValue(areaCode!, country.dialCode);
                      setfieldValue(
                        phoneNumber!,
                        phone.substring(country.dialCode.length)
                      );
                    }
                  } else {
                    setHelperText("Area Code is required");
                  }
                }}
                defaultErrorMessage={helperText}
                disabled={isDisabled}
              />
              <Typography className="errorMsg">{helperText}</Typography>
              <Typography className="errorMsg">
                {helperText || errors[formValue!]}
              </Typography>
            </>
          ) : type === "country" ? (
            <>
              <Select
                size="small"
                name={formValue}
                fullWidth
                value={countryCodeValue}
                variant="outlined"
                error={error && touched ? true : false}
                onChange={(e: unknown) => {
                  setValidationError(undefined);
                  setHelperText(undefined);
                  if (onChangeValue) {
                    onChangeValue(e);
                  }
                }}
                sx={{
                  borderRadius: 3,
                  width: 400,
                  height: 41,
                }}
                displayEmpty
                renderValue={
                  !countryCodeValue ? () => "Select Country" : undefined
                }
              >
                {AREA_CODES.map((option: Country) => (
                  <MenuItem
                    key={`${option.areaCode} ` + `${option.countryCode}`}
                    value={option.countryCode}
                  >
                    {option.countryName}
                  </MenuItem>
                ))}
              </Select>
              <Typography className="errorMsg">{helperText}</Typography>
            </>
          ) : (
            <TextField
              size="small"
              multiline={multiline || false}
              rows={rows || 1}
              maxRows={maxRows || 1}
              name={formValue}
              fullWidth
              value={values ? values[formValue!] : value}
              type={type}
              disabled={isDisabled}
              variant="outlined"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValidationError(undefined);
                setHelperText(undefined);
                if (onChangeValue) {
                  onChangeValue(e);
                }
              }}
              onBlur={onBlurValue}
              helperText={helperText}
              error={!!(helperText || touched)}
              placeholder={placeholder}
              InputProps={{
                style: {
                  borderRadius: 10,
                  width: width || 400,
                  height: height || 41,
                  ...(darkMode ? darkModeStyles.input : {}),
                },
                endAdornment: endAdornment,
              }}
              FormHelperTextProps={{
                className: `${helperTextClassName} ${darkMode ? "dark-mode-helper-text" : ""}`,
              }}
              className={`${textFieldClassName} ${darkMode ? "dark-mode-text-field" : ""}`}
              sx={{ ...(darkMode ? darkModeStyles.input : {}) }}
            />
          )}
        </div>
      </Box>
    </>
  );
};
