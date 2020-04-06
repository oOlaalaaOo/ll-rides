import moment from 'moment';

export const validValue = (value: any) => {
  if (!value) {
    return false;
  }

  return true;
};

export const validEmail = (value: string = '') => {
  let reg = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  return reg.test(value);
};

export const validNumber = (value: number) => {
  if (isNaN(value)) {
    return false;
  }

  return true;
};

export const validInteger = (value: number = 0) => {
  if (isNaN(value)) {
    return false;
  }

  if (value % 1 !== 0) {
    return false;
  }

  return true;
};

export const validMaxLength = (value: string = '', minLength: number = 1) => {
  if (value.length > minLength) {
    return false;
  }

  return true;
};

export const validMinLength = (value = '', minLength = 1) => {
  if (value.length < minLength) {
    return false;
  }

  return true;
};

export const validMaxValue = (value: number = 0, maxValue: number = 1) => {
  if (value > maxValue) {
    return false;
  }

  return true;
};

export const validMinValue = (value: number = 0, minValue: number = 1) => {
  if (value > minValue) {
    return false;
  }

  return true;
};

export const validDate = (
  value: string = '',
  format: string = 'YYYY-MM-DD'
) => {
  if (!value) {
    return false;
  }

  if (!moment(value, format, true).isValid()) {
    return false;
  }

  return true;
};

export const validDateTime = (
  value: string = '',
  format: string = 'YYYY-MM-DD HH:mm'
) => {
  if (!value) {
    return false;
  }

  if (!moment(value, format, true).isValid()) {
    return false;
  }

  return true;
};

export const validURL = (value: string = '') => {
  let reg = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
    '(\\?[;&amp;a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );

  if (!reg.test(value)) {
    return false;
  }

  return true;
};

export const validAlpha = (value: string = '') => {
  let reg = new RegExp(/^[A-Za-z ]+$/);

  if (!reg.test(value)) {
    return false;
  }

  return true;
};

export const validAlphaNumeric = (value: string = '') => {
  let reg = new RegExp(/^[0-9A-Za-z]+$/);

  if (!reg.test(value)) {
    return false;
  }

  return true;
};

export const validEqualTo = (value: string, to: string) => {
  return value === to;
};
