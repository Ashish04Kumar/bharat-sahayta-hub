export type RegisterHelperFormField = {
  name: string;
  type: string;
  required: boolean;
  accept?: string;
  label: Record<string, string>;
  placeholder: Record<string, string>;
  options?: { value: string; label: Record<string, string> }[];
  sequence: number;
  errorMessage: Record<string, string>;
};

export type RegisterHelperDataType = {
  formFields: Record<string, RegisterHelperFormField>;
  indianStates: {
    value: string;
    label: Record<string, string>;
  }[];
  commonTexts: Record<string, Record<string, string>>;
};
