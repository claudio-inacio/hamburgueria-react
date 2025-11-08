export function createMapResultSet(resultSet, indexOfIdRegister = "id") {
  const mapResultSet = {};

  resultSet?.forEach((item, index) => {
    mapResultSet[item[indexOfIdRegister]] = index;
  });

  return mapResultSet;
}

export function remove(
  resultSet,
  mapResultSet,
  idRegister,
  indexOfIdRegister = "id"
) {
  const index = mapResultSet[idRegister];

  resultSet = resultSet.filter((result, key) => key !== index);

  return {
    resultSet,
    mapResultSet: createMapResultSet(resultSet, indexOfIdRegister),
  };
}

export function updateMultiples(
  resultSet,
  mapResultSet,
  register,
  idsRegisters
) {
  const newResultSet = resultSet.map((result) => {
    if (idsRegisters.includes(result.id)) {
      return { ...result, ...register };
    }
    return result;
  });

  return { resultSet: newResultSet, mapResultSet };
}
export function updateMultiplesDiferencied(
  resultSet,
  mapResultSet,
  newRegisters,
  idsRegisters,
  indexOfIdRegister = "id"
) {
  const newResultSet = resultSet.map((result) => {
    if (idsRegisters.includes(result[indexOfIdRegister])) {
      return { ...result, ...newRegisters[result[indexOfIdRegister]] };
    }
    return result;
  });
  console.log({ newResultSet });

  return { resultSet: newResultSet, mapResultSet };
}
export function update(resultSet, mapResultSet, register, idRegister) {
  const index = mapResultSet[idRegister];
  const newResultSet = resultSet.map((item, idx) =>
    idx === index ? { ...item, ...register } : item
  );
  return { resultSet: newResultSet, mapResultSet, index };
}

export function add(
  resultSet,
  mapResultSet,
  register,
  idRegister = null,
  addToEnd = false
) {
  if (!addToEnd) resultSet.unshift(register);
  else resultSet.push(register);

  mapResultSet = createMapResultSet(resultSet, idRegister || "id");
  // mapResultSet[idRegister] = resultSet.length - 1;
  return { resultSet, mapResultSet };
}
