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

// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------// Multilingual text
type MultiLangText = {
  en: string;
  hi: string;
  pa: string;
  ta: string;
  bn: string;
};


type FormField = {
  sequence: number;
  name: string;
  type: string;
  required: boolean;
  label: MultiLangText;
  placeholder: MultiLangText;
  errorMessage: MultiLangText;
};

type DropdownOption = {
  value: string;
  label: MultiLangText;
};

export type OrganizationDetailsDataType = {
  formFields: {
    organizationName: FormField;
    email: FormField;
    phoneNumber: FormField;
    state: FormField;
    city: FormField;
    registrationNumber: FormField;
    website: FormField;
    organizationDesc: FormField;
  };
  indianStates: DropdownOption[];
  commonTexts: {
    header: MultiLangText;
    desc: MultiLangText;
    selectedRoles: MultiLangText;
  };
};
