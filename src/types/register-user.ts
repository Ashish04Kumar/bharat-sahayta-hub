type FormField = {
  name: string;
  type: string; 
  required: boolean;
  accept?: string; 
  label: Record<string, string>; 
  placeholder: Record<string, string>;
  options?: { value: string; label: Record<string, string> }[]; 
};

export type RegisterHelperDataType = {
  formFields: Record<string, FormField>;
  indianStates: {
    value: string;
    label: Record<string, string>;
  }[];
  commonTexts: Record<string, Record<string, string>>;
};
