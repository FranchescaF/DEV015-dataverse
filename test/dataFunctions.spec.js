// test/dataFunctions.spec.js
// test/dataFunctions.spec.js

import { filterData, sortData, metricsData } from '../src/dataFunctions';

describe('filterData', () => {
  const data = [
    { facts: { gender: "romance", year: 2020, chapters: 12, percentageOfUsers: "45.5" } },
    { facts: { gender: "action", year: 2021, chapters: 10, percentageOfUsers: "55.5" } },
    { facts: { gender: "romance", year: 2021, chapters: 8, percentageOfUsers: "65.5" } },
  ];

  test('should return all data if value is "all" for gender', () => {
    const result = filterData(data, 'gender', 'all');
    expect(result).toEqual(data);
  });

  test('should return all data if value is "all" for year', () => {
    const result = filterData(data, 'year', 'all');
    expect(result).toEqual(data);
  });

  test('should filter data by gender', () => {
    const result = filterData(data, 'gender', 'romance');
    expect(result).toEqual([
      { facts: { gender: "romance", year: 2020, chapters: 12, percentageOfUsers: "45.5" } },
      { facts: { gender: "romance", year: 2021, chapters: 8, percentageOfUsers: "65.5" } },
    ]);
  });

  test('should filter data by year', () => {
    const result = filterData(data, 'year', 2021);
    expect(result).toEqual([
      { facts: { gender: "action", year: 2021, chapters: 10, percentageOfUsers: "55.5" } },
      { facts: { gender: "romance", year: 2021, chapters: 8, percentageOfUsers: "65.5" } },
    ]);
  });

  test('should filter data by chapters', () => {
    const result = filterData(data, 'chapters', 10);
    expect(result).toEqual([
      { facts: { gender: "action", year: 2021, chapters: 10, percentageOfUsers: "55.5" } },
    ]);
  });
});

describe('sortData', () => {
  const data = [
    { name: "Alice", facts: { year: 2021, percentageOfUsers: "45.5" } },
    { name: "Bob", facts: { year: 2020, percentageOfUsers: "55.5" } },
    { name: "Charlie", facts: { year: 2019, percentageOfUsers: "65.5" } },
  ];

  test('should sort data by name in ascending order', () => {
    const result = sortData(data, 'name', 'asc');
    expect(result).toEqual([
      { name: "Alice", facts: { year: 2021, percentageOfUsers: "45.5" } },
      { name: "Bob", facts: { year: 2020, percentageOfUsers: "55.5" } },
      { name: "Charlie", facts: { year: 2019, percentageOfUsers: "65.5" } },
    ]);
  });

  test('should sort data by name in descending order', () => {
    const result = sortData(data, 'name', 'desc');
    expect(result).toEqual([
      { name: "Charlie", facts: { year: 2019, percentageOfUsers: "65.5" } },
      { name: "Bob", facts: { year: 2020, percentageOfUsers: "55.5" } },
      { name: "Alice", facts: { year: 2021, percentageOfUsers: "45.5" } },
    ]);
  });
});

describe('metricsData', () => {
  const data = [
    { facts: { percentageOfUsers: "45.5" } },
    { facts: { percentageOfUsers: "55.5" } },
    { facts: { percentageOfUsers: "65.5" } },
    { facts: { percentageOfUsers: "75.5" } },
  ];

  test('should return top 3 objects by percentageOfUsers', () => {
    const result = metricsData(data);
    expect(result).toEqual([
      { facts: { percentageOfUsers: "75.5" } },
      { facts: { percentageOfUsers: "65.5" } },
      { facts: { percentageOfUsers: "55.5" } },
    ]);
  });
});
