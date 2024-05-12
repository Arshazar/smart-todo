// deno-lint-ignore-file no-explicit-any
class Utils {
  formDataToObj = (formData: FormData): { [key: string]: any } => {
    const formArray = Array.from(formData);

    let obj = formArray.map((v) => {
      const parsedKey = v[0].replace(/^data\[(.*)\]$/, "$1");
      return [parsedKey, v[1]];
    });
    obj = Object.fromEntries(obj);

    return obj;
  };
  listArrayByKey = (
    data: any[],
    keyOne: string,
    keyTwo: string,
    newKey: string,
  ) => {
    const newData: any[] = [];
    const searchedValues: any[] = [];
    data.forEach((item) => {
      const foundValue = searchedValues.find((k) => k === item[keyOne]);
      const newItemArray = Object.entries(item).filter((ent) =>
        ent[0] !== keyOne && ent[0] !== keyTwo
      );
      const newItem = Object.fromEntries(newItemArray);

      if (!foundValue) {
        const addedItem = {
          [keyOne]: item[keyOne],
          [keyTwo]: item[keyTwo],
          [newKey]: [newItem],
        };
        searchedValues.push(item[keyOne]);
        newData.push(addedItem);
      } else {
        const theIndex = newData.findIndex((dv) => dv[keyOne] === foundValue);
        newData[theIndex][newKey].push(newItem);
      }
    });
    newData.forEach((gp: any) => {
      gp[newKey].sort((a: any, b: any) =>
        (new Date(b.created_at)).getTime() - (new Date(a.created_at)).getTime()
      );
    });
    return newData;
  };
  getTodayDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    return formattedDate;
  };
}

const utils = new Utils();
export { utils };
