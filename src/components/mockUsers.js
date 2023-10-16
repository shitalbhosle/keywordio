import { faker } from "@faker-js/faker/locale/en";

export function mockUsers(options) {
  const { limits, labels, getRowData } = options;
  const depth = limits.length;

  const data = [];
  const mock = (list, parentValue, layer = 0) => {
    const length = limits[layer];

    Array.from({ length }).forEach((_, index) => {
      const value = parentValue
        ? parentValue + "-" + (index + 1)
        : index + 1 + "";
      const children = [];
      const label = Array.isArray(labels) ? labels[layer] : labels;

      let row = {
        label:
          typeof label === "function"
            ? label(layer, value, faker)
            : label + " " + value,
        value,
      };

      if (getRowData) {
        row = {
          ...row,
          ...getRowData(layer, value),
        };
      }

      if (layer === 0) {
        row.campaigns = faker.lorem.word(); // Campaigns as string
        row.clicks = Math.floor(Math.random() * 10000); // Clicks as number
        row.cost = Math.random() * 1000; // Cost as number
        row.conversion = Math.random(); // Conversion as number
        row.revenue = Math.random() * 10000; // Revenue as number
      }

      list.push(row);

      if (layer < depth - 1) {
        row.children = children;
        mock(children, value, layer + 1);
      }
    });
  };

  mock(data);

  return data;
}
