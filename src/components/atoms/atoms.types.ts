export type Button = 'button' | 'submit';

export type Input = 'text' | 'checkbox';

export type TextInputClass = string | ConditionalClass;

type ConditionalClass = {
  [key: string]: boolean;
};

export type Text = 'h1' | 'h2' | 'label' | 'span';
