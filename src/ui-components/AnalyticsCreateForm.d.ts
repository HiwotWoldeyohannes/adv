/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnalyticsCreateFormInputValues = {
    city?: string;
    country?: string;
    ip?: string;
    long_url?: string;
    short_url?: string;
    date?: string;
};
export declare type AnalyticsCreateFormValidationValues = {
    city?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    ip?: ValidationFunction<string>;
    long_url?: ValidationFunction<string>;
    short_url?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnalyticsCreateFormOverridesProps = {
    AnalyticsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    ip?: PrimitiveOverrideProps<TextFieldProps>;
    long_url?: PrimitiveOverrideProps<TextFieldProps>;
    short_url?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnalyticsCreateFormProps = React.PropsWithChildren<{
    overrides?: AnalyticsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnalyticsCreateFormInputValues) => AnalyticsCreateFormInputValues;
    onSuccess?: (fields: AnalyticsCreateFormInputValues) => void;
    onError?: (fields: AnalyticsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnalyticsCreateFormInputValues) => AnalyticsCreateFormInputValues;
    onValidate?: AnalyticsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnalyticsCreateForm(props: AnalyticsCreateFormProps): React.ReactElement;
