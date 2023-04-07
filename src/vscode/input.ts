import {
  base, danger, gray, information, warning
} from '../theme/colors';

const input = {
  'input.background': base.black,
  'input.foreground': gray.gray_300,
  'input.placeholderForeground': gray.gray_700,
  'inputOption.activeBorder': information.information_600,
  'inputValidation.errorBorder': danger.danger_600,
  'inputValidation.errorBackground': danger.danger_900,
  'inputValidation.infoBorder': information.information_600,
  'inputValidation.infoBackground': information.information_900,
  'inputValidation.warningBorder': warning.warning_600,
  'inputValidation.warningBackground': warning.warning_900
};

export { input };