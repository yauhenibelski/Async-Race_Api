import CreateUpdateCar from '../../component/CreateUpdateCar';

export function createTextOrColorInput(type: 'color' | 'text') {
  const input = document.createElement('input');
  input.type = type;
  input.id = `${CreateUpdateCar.value.toLocaleLowerCase().split(' ').join('_')}_${type}`;
  input.onchange = (e) => {
    const elem = e.target as HTMLInputElement;
    CreateUpdateCar.textObject[type] = elem.value;
  };
  if (type === 'text') {
    input.placeholder = `${CreateUpdateCar.value}`;
  }
  if (type === 'color') {
    input.value = CreateUpdateCar.textObject.color;
  }
  return input;
}
