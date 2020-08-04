export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  style?: any;
  placeholder?: string;
  iconSuffix?: string;
  validator?: [];
  disabled?: boolean;

  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      order?: number;
      controlType?: string;
      type?: string;
      style?: string;
      placeholder?: string;
      iconSuffix?: string;
      required?: boolean;
      disabled?: boolean;
      validator?: [];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.style = options.style || null;
    this.placeholder = options.placeholder || null;
    this.iconSuffix = options.iconSuffix || null;
    this.validator = options.validator || null;
    this.disabled = options.disabled || null;
  }
}
