/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getAnalytics } from "../graphql/queries/queries";
import { updateAnalytics } from "../graphql/queries/mutations";
export default function AnalyticsUpdateForm(props) {
  const {
    id: idProp,
    analytics: analyticsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    city: "",
    country: "",
    ip: "",
    long_url: "",
    short_url: "",
    date: "",
  };
  const [city, setCity] = React.useState(initialValues.city);
  const [country, setCountry] = React.useState(initialValues.country);
  const [ip, setIp] = React.useState(initialValues.ip);
  const [long_url, setLong_url] = React.useState(initialValues.long_url);
  const [short_url, setShort_url] = React.useState(initialValues.short_url);
  const [date, setDate] = React.useState(initialValues.date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = analyticsRecord
      ? { ...initialValues, ...analyticsRecord }
      : initialValues;
    setCity(cleanValues.city);
    setCountry(cleanValues.country);
    setIp(cleanValues.ip);
    setLong_url(cleanValues.long_url);
    setShort_url(cleanValues.short_url);
    setDate(cleanValues.date);
    setErrors({});
  };
  const [analyticsRecord, setAnalyticsRecord] =
    React.useState(analyticsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getAnalytics,
              variables: { id: idProp },
            })
          )?.data?.getAnalytics
        : analyticsModelProp;
      setAnalyticsRecord(record);
    };
    queryData();
  }, [idProp, analyticsModelProp]);
  React.useEffect(resetStateValues, [analyticsRecord]);
  const validations = {
    city: [],
    country: [],
    ip: [],
    long_url: [],
    short_url: [],
    date: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          city: city ?? null,
          country: country ?? null,
          ip: ip ?? null,
          long_url: long_url ?? null,
          short_url: short_url ?? null,
          date: date ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateAnalytics,
            variables: {
              input: {
                id: analyticsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AnalyticsUpdateForm")}
      {...rest}
    >
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              city: value,
              country,
              ip,
              long_url,
              short_url,
              date,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              city,
              country: value,
              ip,
              long_url,
              short_url,
              date,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Ip"
        isRequired={false}
        isReadOnly={false}
        value={ip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              city,
              country,
              ip: value,
              long_url,
              short_url,
              date,
            };
            const result = onChange(modelFields);
            value = result?.ip ?? value;
          }
          if (errors.ip?.hasError) {
            runValidationTasks("ip", value);
          }
          setIp(value);
        }}
        onBlur={() => runValidationTasks("ip", ip)}
        errorMessage={errors.ip?.errorMessage}
        hasError={errors.ip?.hasError}
        {...getOverrideProps(overrides, "ip")}
      ></TextField>
      <TextField
        label="Long url"
        isRequired={false}
        isReadOnly={false}
        value={long_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              city,
              country,
              ip,
              long_url: value,
              short_url,
              date,
            };
            const result = onChange(modelFields);
            value = result?.long_url ?? value;
          }
          if (errors.long_url?.hasError) {
            runValidationTasks("long_url", value);
          }
          setLong_url(value);
        }}
        onBlur={() => runValidationTasks("long_url", long_url)}
        errorMessage={errors.long_url?.errorMessage}
        hasError={errors.long_url?.hasError}
        {...getOverrideProps(overrides, "long_url")}
      ></TextField>
      <TextField
        label="Short url"
        isRequired={false}
        isReadOnly={false}
        value={short_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              city,
              country,
              ip,
              long_url,
              short_url: value,
              date,
            };
            const result = onChange(modelFields);
            value = result?.short_url ?? value;
          }
          if (errors.short_url?.hasError) {
            runValidationTasks("short_url", value);
          }
          setShort_url(value);
        }}
        onBlur={() => runValidationTasks("short_url", short_url)}
        errorMessage={errors.short_url?.errorMessage}
        hasError={errors.short_url?.hasError}
        {...getOverrideProps(overrides, "short_url")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              city,
              country,
              ip,
              long_url,
              short_url,
              date: value,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || analyticsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || analyticsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
