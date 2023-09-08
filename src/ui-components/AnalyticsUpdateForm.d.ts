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
export declare type AnalyticsUpdateFormInputValues = {
    city?: string;
    country?: string;
    ip?: string;
    long_url?: string;
    short_url?: string;
    date?: string;
};
export declare type AnalyticsUpdateFormValidationValues = {
    city?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    ip?: ValidationFunction<string>;
    long_url?: ValidationFunction<string>;
    short_url?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnalyticsUpdateFormOverridesProps = {
    AnalyticsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    ip?: PrimitiveOverrideProps<TextFieldProps>;
    long_url?: PrimitiveOverrideProps<TextFieldProps>;
    short_url?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnalyticsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnalyticsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    analytics?: any;
    onSubmit?: (fields: AnalyticsUpdateFormInputValues) => AnalyticsUpdateFormInputValues;
    onSuccess?: (fields: AnalyticsUpdateFormInputValues) => void;
    onError?: (fields: AnalyticsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnalyticsUpdateFormInputValues) => AnalyticsUpdateFormInputValues;
    onValidate?: AnalyticsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnalyticsUpdateForm(props: AnalyticsUpdateFormProps): React.ReactElement;
