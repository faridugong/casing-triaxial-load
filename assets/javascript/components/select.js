import { ODArray } from '../data/constant.js';

function componentSelectorReuseable(
  idParent,
  idSelector,
  nameSelector,
  labelText,
  array
) {
  const parent = document.getElementById(idParent);
  const select = document.createElement('select');
  const label = document.createElement('label');

  parent.classList.add('container__form__children');

  select.id = idSelector;
  select.name = nameSelector;
  select.classList.add('container__form__select');

  label.innerText = labelText;
  label.htmlFor = idParent;

  array.forEach((text) => {
    const option = document.createElement('option');
    option.text = text;
    option.value = text;
    select.appendChild(option);
  });

  parent.appendChild(select);
  parent.appendChild(label);
}

// execute here

// OD Surface
componentSelectorReuseable(
  'outsideDiameterSurface',
  'selector-surface-od',
  'OD',
  'OD(in)',
  ODArray
);
// OD Surface
componentSelectorReuseable(
  'outsideDiameterIntermediate',
  'selector-intermediate-od',
  'OD',
  'OD(in)',
  ODArray
);
// OD Surface
componentSelectorReuseable(
  'outsideDiameterProduction',
  'selector-production-od',
  'OD',
  'OD(in)',
  ODArray
);
